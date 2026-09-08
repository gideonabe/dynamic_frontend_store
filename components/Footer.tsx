export default function Footer() {
  return (
    <footer className="border-t border-black/6 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-xl font-semibold tracking-[0.25em] text-neutral-900">
              DEON
            </p>
            <p className="mt-2 text-xs text-neutral-500 tracking-wide">
              Where luxury meets simplicity
            </p>
          </div>

          {/* Links */}
          <nav
            className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.12em]"
            aria-label="Footer navigation"
          >
            <a
              href="#"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              About
            </a>

            <a
              href="#"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-black/6 text-center">
          <p className="text-[11px] text-neutral-400 tracking-wide">
            © {new Date().getFullYear()} DEON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}