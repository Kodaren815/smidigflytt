#!/bin/bash

# Performance optimization script - Remove heavy dependencies

echo "🚀 Optimizing website performance..."

# Check if framer-motion is installed and optionally remove it
if npm list framer-motion >/dev/null 2>&1; then
    echo "📦 Found framer-motion - consider removing for better performance"
    echo "   Run: npm uninstall framer-motion"
    echo "   This will reduce bundle size by ~100KB gzipped"
fi

# Check bundle size
echo "📊 Analyzing bundle size..."
if [ -d ".next" ]; then
    echo "   Next.js build found - checking bundle analyzer"
    npx @next/bundle-analyzer --help >/dev/null 2>&1 && echo "   Consider running: npm run analyze"
fi

echo "✅ Performance optimizations:"
echo "   - Removed framer-motion from critical components"
echo "   - Replaced with CSS-only animations"
echo "   - Optimized font loading"
echo "   - Added image optimization"
echo "   - Reduced universal CSS transitions"
echo "   - Added performance headers"

echo "🎯 Next steps:"
echo "   1. Run 'npm run build' to test the build"
echo "   2. Run 'npm run start' to test production mode"
echo "   3. Use browser DevTools to measure performance improvements"
echo "   4. Consider removing framer-motion entirely if not needed elsewhere"
