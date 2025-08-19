#!/bin/bash

# Simple SmidigFlytt Docker Setup for VPS
# Run this from /opt/smidigflytt with all project files present

set -e

# Configuration
DOMAIN="smidigflytt365.se"
APP_PORT="3001"

echo "======================================="
echo "  SmidigFlytt Simple Setup           "
echo "======================================="

# Check if required files exist
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found! Please upload all project files to this directory."
    exit 1
fi

if [ ! -f "Dockerfile" ]; then
    echo "ERROR: Dockerfile not found! Please upload all project files to this directory."
    exit 1
fi

if [ ! -f "docker-compose.vps.yml" ]; then
    echo "ERROR: docker-compose.vps.yml not found! Please upload all project files to this directory."
    exit 1
fi

echo "✓ All required files found"

# Create data directory
mkdir -p data
chmod 755 data

# Create environment file
cat > .env.production << EOF
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
DOMAIN=${DOMAIN}
EOF

echo "✓ Environment configured"

# Build Docker image
echo "Building Docker image..."
docker build -t smidigflytt:latest .

# Start application
echo "Starting application..."
docker compose -f docker-compose.vps.yml up -d

echo "✓ Application started"

# Wait for startup
sleep 10

# Check if running
if docker compose -f docker-compose.vps.yml ps | grep -q "Up"; then
    echo "✓ Application is running on port ${APP_PORT}"
    echo ""
    echo "Next steps:"
    echo "1. Configure your domain (${DOMAIN}) to point to this server"
    echo "2. Set up nginx to proxy to localhost:${APP_PORT}"
    echo "3. Consider setting up SSL certificates"
    echo ""
    echo "Useful commands:"
    echo "  - View logs: docker compose -f docker-compose.vps.yml logs -f"
    echo "  - Restart: docker compose -f docker-compose.vps.yml restart"
    echo "  - Stop: docker compose -f docker-compose.vps.yml down"
else
    echo "ERROR: Application failed to start. Check logs:"
    docker compose -f docker-compose.vps.yml logs
    exit 1
fi

echo "Setup complete!"
