#!/bin/bash

# VPS Diagnostic Script for Smidigflytt Deployment
# Run this ON YOUR VPS to diagnose issues

echo "🔍 Smidigflytt VPS Diagnostic Report"
echo "=================================="

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check 1: Docker Services
echo ""
echo "=== Docker Services ==="
if docker ps | grep -q smidigflytt; then
    echo -e "${GREEN}✅ Smidigflytt container is running${NC}"
    docker ps | grep smidigflytt | awk '{print $1, $2, $3, $4, $5}'
else
    echo -e "${RED}❌ Smidigflytt container is NOT running${NC}"
    if docker ps -a | grep -q smidigflytt; then
        echo "Container exists but stopped:"
        docker ps -a | grep smidigflytt
        echo ""
        echo "Last 10 log lines:"
        docker logs smidigflytt-app --tail 10 2>/dev/null || echo "No logs available"
    else
        echo "No smidigflytt container found"
    fi
fi

# Check 2: Port Status
echo ""
echo "=== Port Status ==="
echo "Port 3002 (smidigflytt):"
if netstat -tlnp 2>/dev/null | grep -q :3002; then
    echo -e "${GREEN}✅ Port 3002 is in use${NC}"
    netstat -tlnp 2>/dev/null | grep :3002
else
    echo -e "${RED}❌ Port 3002 is not in use${NC}"
fi

echo ""
echo "Port 80 (HTTP):"
if netstat -tlnp 2>/dev/null | grep -q :80; then
    echo -e "${GREEN}✅ Port 80 is in use${NC}"
    netstat -tlnp 2>/dev/null | grep :80 | head -1
else
    echo -e "${RED}❌ Port 80 is not in use${NC}"
fi

echo ""
echo "Port 443 (HTTPS):"
if netstat -tlnp 2>/dev/null | grep -q :443; then
    echo -e "${GREEN}✅ Port 443 is in use${NC}"
    netstat -tlnp 2>/dev/null | grep :443 | head -1
else
    echo -e "${RED}❌ Port 443 is not in use${NC}"
fi

# Check 3: Nginx Configuration
echo ""
echo "=== Nginx Status ==="
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✅ Nginx is running${NC}"
else
    echo -e "${RED}❌ Nginx is not running${NC}"
fi

# Check for smidigflytt in nginx config
if grep -r "smidigflytt365.se" /etc/nginx/ 2>/dev/null | head -1; then
    echo -e "${GREEN}✅ Found smidigflytt365.se in nginx config${NC}"
else
    echo -e "${RED}❌ smidigflytt365.se NOT found in nginx config${NC}"
fi

# Test nginx config
if nginx -t 2>/dev/null; then
    echo -e "${GREEN}✅ Nginx config is valid${NC}"
else
    echo -e "${RED}❌ Nginx config has errors${NC}"
    nginx -t
fi

# Check 4: SSL Status
echo ""
echo "=== SSL Certificate Status ==="
if [ -f "/etc/letsencrypt/live/smidigflytt365.se/fullchain.pem" ]; then
    echo -e "${GREEN}✅ SSL certificate exists for smidigflytt365.se${NC}"
    cert_expiry=$(openssl x509 -enddate -noout -in /etc/letsencrypt/live/smidigflytt365.se/fullchain.pem 2>/dev/null | cut -d= -f2)
    echo "Certificate expires: $cert_expiry"
else
    echo -e "${RED}❌ No SSL certificate found for smidigflytt365.se${NC}"
fi

# Check 5: DNS Resolution
echo ""
echo "=== DNS Resolution ==="
smidig_ip=$(nslookup smidigflytt365.se 2>/dev/null | grep "Address:" | tail -1 | awk '{print $2}')
server_ip=$(curl -s ifconfig.me 2>/dev/null || curl -s ipinfo.io/ip 2>/dev/null || echo "unknown")

if [ "$smidig_ip" = "$server_ip" ]; then
    echo -e "${GREEN}✅ smidigflytt365.se points to this server ($server_ip)${NC}"
else
    echo -e "${RED}❌ DNS mismatch${NC}"
    echo "smidigflytt365.se resolves to: $smidig_ip"
    echo "This server IP is: $server_ip"
fi

# Check 6: Service Connectivity
echo ""
echo "=== Service Connectivity Tests ==="

# Test internal service
if curl -s -f http://localhost:3002/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Internal service (localhost:3002) is responding${NC}"
else
    echo -e "${RED}❌ Internal service (localhost:3002) is NOT responding${NC}"
fi

# Test external domain
if curl -s -f https://smidigflytt365.se > /dev/null 2>&1; then
    echo -e "${GREEN}✅ External domain (smidigflytt365.se) is responding${NC}"
else
    echo -e "${RED}❌ External domain (smidigflytt365.se) is NOT responding${NC}"
fi

# Summary
echo ""
echo "=== Summary & Next Steps ==="
echo ""
echo "If you see issues above, check:"
echo "1. Docker: Start smidigflytt container"
echo "2. Nginx: Add smidigflytt365.se server block"  
echo "3. SSL: Run certbot for smidigflytt365.se"
echo "4. DNS: Ensure domain points to this server"
echo ""
echo "For detailed instructions, see VPS-DEPLOYMENT-GUIDE.md"
