import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CorporateSolutions } from "./components/CorporateSolutions";
import { RestaurantSolutions } from "./components/RestaurantSolutions";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-cyan-500 selection:text-white font-['Poppins'] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CorporateSolutions />
        <RestaurantSolutions />
      </main>
      <WhatsAppWidget />
    </div>
  );
}
