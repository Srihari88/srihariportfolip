import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      },
      {
        protocol: "https",
        hostname: "github-contributions-api.jogruber.de"
      }
    ]
  }
};

export default nextConfig;
