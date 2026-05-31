# Oriental Aquascape Visual System Notes

## Updated Direction

The static demo should feel like a refined Eastern aquatic design studio: minimal, editorial, premium, calm, contemporary, and quietly technological. The identity should add more material warmth through rice paper, porcelain, ink wash, jade, and antique bronze while keeping a neutral-first interface.

## Illustration Principles

- Use local generated sketch-image assets when approved files exist in `public/illustrations/final/`.
- Keep existing inline SVG motifs as fallback so missing final images never break layout.
- Treat sketch influence as editorial concept drawing, not cartoon styling.
- Keep linework thin, slightly irregular, and spacious.
- Use vessel silhouettes, waterlines, jade or ceramic forms, aquatic plant linework, spatial diagrams, and subtle matching nodes.
- Use the ornamental fish silhouette sparingly and only for the future/later category.
- Leave generous negative space inside every illustration panel.

## Color Changes

- Base surfaces move toward Rice Paper, Porcelain, Silver Mist, and Pale Ink Wash.
- Ink and Soft Ink carry the typography and structure.
- Deep Jade remains the primary identity accent.
- Antique Bronze appears only in fine heritage details.
- Tech Slate and Cool Mist are reserved for platform, matching, and recommendation visuals.
- Muted Cinnabar is allowed only as a tiny cultural accent and should never become a red theme.
- Round 5B reduces the visual dominance of green by shifting more structural UI states toward ink water blue-gray, tea smoke gray, clay, warm stone, porcelain shadow, and antique bronze.
- Green should now appear as an identity accent, plant note, or selected high-value detail, not as the default fill for every control.

## Enriched Palette Notes

- Warm Stone and Porcelain Shadow support borders, panel interiors, and quieter section separation.
- Ink Water Blue-Gray and Tea Smoke Gray add sophistication to buttons, technical linework, and hover states.
- Muted Clay and Soft Terracotta Dust add material warmth for vessel, ceramic, and decorative piece details.
- Antique Bronze remains a heritage accent, never a bright gold.

## Motion Principles

- Motion should feel like quiet water or a light drafting line.
- Use slow waterline drift, subtle node pulse, and hover/focus line reveal.
- Keep motion functional and sparse.
- Respect `prefers-reduced-motion` by removing animation and transitions where possible.
- Round 5B keeps motion slower and smaller: no movement should create text overlap, alter layout, or make panels feel playful.

## What Not To Do

- No cute mascot style, cartoon fish, bright anime color, heavy comic effects, or repeated speech bubbles.
- No neon cyber look, dashboard-heavy graphics, or generic SaaS decoration.
- No red-and-gold festive styling, cheap gold, overdecorated patterning, or marketplace clutter.
- No external image URLs, real photos, generated image APIs, external scripts, or runtime image-generation calls.

## Premium Sketch / Comic Boundaries

Sketch/comic style means controlled editorial drawing: quiet panels, thin ink lines, restrained fills, and deliberate composition. It should read as an Eastern design studio concept sheet rather than entertainment illustration.

## Illustration Complexity Upgrade

- Future final images should add internal contour lines, water layers, material hatching, vessel lips, plant stems, equipment details, and spatial diagram structure.
- Keep drawings believable as material and architectural studies without becoming photo-based or busy.
- Use local generated sketch images for final artwork; use layered SVG forms only as fallback.
- Preserve whitespace around captions and labels so art does not compete with text.
- Motifs should vary in density: hero, product drawer, and consultation visuals may be richer; small product cards should be cleaner.
- Use soft underlays, secondary contour lines, and fine hatching to make panels read as professional concept studies rather than simple icons.
- Material suggestion should come from line weight, translucent fills, ceramic/jade/mineral color, and disciplined composition.

## Round 12B Local Image Asset System

- Final generated sketch images belong in `public/illustrations/final/`.
- Prompt documentation lives in `src/illustration-prompt-pack.md`.
- Asset metadata lives in `src/data/illustrationAssets.ts`.
- `.generated-image-panel`, `.image-mat`, `.generated-image`, `.generated-image-fallback`, and `.image-ratio-*` classes provide mounted rice-paper image surfaces.
- Missing or pending final images use the existing `SketchMotif` fallback with a stable panel size and no broken image icon.

## Round 12A Paper Texture Upgrade

- Use local procedural SVG textures from `public/textures/` only; no external imagery, real photos, online texture libraries, canvas, or network calls.
- Paper texture should be visible as handmade fiber, rough mineral grain, and faint ink absorption, especially in global backgrounds, visual panels, cards, drawers, and brief surfaces.
- Illustration panels should read as sketches placed on tactile paper, with local paper fiber behind SVG motifs.
- Soft fiber edges are allowed on major paper surfaces, but they should remain refined and quiet rather than torn, dirty, or scrapbook-like.
- Text-heavy regions should keep calmer local surfaces and place content above texture overlays.

## Professional Layout QA Checklist

- Text and captions must never overlap illustration strokes.
- Labels and captions need padded surfaces or safe zones where they sit over illustrated panels.
- Product card art should reserve top and bottom caption space.
- Drawer panels need clean separation between header, illustration, copy, specs, and actions.
- Buttons should wrap cleanly and keep a tappable minimum height.
- Grid cards should not jump height on hover or focus.
- Section boundaries should use consistent thin borders, measured padding, and quiet shadows.
- Mobile layouts should stack without clipping, horizontal overflow, or crowded CTA groups.
- Paper texture must remain visible on normal laptop and mobile screens without reducing contrast or creating dirty/grunge artifacts.

## Anti-Overlap Rules

- Illustration SVGs should stay inset from panel edges.
- Compact panels should reserve more vertical margin for label and caption text.
- Animated lines can drift only inside their SVG safe zone.
- Captions should use readable overlays when placed on top of illustrated panels.
- Drawers and cards should use overflow containment intentionally, not accidentally clip essential art.
- Product cards must keep media, title, description, price/status, and actions in stable zones; hover motion cannot resize the card.
- Chinese labels, filters, and builder chips should wrap as whole phrases with enough padding and line-height.

## Round 10D QA Rules

- Check `#/`, `#/shop`, `#/consultation`, `#/story`, and `#/lookbook` in both English and Chinese.
- Check cart add/increase/remove/clear, product drawer open/close, future-category disabled state, search/filter, language persistence, and builder copy/reset.
- Confirm no horizontal overflow on mobile and no text collision with illustration captions.
- Confirm SVG decorative internals stay `aria-hidden` while panels and drawers keep meaningful labels.

## Round 12A QA Rules

- Confirm the global background visibly reads as physical paper rather than only smooth gradients.
- Confirm product cards, lookbook panels, category panels, drawers, consultation builder, and generated brief output have tactile ceramic-paper depth.
- Confirm soft fiber edges are visible on major paper surfaces but do not look torn or messy.
- Confirm dense English and Chinese text remains readable over the stronger texture.
- Confirm no route introduces external image or network texture requests.

## Round 12B QA Rules

- Confirm Chinese headings use Songti/Ming-style display fonts and Chinese UI uses Heiti/Sans.
- Confirm Kaiti / hard-pen calligraphy is not present in the active font stack.
- Confirm generated image panels expose final local asset paths but fall back safely while assets are pending.
- Confirm no external image URLs, image-generation API calls, or real photos are introduced.
- Confirm fallback SVGs remain `aria-hidden` inside meaningful image panels.

## Future Image Replacement

The current rendered drawings are fallback concept visuals. Future generated sketch assets can replace them by exporting `.webp` files into `public/illustrations/final/` and marking the relevant asset as `final` in `src/data/illustrationAssets.ts`.

## Accessibility Considerations

- Maintain readable contrast across text, controls, and illustration labels.
- Decorative SVGs should remain aria-hidden; meaningful panels should have text labels nearby.
- Do not rely on color alone for selected states.
- Keep all controls keyboard accessible and tappable on mobile.
- Prevent horizontal overflow and reduce motion for users who prefer less movement.
