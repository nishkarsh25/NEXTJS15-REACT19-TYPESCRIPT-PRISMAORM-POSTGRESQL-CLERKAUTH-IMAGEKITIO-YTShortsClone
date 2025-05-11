import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // You must specify at least `hostname`
      },
    ],
  },
};

export default nextConfig;
