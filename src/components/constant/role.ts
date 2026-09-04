import { HardHat, Home, Building2, Handshake, KeyRound } from "lucide-react";

export type Role = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export const ROLES: Role[] = [
  {
    id: "developer",
    title: "Developer",
    description: "Build. List. Sell.",
    icon: HardHat,
  },
  {
    id: "landlord",
    title: "Landlord / Owner",
    description: "List. Lease. Earn.",
    icon: Home,
  },
  {
    id: "property-manager",
    title: "Property Manager",
    description: "Manage your portfolio.",
    icon: Building2,
  },
  {
    id: "agent",
    title: "Agent / Broker",
    description: "Connect. Close. Grow.",
    icon: Handshake,
  },
  {
    id: "renter",
    title: "Renter / Buyer",
    description: "Find your next home.",
    icon: KeyRound,
  },
];
