import { HardHat, Home, Building2, Handshake, KeyRound } from "lucide-react";
import React from "react";

export type Role = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export const ROLES: Role[] = [
  {
    id: "developer",
    title: "Property Developers",
    description: "Showcase your developments, find serious buyers, and connect with potential tenants.",
    icon: HardHat,
  },
  {
    id: "landlord",
    title: "Landlords & Property Owners",
    description: "List your property faster, screen tenants, and manage your properties effortlessly.",
    icon: Home,
  },
  {
    id: "property-manager",
    title: "Property Managers",
    description: "Streamline operations, handle maintenance, and drive client satisfaction.",
    icon: Building2,
  },
  {
    id: "agent",
    title: "Real Estate Agents",
    description: "Showcase listings, connect with prospective verified property buyers, and close deals faster.",
    icon: Handshake,
  },
  {
    id: "renter",
    title: "Renters & Buyers",
    description: "Find verified properties that match your lifestyle and budget.",
    icon: KeyRound,
  },
];
