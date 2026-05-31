import type { SiteContent } from '../i18n/content';
import { IllustrationPanel } from './IllustrationPanel';

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero-section" id="vision" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">{content.hero.title}</h1>
        <p className="hero-subheadline">{content.hero.body}</p>
        <div className="button-row" aria-label={content.accessibility.primaryActionsLabel}>
          <a className="button button-primary" href="#/shop">
            {content.hero.shopCta}
          </a>
          <a className="button button-secondary" href="#/consultation">
            {content.hero.consultationCta}
          </a>
        </div>
      </div>
      <IllustrationPanel
        label={content.hero.label}
        caption={content.hero.caption}
        motif="hero-water-vessel"
        tone="water"
        size="large"
        className="hero-illustration"
      />
    </section>
  );
}
