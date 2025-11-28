import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: [
    "https://innaesim.com",
    "https://portfolio.innaesim.com",
    "https://api.innaesim.com",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "innaesim.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portfolio.innaesim.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.innaesim.com",
        pathname: "/api/v1/**",
      },
    ],
  },
};

export default nextConfig;

