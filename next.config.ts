import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    unoptimized: false,
  },
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
