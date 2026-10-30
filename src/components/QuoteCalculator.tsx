import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calculator, Building2, Utensils, CreditCard, TreePine, Shield, ArrowRight, Lock } from "lucide-react";
import { BRAND } from "../config/brand";

gsap.registerPlugin(ScrollTrigger);

// Agregamos el estado 'available' para controlar qué se puede cotizar
const MATERIALS = [
  { id: "pvc", name: "PVC Premium", icon: CreditCard, available: true },
  { id: "madera", name: "Madera Láser", icon: TreePine, available: false },
  { id: "metal", name: "Metal Executive", icon: Shield, available: false },
];

export const QuoteCalculator: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [sector, setSector] = useState<"Empresas" | "Restaurantes">("Empresas");
  const [material, setMaterial] = useState("PVC Premium");
  const [quantity, setQuantity] = useState<number>(25);

  useGSAP(() => {
    gsap.fromTo(
      ".quote-container",
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: sectionRef });

  const generateCustomWhatsAppUrl = () => {
    const text = `Hola Cloud Tapp, me gustaría cotizar *${quantity} unidades* de soluciones NFC en *${material}* para mi sector (*${sector}*). ¿Me pueden asesorar con los diseños?`;
    return `https://wa.me/${BRAND.whatsapp.phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section ref={sectionRef} id="cotizador" className="relative py-24 px-6 sm:px-12 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto quote-container relative z-10">
        
        <div className="text-center mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-4 h-4" /> Presupuesto Interactivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cotizador <span className="text-cyan-400">Express B2B</span>
          </h2>
          <p className="text-[#B0BCC5] text-sm sm:text-base font-light">
            Calcula tu requerimiento en segundos y recíbelo por WhatsApp para atención prioritaria.
          </p>
        </div>

        <div className="liquid-glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Controles */}
            <div className="space-y-8">
              
              {/* 1. Sector */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="text-cyan-400">1.</span> Tu Sector
                </label>
                <div className="flex bg-slate-900/50 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setSector("Empresas")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                      sector === "Empresas" 
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-md" 
                        : "text-[#B0BCC5] hover:text-white"
                    }`}
                  >
                    <Building2 className="w-4 h-4" /> Empresas
                  </button>
                  <button
                    onClick={() => setSector("Restaurantes")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                      sector === "Restaurantes" 
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-md" 
                        : "text-[#B0BCC5] hover:text-white"
                    }`}
                  >
                    <Utensils className="w-4 h-4" /> Gastronomía
                  </button>
                </div>
              </div>

              {/* 2. Material */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="text-cyan-400">2.</span> Acabado / Material
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {MATERIALS.map((mat) => {
                    const MatIcon = mat.icon;
                    const isActive = material === mat.name;
                    const isAvailable = mat.available;
                    
                    return (
                      <button
                        key={mat.id}
                        disabled={!isAvailable}
                        onClick={() => isAvailable && setMaterial(mat.name)}
                        className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all overflow-hidden ${
                          !isAvailable 
                            ? "bg-white/5 border-white/5 opacity-60 cursor-not-allowed grayscale"
                            : isActive
                              ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                              : "bg-white/5 border-white/10 text-[#B0BCC5] hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {!isAvailable && (
                          <div className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 border border-slate-600">
                            <Lock className="w-3 h-3 text-slate-400" />
                          </div>
                        )}
                        <MatIcon className={`w-6 h-6 ${!isAvailable ? "text-slate-500" : isActive ? "text-cyan-400" : "text-gray-400"}`} />
                        <span className={`text-xs text-center font-medium leading-tight ${!isAvailable ? "text-slate-500" : ""}`}>
                          {mat.name}
                        </span>
                        {!isAvailable && (
                          <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-500/70 mt-1">
                            Pronto
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Cantidad */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                    <span className="text-cyan-400">3.</span> Volumen
                  </label>
                  <span className="text-2xl font-black text-cyan-400 font-mono">
                    {quantity} <span className="text-sm font-medium text-[#B0BCC5]">unds</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="250"
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>1 unidad</span>
                  <span>250+ unidades</span>
                </div>
              </div>

            </div>

            {/* Resumen */}
            <div className="bg-slate-950/60 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-4">
                  Resumen de Cotización
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#B0BCC5]">Perfil del Proyecto:</span>
                    <span className="font-semibold text-white">{sector}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#B0BCC5]">Material Seleccionado:</span>
                    <span className="font-semibold text-cyan-300">{material}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#B0BCC5]">Cantidad a producir:</span>
                    <span className="font-semibold text-white">{quantity} unidades</span>
                  </div>
                  <div className="flex justify-between text-sm pt-3 border-t border-white/10">
                    <span className="text-[#B0BCC5]">Plataforma de Gestión:</span>
                    <span className="font-semibold text-emerald-400">Gratuita de por vida</span>
                  </div>
                </div>

                {quantity >= 50 && (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-lg flex items-start gap-2">
                    <Shield className="w-4 h-4 shrink-0" />
                    <p>¡Aplica para descuento corporativo y personalización de Marca Blanca total!</p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={generateCustomWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-cyan-500/25 group"
                >
                  <span>Enviar a WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};