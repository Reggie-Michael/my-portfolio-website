import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'localhost',
      'aradyst-codex-gem.netlify.app',
      'images.unsplash.com',
      'source.unsplash.com',
      'images.pexels.com',
      'picsum.photos',
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
