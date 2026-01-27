import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/featured-videos',
        destination: '/videos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
