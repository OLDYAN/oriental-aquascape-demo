import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import type { SiteContent } from '../i18n/content';
import { IllustrationPanel } from './IllustrationPanel';

const studyVisuals: Record<string, { motif: VisualMotif; tone: VisualTone }> = {
  'eastern-courtyard-water': { motif: 'hero-water-vessel', tone: 'water' },
  'jade-stone-composition': { motif: 'jade-stone', tone: 'stone' },
  'heritage-vessel-aquascape': { motif: 'heritage-aquarium', tone: 'heritage' },
};

type LookbookPreviewProps = {
  content: SiteContent;
  showRouteCta?: boolean;
};

export function LookbookPreview({ content, showRouteCta = true }: LookbookPreviewProps) {
  return (
    <section className="lookbook-section section-shell" id="studies" aria-labelledby="lookbook-title">
      <div className="section-header">
        <div>
          <p className="section-kicker">{content.lookbookPreview.kicker}</p>
          <h2 id="lookbook-title">{content.lookbookPreview.title}</h2>
        </div>
        <p>{content.lookbookPreview.body}</p>
      </div>

      <div className="study-grid">
        {content.lookbookPreview.studies.map((study, index) => (
          <article className="study-card" key={study.id}>
            <IllustrationPanel
              label={study.label}
              caption={`${content.lookbookPreview.studyCaptionPrefix} ${String(index + 1).padStart(2, '0')}`}
              motif={studyVisuals[study.id].motif}
              tone={studyVisuals[study.id].tone}
              size="default"
              className="study-illustration"
            />
            <div className="study-content">
              <p className="section-kicker">{study.label}</p>
              <h3>{study.title}</h3>
              <p>{study.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {showRouteCta ? (
        <div className="section-action">
          <a className="button button-secondary" href="#/lookbook">
            {content.lookbookPreview.cta}
          </a>
        </div>
      ) : null}
    </section>
  );
}
