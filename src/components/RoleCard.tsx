import { Role } from "./constant/role";

export default function RoleCard({
  role,
  selected,
  onSelect,
}: {
  role: Role;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const Icon = role.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(role.id)}
      aria-pressed={selected}
      className={`flex flex-col w-full h-full rounded-xl border bg-white p-5 text-left transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[#1B4D3E] ring-1 ring-[#1B4D3E] bg-[#F5FAF7] shadow-xs"
          : "border-stone-200/90 hover:border-emerald-700/60 hover:shadow-xs"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <Icon className="h-4.5 w-4.5 shrink-0 text-[#1B4D3E]" />
        <span className="text-sm sm:text-[15px] font-semibold text-stone-900">
          {role.title}
        </span>
      </div>

      <p className="mt-2 text-xs text-stone-500 leading-relaxed font-normal">
        {role.description}
      </p>
    </button>
  );
}
