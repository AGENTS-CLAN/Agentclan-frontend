import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["aceternity.com",'images.unsplash.com'], // 👈 Add the allowed domain here
  },
};

export default nextConfig;
