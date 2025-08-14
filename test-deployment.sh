#!/bin/bash

# Test deployment script
echo "🧪 Testing Smidigflytt deployment..."

# Test if Docker is available
if command -v docker &> /dev/null; then
    echo "✅ Docker is available"
    
    # Test Docker build
    echo "🔨 Testing Docker build..."
    docker build -t smidigflytt-test . --no-cache
    
    if [ $? -eq 0 ]; then
        echo "✅ Docker build successful"
        
        # Clean up test image
        docker rmi smidigflytt-test
        echo "🧹 Cleaned up test image"
    else
        echo "❌ Docker build failed"
        exit 1
    fi
else
    echo "⚠️ Docker not available, skipping Docker tests"
fi

# Test npm build
echo "🔨 Testing npm build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ npm build successful"
else
    echo "❌ npm build failed"
    exit 1
fi

# Test if required files exist
echo "📁 Checking required files..."
required_files=(
    "Dockerfile"
    "docker-compose.yml"
    "vercel.json"
    "netlify.toml"
    "package.json"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        exit 1
    fi
done

echo "🎉 All deployment tests passed!"
echo "📋 Available deployment options:"
echo "   - Docker: ./deploy-vps.sh"
echo "   - Vercel: vercel --prod"
echo "   - Netlify: netlify deploy --prod"
