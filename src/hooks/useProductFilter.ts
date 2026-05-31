import { useMemo, useState } from 'react';
import type { Product, ProductCategory } from '../data/products';

export type ProductFilter = ProductCategory | 'All' | 'Future Categories';

function productMatchesFilter(product: Product, activeFilter: ProductFilter) {
  if (activeFilter === 'All') {
    return true;
  }

  if (activeFilter === 'Future Categories') {
    return product.isLiveGoods || product.availability.startsWith('Future');
  }

  return product.category === activeFilter;
}

export function useProductFilter(
  allProducts: Product[],
  getSearchText?: (product: Product) => string,
) {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>('All');
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allProducts.filter((product) => {
      const matchesCategory = productMatchesFilter(product, activeFilter);
      const searchableText = (
        getSearchText
          ? getSearchText(product)
          : [
              product.name,
              product.category,
              product.description,
              product.material,
              product.useCase,
              product.availability,
              ...product.tags,
            ].join(' ')
      ).toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, allProducts, getSearchText, query]);

  return {
    activeFilter,
    query,
    filteredProducts,
    resultCount: filteredProducts.length,
    setActiveFilter,
    setQuery,
  };
}
