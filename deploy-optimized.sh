#!/bin/bash

# Production deployment script for Smidigflytt alongside mblokalatjanster.se
# This script optimizes for minimal resource usage and maximum security
# Usage: ./deploy-optimized.sh

echo "🚀 Deploying optimized Smidigflytt alongside mblokalatjanster.se..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed or not in PATH${NC}"
    exit 1
fi

# Check Docker Compose
DOCKER_COMPOSE_CMD=""
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker compose"
elif command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
else
    echo -e "${RED}❌ Docker Compose is not available${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker detected${NC}"

# Check if web-network exists, create if it doesn't
if ! docker network ls | grep -q "web-network"; then
    echo -e "${YELLOW}📝 Creating web-network...${NC}"
    docker network create web-network \
        --driver bridge \
        --subnet=172.20.0.0/16 \
        --opt com.docker.network.bridge.name=web-bridge
else
    echo -e "${GREEN}✅ web-network already exists${NC}"
fi

# Create necessary directories
echo -e "${YELLOW}📁 Creating necessary directories...${NC}"
mkdir -p ./data
mkdir -p ./logs
chmod 755 ./data
chmod 755 ./logs

# Remove old static sitemap if exists (dynamic sitemap takes precedence)
if [ -f "public/sitemap.xml" ]; then
    echo -e "${YELLOW}🗂️  Moving static sitemap to allow dynamic generation...${NC}"
    mv public/sitemap.xml public/sitemap.xml.backup
fi

# Stop existing smidigflytt containers if running
echo -e "${YELLOW}🛑 Stopping existing smidigflytt containers...${NC}"
docker stop smidigflytt-app 2>/dev/null || true
docker rm smidigflytt-app 2>/dev/null || true

# Build with optimized Dockerfile
echo -e "${YELLOW}🔨 Building optimized Docker image...${NC}"
docker build -f Dockerfile.optimized -t smidigflytt:optimized .

# Start the optimized service
echo -e "${YELLOW}🚀 Starting optimized smidigflytt service...${NC}"
$DOCKER_COMPOSE_CMD -f docker-compose.production.yml up -d

# Wait for service to be healthy
echo -e "${YELLOW}⏳ Waiting for service to start...${NC}"
sleep 20

# Check if container is running and healthy
if docker ps | grep -q "smidigflytt-app"; then
    echo -e "${GREEN}✅ Smidigflytt container is running${NC}"
    
    # Wait for health check
    echo -e "${YELLOW}🏥 Waiting for health check to pass...${NC}"
    for i in {1..12}; do
        if docker inspect --format='{{.State.Health.Status}}' smidigflytt-app 2>/dev/null | grep -q "healthy"; then
            echo -e "${GREEN}✅ Service is healthy and ready!${NC}"
            break
        elif [ $i -eq 12 ]; then
            echo -e "${RED}❌ Service health check failed${NC}"
            docker logs smidigflytt-app --tail 20
            exit 1
        else
            echo -e "${YELLOW}⏳ Health check pending... ($i/12)${NC}"
            sleep 10
        fi
    done
    
    # Show resource usage
    echo -e "${GREEN}📊 Container resource usage:${NC}"
    docker stats smidigflytt-app --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}"
    
else
    echo -e "${RED}❌ Failed to start smidigflytt container${NC}"
    echo -e "${RED}Container logs:${NC}"
    docker logs smidigflytt-app --tail 20
    exit 1
fi

echo ""
echo -e "${GREEN}🎉 Smidigflytt deployed successfully!${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Update your nginx configuration to include smidigflytt routing"
echo "2. Test the service at http://your-server-ip:3002"
echo "3. Configure SSL certificates for production"
echo "4. Set up monitoring and log rotation"
echo ""
echo -e "${YELLOW}📊 Service URLs:${NC}"
echo "- Health check: http://your-server/api/health"
echo "- Main site: https://smidigflytt365.se"
echo ""
echo -e "${YELLOW}🔧 Useful commands:${NC}"
echo "- View logs: docker logs smidigflytt-app -f"
echo "- Restart: docker restart smidigflytt-app"
echo "- Stop: docker stop smidigflytt-app"
echo "- Resource usage: docker stats smidigflytt-app"
