/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: isProd ? "/grenoble-website" : "",
  assetPrefix: isProd ? "/grenoble-website/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

