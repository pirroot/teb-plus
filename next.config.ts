import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    domains: [
      'dkstatics-public.digikala.com',
      'www.digikala.com',
      'persicatheme.ir',
    ],
    qualities: [75, 100],
    unoptimized: true,
  },
  // experimental: {
  //   staleTimes: {
  //     dynamic: 10,
  //   },
  // },
};

export default nextConfig;
