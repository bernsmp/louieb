import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.youtube.com",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      "img-src 'self' data: blob: https://*.supabase.co https://images.unsplash.com https://d1yei2z3i6k35z.cloudfront.net",
      "media-src 'self' https://*.supabase.co",
      "connect-src 'self' https://*.supabase.co https://openrouter.ai",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'd1yei2z3i6k35z.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
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
