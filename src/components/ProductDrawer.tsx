import { useEffect, useRef } from 'react';
import type { Product } from '../data/products';
import type { VisualTone } from '../data/visualMotifs';
import { getProductCopy, type SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';
import { IllustrationPanel } from './IllustrationPanel';

type ProductDrawerProps = {
  product: Product | null;
  isOpen: boolean;
  content: SiteContent;
  language: Language;
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
  content,
  language,
  onAddToCart,
  onClose,
}: ProductDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const localizedProduct = product ? getProductCopy(product, language) : null;
  const disabledActionLabel = product?.isLiveGoods
    ? content.product.futureDisabled
    : content.product.consultationRequired;

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

  if (!isOpen || !product || !localizedProduct) {
    return null;
  }

  return (
    <div className="drawer-layer" role="presentation" onClick={onClose}>
      <aside
        className="drawer-panel product-drawer drawer-textured"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-drawer-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer-header">
          <p className="section-kicker">{localizedProduct.category}</p>
          <button
            className="drawer-close"
            type="button"
            aria-label={content.product.close}
            onClick={onClose}
            ref={closeButtonRef}
          >
            {content.product.closeButton}
          </button>
        </div>

        <IllustrationPanel
          label={localizedProduct.category}
          caption={product.isLiveGoods ? content.product.futureCaption : localizedProduct.name}
          motif={product.visualMotif}
          tone={getProductTone(product)}
          size="default"
          className="drawer-illustration"
        />

        <div className="drawer-copy">
          <h2 id="product-drawer-title">{localizedProduct.name}</h2>
          <p>{localizedProduct.description}</p>
        </div>

        <dl className="product-spec-list">
          <div>
            <dt>{content.product.material}</dt>
            <dd>{localizedProduct.material}</dd>
          </div>
          <div>
            <dt>{content.product.useCase}</dt>
            <dd>{localizedProduct.useCase}</dd>
          </div>
          <div>
            <dt>{content.product.availability}</dt>
            <dd>{localizedProduct.availability}</dd>
          </div>
          <div>
            <dt>{content.product.tags}</dt>
            <dd>{localizedProduct.tags.join(language === 'zh' ? '、' : ', ')}</dd>
          </div>
        </dl>

        <p className="prototype-note">{content.product.prototypeNote}</p>

        {product.isPurchasable ? (
          <button
            className="button button-primary drawer-action"
            type="button"
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
          >
            {content.product.add}
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
