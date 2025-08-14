#!/bin/bash

# Deployment script for VPS servers
# Usage: ./deploy-vps.sh

echo "🚀 Deploying Smidigflytt to VPS..."

# Stop existing containers
echo "Stopping existing containers..."
docker-compose down

# Remove old images
echo "Removing old Docker images..."
docker image prune -f

# Build and start new containers
echo "Building and starting new containers..."
docker-compose up -d --build

# Check if containers are running
echo "Checking container status..."
docker-compose ps

echo "✅ Deployment complete!"
echo "🌐 Application should be available at http://localhost:3000"
echo "🔧 Admin panel: http://localhost:3000/admin"
echo "📊 Check logs with: docker-compose logs -f"
