import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["@bbrains/ui", "@bbrains/utils", "@bbrains/validators", "@bbrains/types"],
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default process.env.NODE_ENV === "development"
  ? nextConfig
  : withPWA({
      ...nextConfig,
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
      },
    });