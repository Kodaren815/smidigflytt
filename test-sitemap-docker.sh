#!/bin/bash

# Quick Docker test for sitemap functionality
# This builds and tests the Docker container locally

echo "🐳 Testing sitemap in Docker container..."

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Build the Docker container
echo -e "${YELLOW}🔨 Building Docker container...${NC}"
docker build -f Dockerfile.optimized -t smidigflytt:sitemap-test . > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Docker build successful${NC}"
else
    echo -e "${RED}❌ Docker build failed${NC}"
    exit 1
fi

# Start container
echo -e "${YELLOW}🚀 Starting container...${NC}"
docker run -d --name sitemap-test -p 3002:3000 smidigflytt:sitemap-test > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Container started${NC}"
else
    echo -e "${RED}❌ Container failed to start${NC}"
    exit 1
fi

# Wait for container to be ready
echo -e "${YELLOW}⏳ Waiting for container to be ready...${NC}"
sleep 10

# Test sitemap
echo -e "${YELLOW}🔍 Testing sitemap endpoint...${NC}"
response=$(curl -s -w "%{http_code}" http://localhost:3002/sitemap.xml)
http_code="${response: -3}"
content="${response%???}"

if [ "$http_code" = "200" ]; then
    echo -e "${GREEN}✅ Sitemap endpoint responds with 200${NC}"
    
    # Check if content is valid XML and contains correct domain
    if echo "$content" | grep -q "<?xml" && echo "$content" | grep -q "smidigflytt365.se"; then
        echo -e "${GREEN}✅ Sitemap contains valid XML and correct domain${NC}"
        echo ""
        echo "First few lines of sitemap:"
        echo "$content" | head -5
    else
        echo -e "${RED}❌ Sitemap content validation failed${NC}"
        echo "Content preview:"
        echo "$content" | head -10
    fi
else
    echo -e "${RED}❌ Sitemap endpoint failed (HTTP $http_code)${NC}"
    echo "Response:"
    echo "$content" | head -10
fi

# Test robots.txt
echo ""
echo -e "${YELLOW}🔍 Testing robots.txt endpoint...${NC}"
robots_response=$(curl -s -w "%{http_code}" http://localhost:3002/robots.txt)
robots_http_code="${robots_response: -3}"
robots_content="${robots_response%???}"

if [ "$robots_http_code" = "200" ]; then
    echo -e "${GREEN}✅ Robots.txt endpoint responds with 200${NC}"
    
    if echo "$robots_content" | grep -q "smidigflytt365.se/sitemap.xml"; then
        echo -e "${GREEN}✅ Robots.txt references correct sitemap${NC}"
    else
        echo -e "${RED}❌ Robots.txt sitemap reference issue${NC}"
        echo "Robots.txt content:"
        echo "$robots_content"
    fi
else
    echo -e "${RED}❌ Robots.txt endpoint failed (HTTP $robots_http_code)${NC}"
fi

# Clean up
echo ""
echo -e "${YELLOW}🧹 Cleaning up...${NC}"
docker stop sitemap-test > /dev/null 2>&1
docker rm sitemap-test > /dev/null 2>&1
docker rmi smidigflytt:sitemap-test > /dev/null 2>&1

echo -e "${GREEN}✅ Test completed and cleaned up${NC}"
