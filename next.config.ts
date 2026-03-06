import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
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
      // Redirect www → non-www (prevents duplicate content in Google)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.louiebernstein.com' }],
        destination: 'https://louiebernstein.com/:path*',
        permanent: true,
      },
      {
        source: '/featured-videos',
        destination: '/videos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
