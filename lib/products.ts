import { FakeStoreProduct } from '@/types/ecommerce';

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<FakeStoreProduct[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const body = await res.text();

      throw new Error(
        `FakeStoreAPI error: ${res.status} ${res.statusText} - ${body}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("fetchProducts failed:", error);
    throw error;
  }
}



export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 86400 }, // Categories rarely change
  });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function fetchProductsByCategory(category: string): Promise<FakeStoreProduct[]> {
  // Decode & encode properly to handle spaces and apostrophes (e.g., "men's clothing")
  const encodedCategory = encodeURIComponent(decodeURIComponent(category));
  const res = await fetch(`${BASE_URL}/products/category/${encodedCategory}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Failed to fetch products for category: ${category}`);
  return res.json();
}

export async function fetchProductById(id: string): Promise<FakeStoreProduct> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product details');
  return res.json();
}