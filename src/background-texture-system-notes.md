# Background Texture System Notes

## Texture Direction

- The material mood is porcelain, rice paper, soft ceramic glaze, faint ink wash, and fine grain.
- Texture should be visibly tactile on normal laptop and mobile screens, then quiet down inside text-dense areas.
- The system must feel premium and calm, not dirty, grungy, patterned, or decorative wallpaper-like.
- The site remains CSS-only: gradients, repeating gradients, translucent borders, pseudo-elements, and soft shadows.
- No external texture images, generated files, canvas, SVG filters, network requests, or heavy blur layers.

## Implementation Approach

- Global page texture lives on `.app-shell` through layered radial gradients and a low-opacity fixed pseudo-element.
- Section-level variation is subtle: shop, story, and consultation builder sections get pale wash layers behind content.
- Cards, product panels, drawers, notes, and builder surfaces use matte ceramic panels with thin translucent borders.
- Illustration panels use rice-paper grain, pale ink-wash gradients, and soft inset framing behind SVG motifs.
- Frosted treatment is limited to the header, drawers, labels, and selected panels where it supports readability.
- Mobile reduces texture opacity and blur intensity to protect performance and text clarity.
- Text areas receive cleaner inner layers so the stronger grain remains visible in blank space without lowering contrast.

## Texture Variables And Classes

- `--texture-grain-opacity`: fine cool grain for global and illustration surfaces.
- `--texture-wash-opacity`: ink-wash depth for page and section backgrounds.
- `--texture-fiber-opacity`: rice-paper fiber hint for panels and cards.
- `--texture-micro-opacity`: global porcelain/rice-paper micro grain.
- `--surface-paper`, `--surface-ceramic`, `--surface-frosted`, and `--surface-ink-wash` define reusable material layers.
- `.surface-rice-paper`, `.surface-paper`, `.surface-porcelain`, `.surface-ceramic`, `.surface-frosted`, `.surface-ink-wash`, `.surface-mineral`, `.panel-frosted`, `.panel-ceramic`, `.panel-paper`, `.drawer-textured`, `.card-textured`, `.brief-paper-surface`, `.shop-matte-surface`, and `.visual-panel-textured` are available for current and future static sections.

## Anti-Noise Rules

- Grain opacity must stay low and never look like dust, dirt, grunge, fabric, or a visible pattern.
- Avoid strong green dominance; jade stays an accent, not a wash over every surface.
- Do not place busy texture directly above text. Texture overlays must be `pointer-events: none` and extremely subtle.
- Avoid glassmorphism cliches: use frosted softness sparingly and keep surfaces matte.

## Readability Rules

- Body text, product descriptions, prices, cart totals, and disclaimers need strong contrast over every surface.
- Labels and captions keep quiet backing surfaces when placed on illustrated panels.
- Focus outlines must remain visible over ceramic and frosted panels.
- Drawers need enough material contrast to separate overlay, panel, illustration, copy, specs, and actions.

## Bilingual Layout Risks

- Chinese copy is often denser; textured cards need extra line-height and padding so paragraphs do not feel crowded.
- Filter chips and consultation options should wrap cleanly without creating horizontal overflow.
- Product drawer tag lists should use Chinese delimiters in Chinese mode to avoid awkward comma rhythm.
- Mobile should simplify blur and preserve stable panel dimensions for shop cards, cart rows, and generated brief output.

## Round 10D Placement Rules

- Texture should be strongest in global blank space, large section backgrounds, illustration panels, product media zones, drawers, and builder shells.
- Product descriptions, cart rows, search fields, option chips, and generated brief text should sit on quieter material layers.
- Surface classes are semantic CSS hooks only; they do not add images, network calls, scripts, or runtime texture generation.
