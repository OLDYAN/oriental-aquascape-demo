# Illustration Asset Integration Guide

This guide explains how to add externally generated sketch images to the demo without changing layout, routes, typography, ecommerce logic, or consultation behavior.

## Placement

Place final generated images here:

```text
public/illustrations/final/
```

Use these exact filenames:

| Filename | Recommended size | Notes |
|---|---:|---|
| `hero-water-vessel.webp` | 1600x1000 | Primary hero and overview asset. |
| `heritage-aquarium.webp` | 1400x1000 | Keep the vessel centered for product cards. |
| `jade-stone-composition.webp` | 1200x1500 | Keep stone mass readable in portrait and card crops. |
| `aquatic-plant-study.webp` | 1200x1500 | Keep the plant cluster centered and airy. |
| `ornamental-fish-study.webp` | 1200x900 | Keep fish silhouette centered for square cards. |
| `equipment-study.webp` | 1200x900 | Keep equipment forms legible at compact card size. |
| `decorative-pieces-study.webp` | 1200x1500 | Keep vessel and object group centered for shop surfaces. |
| `ai-platform-study.webp` | 1400x1000 | Avoid readable UI text. Use abstract interface marks only. |
| `spatial-consultation-study.webp` | 1400x1000 | Avoid outcome claims, mystical symbols, or readable notes. |
| `b2b-network-study.webp` | 1400x1000 | Keep the network quiet and diagrammatic, not corporate-stock. |

## Format And Compression

- Preferred format: `.webp`.
- Color mode: standard sRGB.
- Background: clean white xuan paper or rice paper, not yellow parchment.
- Target file size: under 250 KB for most assets.
- Hero and complex landscape assets may go up to 350 KB.
- Hard maximum recommendation: 450 KB per image.
- Use visually lossless compression first; reduce quality only until paper fiber and linework remain clean.

## How The Fallback Works

The site currently uses `SketchMotif` inline SVG fallback drawings. `GeneratedImagePanel` receives the final image path from `src/data/illustrationAssets.ts`, but it only renders the `<img>` when the asset status is `final`.

Current behavior:

```ts
imageReady={asset.status === 'final'}
```

While status is `pending`, the final `.webp` path is recorded but not requested by the browser. If status is changed to `final` and the image file is missing or fails to load, the panel falls back instead of breaking the layout.

## Marking An Asset As Final

Open:

```text
src/data/illustrationAssets.ts
```

For a single approved asset, change that asset only:

```ts
status: pendingStatus,
```

to:

```ts
status: 'final',
```

Do not change the shared `pendingStatus` constant unless every listed image has been generated, reviewed, placed, and approved.

## Testing After Adding Images

Run:

```powershell
npm.cmd run lint
npm.cmd run build
```

Then review:

- Home in English and Chinese.
- Shop in English and Chinese.
- Consultation in English and Chinese.
- Story in English and Chinese.
- Lookbook in English and Chinese.
- Product drawer after opening a product.
- Cart drawer after adding a purchasable demo product.
- Consultation builder after selecting options that trigger different visual motifs.

Confirm:

- No broken image icons.
- No horizontal overflow.
- Images remain centered and crop-safe in compact cards and drawers.
- Text remains readable.
- Paper background feels clean, white, and premium.
- No external network requests are introduced.

## Visual Troubleshooting

If an image looks too cartoonish:

- Add stronger wording: refined graphite product concept sketch, architectural object study, realistic vessel proportions.
- Add negative wording: no cartoon, no anime, no mascot, no cute pet-store styling.

If an image looks too photographic:

- Add stronger wording: pencil linework, visible hatching, concept drawing, subtle ink wash.
- Add negative wording: no photorealism, no camera lighting, no photo, no render.

If an image looks too busy:

- Ask for more negative space, fewer objects, restrained linework, and a single primary subject.
- Remove decorative clutter and background props.

If an image looks too dark or low contrast:

- Ask for bright white xuan paper, light graphite values, clean paper fiber, and no muddy gray wash.
- Keep ink wash subtle and localized.

If an image has text, logos, or watermarks:

- Regenerate. Do not manually cover text with patches.
- Use: no readable text, no calligraphy, no captions, no logo, no watermark.

If the subject crops poorly:

- Regenerate with the main subject centered.
- Keep important details inside the central 70 percent of the image.
- For product cards, keep the subject readable even inside a square-safe center crop.

## What Not To Add

- Do not add external image URLs.
- Do not add image-generation API calls.
- Do not add backend services.
- Do not add analytics or external scripts.
- Do not add placeholder real photos.
- Do not commit `dist/`, `node_modules/`, zip files, screenshots, local caches, or temporary QA artifacts.
