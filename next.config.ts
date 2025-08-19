import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean configuration for production deployment
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  // Enable standalone output for Docker
  output: 'standalone',
  // Allow warnings during build - only fail on errors
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Allow build to complete with warnings
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
