export default function Navbar() {
  return (
    <header className="border-b border-stone-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-stone-900">
          Akrapex
        </span>
        
          <a href="#waitlist"
          className="rounded-full bg-emerald-900 px-5 py-2 text-sm font-normal text-white transition-colors hover:bg-emerald-800"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}