#!/bin/bash

# Deployment script for adding Smidigflytt to existing VPS setup
# This script deploys only the smidigflytt service to work alongside existing services
# Usage: ./deploy-standalone.sh
# Prerequisites: Docker and Docker Compose must be installed, and web-network must exist

echo "🚀 Deploying Smidigflytt as standalone service..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    exit 1
fi

# Check Docker Compose
DOCKER_COMPOSE_CMD=""
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
else
    echo "❌ Docker Compose is not available"
    exit 1
fi

echo "✅ Docker detected"

# Check if web-network exists, create if it doesn't
if ! docker network ls | grep -q "web-network"; then
    echo "📝 Creating web-network..."
    docker network create web-network
else
    echo "✅ web-network already exists"
fi

# Stop existing smidigflytt containers if running
echo "🛑 Stopping existing smidigflytt containers..."
docker stop smidigflytt-app 2>/dev/null || true
docker rm smidigflytt-app 2>/dev/null || true

# Build and start the smidigflytt service
echo "🔨 Building and starting smidigflytt service..."
$DOCKER_COMPOSE_CMD -f docker-compose.yml up -d --build

# Wait for service to be healthy
echo "⏳ Waiting for service to start..."
sleep 15

# Check if container is running
echo "📊 Checking container status..."
docker ps --filter "name=smidigflytt-app"

# Test the service
echo "🔍 Testing smidigflytt service..."
if curl -f http://localhost:3002 > /dev/null 2>&1; then
    echo "✅ Smidigflytt is responding on port 3002"
else
    echo "⚠️  Smidigflytt may still be starting... Check logs with: docker logs smidigflytt-app"
fi

echo ""
echo "✅ Smidigflytt deployment complete!"
echo "🌐 Service is available at: http://your-vps-ip:3002"
echo "📋 The service is now part of the web-network and can be proxied through nginx"
echo ""
echo "📋 Useful commands:"
echo "   View logs: docker logs -f smidigflytt-app"
echo "   Restart: $DOCKER_COMPOSE_CMD restart smidigflytt"
echo "   Update: $DOCKER_COMPOSE_CMD up -d --build smidigflytt"
