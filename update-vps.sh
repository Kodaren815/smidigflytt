#!/bin/bash

# Quick deployment script for updating SmidigFlytt on VPS
# Run this script to update the application after making changes

set -e

PROJECT_NAME="smidigflytt"
PROJECT_DIR="/opt/$PROJECT_NAME"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

echo -e "${BLUE}======================================${NC}"
echo -e "${BLUE}  SmidigFlytt Update Script          ${NC}"
echo -e "${BLUE}======================================${NC}"

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Project directory not found. Please run the setup script first."
    exit 1
fi

cd "$PROJECT_DIR"

# Stop the current application
print_step "Stopping current application..."
docker compose -f docker-compose.vps.yml down

# Update code (if using git)
if [ -d ".git" ]; then
    print_step "Pulling latest changes..."
    git pull origin main
else
    print_step "Skipping git pull (not a git repository)"
fi

# Rebuild and start
print_step "Building new Docker image..."
docker build -t "${PROJECT_NAME}:latest" . --no-cache

print_step "Starting updated application..."
docker compose -f docker-compose.vps.yml up -d

# Wait and check
print_step "Waiting for application to start..."
sleep 10

if docker compose -f docker-compose.vps.yml ps | grep -q "Up"; then
    print_status "Application updated and running successfully!"
    echo ""
    echo "Useful commands:"
    echo "  - View logs: docker compose -f docker-compose.vps.yml logs -f"
    echo "  - Check status: docker compose -f docker-compose.vps.yml ps"
else
    echo "Application may have issues. Check logs:"
    docker compose -f docker-compose.vps.yml logs
fi
