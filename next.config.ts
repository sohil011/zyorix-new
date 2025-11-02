import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/labs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
