import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo>, so the asset prefix has to
// move with it. Set BASE_PATH=/skystay in CI; local builds stay at the root.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // No image optimiser exists on a static host.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
