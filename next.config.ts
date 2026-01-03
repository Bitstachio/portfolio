import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // TODO: For static export, Next.js cannot optimize images at runtime
  // Images should be pre-optimized in the build pipeline
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
