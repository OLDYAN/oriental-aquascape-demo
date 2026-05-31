import type { SiteContent } from '../i18n/content';
import { IllustrationPanel } from './IllustrationPanel';

type ConsultationPreviewProps = {
  content: SiteContent;
};

export function ConsultationPreview({ content }: ConsultationPreviewProps) {
  return (
    <section
      className="consultation-section section-shell"
      id="consultation"
      aria-labelledby="consultation-title"
    >
      <div className="consultation-panel">
        <div>
          <p className="section-kicker">{content.consultationTeaser.kicker}</p>
          <h2 id="consultation-title">{content.consultationTeaser.title}</h2>
          <p>{content.consultationTeaser.body}</p>
          <a className="button button-secondary" href="#/consultation">
            {content.consultationTeaser.cta}
          </a>
        </div>
        <div className="consultation-diagram" aria-label={content.consultationTeaser.diagramLabel}>
          <IllustrationPanel
            label={content.consultationTeaser.visualLabel}
            caption={content.consultationTeaser.visualCaption}
            motif="spatial-consultation"
            tone="spatial"
            size="compact"
            className="consultation-illustration"
          />
          {content.consultationTeaser.considerations.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="final-cta" id="final-cta" aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">{content.consultationTeaser.finalTitle}</h2>
        <div className="button-row">
          <a className="button button-primary" href="#/consultation">
            {content.consultationTeaser.finalPrimary}
          </a>
          <a className="button button-secondary" href="#/lookbook">
            {content.consultationTeaser.finalSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
