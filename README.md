# Oriental Aquascape Demo

A free static React prototype for Oriental Aquascape, an Eastern-aesthetic aquatic lifestyle and commerce platform. The demo presents a premium minimal homepage, curated commerce preview, product interactions, and a consultation brief builder without backend services or real checkout.

## Tech Stack

- Vite
- React
- TypeScript
- Plain CSS
- Local data files
- Local generated sketch-image asset system with inline SVG fallbacks

## Main Features

- Premium minimal homepage for Eastern aquatic living
- Curated ecommerce preview
- Product filters and search
- Product detail drawer
- Cart drawer with `localStorage`
- Disabled prototype checkout
- Consultation brief builder
- Static AI-assisted recommendation mock
- Original CSS/SVG fallback visual system with reduced-motion support

## Prototype Limitations

- No backend
- No real payment
- No Shopify
- No real inventory reservation
- No real shipping
- No real AI API
- No analytics or external scripts
- High-End Ornamental Fish is marked as a future consultation category

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is written to `dist`.

## Preview Production Build

```bash
npm run preview
```

## Deployment Notes

This project is fully static and can be deployed on free static hosting.

## Recommended Deployment: Cloudflare Pages

Cloudflare Pages is the recommended first deployment target because the Vite build can deploy directly from `dist` without adding dependencies or changing the current Vite base path.

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite or React if available

## Other Free Hosting Options

GitHub Pages:

- Build command: `npm run build`
- Output directory: `dist`
- If deploying under a repository subpath, Vite may need a `base` setting such as `base: '/repository-name/'`.
- For a root domain or user/org pages repository, the base path may not need to change.

Vercel:

- Build command: `npm run build`
- Output directory: `dist`

Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## Future Integration Roadmap

- Replace mock products with Shopify or CMS data.
- Generate approved local sketch-style `.webp` illustration assets and place them in `public/illustrations/final/`.
- Add a real consultation form backend only when data handling and response workflows are ready.
- Add real checkout only after policies, shipping, inventory, and compliance are ready.
- Live fish commerce requires logistics, compliance, quarantine, DOA policy, and support planning.

## Safety Boundaries

The demo does not use Webflow, Shopify, Tailwind, GSAP, external UI libraries, external scripts, AI API calls, OpenAI API calls, network requests, analytics, secrets, paid services, or real payment processing.
