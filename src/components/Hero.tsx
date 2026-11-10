import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background cityscape with soft atmospheric wash */}
      <div className="absolute inset-0 bg-[url('/images/heroBackground.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center rounded-full bg-[#EAF3EE] border border-[#D2E4DA] px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#1E5638] mb-5">
          Akrapex · Nigeria
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl leading-[1.15]">
          Everything real estate.
          <br />
          One platform.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-xl text-sm sm:text-base font-normal leading-relaxed text-stone-600">
          Discover properties, connect with trusted professionals, and explore a
          smarter, more connected real estate experience with Akrapex.
        </p>

        {/* CTA Button */}
        <Link
          href="/sustainable-living"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1B4D3E] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#133A2E] shadow-sm hover:shadow"
        >
          Join the waitlist
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Subtext */}
        <p className="mt-4 text-xs sm:text-sm text-stone-500">
          Free to join · First 1,000 members get founder pricing locked for life.
        </p>
      </div>
    </section>
  );
}
