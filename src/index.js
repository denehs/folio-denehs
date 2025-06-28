import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

// Import the Next.js build
import nextjsManifest from '__STATIC_CONTENT_MANIFEST'

export default {
  async fetch(request, env, ctx) {
    try {
      // Handle static assets first
      return await getAssetFromKV(
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
    } catch (e) {
      // If asset not found, return 404
      return new Response('Not Found', { status: 404 })
    }
  },
}