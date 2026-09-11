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
      className={`flex items-start gap-3 w-full max-w-[331px] rounded-xl border bg-white p-4 text-left transition-colors ${
        selected
          ? "border-emerald-800 ring-1 ring-emerald-800"
          : "border-stone-200 hover:border-stone-300"
      }`}
    >
      <Icon className="mt-1 h-5 w-5 shrink-0 text-emerald-800" />

      <span>
        <span className="block text-2xl font-semibold text-stone-900">
          {role.title}
        </span>

        <span className="mt-0.5 block text-xs text-stone-500">
          {role.description}
        </span>
      </span>
    </button>
  );
}
