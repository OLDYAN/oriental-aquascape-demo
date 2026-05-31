import { useEffect, useState } from 'react';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductDrawer } from './components/ProductDrawer';
import { products, type Product } from './data/products';
import { useCart } from './hooks/useCart';
import { useHashRoute } from './hooks/useHashRoute';
import { useLanguage } from './hooks/useLanguage';
import { siteContent } from './i18n/content';
import { ConsultationPage } from './pages/ConsultationPage';
import { HomePage } from './pages/HomePage';
import { LookbookPage } from './pages/LookbookPage';
import { ShopPage } from './pages/ShopPage';
import { StoryPage } from './pages/StoryPage';

function App() {
  const route = useHashRoute();
  const { language, toggleLanguage } = useLanguage();
  const content = siteContent[language];
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

  useEffect(() => {
    document.title = content.metaTitle;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [content.metaTitle, route]);

  function handleAddToCart(product: Product) {
    addItem(product);
    setIsCartOpen(true);
  }

  function renderRoute() {
    if (route === 'shop') {
      return (
        <ShopPage
          products={products}
          cartCount={totalItems}
          content={content}
          language={language}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
          onViewProduct={setSelectedProduct}
        />
      );
    }

    if (route === 'consultation') {
      return <ConsultationPage content={content} language={language} />;
    }

    if (route === 'story') {
      return <StoryPage content={content} />;
    }

    if (route === 'lookbook') {
      return <LookbookPage content={content} />;
    }

    return <HomePage content={content} />;
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {language === 'zh' ? '跳到主要内容' : 'Skip to main content'}
      </a>
      <Header
        cartCount={totalItems}
        content={content}
        language={language}
        route={route}
        onCartOpen={() => setIsCartOpen(true)}
        onToggleLanguage={toggleLanguage}
      />
      <main id="main-content" className={`route-${route}`}>
        {renderRoute()}
      </main>
      <Footer content={content} />
      <ProductDrawer
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        content={content}
        language={language}
        onAddToCart={handleAddToCart}
        onClose={() => setSelectedProduct(null)}
      />
      <CartDrawer
        isOpen={isCartOpen}
        items={items}
        totalCents={totalCents}
        content={content}
        language={language}
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
