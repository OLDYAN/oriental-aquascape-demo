import { useEffect, useRef } from 'react';
import type { CartItem } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  totalCents: number;
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
          <p className="section-kicker">Demo cart</p>
          <button
            className="drawer-close"
            type="button"
            aria-label="Close cart"
            onClick={onClose}
            ref={closeButtonRef}
          >
            Close
          </button>
        </div>

        <div className="drawer-copy">
          <h2 id="cart-drawer-title">Cart Preview</h2>
          <p>This demo does not process payments, reserve inventory, or ship products.</p>
        </div>

        {items.length > 0 ? (
          <>
            <ul className="cart-list" aria-label="Cart items">
              {items.map((item) => {
                const subtotal = item.product.price * item.quantity;

                return (
                  <li className="cart-item" key={item.product.id}>
                    <div className="cart-item-copy">
                      <h3>{item.product.name}</h3>
                      <p>
                        {formatCurrency(item.product.price)} each / Subtotal{' '}
                        {formatCurrency(subtotal)}
                      </p>
                    </div>
                    <div className="quantity-controls" aria-label={`Quantity for ${item.product.name}`}>
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${item.product.name}`}
                        onClick={() => onDecreaseItem(item.product.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${item.product.name}`}
                        onClick={() => onIncreaseItem(item.product.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-remove"
                      type="button"
                      aria-label={`Remove ${item.product.name} from cart`}
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="cart-total">
              <span>Total</span>
              <strong>{formatCurrency(totalCents)}</strong>
            </div>

            <button className="button button-secondary" type="button" onClick={onClearCart}>
              Clear Cart
            </button>
          </>
        ) : (
          <p className="empty-cart">Your prototype cart is empty.</p>
        )}

        <button className="button button-primary drawer-action" type="button" disabled>
          Checkout unavailable in prototype
        </button>
      </aside>
    </div>
  );
}
