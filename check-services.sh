#!/bin/bash

# Status check script for multi-service VPS setup
# Usage: ./check-services.sh

echo "🔍 Checking VPS Services Status..."
echo "=================================="

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi

echo "✅ Docker is available"
echo ""

# Check network
echo "📡 Network Status:"
if docker network ls | grep -q "web-network"; then
    echo "✅ web-network exists"
else
    echo "❌ web-network not found"
fi
echo ""

# Check containers
echo "📊 Container Status:"
echo "===================="

# Check mblokalatjanster
if docker ps | grep -q "mblokalatjanster-app"; then
    echo "✅ mblokalatjanster-app is running"
    echo "   Port: $(docker port mblokalatjanster-app 2>/dev/null || echo 'Not exposed')"
else
    echo "❌ mblokalatjanster-app is not running"
fi

# Check smidigflytt
if docker ps | grep -q "smidigflytt-app"; then
    echo "✅ smidigflytt-app is running"  
    echo "   Port: $(docker port smidigflytt-app 2>/dev/null || echo 'Not exposed')"
else
    echo "❌ smidigflytt-app is not running"
fi

# Check nginx
if docker ps | grep -q "nginx"; then
    echo "✅ nginx proxy is running"
    echo "   Ports: $(docker port $(docker ps --format 'table {{.Names}}' | grep nginx | head -1) 2>/dev/null || echo 'Not exposed')"
else
    echo "❌ nginx proxy is not running"
fi

echo ""

# Test connectivity
echo "🌐 Connectivity Tests:"
echo "====================="

# Test mblokalatjanster
if curl -f -s http://localhost:3001 > /dev/null 2>&1; then
    echo "✅ mblokalatjanster responds on port 3001"
else
    echo "❌ mblokalatjanster not responding on port 3001"
fi

# Test smidigflytt
if curl -f -s http://localhost:3002 > /dev/null 2>&1; then
    echo "✅ smidigflytt responds on port 3002"
else
    echo "❌ smidigflytt not responding on port 3002"
fi

# Test nginx
if curl -f -s http://localhost > /dev/null 2>&1; then
    echo "✅ nginx responds on port 80"
else
    echo "❌ nginx not responding on port 80"
fi

echo ""

# Resource usage
echo "💾 Resource Usage:"
echo "=================="
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" | grep -E "(mblokalatjanster|smidigflytt|nginx)"

echo ""
echo "📋 Quick Commands:"
echo "=================="
echo "View all containers: docker ps"
echo "View logs: docker logs -f <container-name>"
echo "Restart service: docker restart <container-name>"
echo "Check network: docker network inspect web-network"
