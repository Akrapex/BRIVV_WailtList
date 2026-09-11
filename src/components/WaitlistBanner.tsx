import { ArrowRight } from "lucide-react";

export default function WaitlistBanner() {
  return (
    <section id="waitlist" className="px-6 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-emerald-950 to-emerald-900 px-8 py-12 sm:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="max-w-xs text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Be one of the first 1,000.
            </h2>
            <p className="mt-3 max-w-xs text-sm text-emerald-100/80">
              Join Akrapex before launch and secure founder pricing, locked for
              life.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-emerald-950 transition-colors hover:bg-emerald-50"
            >
              Claim my spot
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex gap-3">
            <div className="rounded-xl bg-white/10 px-8 py-4 text-center  ">
              <p className="text-2xl font-semibold text-amber-400 decoration-2">
                ₦0
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-emerald-100/70">
                To join
              </p>
            </div>
            <div className="rounded-xl bg-white/10 px-1 py-4 text-center  ">
              <p className="text-2xl font-semibold text-lime-400">1,000</p>
              <p className="mt-1 text-[8px] px-3 uppercase tracking-wide text-emerald-100/70">
                Founder spots
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
