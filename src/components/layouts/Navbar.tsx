import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-stone-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Image
                    src="/images/Akrapex.svg"
                    alt="A verified property listing"
                    width={100}
                    height={80}
                   
                  />
        
          <h4 
          className="rounded-full bg-emerald-900 px-5 py-2 text-sm font-normal text-white transition-colors hover:bg-emerald-800"
        >
          Join Waitlist
        </h4>
      </div>
    </header>
  );
}