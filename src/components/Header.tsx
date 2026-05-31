import { useState } from 'react';

const navItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Studies', href: '#studies' },
  { label: 'Shop Preview', href: '#shop-preview' },
  { label: 'Platform', href: '#platform' },
  { label: 'Consultation', href: '#consultation-builder' },
];

type HeaderProps = {
  cartCount?: number;
  onCartOpen?: () => void;
};

export function Header({ cartCount = 0, onCartOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#vision" aria-label="Oriental Aquascape home">
        Oriental Aquascape
      </a>
      <div className="header-actions">
        <button
          className="cart-trigger"
          type="button"
          aria-label={`Open cart preview with ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          onClick={onCartOpen}
        >
          Cart ({cartCount})
        </button>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          Menu
        </button>
      </div>
      <nav
        className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
