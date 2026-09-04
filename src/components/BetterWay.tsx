import { Search } from "lucide-react";
import Image from "next/image";

export default function BetterWay() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-3xl">
            A better way to navigate real estate.
          </h2>
          <p className="mt-4 max-w-sm text-stone-600">
            Discover properties, connect with professionals and manage your
            property journey in one place. Our unique Eco Score helps you find
            sustainable homes that align with your values.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-stone-900 shadow-lg">
          <Image
            src="/images/betterWay_img.jpeg"
            alt="A verified property listing"
            width={600}
            height={420}
            className="h-72 w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent p-5">
            <span className="w-fit rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-medium text-emerald-950">
              Verified listing
            </span>
            <p className="mt-3 text-lg font-medium leading-snug text-white">
              Discover verified properties that match your lifestyle
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-full bg-white/95 p-1.5 pl-3">
              <span className="flex-1 truncate text-[11px] text-stone-500">
                Location, price, type&hellip;
              </span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-800 px-3 py-1.5 text-[11px] font-medium text-white">
                <Search className="h-3 w-3" />
                Search
              </span>
            </div>

            <div className="mt-4 flex gap-6 text-white">
              <span>
                <span className="block text-sm font-semibold">1,000+</span>
                <span className="block text-[10px] text-white/70">
                  Properties
                </span>
              </span>
              <span>
                <span className="block text-sm font-semibold">120+</span>
                <span className="block text-[10px] text-white/70">Cities</span>
              </span>
              <span>
                <span className="block text-sm font-semibold">500+</span>
                <span className="block text-[10px] text-white/70">Agents</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
