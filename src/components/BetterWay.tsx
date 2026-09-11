
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
            src="/images/betterWay-image.svg"
            alt="A verified property listing"
            width={600}
            height={420}
            className="h-72 w-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
