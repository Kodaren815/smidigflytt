#!/bin/bash

# Deployment script for Ubuntu VPS with Docker
# Usage: ./deploy-vps.sh
# Prerequisites: Docker and Docker Compose must be installed

echo "🚀 Deploying Smidigflytt to Ubuntu VPS with Docker..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    echo "Please ensure Docker is installed on your Ubuntu VPS"
    exit 1
fi

# Check if Docker Compose is available (modern docker compose or legacy docker-compose)
DOCKER_COMPOSE_CMD=""
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
    echo "✅ Using modern Docker Compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
    echo "✅ Using legacy docker-compose"
else
    echo "❌ Docker Compose is not available"
    echo "Please install Docker Compose on your Ubuntu VPS"
    exit 1
fi

echo "✅ Docker detected"

# Create Dockerfile if it doesn't exist
if [ ! -f "Dockerfile" ]; then
    echo "📝 Creating Dockerfile..."
    cat > Dockerfile << 'EOF'
# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Start the application
CMD ["npm", "start"]
EOF
fi

# Create docker-compose.yml if it doesn't exist
if [ ! -f "docker-compose.yml" ]; then
    echo "📝 Creating docker-compose.yml..."
    cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  smidigflytt:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - smidigflytt
    restart: unless-stopped
EOF
fi

# Create nginx.conf if it doesn't exist
if [ ! -f "nginx.conf" ]; then
    echo "📝 Creating nginx.conf..."
    cat > nginx.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    upstream app {
        server smidigflytt:3000;
    }

    server {
        listen 80;
        server_name _;

        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
EOF
fi

# Stop and remove existing containers
echo "🛑 Stopping existing containers..."
$DOCKER_COMPOSE_CMD down

# Remove old images to save space
echo "🧹 Cleaning up old Docker images..."
docker image prune -f

# Build and start new containers
echo "🔨 Building and starting containers..."
$DOCKER_COMPOSE_CMD up -d --build

# Wait for services to be healthy
echo "⏳ Waiting for services to start..."
sleep 10

# Check if containers are running
echo "📊 Checking container status..."
$DOCKER_COMPOSE_CMD ps

# Check if the application is responding
echo "🔍 Testing application health..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is responding on port 3000"
else
    echo "⚠️  Application may still be starting..."
fi

if curl -f http://localhost > /dev/null 2>&1; then
    echo "✅ Nginx is responding on port 80"
else
    echo "⚠️  Nginx may still be starting..."
fi

echo ""
echo "✅ Deployment complete!"
echo "🌐 Application should be available at:"
echo "   http://your-vps-ip (via Nginx)"
echo "   http://your-vps-ip:3000 (direct)"
echo "🔧 Admin panel: http://your-vps-ip/admin"
echo ""
echo "📋 Useful Docker commands:"
echo "   View logs: $DOCKER_COMPOSE_CMD logs -f"
echo "   Restart: $DOCKER_COMPOSE_CMD restart"
echo "   Stop: $DOCKER_COMPOSE_CMD down"
echo "   Update: $DOCKER_COMPOSE_CMD up -d --build"
