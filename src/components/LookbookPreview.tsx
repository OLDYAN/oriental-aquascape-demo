import { lookbookStudies } from '../data/lookbook';
import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

const studyVisuals: Record<string, { motif: VisualMotif; tone: VisualTone }> = {
  'eastern-courtyard-water': { motif: 'hero-water-vessel', tone: 'water' },
  'jade-stone-composition': { motif: 'jade-stone', tone: 'stone' },
  'heritage-vessel-aquascape': { motif: 'heritage-aquarium', tone: 'heritage' },
};

export function LookbookPreview() {
  return (
    <section className="lookbook-section section-shell" id="studies" aria-labelledby="lookbook-title">
      <div className="section-header">
        <div>
          <p className="section-kicker">Concept studies</p>
          <h2 id="lookbook-title">Quiet studies for future spatial direction.</h2>
        </div>
        <p>These are concept studies for tone, composition, and material rhythm.</p>
      </div>

      <div className="study-grid">
        {lookbookStudies.map((study, index) => (
          <article className="study-card" key={study.id}>
            <IllustrationPanel
              label={study.label}
              caption={`Study ${String(index + 1).padStart(2, '0')}`}
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
    </section>
  );
}
