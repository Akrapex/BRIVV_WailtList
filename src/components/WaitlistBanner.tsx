import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WaitlistBanner() {
  return (
    <section id="waitlist" className="bg-white px-6 py-16 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-r from-[#11372A] via-[#143E30] to-[#154636] px-8 py-12 shadow-sm sm:px-14 sm:py-16">
        {/* Soft emerald radial glow on right side */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#34D399]/10 blur-2xl" />

        <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Left content */}
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-white tracking-tight sm:text-4xl lg:text-5xl">
              Be one of the first
              <br />
              1,000.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-emerald-100/80 font-normal">
              Join Akrapex before launch and secure founder pricing locked for
              life.
            </p>

            <Link
              href="/sustainable-living"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#11372A] transition-colors hover:bg-stone-100 shadow-xs"
            >
              Claim my spot
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right stat cards */}
          <div className="flex w-full sm:w-auto justify-start sm:justify-end gap-3.5 sm:gap-4">
            <div className="flex aspect-square w-32 sm:w-36 flex-col items-center justify-center rounded-2xl border border-[#2B5D49]/60 bg-[#1C4638]/70 p-5 text-center backdrop-blur-xs">
              <p className="text-3xl sm:text-4xl font-bold text-[#F5C242]">
                ₦0
              </p>
              <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#8DB89F]">
                To join
              </p>
            </div>

            <div className="flex aspect-square w-32 sm:w-36 flex-col items-center justify-center rounded-2xl border border-[#2B5D49]/60 bg-[#1C4638]/70 p-5 text-center backdrop-blur-xs">
              <p className="text-3xl sm:text-4xl font-bold text-[#A3E635]">
                1,000
              </p>
              <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#8DB89F]">
                Founder spots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
