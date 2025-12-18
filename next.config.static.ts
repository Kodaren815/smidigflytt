import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML Export for Netlify
  output: 'export',
  trailingSlash: true,
  
  // Disable features not compatible with static export
  images: {
    unoptimized: true,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
