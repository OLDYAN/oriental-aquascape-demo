import type { Product } from '../data/products';
import { IllustrationPanel } from '../components/IllustrationPanel';
import { Shop } from '../components/Shop';
import type { SiteContent } from '../i18n/content';
import type { Language } from '../i18n/types';

type ShopPageProps = {
  products: Product[];
  cartCount: number;
  content: SiteContent;
  language: Language;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
  onViewProduct: (product: Product) => void;
};

export function ShopPage({
  products,
  cartCount,
  content,
  language,
  onAddToCart,
  onOpenCart,
  onViewProduct,
}: ShopPageProps) {
  return (
    <div className="page-view">
      <section className="page-hero section-shell" aria-labelledby="shop-page-title">
        <div className="page-hero-copy">
          <h1 id="shop-page-title">{content.pages.shop.title}</h1>
          <p>{content.pages.shop.body}</p>
          <p className="page-note">{content.pages.shop.note}</p>
        </div>
        <IllustrationPanel
          label={content.pages.shop.visualLabel}
          caption={content.pages.shop.visualCaption}
          motif="decorative-pieces"
          tone="heritage"
          size="default"
          className="page-hero-illustration"
        />
      </section>
      <Shop
        products={products}
        cartCount={cartCount}
        content={content}
        language={language}
        onAddToCart={onAddToCart}
        onOpenCart={onOpenCart}
        onViewProduct={onViewProduct}
      />
    </div>
  );
}
