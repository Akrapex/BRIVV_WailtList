"use client";
import Navbar from "../layouts/Navbar";
import Hero from "../Hero";
import RoleSelector from "../RoleSelector";
import BetterWay from "../BetterWay";
import WaitlistBanner from "../WaitlistBanner";
import Faq from "../Faq";
import Footer from "../layouts/Footer";
import { useState } from "react";

export default function WaitlistPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <Hero />
      <RoleSelector selectedRole={selectedRole} onSelect={setSelectedRole} />
      <BetterWay />
      <WaitlistBanner />
      <Faq openFaq={openFaq} onToggle={setOpenFaq} />
      <Footer />
    </main>
  );
}
