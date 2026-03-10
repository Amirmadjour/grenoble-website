/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: "/grenoble-website",
  assetPrefix: "/grenoble-website/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
