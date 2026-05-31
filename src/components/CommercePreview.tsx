import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

const previewItems = [
  {
    title: 'Heritage Vessels',
    description: 'Vessel-led display directions for water, material, and daily ritual.',
    motif: 'heritage-aquarium' as VisualMotif,
    tone: 'heritage' as VisualTone,
  },
  {
    title: 'Aquatic Plants',
    description: 'Plant selections for calm aquascape composition and atmosphere.',
    motif: 'aquatic-plant' as VisualMotif,
    tone: 'plant' as VisualTone,
  },
  {
    title: 'Aquarium Equipment',
    description: 'Quiet infrastructure for stable, visually restrained living systems.',
    motif: 'equipment-study' as VisualMotif,
    tone: 'technology' as VisualTone,
  },
  {
    title: 'Decorative Pieces',
    description: 'Ceramic, jade, and other decorative pieces for spatial presence.',
    motif: 'decorative-pieces' as VisualMotif,
    tone: 'heritage' as VisualTone,
  },
];

export function CommercePreview() {
  return (
    <section
      className="commerce-section section-shell"
      id="commerce-overview"
      aria-labelledby="commerce-preview-title"
    >
      <div className="section-header">
        <div>
          <p className="section-kicker">Shop preview</p>
          <h2 id="commerce-preview-title">Curated product worlds, not a marketplace grid.</h2>
        </div>
        <p>
          The expanded catalog below remains static and demo-only, with no Shopify embeds,
          inventory claims, or real checkout.
        </p>
      </div>

      <div className="commerce-grid">
        {previewItems.map((item) => (
          <article className="commerce-item" key={item.title}>
            <IllustrationPanel
              label="Shop preview"
              caption={item.title}
              motif={item.motif}
              tone={item.tone}
              size="compact"
              className="commerce-illustration"
            />
            <div className="commerce-content">
              <p className="section-kicker">Shop preview</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
