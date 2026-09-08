// import { FakeStoreProduct } from '@/types/ecommerce';

// const BASE_URL = 'https://fakestoreapi.com';

// export async function fetchProducts(): Promise<FakeStoreProduct[]> {
//   try {
//     const res = await fetch(`${BASE_URL}/products`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) {
//       const body = await res.text();

//       throw new Error(
//         `FakeStoreAPI error: ${res.status} ${res.statusText} - ${body}`
//       );
//     }

//     return res.json();
//   } catch (error) {
//     console.error("fetchProducts failed:", error);
//     throw error;
//   }
// }

// export async function fetchProductById(id: string): Promise<FakeStoreProduct> {
//   const res = await fetch(`${BASE_URL}/products/${id}`);
//   if (!res.ok) throw new Error('Failed to fetch product details');
//   return res.json();
// }



import { FakeStoreProduct } from '@/types/ecommerce';

// Determines the base URL dynamically based on environment
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback for local development
  return 'http://localhost:3000';
};

export async function fetchProducts(): Promise<FakeStoreProduct[]> {
  try {
    // Instead of calling fakestoreapi directly, we call our own local API proxy route
    const res = await fetch(`${getBaseUrl()}/api/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(
        `Internal Proxy error: ${res.status} ${res.statusText} - ${body}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("fetchProducts failed via proxy:", error);
    throw error;
  }
}

export async function fetchProductById(id: string): Promise<FakeStoreProduct> {
  const res = await fetch(`${getBaseUrl()}/api/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product details');
  return res.json();
}
