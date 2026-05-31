import type { Product } from '../data/products';
import { useProductFilter, type ProductFilter } from '../hooks/useProductFilter';
import { ProductCard } from './ProductCard';

const filterOptions: ProductFilter[] = [
  'All',
  'Heritage Vessels',
  'Aquatic Plants',
  'Aquarium Equipment',
  'Vessels & Decorative Pieces',
  'Consultation',
  'Future Categories',
];

type ShopProps = {
  products: Product[];
  cartCount: number;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
  onViewProduct: (product: Product) => void;
};

export function Shop({
  products,
  cartCount,
  onAddToCart,
  onOpenCart,
  onViewProduct,
}: ShopProps) {
  const { activeFilter, filteredProducts, query, resultCount, setActiveFilter, setQuery } =
    useProductFilter(products);

  return (
    <section className="shop-section section-shell" id="shop-preview" aria-labelledby="shop-title">
      <div className="section-header">
        <div>
          <p className="section-kicker">Static catalog prototype</p>
          <h2 id="shop-title">Curated Commerce Preview</h2>
        </div>
        <p>
          A prototype catalog for Heritage Aquariums, aquatic plants, equipment, and decorative
          pieces. Checkout is not enabled.
        </p>
      </div>

      <div className="shop-toolbar">
        <div className="filter-group" aria-label="Product category filters">
          {filterOptions.map((filter) => (
            <button
              className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="shop-search-wrap">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            className="shop-search"
            id="product-search"
            type="search"
            placeholder="Search vessels, plants, equipment..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            className="cart-inline-button"
            type="button"
            aria-label={`Open cart preview with ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            onClick={onOpenCart}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>

      <div className="shop-meta" aria-live="polite">
        <span>{resultCount} catalog items</span>
        <span>Demo-only cart and disabled checkout</span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      ) : (
        <div className="empty-products">
          <h3>No matching catalog items.</h3>
          <p>Try a broader search or return to all categories.</p>
        </div>
      )}
    </section>
  );
}
