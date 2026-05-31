const footerTerms = [
  'Heritage Aquariums',
  'Vessels & Decorative Pieces',
  'AI-Assisted Platform',
  'Studies',
  'Consultation',
];

export function Footer() {
  return (
    <footer className="site-footer">
      <span className="brand-mark">Oriental Aquascape</span>
      <div className="footer-links" aria-label="Brand pillars">
        {footerTerms.map((term) => (
          <span key={term}>{term}</span>
        ))}
      </div>
    </footer>
  );
}
