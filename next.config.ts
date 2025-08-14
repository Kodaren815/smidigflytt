import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean configuration for Vercel deployment
  trailingSlash: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
