#!/bin/bash

# VPS Deployment Guide for Smidigflytt alongside existing services
# This script should be run ON YOUR VPS after uploading files

echo "🚀 VPS Deployment and Configuration for Smidigflytt..."

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run this script as root or with sudo${NC}"
    exit 1
fi

echo -e "${YELLOW}📋 VPS Configuration Steps${NC}"
echo ""

# Step 1: Check Docker and network
echo "=== Step 1: Docker Setup ==="
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker not found. Please install Docker first.${NC}"
    exit 1
fi

# Check Docker Compose
DOCKER_COMPOSE_CMD=""
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
else
    echo -e "${RED}❌ Docker Compose not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker available${NC}"

# Create web-network if it doesn't exist
if ! docker network ls | grep -q "web-network"; then
    echo -e "${YELLOW}📝 Creating web-network...${NC}"
    docker network create web-network
else
    echo -e "${GREEN}✅ web-network exists${NC}"
fi

# Step 2: Deploy Smidigflytt service
echo ""
echo "=== Step 2: Deploy Smidigflytt Service ==="

# Stop existing smidigflytt if running
docker stop smidigflytt-app 2>/dev/null || true
docker rm smidigflytt-app 2>/dev/null || true

# Deploy the service
echo -e "${YELLOW}🔨 Building and starting smidigflytt...${NC}"
$DOCKER_COMPOSE_CMD -f docker-compose.production.yml up -d --build

# Wait and check
sleep 15
if docker ps | grep -q "smidigflytt-app"; then
    echo -e "${GREEN}✅ Smidigflytt service started successfully${NC}"
else
    echo -e "${RED}❌ Smidigflytt service failed to start${NC}"
    docker logs smidigflytt-app --tail 10
    exit 1
fi

# Step 3: Update Nginx Configuration
echo ""
echo "=== Step 3: Nginx Configuration ==="

# Backup existing nginx config
if [ -f "/etc/nginx/nginx.conf" ]; then
    cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup.$(date +%Y%m%d_%H%M%S)
    echo -e "${GREEN}✅ Nginx config backed up${NC}"
fi

# Check if smidigflytt domain is already in nginx config
if ! grep -q "smidigflytt365.se" /etc/nginx/nginx.conf && ! grep -q "smidigflytt365.se" /etc/nginx/sites-enabled/* 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Smidigflytt domain not found in nginx config${NC}"
    echo ""
    echo "You need to add the smidigflytt server block to your nginx configuration."
    echo "See the nginx configuration section below."
fi

# Step 4: SSL Configuration
echo ""
echo "=== Step 4: SSL Setup ==="

if command -v certbot &> /dev/null; then
    echo -e "${GREEN}✅ Certbot available${NC}"
    echo "Run this command to get SSL for smidigflytt365.se:"
    echo "certbot --nginx -d smidigflytt365.se -d www.smidigflytt365.se"
else
    echo -e "${YELLOW}⚠️  Certbot not found${NC}"
    echo "Install certbot first: apt update && apt install certbot python3-certbot-nginx"
fi

echo ""
echo -e "${GREEN}🎉 Service deployment completed!${NC}"
echo ""
echo "=== Next Steps ==="
echo "1. Update nginx configuration (see below)"
echo "2. Get SSL certificate"
echo "3. Test the website"
echo ""
