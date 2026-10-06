import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 px-6 py-8 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="A verified property listing"
            width={30}
            height={20}
          />
          <Image
            src="/images/Akrapex.svg"
            alt="A verified property listing"
            width={60}
            height={80}
            className="mt-2"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-500">
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
