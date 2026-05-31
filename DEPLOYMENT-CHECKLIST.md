# Deployment Checklist

## Local Validation

- Install dependencies: `npm install`
- Run lint: `npm run lint`
- Build locally: `npm run build`
- Confirm production output exists in `dist`
- Optional local production preview: `npm run preview`

## Cloudflare Pages

- Recommended deployment target: Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite or React if available
- No environment variables are required for the static demo

## GitHub Pages

- Build command: `npm run build`
- Output directory: `dist`
- Do not set a Vite `base` path until the final repository name is confirmed
- If deployed under a repository subpath, Vite may require `base: '/repository-name/'`
- For a root domain or user/org pages repository, the default base path may be appropriate

## Vercel and Netlify

- Build command: `npm run build`
- Vercel output directory: `dist`
- Netlify publish directory: `dist`
- No backend functions are required

## Prototype Limitations

- No backend
- No real payment
- No Shopify
- No Webflow
- No real inventory reservation
- No real shipping
- No real AI API
- No analytics
- No external scripts or network requests
- High-End Ornamental Fish remains a future consultation category

## Final Pre-Deploy QA

- `npm run lint` passes
- `npm run build` passes
- `dist` is generated
- Header navigation works
- Product filters and search work
- Product drawer opens and closes
- Cart drawer works and checkout remains disabled
- Consultation brief builder works
- No horizontal overflow on mobile
- No prohibited terminology appears in visible copy
- `node_modules`, `dist`, local archives, and local environment files are ignored by Git
