#!/bin/bash

# Test script to verify sitemap functionality
# Usage: ./test-sitemap.sh [local|production]

MODE=${1:-local}
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ "$MODE" = "local" ]; then
    BASE_URL="http://localhost:3000"
    echo -e "${YELLOW}🔍 Testing sitemap locally...${NC}"
else
    BASE_URL="https://www.smidigflytt365.se"
    echo -e "${YELLOW}🔍 Testing sitemap in production...${NC}"
fi

echo ""
echo "=== Testing sitemap endpoints ==="

# Test sitemap.xml
echo -n "Testing $BASE_URL/sitemap.xml... "
if curl -s -f -o /dev/null "$BASE_URL/sitemap.xml"; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
    
    # Check if it's valid XML and contains correct domain
    RESPONSE=$(curl -s "$BASE_URL/sitemap.xml")
    if echo "$RESPONSE" | grep -q "smidigflytt365.se" && echo "$RESPONSE" | grep -q "<?xml"; then
        echo -e "${GREEN}✅ Sitemap contains correct domain and is valid XML${NC}"
    else
        echo -e "${RED}❌ Sitemap content issues detected${NC}"
        echo "Response preview:"
        echo "$RESPONSE" | head -10
    fi
else
    echo -e "${RED}❌ FAILED${NC}"
fi

# Test robots.txt
echo -n "Testing $BASE_URL/robots.txt... "
if curl -s -f -o /dev/null "$BASE_URL/robots.txt"; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
    
    # Check if robots.txt references correct sitemap
    ROBOTS_RESPONSE=$(curl -s "$BASE_URL/robots.txt")
    if echo "$ROBOTS_RESPONSE" | grep -q "smidigflytt365.se/sitemap.xml"; then
        echo -e "${GREEN}✅ Robots.txt references correct sitemap${NC}"
    else
        echo -e "${RED}❌ Robots.txt sitemap reference issues${NC}"
        echo "Robots.txt content:"
        echo "$ROBOTS_RESPONSE"
    fi
else
    echo -e "${RED}❌ FAILED${NC}"
fi

echo ""
echo "=== Testing sample URLs from sitemap ==="

# Test main page
echo -n "Testing main page... "
if curl -s -f -o /dev/null "$BASE_URL/"; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
else
    echo -e "${RED}❌ FAILED${NC}"
fi

# Test services page
echo -n "Testing services page... "
if curl -s -f -o /dev/null "$BASE_URL/tjanster"; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
else
    echo -e "${RED}❌ FAILED${NC}"
fi

# Test cities page
echo -n "Testing cities page... "
if curl -s -f -o /dev/null "$BASE_URL/stader"; then
    echo -e "${GREEN}✅ SUCCESS${NC}"
else
    echo -e "${RED}❌ FAILED${NC}"
fi

echo ""
echo -e "${YELLOW}📊 Test completed!${NC}"
