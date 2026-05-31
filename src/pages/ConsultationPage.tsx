import { ConsultationBuilder } from '../components/ConsultationBuilder';
import { IllustrationPanel } from '../components/IllustrationPanel';
import type { SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';

type ConsultationPageProps = {
  content: SiteContent;
  language: Language;
};

export function ConsultationPage({ content, language }: ConsultationPageProps) {
  return (
    <div className="page-view">
      <section className="page-hero section-shell" aria-labelledby="consultation-page-title">
        <div className="page-hero-copy">
          <h1 id="consultation-page-title">{content.pages.consultation.title}</h1>
          <p>{content.pages.consultation.body}</p>
          <p className="page-note">{content.pages.consultation.note}</p>
        </div>
        <IllustrationPanel
          label={content.pages.consultation.visualLabel}
          caption={content.pages.consultation.visualCaption}
          motif="spatial-consultation"
          tone="spatial"
          size="default"
          className="page-hero-illustration"
        />
      </section>
      <ConsultationBuilder content={content} language={language} />
    </div>
  );
}
