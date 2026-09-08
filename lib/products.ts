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

export async function fetchProductById(id: string): Promise<FakeStoreProduct> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product details');
  return res.json();
}