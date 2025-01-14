import { useState } from "react";
import { Product } from "../../types.ts";

export const useProducts = (initialProducts: Product[]) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [, setOpenProductIds] = useState<Set<string>>(new Set());

  // 새로운 상품 추가 가능
  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const toggleProductAccordion = (productId: string) => {
    setOpenProductIds((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return { products, toggleProductAccordion, updateProduct, addProduct };
};
