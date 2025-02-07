import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns : [
      {
        hostname: 'image.tmdb.org',
        protocol: 'https'
      }
    ]
  },
  env: {
    TMDB_BASE_URL: process.env.TMDB_BASE_URL || "",
    TMDB_IMAGE_SERVICE_URL: process.env.TMDB_IMAGE_SERVICE_URL || "",
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN || "",
  }
};

export default nextConfig;
