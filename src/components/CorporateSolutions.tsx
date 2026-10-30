import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CreditCard,
  ShieldCheck,
  RefreshCw,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppUrl } from "../config/brand";

gsap.registerPlugin(ScrollTrigger);

const MATERIALS = [
  {
    id: "pvc",
    name: "PVC Premium Matte",
    badge: "Más Vendido",
    desc: "Acabado mate de alta durabilidad, resistente al agua y arañazos. Ideal para equipos de trabajo dinámicos.",
    tag: "Impresión HD Full Color",
  },
  {
    id: "wood",
    name: "Madera Ecológica",
    badge: "Sostenible",
    desc: "Elaborada en bambú o nogal con grabado láser de alta precisión. Impacto ambiental neutro para marcas conscientes.",
    tag: "Grabado Láser Monocromático",
  },
  {
    id: "metal",
    name: "Metal Stealth Black",
    badge: "Executive VIP",
    desc: "Aleación de acero inoxidable con peso táctil superior y grabado láser. Diseñada para altos ejecutivos y directivos.",
    tag: "Acero Inoxidable Mate",
  },
];

const VOLUME_TIERS = [
  {
    range: "5 - 15 Unidades",
    discount: "10% OFF",
    detail: "Ideal para startups y Pymes",
  },
  {
    range: "16 - 50 Unidades",
    discount: "20% OFF",
    detail: "Para empresas en crecimiento",
  },
  {
    range: "51 - 100+ Unidades",
    discount: "35% OFF + Marca Blanca",
    detail: "Enterprise & Corporativos grandes",
  },
];

export const CorporateSolutions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".corporate-card");

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="empresa"
      className="relative py-24 px-6 sm:px-12 bg-[#020617] overflow-hidden"
    >
      {/* Luz de fondo sutil */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1A4D8C]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header del Módulo */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Building2Icon /> Soluciones Corporativas B2B
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Identidad Inteligente para tu <br />
            <span className="text-cyan-400">Equipo de Trabajo</span>
          </h2>
          <p className="text-[#B0BCC5] text-base sm:text-lg font-light">
            Centraliza el contacto de tus ejecutivos en tarjetas físicas
            reprogramables. Cambia cargos, números o enlaces sin volver a gastar
            en impresión.
          </p>
        </div>

        {/* Grid de Materiales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {MATERIALS.map((mat) => (
            <div
              key={mat.id}
              className="corporate-card liquid-glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {mat.badge}
                  </span>
                  <CreditCard className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {mat.name}
                </h3>
                <p className="text-sm text-[#B0BCC5] font-light leading-relaxed mb-6">
                  {mat.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>{mat.tag}</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios & Descuentos por Volumen */}
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Beneficios */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold text-white">
                ¿Por qué las empresas migran a Cloud Tapp?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mt-1">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Actualización Ilimitada
                    </h4>
                    <p className="text-xs text-[#B0BCC5]">
                      Si un colaborador cambia de cargo o número, la información
                      se actualiza al instante sin cambiar la tarjeta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Captura Directa a la Agenda
                    </h4>
                    <p className="text-xs text-[#B0BCC5]">
                      El cliente guarda el contacto corporativo en la agenda de
                      su teléfono en menos de 2 segundos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Soporte & Plataforma Dedicada
                    </h4>
                    <p className="text-xs text-[#B0BCC5]">
                      Gestión corporativa centralizada con garantía directa de
                      fábrica.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Escala de Precios */}
            <div className="lg:col-span-6 bg-slate-950/60 rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Descuentos Escalables por Lote
              </h4>

              <div className="space-y-3">
                {VOLUME_TIERS.map((tier, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {tier.range}
                      </p>
                      <p className="text-[10px] text-[#B0BCC5]">
                        {tier.detail}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {tier.discount}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppUrl("corporate")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Solicitar Cotización Corporativa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Building2Icon = () => (
  <svg
    className="w-4 h-4 text-cyan-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2" />
  </svg>
);
