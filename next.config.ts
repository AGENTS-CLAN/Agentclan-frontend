import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["aceternity.com",'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
    ], // 👈 Add the allowed domain here
  },
};

export default nextConfig;
