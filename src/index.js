import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

// Import the Next.js build
import nextjsManifest from '__STATIC_CONTENT_MANIFEST'

// Security headers configuration
const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://static.cloudflareinsights.com https://www.googletagmanager.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
}

const worker = {
  async fetch(request, env, ctx) {
    try {
      // Handle static assets first
      const response = await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: nextjsManifest,
          // Cache static assets for 1 year
          cacheControl: {
            browserTTL: 31536000,
            edgeTTL: 31536000,
          },
        }
      )

      // Clone the response and add security headers
      const newResponse = new Response(response.body, response)
      Object.entries(securityHeaders).forEach(([key, value]) => {
        newResponse.headers.set(key, value)
      })

      return newResponse
    } catch (e) {
      // If asset not found, return 404 with security headers
      const response = new Response('Not Found', { status: 404 })
      Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value)
      })
      return response
    }
  },
}

export default worker