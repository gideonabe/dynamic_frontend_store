// import { fetchProducts } from "@/lib/products";
// import FilteredProducts from "./FilteredProducts";

// export default async function ProductGrid() {
//   const products = await fetchProducts();

//   if (!products || products.length === 0) {
//     return (
//       <p
//         className="text-lg text-gray-500 font-medium text-center py-20"
//         role="status"
//       >
//         No products currently available in the store.
//       </p>
//     );
//   }

//   return <FilteredProducts products={products} />;
// }




"use client";

import { useEffect, useState } from "react";
import AccessibleProductCard from "@/components/AccessibleProductCard";
import { useStore } from "./StoreContext";
import { FakeStoreProduct } from "@/types/ecommerce";
import Loading from "@/app/loading";

export default function ProductGrid() {
  const { selectedCategory } = useStore();
  const [products, setProducts] = useState<FakeStoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        // This request triggers from the client's home network, bypassing cloud blocks since the normal server fetch is being blocked by the source
        const res = await fetch("https://fakestoreapi.com/products");
        
        if (!res.ok) {
          throw new Error(`Failed to load products: ${res.status}`);
        }
        
        const data = await res.json();
        setProducts(data);
        setError(null);
      } catch (err: any) {
        console.error("Client fetch failed:", err);
        setError(err.message || "Failed to load products from store.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Loading State
  if (loading) {
    return (
      <Loading />
    );
  }

  // Error or Empty State
  if (error || !products || products.length === 0) {
    return (
      <p className="text-lg text-gray-500 font-medium text-center py-20" role="status">
        {error || "No products currently available in the store."}
      </p>
    );
  }

  // Filter Logic
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (filteredProducts.length === 0) {
    return (
      <p className="text-center text-gray-500 py-20">
        No products found in this category.
      </p>
    );
  }

  // Render Grid
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {filteredProducts.map((product, index) => (
        <AccessibleProductCard
          key={product.id}
          product={product}
          priority={index < 4}
        />
      ))}
    </div>
  );
}
