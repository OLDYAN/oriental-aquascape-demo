import { useEffect, useMemo, useState } from 'react';
import type { Product } from '../data/products';

const CART_STORAGE_KEY = 'oriental-aquascape-demo-cart-v1';
const MAX_QUANTITY = 12;

export type CartItem = {
  product: Product;
  quantity: number;
};

type StoredCartItem = {
  productId: string;
  quantity: number;
};

function normalizeQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.min(MAX_QUANTITY, Math.max(1, Math.floor(quantity)));
}

function readStoredCart(productById: Map<string, Product>): CartItem[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const rawCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!rawCart) {
      return [];
    }

    const storedItems = JSON.parse(rawCart) as StoredCartItem[];

    if (!Array.isArray(storedItems)) {
      return [];
    }

    return storedItems.flatMap((item) => {
      const product = productById.get(item.productId);

      if (!product?.isPurchasable) {
        return [];
      }

      return [
        {
          product,
          quantity: normalizeQuantity(item.quantity),
        },
      ];
    });
  } catch {
    return [];
  }
}

export function useCart(allProducts: Product[]) {
  const productById = useMemo(
    () => new Map(allProducts.map((product) => [product.id, product])),
    [allProducts],
  );
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart(productById));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedItems: StoredCartItem[] = items.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
  }, [items]);

  const totalItems = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const totalCents = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [items],
  );

  function addItem(product: Product) {
    if (!product.isPurchasable) {
      return;
    }

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: normalizeQuantity(item.quantity + 1) }
            : item,
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  }

  function increaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: normalizeQuantity(item.quantity + 1) }
          : item,
      ),
    );
  }

  function decreaseItem(productId: string) {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.product.id !== productId) {
          return [item];
        }

        const nextQuantity = item.quantity - 1;

        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      }),
    );
  }

  function removeItem(productId: string) {
    setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId));
  }

  function clearCart() {
    setItems([]);
  }

  return {
    items,
    totalItems,
    totalCents,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
  };
}
