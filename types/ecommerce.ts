export interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface StoreProduct {
  id: number;
  brand: string;
  title: string;
  price: number;
  formattedPrice: string;
  category: string;
  description: string;
  images: string[];
  badge?: 'NEW' | 'PRE-ORDER';
  sizes: string[];
  isSellingFast?: boolean;
}