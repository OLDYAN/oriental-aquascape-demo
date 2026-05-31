import type { Product } from '../data/products';
import type { VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
};

function getActionLabel(product: Product) {
  if (product.isPurchasable) {
    return 'Add to Cart';
  }

  if (product.isLiveGoods) {
    return 'Future Category';
  }

  if (product.requiresConsultation) {
    return 'Consultation Required';
  }

  return 'Details';
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

export function ProductCard({ product, onAddToCart, onViewProduct }: ProductCardProps) {
  const actionLabel = getActionLabel(product);

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
        aria-label={`Open detail drawer for ${product.name}`}
      >
        <IllustrationPanel
          label={product.category}
          caption={product.isLiveGoods ? 'Future category' : product.name}
          motif={product.visualMotif}
          tone={getProductTone(product)}
          size="compact"
          className="product-illustration"
        />
        <span className="product-card-content">
          <span className="product-category">{product.category}</span>
          <span className="product-title">{product.name}</span>
          <span className="product-description">{product.description}</span>
          <span className="product-price">
            {product.isPurchasable ? product.displayPrice : product.availability}
          </span>
        </span>
      </button>
      <div className="product-card-actions">
        <button
          className={`button ${product.isPurchasable ? 'button-primary' : 'button-secondary'}`}
          type="button"
          aria-label={
            product.isPurchasable
              ? `Add ${product.name} to cart`
              : `Review availability for ${product.name}`
          }
          onClick={handleActionClick}
        >
          {actionLabel}
        </button>
        <button
          className="product-detail-link"
          type="button"
          aria-label={`Read details for ${product.name}`}
          onClick={() => onViewProduct(product)}
        >
          Details
        </button>
      </div>
    </article>
  );
}
