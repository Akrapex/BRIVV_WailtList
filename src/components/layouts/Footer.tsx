export default function Footer() {
  return (
    <footer className="border-t border-stone-100 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm font-semibold tracking-tight text-stone-900">
          AKRAPEX
        </span>
        <nav className="flex gap-6 text-sm text-stone-500">
          <a href="#" className="hover:text-stone-900">
            About
          </a>
          <a href="#" className="hover:text-stone-900">
            Privacy
          </a>
          <a href="#" className="hover:text-stone-900">
            Contact
          </a>
          <a href="#" className="hover:text-stone-900">
            LinkedIn
          </a>
          <a href="#" className="hover:text-stone-900">
            Instagram
          </a>
        </nav>
        <span className="text-xs text-stone-400">
          © {new Date().getFullYear()} AKRAPEX. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
