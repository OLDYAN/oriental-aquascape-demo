import { useEffect, useRef } from 'react';
import { getProductCopy, type SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';
import type { CartItem } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  totalCents: number;
  content: SiteContent;
  language: Language;
  onClose: () => void;
  onIncreaseItem: (productId: string) => void;
  onDecreaseItem: (productId: string) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
};

export function CartDrawer({
  isOpen,
  items,
  totalCents,
  content,
  language,
  onClose,
  onIncreaseItem,
  onDecreaseItem,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="drawer-layer" role="presentation" onClick={onClose}>
      <aside
        className="drawer-panel cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-header">
          <p className="section-kicker">{content.cart.kicker}</p>
          <button
            className="drawer-close"
            type="button"
            aria-label={content.cart.close}
            onClick={onClose}
            ref={closeButtonRef}
          >
            {language === 'zh' ? '关闭' : 'Close'}
          </button>
        </div>

        <div className="drawer-copy">
          <h2 id="cart-drawer-title">{content.cart.title}</h2>
          <p>{content.cart.note}</p>
        </div>

        {items.length > 0 ? (
          <>
            <ul className="cart-list" aria-label={content.cart.itemsLabel}>
              {items.map((item) => {
                const subtotal = item.product.price * item.quantity;
                const localizedProduct = getProductCopy(item.product, language);

                return (
                  <li className="cart-item" key={item.product.id}>
                    <div className="cart-item-copy">
                      <h3>{localizedProduct.name}</h3>
                      <p>
                        {formatCurrency(item.product.price)} {content.cart.each} /{' '}
                        {content.cart.subtotal} {formatCurrency(subtotal)}
                      </p>
                    </div>
                    <div className="quantity-controls" aria-label={`${localizedProduct.name}`}>
                      <button
                        type="button"
                        aria-label={`${content.cart.decrease} ${localizedProduct.name}`}
                        onClick={() => onDecreaseItem(item.product.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`${content.cart.increase} ${localizedProduct.name}`}
                        onClick={() => onIncreaseItem(item.product.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-remove"
                      type="button"
                      aria-label={`${content.cart.removeAria} ${localizedProduct.name}`}
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      {content.cart.remove}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="cart-total">
              <span>{content.cart.total}</span>
              <strong>{formatCurrency(totalCents)}</strong>
            </div>

            <button className="button button-secondary" type="button" onClick={onClearCart}>
              {content.cart.clear}
            </button>
          </>
        ) : (
          <p className="empty-cart">{content.cart.empty}</p>
        )}

        <button className="button button-primary drawer-action" type="button" disabled>
          {content.cart.checkout}
        </button>
      </aside>
    </div>
  );
}
