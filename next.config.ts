import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com"
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during both builds and dev
  },
};

export default nextConfig;
