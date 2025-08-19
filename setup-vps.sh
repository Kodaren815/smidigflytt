#!/bin/bash

# SmidigFlytt Docker Setup Script for Ubuntu VPS
# This script sets up the SmidigFlytt website using Docker

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="smidigflytt"
APP_PORT=3001
DOMAIN_NAME=""
SSL_CERT_PATH=""
SSL_KEY_PATH=""

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if port is available
check_port() {
    if netstat -tuln | grep -q ":$1 "; then
        return 1  # Port is in use
    else
        return 0  # Port is available
    fi
}

# Welcome message
echo -e "${BLUE}======================================${NC}"
echo -e "${BLUE}  SmidigFlytt Docker Setup Script    ${NC}"
echo -e "${BLUE}======================================${NC}"
echo ""

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_warning "Running as root. Consider using a non-root user with sudo privileges."
fi

# Verify prerequisites
print_step "Checking prerequisites..."

if ! command_exists docker; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command_exists docker-compose || ! command_exists docker compose; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

if ! command_exists nginx; then
    print_error "Nginx is not installed. Please install Nginx first."
    exit 1
fi

if ! command_exists git; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_status "All prerequisites are installed!"

# Check if port is available
print_step "Checking if port $APP_PORT is available..."
if ! check_port $APP_PORT; then
    print_error "Port $APP_PORT is already in use. Please stop the service using this port or choose a different port."
    exit 1
fi
print_status "Port $APP_PORT is available!"

# Get domain name from user
echo ""
read -p "Enter your domain name (e.g., smidigflytt.se): " DOMAIN_NAME
if [ -z "$DOMAIN_NAME" ]; then
    print_error "Domain name is required!"
    exit 1
fi

# Ask about SSL certificates
echo ""
read -p "Do you have SSL certificates? (y/n): " has_ssl
if [ "$has_ssl" = "y" ] || [ "$has_ssl" = "Y" ]; then
    read -p "Enter path to SSL certificate file: " SSL_CERT_PATH
    read -p "Enter path to SSL private key file: " SSL_KEY_PATH
    
    if [ ! -f "$SSL_CERT_PATH" ]; then
        print_error "SSL certificate file not found: $SSL_CERT_PATH"
        exit 1
    fi
    
    if [ ! -f "$SSL_KEY_PATH" ]; then
        print_error "SSL private key file not found: $SSL_KEY_PATH"
        exit 1
    fi
fi

# Create project directory
print_step "Setting up project directory..."
PROJECT_DIR="/opt/$PROJECT_NAME"

if [ -d "$PROJECT_DIR" ]; then
    print_warning "Project directory already exists. Backing up..."
    sudo mv "$PROJECT_DIR" "${PROJECT_DIR}_backup_$(date +%Y%m%d_%H%M%S)"
fi

sudo mkdir -p "$PROJECT_DIR"
sudo chown $USER:$USER "$PROJECT_DIR"
cd "$PROJECT_DIR"

print_status "Project directory created at $PROJECT_DIR"

# Clone or copy the repository
if [ -d ".git" ]; then
    print_step "Updating existing repository..."
    git pull origin main
