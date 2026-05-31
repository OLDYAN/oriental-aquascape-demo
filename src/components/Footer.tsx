import type { SiteContent } from '../i18n/content';

type FooterProps = {
  content: SiteContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="site-footer">
      <a className="brand-mark" href="#/">
        {content.header.brand}
      </a>
      <div className="footer-links" aria-label="Brand pillars">
        {content.footer.map((term) => (
          <span key={term}>{term}</span>
        ))}
      </div>
    </footer>
  );
}
