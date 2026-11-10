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
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          Building Trust in Real Estate
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
          Akrapex connects property seekers and real estate professionals
          through a transparent and trusted platform, bringing everyone together
          to make every property journey simpler.
        </p>

        <div className="mx-auto mt-12 max-w-5xl">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <RoleCard
              role={ROLES[0]}
              selected={selectedRole === ROLES[0].id}
              onSelect={onSelect}
            />
            <RoleCard
              role={ROLES[1]}
              selected={selectedRole === ROLES[1].id}
              onSelect={onSelect}
            />
            <RoleCard
              role={ROLES[2]}
              selected={selectedRole === ROLES[2].id}
              onSelect={onSelect}
            />
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
            <div className="w-full md:w-[calc(33.333%-0.67rem)]">
              <RoleCard
                role={ROLES[3]}
                selected={selectedRole === ROLES[3].id}
                onSelect={onSelect}
              />
            </div>
            <div className="w-full md:w-[calc(33.333%-0.67rem)]">
              <RoleCard
                role={ROLES[4]}
                selected={selectedRole === ROLES[4].id}
                onSelect={onSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
