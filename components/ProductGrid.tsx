import { fetchProducts } from "@/lib/products";
import FilteredProducts from "./FilteredProducts";

export default async function ProductGrid() {
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    return (
      <p
        className="text-lg text-gray-500 font-medium text-center py-20"
        role="status"
      >
        No products currently available in the store.
      </p>
    );
  }

  return <FilteredProducts products={products} />;
}
