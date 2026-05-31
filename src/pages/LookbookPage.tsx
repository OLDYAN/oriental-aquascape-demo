import { LookbookPreview } from '../components/LookbookPreview';
import { IllustrationPanel } from '../components/IllustrationPanel';
import type { SiteContent } from '../i18n/content';

type LookbookPageProps = {
  content: SiteContent;
};

export function LookbookPage({ content }: LookbookPageProps) {
  return (
    <div className="page-view">
      <section className="page-hero section-shell" aria-labelledby="lookbook-page-title">
        <div className="page-hero-copy">
          <h1 id="lookbook-page-title">{content.pages.lookbook.title}</h1>
          <p>{content.pages.lookbook.body}</p>
        </div>
        <IllustrationPanel
          label={content.pages.lookbook.visualLabel}
          caption={content.pages.lookbook.visualCaption}
          motif="jade-stone"
          tone="stone"
          size="default"
          className="page-hero-illustration"
        />
      </section>
      <LookbookPreview content={content} showRouteCta={false} />
    </div>
  );
}
