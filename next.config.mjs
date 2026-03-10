/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/grenoble-website" : "";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath,
  assetPrefix: isProd ? "/grenoble-website/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;