else
    print_step "Initializing project files..."
    # If running from within the project directory, copy files
    if [ -f "$(dirname "$0")/package.json" ]; then
        print_status "Copying project files from current directory..."
        cp -r "$(dirname "$0")"/* .
    else
        print_error "Please run this script from within the SmidigFlytt project directory, or provide the source code."
        exit 1
    fi
fi

# Create data directory with proper permissions
print_step "Setting up data directory..."
mkdir -p data
chmod 755 data

# Create environment file
print_step "Creating environment configuration..."
cat > .env.production << EOF
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
DOMAIN=${DOMAIN_NAME}
EOF

# Update nginx configuration
print_step "Setting up Nginx configuration..."
NGINX_CONFIG_FILE="/etc/nginx/sites-available/$PROJECT_NAME"

sudo tee "$NGINX_CONFIG_FILE" > /dev/null << EOF
# SmidigFlytt Nginx Configuration
upstream ${PROJECT_NAME}_backend {
    server localhost:${APP_PORT};
}

server {
    listen 80;
    server_name ${DOMAIN_NAME} www.${DOMAIN_NAME};
    
    # Redirect HTTP to HTTPS if SSL is configured
$(if [ ! -z "$SSL_CERT_PATH" ]; then
    echo "    return 301 https://\$server_name\$request_uri;"
else
    echo "    # No SSL configured, serving HTTP"
    echo "    location / {"
    echo "        proxy_pass http://${PROJECT_NAME}_backend;"
    echo "        proxy_http_version 1.1;"
    echo "        proxy_set_header Upgrade \$http_upgrade;"
    echo "        proxy_set_header Connection 'upgrade';"
    echo "        proxy_set_header Host \$host;"
    echo "        proxy_set_header X-Real-IP \$remote_addr;"
    echo "        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;"
    echo "        proxy_set_header X-Forwarded-Proto \$scheme;"
    echo "        proxy_cache_bypass \$http_upgrade;"
    echo "        proxy_buffering off;"
    echo "        proxy_request_buffering off;"
    echo "    }"
fi)
}

$(if [ ! -z "$SSL_CERT_PATH" ]; then
cat << 'SSL_EOF'
server {
    listen 443 ssl http2;
    server_name ${DOMAIN_NAME} www.${DOMAIN_NAME};

    ssl_certificate ${SSL_CERT_PATH};
    ssl_certificate_key ${SSL_KEY_PATH};
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    client_max_body_size 50M;

    location / {
        proxy_pass http://${PROJECT_NAME}_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_buffering off;
        proxy_request_buffering off;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://${PROJECT_NAME}_backend;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
SSL_EOF
fi)
EOF

# Enable the site
sudo ln -sf "$NGINX_CONFIG_FILE" "/etc/nginx/sites-enabled/$PROJECT_NAME"

# Test nginx configuration
print_step "Testing Nginx configuration..."
if sudo nginx -t; then
    print_status "Nginx configuration is valid!"
else
    print_error "Nginx configuration test failed!"
    exit 1
fi

# Build and start the application
print_step "Building Docker image..."
docker build -t "${PROJECT_NAME}:latest" .

print_step "Starting application..."
docker compose -f docker-compose.vps.yml up -d

# Wait for application to start
print_step "Waiting for application to start..."
sleep 10

# Check if container is running
if docker compose -f docker-compose.vps.yml ps | grep -q "Up"; then
    print_status "Application container is running!"
else
    print_error "Application failed to start. Checking logs..."
    docker compose -f docker-compose.vps.yml logs
    exit 1
fi

# Reload nginx
print_step "Reloading Nginx..."
sudo systemctl reload nginx

# Final status check
print_step "Performing final health check..."
sleep 5

if curl -f "http://localhost:${APP_PORT}" > /dev/null 2>&1; then
    print_status "Application is responding on port ${APP_PORT}!"
else
    print_warning "Application may not be fully ready yet. Check the logs if issues persist."
fi

# Success message
echo ""
echo -e "${GREEN}======================================${NC}"
echo -e "${GREEN}      Setup Complete!                 ${NC}"
echo -e "${GREEN}======================================${NC}"
echo ""
print_status "SmidigFlytt has been deployed successfully!"
echo ""
echo "Application details:"
echo "  - Container name: ${PROJECT_NAME}-app"
echo "  - Local port: ${APP_PORT}"
echo "  - Domain: ${DOMAIN_NAME}"
echo "  - Project directory: ${PROJECT_DIR}"
echo ""
echo "Useful commands:"
echo "  - View logs: docker compose -f docker-compose.vps.yml logs -f"
echo "  - Restart app: docker compose -f docker-compose.vps.yml restart"
echo "  - Stop app: docker compose -f docker-compose.vps.yml down"
echo "  - Update app: cd ${PROJECT_DIR} && git pull && docker compose -f docker-compose.vps.yml up -d --build"
echo ""

if [ ! -z "$SSL_CERT_PATH" ]; then
    echo "Your site should now be available at: https://${DOMAIN_NAME}"
else
    echo "Your site should now be available at: http://${DOMAIN_NAME}"
    print_warning "Consider setting up SSL certificates for production use."
fi

echo ""
print_status "Setup completed successfully!"
