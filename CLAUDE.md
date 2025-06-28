# Claude Code Instructions

## Development Server Management

**IMPORTANT**: Always ensure the development server is running after making changes so the user can verify the work.

### To start the dev server:
```bash
cd /Users/davidkao/Codes/folio-denehs && npm run dev
```

### To check if dev server is running:
```bash
lsof -i :3000 | grep LISTEN
```

### If server stops, restart it:
```bash
pkill -f "next dev"
cd /Users/davidkao/Codes/folio-denehs && npm run dev > dev.log 2>&1 & echo $!
```

## Project Details

- **URL**: http://localhost:3000/
- **Tech Stack**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Build Command**: `npm run build`
- **Output Directory**: `.next/` (for Cloudflare Workers deployment)

## Key Commands

- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Dev Server**: `npm run dev`

## Important Notes

1. Always keep the dev server running for user verification
2. The site uses Tailwind CSS v3 (not v4) for compatibility
3. Deployment configured for Cloudflare Workers with git integration
4. Custom domain is denehs.me