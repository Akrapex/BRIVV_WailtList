import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-[#F9F9F7] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Preserved project logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Akrapex Logo"
            width={26}
            height={20}
            className="h-5 w-auto object-contain"
          />
          <Image
            src="/images/Akrapex.svg"
            alt="Akrapex"
            width={80}
            height={20}
            className="h-4 w-auto object-contain"
          />
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-500 font-normal">
          <a href="#" className="hover:text-stone-900 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-stone-900 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-stone-900 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-stone-900 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-stone-900 transition-colors">
            Instagram
          </a>
        </nav>

        {/* Copyright */}
        <span className="text-xs text-stone-400 font-normal">
          © {new Date().getFullYear()} AKRAPEX. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
