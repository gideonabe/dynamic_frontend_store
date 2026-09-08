// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import './globals.css';
import { StoreProvider } from '@/components/StoreContext';
import Footer from '@/components/Footer';

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// SEO and Accessibility Metadata
export const metadata: Metadata = {
  title: 'DEON | Official Shop',
  description: 'Discover the official DEON collection. Shop apparel, electronics, and accessories.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const handleCategoryChange = (_category: string) => undefined;

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-red-800 text-gray-900 min-h-screen flex flex-col">
        {/* Accessibility: Skip to main content link for keyboard users */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pl-plum text-white px-4 py-2 z-50 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pl-plum"
        >
          Skip to main content
        </a>
        
        <StoreProvider>
          <Navbar />
          <div className="grow">
            {children}
          </div>
          <Footer />
        </StoreProvider>

        {/* <Footer /> */}
      </body>
    </html>
  );
}