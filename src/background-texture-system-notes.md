# Background Texture System Notes

## Texture Direction

- The material mood is porcelain, rice paper, soft ceramic glaze, faint ink wash, and fine grain.
- Texture should be visibly tactile on normal laptop and mobile screens, then quiet down inside text-dense areas.
- The system must feel premium and calm, not dirty, grungy, patterned, or decorative wallpaper-like.
- The site now uses local procedural SVG texture assets plus CSS layering: gradients, repeating gradients, translucent borders, pseudo-elements, and soft shadows.
- No external texture images, real photos, generated image APIs, canvas, network requests, or heavy JavaScript texture generation.

## Round 12A Audit Findings

- Global page texture was still too smooth because most of the visible material came from gradients and very low-opacity repeating lines.
- Several reusable surface overlays used negative z-index layers, which made fiber details disappear behind opaque panel backgrounds.
- Product cards, drawers, builder panels, and brief output needed stronger physical paper grain while keeping body copy on calmer local surfaces.
- Illustration panels needed a more obvious drawing-on-handmade-paper feeling behind the SVG motifs.
- Major paper-like panels needed a controlled soft fiber edge, not a torn or scrapbook edge.

## Implementation Approach

- Local texture files live in `public/textures/`:
  - `rice-paper-fiber.svg` for long, soft handmade-paper fibers.
  - `rough-paper-grain.svg` for uneven pulp and mineral grain.
  - `soft-ink-wash.svg` for low-frequency ink absorption and wash variation.
  - `paper-edge-mask.svg` for a refined soft-fiber edge overlay.
- Global page texture lives on `body` and `.app-shell` through local SVG texture layers, radial gradients, and fixed pseudo-elements.
- Section-level variation is visible but restrained: shop, story, lookbook, and consultation areas get rice-paper and ink-wash layers behind content.
- Cards, product panels, drawers, notes, and builder surfaces use matte ceramic-paper panels with thin translucent borders and local paper overlays.
- Illustration panels use rice-paper fiber, rough grain, pale ink-wash gradients, and soft inset framing behind SVG motifs.
- Frosted treatment is limited to the header, drawers, labels, and selected panels where it supports readability.
- Mobile reduces texture opacity and blur intensity to protect performance and text clarity.
- Text areas receive cleaner inner layers so the stronger grain remains visible in blank space without lowering contrast.

## Texture Variables And Classes

- `--texture-grain-opacity`: fine cool grain for global and illustration surfaces.
- `--texture-wash-opacity`: ink-wash depth for page and section backgrounds.
- `--texture-fiber-opacity`: rice-paper fiber hint for panels and cards.
- `--texture-micro-opacity`: global porcelain/rice-paper micro grain.
- `--texture-paper-fiber`: local rice-paper fiber SVG texture.
- `--texture-paper-grain`: local rough paper grain SVG texture.
- `--texture-ink-wash`: local ink absorption SVG texture.
- `--texture-paper-edge`: local soft edge SVG overlay.
- `--texture-strength-global`, `--texture-strength-panel`, `--texture-strength-illustration`, `--texture-strength-text`, and `--texture-strength-edge` tune strength by context.
- `--surface-paper`, `--surface-ceramic`, `--surface-frosted`, and `--surface-ink-wash` define reusable material layers.
- `--surface-paper-fiber`, `--surface-rough-paper`, `--surface-ceramic-paper`, `--surface-frosted-paper`, and `--surface-ink-absorb` define stronger Round 12A paper surfaces.
- `.surface-rice-paper`, `.surface-paper`, `.surface-porcelain`, `.surface-ceramic`, `.surface-frosted`, `.surface-ink-wash`, `.surface-mineral`, `.panel-frosted`, `.panel-ceramic`, `.panel-paper`, `.drawer-textured`, `.card-textured`, `.brief-paper-surface`, `.shop-matte-surface`, and `.visual-panel-textured` are available for current and future static sections.
- `.paper-texture`, `.paper-texture-strong`, `.paper-fiber-surface`, `.paper-card`, `.paper-panel`, `.paper-drawer`, `.paper-visual-panel`, `.paper-brief`, and `.paper-edge-soft` are reusable Round 12A hooks.

## Placement Strategy

- Global background: rice-paper fiber, rough paper grain, and faint ink wash are visible across the whole app shell.
- Main sections: pale wash and fiber layers sit behind content to remove the flat digital-panel feeling.
- Product cards, category panels, drawers, builder panels, empty states, and prototype notes: local paper-grain layers add tactile depth.
- Illustration panels: stronger fiber and ink-wash layers make SVG motifs feel like concept sketches on handmade paper.
- Consultation brief output: paper and edge overlays make it read as a physical design brief sheet while text remains above texture overlays.
- Soft edge treatment is applied to paper cards, builder/drawer surfaces, category panels, discovery visuals, and brief output through `paper-edge-mask.svg`.

## Anti-Noise Rules

- Grain opacity must stay low and never look like dust, dirt, grunge, fabric, or a visible pattern.
- Avoid strong green dominance; jade stays an accent, not a wash over every surface.
- Do not place busy texture directly above text. Texture overlays must be `pointer-events: none` and extremely subtle.
- Avoid glassmorphism cliches: use frosted softness sparingly and keep surfaces matte.
- Avoid antique parchment, yellowing, heavy speckles, fabric-like weave, and obvious wallpaper tiling.

## Readability Rules

- Body text, product descriptions, prices, cart totals, and disclaimers need strong contrast over every surface.
- Labels and captions keep quiet backing surfaces when placed on illustrated panels.
- Focus outlines must remain visible over ceramic and frosted panels.
- Drawers need enough material contrast to separate overlay, panel, illustration, copy, specs, and actions.
- Texture pseudo-elements sit behind direct content where possible; direct children are lifted above overlays for safer text rendering.
- Mobile lowers texture strength variables so small Chinese and English text remains readable.

## Bilingual Layout Risks

- Chinese copy is often denser; textured cards need extra line-height and padding so paragraphs do not feel crowded.
- Filter chips and consultation options should wrap cleanly without creating horizontal overflow.
- Product drawer tag lists should use Chinese delimiters in Chinese mode to avoid awkward comma rhythm.
- Mobile should simplify blur and preserve stable panel dimensions for shop cards, cart rows, and generated brief output.

## Round 10D Placement Rules

- Texture should be strongest in global blank space, large section backgrounds, illustration panels, product media zones, drawers, and builder shells.
- Product descriptions, cart rows, search fields, option chips, and generated brief text should sit on quieter material layers.
- Surface classes are semantic CSS hooks only; they do not add images, network calls, scripts, or runtime texture generation.

## Tuning Later

- Increase or decrease `--texture-strength-global` for the site-wide paper feeling.
- Use `--texture-strength-panel` for cards, drawers, section panels, and text-adjacent surfaces.
- Use `--texture-strength-illustration` for visual panels where the owner wants stronger handmade-paper tactility.
- Use `--texture-strength-edge` to tune the soft fiber edge without changing layout.
