import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Utensils,
  Star,
  Wifi,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { getWhatsAppUrl } from "../config/brand";

gsap.registerPlugin(ScrollTrigger);

const RESTAURANT_FEATURES = [
  {
    icon: Utensils,
    title: "Menú Digital Dinámico",
    description:
      "Actualiza platos, precios o promociones del día en tiempo real sin volver a imprimir un solo papel.",
  },
  {
    icon: Star,
    title: "Multiplicador de Reseñas",
    description:
      "Redirige a los comensales directamente a tu perfil de Google Maps o Tripadvisor para subir tu calificación.",
  },
  {
    icon: Wifi,
    title: "Conexión Wi-Fi Instantánea",
    description:
      "Permite que tus clientes se conecten a la red del establecimiento con un solo toque, sin pedir contraseñas.",
  },
];

const DISPLAY_MODELS = [
  {
    name: "Stand Acrílico Crystal",
    badge: "Más Popular",
    material: "Acrílico Transparente High-Gloss",
    ideal: "Mesas de restaurantes, barras y terrazas",
    features: [
      "Doble chip NFC integrado",
      "Código QR de respaldo HD",
      "Base antideslizante",
    ],
  },
  {
    name: "Display Madera Eco-Wood",
    badge: "Premium Craft",
    material: "Madera de Nogal o Bambú Robusto",
    ideal: "Cafés de especialidad, gastrobares y hoteles",
    features: [
      "Grabado láser personalizado",
      "Acabado mate resistente a líquidos",
      "Chip NFC de alta sensibilidad",
    ],
  },
];

export const RestaurantSolutions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".restaurant-card");

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
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
      id="restaurantes"
      className="relative py-24 px-6 sm:px-12 bg-[#020617] overflow-hidden"
    >
      {/* Luz de fondo en tono cian y azul */}
      <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header del Módulo Gastronómico */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Flame className="w-4 h-4 text-cyan-400" /> Sector Gastronómico &
            HoReCa
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Revoluciona la Experiencia en <br />
            <span className="text-cyan-400">Mesas y Barras</span>
          </h2>
          <p className="text-[#B0BCC5] text-base sm:text-lg font-light">
            Sustituye los menús deteriorados por displays NFC elegantes. Agiliza
            el pedido, captura reseñas de 5 estrellas y proyecta una imagen
            tecnológica moderna.
          </p>
        </div>

        {/* 3 pilares clave del servicio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {RESTAURANT_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="restaurant-card liquid-glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#B0BCC5] font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Muestrario de Modelos de Displays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {DISPLAY_MODELS.map((model, idx) => (
            <div
              key={idx}
              className="restaurant-card liquid-glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {model.badge}
                  </span>
                  <Smartphone className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {model.name}
                </h3>
                <p className="text-xs text-cyan-300 font-mono mb-4">
                  {model.material}
                </p>
                <p className="text-sm text-[#B0BCC5] font-light mb-6">
                  <strong className="text-white font-medium">
                    Recomendado para:
                  </strong>{" "}
                  {model.ideal}
                </p>

                <div className="space-y-2.5 mb-8">
                  {model.features.map((item, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-3 text-sm text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWhatsAppUrl("gastronomy")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:border-cyan-400/80 font-semibold text-sm flex items-center justify-center gap-2 transition-all group"
              >
                <span>Cotizar Displays para Restaurante</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Banner de Llamado a la Acción para Restaurantes */}
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 text-center border border-cyan-400/30 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              ¿Listo para modernizar las mesas de tu establecimiento?
            </h3>
            <p className="text-[#B0BCC5] text-sm sm:text-base font-light">
              Ofrecemos muestras físicas y personalización completa con el logo
              y colores de tu marca gastronómica.
            </p>
            <a
              href={getWhatsAppUrl("gastronomy")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Solicitar Asesoría Gastronómica</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
