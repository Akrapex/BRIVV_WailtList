import { ArrowRight } from "lucide-react";
import RoleCard from "./RoleCard";
import { ROLES } from "./constant/role";

export default function RoleSelector({
  selectedRole,
  onSelect,
}: {
  selectedRole: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          What&apos;s your role?
        </h2>

        <p className="mt-2 text-lg text-stone-600">
          Choose the experience that fits you.
        </p>

        <div className="mx-auto mt-10 grid max-w-[1025px] grid-cols-1 gap-4 sm:grid-cols-6">
          {/* Developer */}
          <div className="sm:col-span-2">
            <RoleCard
              role={ROLES[0]}
              selected={selectedRole === ROLES[0].id}
              onSelect={onSelect}
            />
          </div>

          {/* Landlord / Owner */}
          <div className="sm:col-span-2">
            <RoleCard
              role={ROLES[1]}
              selected={selectedRole === ROLES[1].id}
              onSelect={onSelect}
            />
          </div>

          {/* Property Manager */}
          <div className="sm:col-span-2">
            <RoleCard
              role={ROLES[2]}
              selected={selectedRole === ROLES[2].id}
              onSelect={onSelect}
            />
          </div>

          {/* Agent / Broker */}
          <div className="sm:col-span-2 sm:col-start-2">
            <RoleCard
              role={ROLES[3]}
              selected={selectedRole === ROLES[3].id}
              onSelect={onSelect}
            />
          </div>

          {/* Renter / Buyer */}
          <div className="sm:col-span-2">
            <RoleCard
              role={ROLES[4]}
              selected={selectedRole === ROLES[4].id}
              onSelect={onSelect}
            />
          </div>
        </div>

        <button
          type="button"
          disabled={!selectedRole}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-200 px-6 py-3 text-sm font-medium text-stone-500 transition-colors enabled:bg-emerald-900 enabled:text-white enabled:hover:bg-emerald-800 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
