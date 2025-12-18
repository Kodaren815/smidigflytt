#!/bin/bash

# Complete Docker Cleanup for Smidigflytt - Run on VPS
echo "🧹 Complete cleanup of smidigflytt Docker resources..."

# Stop all smidigflytt containers
echo "Stopping containers..."
docker stop $(docker ps -aq --filter name=smidigflytt) 2>/dev/null || true

# Remove all smidigflytt containers
echo "Removing containers..."
docker rm $(docker ps -aq --filter name=smidigflytt) 2>/dev/null || true

# Remove smidigflytt images
echo "Removing images..."
docker rmi $(docker images -q "*smidigflytt*") 2>/dev/null || true
docker rmi $(docker images -q "*smidigflytt_*") 2>/dev/null || true

# Clean up system
echo "System cleanup..."
docker system prune -f

# Recreate network
echo "Recreating network..."
docker network rm web-network 2>/dev/null || true
docker network create web-network

echo "✅ Cleanup complete! Now run:"
echo "docker compose -f docker-compose.simple.yml up -d --build"
