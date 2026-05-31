import { useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StudioStatement } from './components/StudioStatement';
import { CategoryIndex } from './components/CategoryIndex';
import { LookbookPreview } from './components/LookbookPreview';
import { CommercePreview } from './components/CommercePreview';
import { ProductDrawer } from './components/ProductDrawer';
import { PlatformPreview } from './components/PlatformPreview';
import { ConsultationPreview } from './components/ConsultationPreview';
import { ConsultationBuilder } from './components/ConsultationBuilder';
import { Shop } from './components/Shop';
import { products, type Product } from './data/products';
import { useCart } from './hooks/useCart';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {
    items,
    totalItems,
    totalCents,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart(products);

  function handleAddToCart(product: Product) {
    addItem(product);
    setIsCartOpen(true);
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header cartCount={totalItems} onCartOpen={() => setIsCartOpen(true)} />
      <main id="main-content">
        <Hero />
        <StudioStatement />
        <CategoryIndex />
        <LookbookPreview />
        <CommercePreview />
        <Shop
          products={products}
          cartCount={totalItems}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
          onViewProduct={setSelectedProduct}
        />
        <PlatformPreview />
        <ConsultationPreview />
        <ConsultationBuilder />
      </main>
      <Footer />
      <ProductDrawer
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onAddToCart={handleAddToCart}
        onClose={() => setSelectedProduct(null)}
      />
      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        totalCents={totalCents}
        onClose={() => setIsCartOpen(false)}
        onIncreaseItem={increaseItem}
        onDecreaseItem={decreaseItem}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
