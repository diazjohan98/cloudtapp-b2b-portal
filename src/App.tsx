import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CorporateSolutions } from "./components/CorporateSolutions";
import { RestaurantSolutions } from "./components/RestaurantSolutions";
import { QuoteCalculator } from "./components/QuoteCalculator";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-cyan-500 selection:text-white font-['Poppins'] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CorporateSolutions />
        <RestaurantSolutions />
        <QuoteCalculator />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}