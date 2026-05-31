import { IllustrationPanel } from '../components/IllustrationPanel';
import type { SiteContent } from '../i18n/content';

type StoryPageProps = {
  content: SiteContent;
};

export function StoryPage({ content }: StoryPageProps) {
  return (
    <div className="page-view">
      <section className="page-hero section-shell" aria-labelledby="story-page-title">
        <div className="page-hero-copy">
          <h1 id="story-page-title">{content.pages.story.title}</h1>
          <p>{content.pages.story.body}</p>
        </div>
        <IllustrationPanel
          label={content.pages.story.visualLabel}
          caption={content.pages.story.visualCaption}
          motif="hero-water-vessel"
          tone="water"
          size="default"
          className="page-hero-illustration"
        />
      </section>

      <section className="story-layout section-shell" aria-label={content.pages.story.title}>
        {content.pages.story.sections.map((section) => (
          <article className="story-row" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
