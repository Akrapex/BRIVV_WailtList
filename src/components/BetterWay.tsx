import Image from "next/image";

export default function BetterWay() {
  return (
    <section className="bg-[#F6F6F4] px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Information */}
        <div>
          <div className="inline-flex items-center rounded-full bg-[#EAF3EE] border border-[#D2E4DA] px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#1E5638] mb-5">
            About Akrapex
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.18] tracking-tight text-stone-900">
            A better way to
            <br className="hidden sm:inline" /> navigate real estate.
          </h2>

          <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-stone-600 font-normal">
            Akrapex connects property seekers and real estate professionals in
            one place, making it easier to discover properties, build connections,
            and manage real estate activities. We&apos;re working towards a more
            accessible, transparent, and sustainable real estate experience for
            Nigeria.
          </p>
        </div>

        {/* Right Column: Visual card */}
        <div className="rounded-3xl bg-white p-4 sm:p-6 shadow-xs border border-stone-200/50 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/betterWay_img.jpeg"
            alt="Discover Verified Properties That Match Your Lifestyle"
            width={680}
            height={480}
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
