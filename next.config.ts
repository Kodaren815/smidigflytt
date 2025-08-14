import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove standalone output for Vercel deployment
  // output: 'standalone',
  
  // Optimize for production
  productionBrowserSourceMaps: false,
  
  // Handle static optimization
  trailingSlash: false,
};

export default nextConfig;
