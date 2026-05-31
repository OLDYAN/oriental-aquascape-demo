import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import type { SiteContent } from '../i18n/content';
import { IllustrationPanel } from './IllustrationPanel';

const previewVisuals: Array<{ motif: VisualMotif; tone: VisualTone }> = [
  { motif: 'heritage-aquarium', tone: 'heritage' },
  { motif: 'aquatic-plant', tone: 'plant' },
  { motif: 'equipment-study', tone: 'technology' },
  { motif: 'decorative-pieces', tone: 'heritage' },
];

type CommercePreviewProps = {
  content: SiteContent;
};

export function CommercePreview({ content }: CommercePreviewProps) {
  return (
    <section
      className="commerce-section section-shell"
      id="commerce-overview"
      aria-labelledby="commerce-preview-title"
    >
      <div className="section-header">
        <div>
          <p className="section-kicker">{content.commercePreview.kicker}</p>
          <h2 id="commerce-preview-title">{content.commercePreview.title}</h2>
        </div>
        <p>{content.commercePreview.body}</p>
      </div>

      <div className="commerce-grid">
        {content.commercePreview.items.map((item, index) => (
          <article className="commerce-item" key={item.title}>
            <IllustrationPanel
              label={content.commercePreview.kicker}
              caption={item.title}
              motif={previewVisuals[index].motif}
              tone={previewVisuals[index].tone}
              size="compact"
              className="commerce-illustration"
            />
            <div className="commerce-content">
              <p className="section-kicker">{content.commercePreview.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="section-action">
        <a className="button button-primary" href="#/shop">
          {content.commercePreview.cta}
        </a>
      </div>
    </section>
  );
}
