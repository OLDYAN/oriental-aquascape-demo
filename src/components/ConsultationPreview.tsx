import { IllustrationPanel } from './IllustrationPanel';

export function ConsultationPreview() {
  return (
    <section
      className="consultation-section section-shell"
      id="consultation"
      aria-labelledby="consultation-title"
    >
      <div className="consultation-panel">
        <div>
          <p className="section-kicker">Consultation</p>
          <h2 id="consultation-title">I Ching & Feng Shui Spatial Consultation</h2>
          <p>
            Consultation considers placement, balance, material, atmosphere, and symbolic
            meaning. It does not promise financial, medical, or personal outcomes.
          </p>
          <a className="button button-secondary" href="#consultation-builder">
            Build a Consultation Brief
          </a>
        </div>
        <div className="consultation-diagram" aria-label="Consultation considerations">
          <IllustrationPanel
            label="Spatial diagram"
            caption="Placement, balance, material"
            motif="spatial-consultation"
            tone="spatial"
            size="compact"
            className="consultation-illustration"
          />
          <span>Placement</span>
          <span>Balance</span>
          <span>Material</span>
          <span>Atmosphere</span>
          <span>Symbolic meaning</span>
        </div>
      </div>

      <div className="final-cta" id="final-cta" aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">Begin a living water project.</h2>
        <div className="button-row">
          <a className="button button-primary" href="#consultation-builder">
            Build a Consultation Brief
          </a>
          <a className="button button-secondary" href="#shop-preview">
            Explore Shop Preview
          </a>
        </div>
      </div>
    </section>
  );
}
