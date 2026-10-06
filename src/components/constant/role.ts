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
    description: "Builds, lists and sells properties and projects.",
    icon: HardHat,
  },
  {
    id: "landlord",
    title: "Landlord / Owner",
    description: "Lists, leases and manages properties.",
    icon: Home,
  },
  {
    id: "property-manager",
    title: "Property Manager",
    description: "Manages properties, tenants and day-to-day operations.",
    icon: Building2,
  },
  {
    id: "agent",
    title: "Agent / Broker",
    description: "Connects people with properties and helps close deals.",
    icon: Handshake,
  },
  {
    id: "renter",
    title: "Renter / Buyer",
    description: "Finds properties and connects with the right professionals.",
    icon: KeyRound,
  },
];
