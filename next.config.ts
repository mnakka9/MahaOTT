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
  reactStrictMode: true,
  pageExtensions: [
        "page.tsx",
        "page.ts",
        // FIXME: Next.js has a bug which does not resolve not-found.page.tsx correctly
        // Instead, use `not-found.ts` as a workaround
        // "ts" is required to resolve `not-found.ts`
        // https://github.com/vercel/next.js/issues/65447
        "ts"
    ],
};

export default nextConfig;
