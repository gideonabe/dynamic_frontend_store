import Link from 'next/link';
import Image from 'next/image';
import { FakeStoreProduct } from '@/types/ecommerce';

export default function AccessibleProductCard({ product }: { product: FakeStoreProduct }) {
  return (
    <article className="group block relative focus-within:ring-2 focus-within:ring-pl-plum focus-within:ring-offset-2 rounded-2xl">
      <Link href={`/product/${product.id}`} className="block outline-none" aria-label={`View details for ${product.title}`}>
        <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden bg-[#ffffff] border border-gray-100">
          <Image
            src={product.image}
            alt={`Image of ${product.title}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {product.category}
          </p>
          <h3 className="text-sm font-bold text-pl-plum line-clamp-1 group-hover:text-[#7e1964] transition-colors">
            {product.title}
          </h3>
          <p className="text-base font-extrabold text-pl-plum">
            £{product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </article>
  );
}