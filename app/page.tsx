import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main id="main-content" className="pb-20 bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ProductGrid />
      </section>
    </main>
  );
}
