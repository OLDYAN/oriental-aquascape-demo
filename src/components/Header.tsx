import { useState } from 'react';
import type { Language, RouteId } from '../i18n/types';
import type { SiteContent } from '../i18n/content';

type HeaderProps = {
  cartCount?: number;
  content: SiteContent;
  language: Language;
  route: RouteId;
  onCartOpen?: () => void;
  onToggleLanguage: () => void;
};

export function Header({
  cartCount = 0,
  content,
  language,
  route,
  onCartOpen,
  onToggleLanguage,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#/" aria-label={content.header.homeAria} onClick={closeMenu}>
        {content.header.brand}
      </a>
      <div className="header-actions">
        <button
          className="cart-trigger"
          type="button"
          aria-label={`${content.header.cartAria} ${cartCount}`}
          onClick={onCartOpen}
        >
          {content.header.cart} ({cartCount})
        </button>
        <button
          className="language-toggle"
          type="button"
          aria-label={content.header.languageAria}
          onClick={onToggleLanguage}
        >
          {content.header.language}
        </button>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? content.header.menuClose : content.header.menuOpen}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {content.header.menu}
        </button>
      </div>
      <nav
        className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
        id="primary-navigation"
        aria-label={content.header.navLabel}
        data-language={language}
      >
        {content.header.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={route === item.route ? 'page' : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
