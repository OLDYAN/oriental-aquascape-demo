import { IllustrationPanel } from './IllustrationPanel';

export function PlatformPreview() {
  return (
    <section className="platform-section section-shell" id="platform" aria-labelledby="platform-title">
      <div className="platform-copy">
        <p className="section-kicker">AI-Assisted Platform</p>
        <h2 id="platform-title">AI supports discovery, matching, and preparation.</h2>
        <p>Human judgment remains central.</p>
        <p>
          Future tools will help clients, designers, and partners navigate styles, products,
          consultation, and supply workflows.
        </p>
      </div>
      <IllustrationPanel
        label="Platform layer"
        caption="Discovery, matching, preparation"
        motif="ai-platform"
        tone="technology"
        size="default"
        className="platform-illustration"
      />
    </section>
  );
}
