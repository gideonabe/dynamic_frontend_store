"use client";

import AccessibleProductCard from "@/components/AccessibleProductCard";
import { useStore } from "./StoreContext";
import { FakeStoreProduct } from "@/types/ecommerce";

export default function FilteredProducts({
  products,
}: {
  products: FakeStoreProduct[];
}) {
  const { selectedCategory } = useStore();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-20">
        No products found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {filteredProducts.map((product) => (
        <AccessibleProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
