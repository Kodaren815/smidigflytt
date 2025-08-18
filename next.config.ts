import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean configuration for Vercel deployment
  trailingSlash: false,
  productionBrowserSourceMaps: false,
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
