#!/bin/bash

# Quick 502 Fix Script - Run this on your VPS to diagnose and fix the issue

echo "🔍 Diagnosing 502 Bad Gateway for smidigflytt365.se..."

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo ""
echo "=== Step 1: Check if smidigflytt container is running ==="
if docker ps | grep -q smidigflytt-app; then
    echo -e "${GREEN}✅ Smidigflytt container is running${NC}"
    docker ps | grep smidigflytt
else
    echo -e "${RED}❌ Smidigflytt container is NOT running${NC}"
    echo "This is likely the cause of your 502 error!"
    
    echo ""
    echo "Checking if container exists but is stopped..."
    if docker ps -a | grep -q smidigflytt-app; then
        echo -e "${YELLOW}⚠️  Container exists but is stopped${NC}"
        echo "Container status:"
        docker ps -a | grep smidigflytt
        
        echo ""
        echo "Container logs:"
        docker logs smidigflytt-app --tail 20
        
        echo ""
        echo "=== Attempting to restart container ==="
        docker start smidigflytt-app
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Container restarted successfully${NC}"
        else
            echo -e "${RED}❌ Failed to restart container${NC}"
        fi
    else
        echo -e "${RED}❌ No smidigflytt container found${NC}"
        echo "You need to run the deployment script first!"
    fi
fi

echo ""
echo "=== Step 2: Check if port 3002 is listening ==="
if netstat -tlnp 2>/dev/null | grep -q :3002; then
    echo -e "${GREEN}✅ Port 3002 is listening${NC}"
    netstat -tlnp 2>/dev/null | grep :3002
else
    echo -e "${RED}❌ Port 3002 is NOT listening${NC}"
    echo "This confirms the container issue!"
fi

echo ""
echo "=== Step 3: Test internal connection ==="
echo "Testing connection to 127.0.0.1:3002..."
if curl -s -f http://127.0.0.1:3002/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Internal connection works${NC}"
else
    echo -e "${RED}❌ Internal connection failed${NC}"
    echo "Nginx can't reach the smidigflytt service!"
fi

echo ""
echo "=== Step 4: Check nginx configuration ==="
if nginx -t > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Nginx config is valid${NC}"
else
    echo -e "${RED}❌ Nginx config has errors${NC}"
    nginx -t
fi

echo ""
echo "=== Step 5: Check Docker network ==="
if docker network ls | grep -q web-network; then
    echo -e "${GREEN}✅ web-network exists${NC}"
    
    if docker inspect smidigflytt-app 2>/dev/null | grep -q web-network; then
        echo -e "${GREEN}✅ Container is connected to web-network${NC}"
    else
        echo -e "${RED}❌ Container is NOT connected to web-network${NC}"
    fi
else
    echo -e "${RED}❌ web-network does not exist${NC}"
fi

echo ""
echo "=== SOLUTION ==="
if docker ps | grep -q smidigflytt-app && netstat -tlnp 2>/dev/null | grep -q :3002; then
    echo -e "${GREEN}🎉 Services appear to be running correctly!${NC}"
    echo "The issue might be temporary. Try accessing the site again."
    echo "If it still doesn't work, check nginx error logs:"
    echo "sudo tail -f /var/log/nginx/error.log"
else
    echo -e "${YELLOW}🔧 QUICK FIX STEPS:${NC}"
    echo ""
    echo "1. Make sure you're in the smidigflytt directory:"
    echo "   cd /path/to/your/smidigflytt/"
    echo ""
    echo "2. Restart the service:"
    echo "   sudo docker compose -f docker-compose.production.yml up -d --build"
    echo ""
    echo "3. Wait 30 seconds, then test:"
    echo "   curl http://127.0.0.1:3002/api/health"
    echo ""
    echo "4. If that works, test the domain:"
    echo "   curl -I https://smidigflytt365.se"
fi

echo ""
echo "=== Current Status ==="
echo "Containers running:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "(NAMES|smidig|mbloka)"

echo ""
echo "Ports listening:"
netstat -tlnp 2>/dev/null | grep -E ":(80|443|3001|3002)" | head -10
