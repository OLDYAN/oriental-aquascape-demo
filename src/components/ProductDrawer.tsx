import { useEffect, useRef } from 'react';
import type { Product } from '../data/products';
import type { VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

type ProductDrawerProps = {
  product: Product | null;
  isOpen: boolean;
  onAddToCart: (product: Product) => void;
  onClose: () => void;
};

function getProductTone(product: Product): VisualTone {
  if (product.category === 'Aquatic Plants') {
    return 'plant';
  }

  if (product.category === 'Aquarium Equipment') {
    return 'technology';
  }

  if (product.category === 'Consultation') {
    return 'spatial';
  }

  if (product.category === 'High-End Ornamental Fish') {
    return 'water';
  }

  return product.visualTone === 'stone' ? 'stone' : 'heritage';
}

export function ProductDrawer({
  product,
  isOpen,
  onAddToCart,
  onClose,
}: ProductDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const disabledActionLabel = product?.isLiveGoods
    ? 'Future category / consultation required'
    : 'Consultation required';

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

  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="drawer-layer" role="presentation" onClick={onClose}>
      <aside
        className="drawer-panel product-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-header">
          <p className="section-kicker">{product.category}</p>
          <button
            className="drawer-close"
            type="button"
            aria-label="Close product details"
            onClick={onClose}
            ref={closeButtonRef}
          >
            Close
          </button>
        </div>

        <IllustrationPanel
          label={product.category}
          caption={product.isLiveGoods ? 'Future category' : product.name}
          motif={product.visualMotif}
          tone={getProductTone(product)}
          size="default"
          className="drawer-illustration"
        />

        <div className="drawer-copy">
          <h2 id="product-drawer-title">{product.name}</h2>
          <p>{product.description}</p>
        </div>

        <dl className="product-spec-list">
          <div>
            <dt>Material</dt>
            <dd>{product.material}</dd>
          </div>
          <div>
            <dt>Use case</dt>
            <dd>{product.useCase}</dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>{product.availability}</dd>
          </div>
          <div>
            <dt>Tags</dt>
            <dd>{product.tags.join(', ')}</dd>
          </div>
        </dl>

        <p className="prototype-note">
          This is a static prototype. It does not process payments, reserve inventory, or ship
          products.
        </p>

        {product.isPurchasable ? (
          <button
            className="button button-primary drawer-action"
            type="button"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            Add to Cart
          </button>
        ) : (
          <button className="button button-secondary drawer-action" type="button" disabled>
            {disabledActionLabel}
          </button>
        )}
      </aside>
    </div>
  );
}
