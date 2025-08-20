#!/bin/bash

# Deployment script for VPS servers with Docker
# Usage: ./deploy-vps.sh

echo "🚀 Deploying Smidigflytt to VPS..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    echo ""
    echo "📋 To install Docker on your VPS:"
    echo "   Ubuntu/Debian: curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh"
    echo "   CentOS/RHEL: curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh"
    echo "   macOS: Download Docker Desktop from https://docs.docker.com/get-docker/"
    echo ""
    echo "💡 Alternative: Use './deploy-local.sh' for local development without Docker"
    exit 1
fi

# Use modern docker compose command (fallback to docker-compose if available)
DOCKER_COMPOSE_CMD="docker compose"
if ! docker compose version &> /dev/null; then
    if command -v docker-compose &> /dev/null; then
        DOCKER_COMPOSE_CMD="docker-compose"
        echo "Using legacy docker-compose command"
    else
        echo "❌ Neither 'docker compose' nor 'docker-compose' is available"
        echo "📋 Install Docker Compose:"
        echo "   Modern Docker: Docker Compose is included with Docker Desktop"
        echo "   Legacy: sudo pip install docker-compose"
        exit 1
    fi
else
    echo "Using modern docker compose command"
fi

# Stop existing containers
echo "Stopping existing containers..."
$DOCKER_COMPOSE_CMD -f docker-compose.vps.yml down

# Remove old images
echo "Removing old Docker images..."
docker image prune -f

# Build and start new containers
echo "Building and starting new containers..."
$DOCKER_COMPOSE_CMD -f docker-compose.vps.yml up -d --build

# Check if containers are running
echo "Checking container status..."
$DOCKER_COMPOSE_CMD -f docker-compose.vps.yml ps

echo "✅ Deployment complete!"
echo "🌐 Application should be available at http://localhost:3000"
echo "🔧 Admin panel: http://localhost:3000/admin"
echo "📊 Check logs with: $DOCKER_COMPOSE_CMD -f docker-compose.vps.yml logs -f"
