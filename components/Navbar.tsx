"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useStore } from "./StoreContext";

const CATEGORIES = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Jewelry", slug: "jewelery" },
  { label: "Men's", slug: "men's clothing" },
  { label: "Women's", slug: "women's clothing" },
] as const;

const ANNOUNCEMENTS = [
  "Free Shipping on orders over $100",
  "Complimentary Shipping, Always",
  "Discover the Latest Collection",
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const { selectedCategory, setSelectedCategory } = useStore();

  // Automatically change announcement
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((current) =>
        (current + 1) % ANNOUNCEMENTS.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-2 right-2 z-60">
        <div className="relative h-9 overflow-hidden rounded-full bg-linear-to-r from-green-800 via-green-600 to-green-500 text-white">
          <div
            key={announcementIndex}
            className="absolute inset-0 flex items-center justify-center px-4 text-xs font-semibold tracking-[0.16em] animate-in slide-in-from-right duration-500"
          >
            {ANNOUNCEMENTS[announcementIndex]}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-8 z-50 w-full bg-[#faf9f6]/90 backdrop-blur-md border-b border-black/6 transition-all">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4 flex-1">

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2 text-neutral-900 focus-visible:ring-1 focus-visible:ring-black focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Desktop categories */}
            <nav
              className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.14em]"
              aria-label="Main category navigation"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`transition-colors duration-200 py-1 border-b ${
                    selectedCategory === cat.slug
                      ? "text-black border-black"
                      : "text-neutral-500 border-transparent hover:text-black hover:border-black"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Brand */}
          <div className="shrink-0 text-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-semibold tracking-wider text-neutral-900 uppercase font-sans focus-visible:ring-1 focus-visible:ring-black focus:outline-none"
              aria-label="DEON Home"
            >
              DEON
            </Link>
          </div>

          {/* Cart */}
          <div className="flex items-center justify-end gap-5 flex-1">
            <button
              className="relative p-2 text-neutral-900 hover:opacity-70 transition-opacity focus-visible:ring-1 focus-visible:ring-black focus:outline-none"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-black/30 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
            <div className="bg-[#faf9f6] w-full px-6 py-8 border-b border-black/8 shadow-lg">
              <nav
                className="flex flex-col gap-6"
                aria-label="Mobile navigation"
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                  Categories
                </span>

                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left transition-colors duration-200 py-1 border-b ${
                      selectedCategory === cat.slug
                        ? "text-black border-black"
                        : "text-neutral-500 border-transparent hover:text-black hover:border-black"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
