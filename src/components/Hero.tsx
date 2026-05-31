import { IllustrationPanel } from './IllustrationPanel';

export function Hero() {
  return (
    <section className="hero-section" id="vision" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Eastern Aquatic Living</h1>
        <p className="hero-subheadline">
          Living water, Heritage Aquariums, refined decorative pieces, and AI-assisted
          consultation for contemporary spaces.
        </p>
        <div className="button-row" aria-label="Primary homepage actions">
          <a className="button button-primary" href="#studies">
            Explore Studies
          </a>
          <a className="button button-secondary" href="#consultation-builder">
            Begin Consultation
          </a>
        </div>
      </div>
      <IllustrationPanel
        label="Living water"
        caption="Vessel, waterline, jade, and intelligence layer"
        motif="hero-water-vessel"
        tone="water"
        size="large"
        className="hero-illustration"
      />
    </section>
  );
}
