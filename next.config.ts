import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean configuration for production deployment
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  // Enable standalone output for Docker
  output: 'standalone',
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Disable image optimization for Netlify compatibility
  images: {
    unoptimized: true,
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/logo.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
