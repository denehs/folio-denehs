/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Workers configuration
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: undefined,
  trailingSlash: true,
}

module.exports = nextConfig