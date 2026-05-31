import type { Product } from '../data/products';
import type { VisualTone } from '../data/visualMotifs';
import { getProductCopy, type SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';
import { IllustrationPanel } from './IllustrationPanel';

type ProductCardProps = {
  product: Product;
  content: SiteContent;
  language: Language;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
};

function getActionLabel(product: Product, content: SiteContent) {
  if (product.isPurchasable) {
    return content.product.add;
  }

  if (product.isLiveGoods) {
    return content.product.future;
  }

  if (product.requiresConsultation) {
    return content.product.consultationRequired;
  }

  return content.product.details;
}

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

export function ProductCard({
  product,
  content,
  language,
  onAddToCart,
  onViewProduct,
}: ProductCardProps) {
  const actionLabel = getActionLabel(product, content);
  const localizedProduct = getProductCopy(product, language);

  function handleActionClick() {
    if (product.isPurchasable) {
      onAddToCart(product);
      return;
    }

    onViewProduct(product);
  }

  return (
    <article className="product-card">
      <button
        className="product-card-main"
        type="button"
        onClick={() => onViewProduct(product)}
        aria-label={`${content.product.openDetails} ${localizedProduct.name}`}
      >
        <IllustrationPanel
          label={localizedProduct.category}
          caption={product.isLiveGoods ? content.product.futureCaption : localizedProduct.name}
          motif={product.visualMotif}
          tone={getProductTone(product)}
          size="compact"
          className="product-illustration"
        />
        <span className="product-card-content">
          <span className="product-category">{localizedProduct.category}</span>
          <span className="product-title">{localizedProduct.name}</span>
          <span className="product-description">{localizedProduct.description}</span>
          <span className="product-price">
            {product.isPurchasable ? localizedProduct.displayPrice : localizedProduct.availability}
          </span>
        </span>
      </button>
      <div className="product-card-actions">
        <button
          className={`button ${product.isPurchasable ? 'button-primary' : 'button-secondary'}`}
          type="button"
          aria-label={
            product.isPurchasable
              ? `${content.product.addAria} ${localizedProduct.name}`
              : `${content.product.reviewAria} ${localizedProduct.name}`
          }
          onClick={handleActionClick}
        >
          {actionLabel}
        </button>
        <button
          className="product-detail-link"
          type="button"
          aria-label={`${content.product.readDetails} ${localizedProduct.name}`}
          onClick={() => onViewProduct(product)}
        >
          {content.product.details}
        </button>
      </div>
    </article>
  );
}
