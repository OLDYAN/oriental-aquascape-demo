import type { SiteContent } from '../i18n/content';
import { IllustrationPanel } from './IllustrationPanel';

type PlatformPreviewProps = {
  content: SiteContent;
};

export function PlatformPreview({ content }: PlatformPreviewProps) {
  return (
    <section className="platform-section section-shell" id="platform" aria-labelledby="platform-title">
      <div className="platform-copy">
        <p className="section-kicker">{content.platform.kicker}</p>
        <h2 id="platform-title">{content.platform.title}</h2>
        <p>{content.platform.bodyA}</p>
        <p>{content.platform.bodyB}</p>
      </div>
      <IllustrationPanel
        label={content.platform.label}
        caption={content.platform.caption}
        motif="ai-platform"
        tone="technology"
        size="default"
        className="platform-illustration"
      />
    </section>
  );
}
