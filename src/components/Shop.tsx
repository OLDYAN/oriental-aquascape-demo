import { useCallback } from 'react';
import type { Product } from '../data/products';
import { getProductCopy, type SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';
import { useProductFilter, type ProductFilter } from '../hooks/useProductFilter';
import { ProductCard } from './ProductCard';

const filterOptions: ProductFilter[] = [
  'All',
  'Heritage Aquariums',
  'Aquatic Plants',
  'Aquarium Equipment',
  'Vessels & Decorative Pieces',
  'Consultation',
  'Future Categories',
];

type ShopProps = {
  products: Product[];
  cartCount: number;
  content: SiteContent;
  language: Language;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
  onViewProduct: (product: Product) => void;
};

export function Shop({
  products,
  cartCount,
  content,
  language,
  onAddToCart,
  onOpenCart,
  onViewProduct,
}: ShopProps) {
  const localizedFilters = content.shop.filters as Record<string, string>;
  const getSearchText = useCallback(
    (product: Product) => {
      const localizedProduct = getProductCopy(product, language);

      return [
        product.name,
        product.category,
        product.description,
        product.material,
        product.useCase,
        product.availability,
        ...product.tags,
        localizedProduct.name,
        localizedProduct.category,
        localizedProduct.description,
        localizedProduct.material,
        localizedProduct.useCase,
        localizedProduct.availability,
        ...localizedProduct.tags,
      ].join(' ');
    },
    [language],
  );
  const { activeFilter, filteredProducts, query, resultCount, setActiveFilter, setQuery } =
    useProductFilter(products, getSearchText);

  return (
    <section className="shop-section section-shell" id="shop-preview" aria-labelledby="shop-title">
      <div className="section-header">
        <div>
          <p className="section-kicker">{content.shop.kicker}</p>
          <h2 id="shop-title">{content.shop.title}</h2>
        </div>
        <p>{content.shop.body}</p>
      </div>

      <div className="shop-toolbar">
        <div className="filter-group" aria-label={content.shop.filtersLabel}>
          {filterOptions.map((filter) => (
            <button
              className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {localizedFilters[filter] ?? filter}
            </button>
          ))}
        </div>
        <div className="shop-search-wrap">
          <label className="sr-only" htmlFor="product-search">
            {content.shop.searchLabel}
          </label>
          <input
            className="shop-search"
            id="product-search"
            type="search"
            placeholder={content.shop.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            className="cart-inline-button"
            type="button"
            aria-label={`${content.header.cartAria} ${cartCount}`}
            onClick={onOpenCart}
          >
            {content.header.cart} ({cartCount})
          </button>
        </div>
      </div>

      <div className="shop-meta" aria-live="polite">
        <span>
          {resultCount} {content.shop.itemLabel}
        </span>
        <span>{content.shop.cartNote}</span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              content={content}
              language={language}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-products">
          <h3>{content.shop.emptyTitle}</h3>
          <p>{content.shop.emptyBody}</p>
        </div>
      )}
    </section>
  );
}
