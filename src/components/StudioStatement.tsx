import type { SiteContent } from '../i18n/content';

type StudioStatementProps = {
  content: SiteContent;
};

export function StudioStatement({ content }: StudioStatementProps) {
  return (
    <section className="studio-section section-shell" aria-labelledby="studio-statement-title">
      <div className="section-kicker">{content.studio.kicker}</div>
      <div className="studio-copy">
        <h2 id="studio-statement-title">{content.studio.title}</h2>
        <p>{content.studio.body}</p>
      </div>
    </section>
  );
}
