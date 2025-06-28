/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers configuration
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig