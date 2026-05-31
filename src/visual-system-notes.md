# Oriental Aquascape Visual System Notes

## Updated Direction

The static demo should feel like a refined Eastern aquatic design studio: minimal, editorial, premium, calm, contemporary, and quietly technological. The identity should add more material warmth through rice paper, porcelain, ink wash, jade, and antique bronze while keeping a neutral-first interface.

## Illustration Principles

- Use original inline SVG and CSS only.
- Treat sketch and comic influence as editorial concept drawing, not cartoon styling.
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
- No external image URLs, real photos, generated image APIs, or external scripts.

## Premium Sketch / Comic Boundaries

Sketch/comic style means controlled editorial drawing: quiet panels, thin ink lines, restrained fills, and deliberate composition. It should read as an Eastern design studio concept sheet rather than entertainment illustration.

## Illustration Complexity Upgrade

- Add more internal contour lines, water layers, material hatching, vessel lips, plant stems, equipment details, and spatial diagram structure.
- Keep the drawings believable as material studies without becoming photo-based or busy.
- Use layered SVG forms, not external images.
- Preserve whitespace around captions and labels so the art does not compete with text.
- Motifs should vary in density: hero, product drawer, and consultation visuals may be richer; small product cards should be cleaner.

## Professional Layout QA Checklist

- Text and captions must never overlap illustration strokes.
- Labels and captions need padded surfaces or safe zones where they sit over illustrated panels.
- Product card art should reserve top and bottom caption space.
- Drawer panels need clean separation between header, illustration, copy, specs, and actions.
- Buttons should wrap cleanly and keep a tappable minimum height.
- Grid cards should not jump height on hover or focus.
- Section boundaries should use consistent thin borders, measured padding, and quiet shadows.
- Mobile layouts should stack without clipping, horizontal overflow, or crowded CTA groups.

## Anti-Overlap Rules

- Illustration SVGs should stay inset from panel edges.
- Compact panels should reserve more vertical margin for label and caption text.
- Animated lines can drift only inside their SVG safe zone.
- Captions should use readable overlays when placed on top of illustrated panels.
- Drawers and cards should use overflow containment intentionally, not accidentally clip essential art.

## Future Image Replacement

The current illustrations are concept visuals. Future approved photography, product renders, or project imagery can replace panels if they preserve the same restraint, crop discipline, color temperature, and material quality.

## Accessibility Considerations

- Maintain readable contrast across text, controls, and illustration labels.
- Decorative SVGs should remain aria-hidden; meaningful panels should have text labels nearby.
- Do not rely on color alone for selected states.
- Keep all controls keyboard accessible and tappable on mobile.
- Prevent horizontal overflow and reduce motion for users who prefer less movement.
