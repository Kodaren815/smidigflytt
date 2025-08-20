#!/bin/bash

# Local development deployment script
# Usage: ./deploy-local.sh

echo "🚀 Starting Smidigflytt in Development Mode..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js first: https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    echo "Please install npm first (usually comes with Node.js)"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building the application..."
npm run build

echo "🌟 Starting the development server..."
echo "✅ Starting application..."
echo "🌐 Application will be available at http://localhost:3000"
echo "🔧 Admin panel: http://localhost:3000/admin"
echo "🛑 Press Ctrl+C to stop the server"

npm start
