import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-stone-100 bg-white sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Akrapex Logo"
            width={28}
            height={22}
            className="h-6 w-auto object-contain"
            priority
          />
          <Image
            src="/images/Akrapex.svg"
            alt="Akrapex"
            width={85}
            height={22}
            className="h-4.5 w-auto object-contain"
            priority
          />
        </Link>
        <Link
          href="/sustainable-living"
          className="rounded-full bg-[#1B4D3E] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-[#133A2E]"
        >
          Join the waitlist
        </Link>
      </div>
    </header>
  );
}
