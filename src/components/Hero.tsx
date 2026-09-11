import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/heroBackground.jpeg"
          alt="backgroung image"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="text-xs font-semibold  tracking-wide text-stone-500">
          Akrapex · Nigeria
        </span>
        <h1 className="mt-4 text-2xl md:text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl md:w-123.5">
          Everything real estate.
          One platform.
        </h1>
        <p className="mt-4 max-w-md text-stone-600 text-sm font-normal">
          Find, buy, rent, list and manage property in one place.
        </p>
        
          <h4
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold test-lg text-white transition-colors hover:bg-emerald-800"
        >
          Join the waitlist
          <ArrowRight className="h-4 w-4" />
        </h4>
        <p className="mt-4 text-sm text-stone-500">
          Free to join · First 1,000 members get founder pricing locked for
          life.
        </p>
      </div>
    </section>
  );
}