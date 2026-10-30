import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Building2,
  Utensils,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { BRAND, getWhatsAppUrl } from "../config/brand";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const stand3DRef = useRef<HTMLDivElement>(null);

  // Animaciones de entrada orquestadas con GSAP
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(
        ".gsap-badge",
        { y: -20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
      )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)" },
          "-=0.4",
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.8",
        )
        .fromTo(
          ctaGroupRef.current?.children
            ? Array.from(ctaGroupRef.current.children)
            : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15 },
          "-=0.6",
        )
        .fromTo(
          stand3DRef.current,
          { y: 60, opacity: 0, rotateX: 15, rotateY: -25, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 5,
            rotateY: -15,
            scale: 1,
            duration: 1.6,
            ease: "expo.out",
          },
          "-=1.0",
        );

      // Flotación muy sutil para dar vida sin perder el peso visual del stand
      gsap.to(stand3DRef.current, {
        y: "-=8",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.easeInOut",
      });
    },
    { scope: containerRef },
  );

  // Inclinación 3D del Stand según la posición del cursor (Tilt Effect)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stand3DRef.current) return;
    const { left, top, width, height } =
      stand3DRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(stand3DRef.current, {
      rotateY: x * 30,
      rotateX: -y * 30 + 5, // Mantenemos un ligero ángulo base
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1200,
    });
  };

  const handleMouseLeave = () => {
    if (!stand3DRef.current) return;
    gsap.to(stand3DRef.current, {
      rotateX: 5,
      rotateY: -15,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-[#020617]"
    >
      {/* Luz de fondo ambiental */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[25rem] bg-[#1A4D8C]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Columna Izquierda: Copys & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Badge Especular */}
          <div className="gsap-badge liquid-glass-card inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-cyan-200 uppercase">
              {BRAND.tagline}
            </span>
          </div>

          {/* Titular Principal */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Conecta tu Empresa <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              al Futuro Digital.
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-[#B0BCC5] font-light max-w-2xl leading-relaxed"
          >
            Elimina el papel, centraliza la identidad corporativa de tu equipo y
            revoluciona la experiencia en mesas con displays NFC personalizados.
          </p>

          {/* CTAs B2B */}
          <div
            ref={ctaGroupRef}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href={getWhatsAppUrl("corporate")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-7 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-cyan-500/25 group"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-slate-950" />
                <span>Cotizar para Empresas</span>
              </div>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={getWhatsAppUrl("gastronomy")}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-card flex items-center justify-between gap-4 px-7 py-4 rounded-2xl text-white font-semibold text-base hover:bg-white/10 transition-all border border-white/20 group"
            >
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-cyan-400" />
                <span>Soluciones Restaurantes</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#B0BCC5] group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>

          {/* Métricas */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-lg">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-[#B0BCC5]">Reutilizable</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">0.1s</p>
              <p className="text-xs text-[#B0BCC5]">Lectura NFC</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Custom</p>
              <p className="text-xs text-[#B0BCC5]">Branding Total</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Render 3D del Stand Físico */}
        <div className="lg:col-span-5 flex justify-center items-center perspective-1000 mt-12 lg:mt-0">
          <div
            ref={stand3DRef}
            className="relative w-64 h-[22rem] cursor-pointer group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Destello de luz detrás del stand */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"
              style={{ transform: "translateZ(-80px)" }}
            />

            {/* Sombra proyectada en el piso */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/60 blur-xl rounded-[100%]"
              style={{ transform: "rotateX(70deg) translateZ(-60px)" }}
            />

            {/* Base del Stand (Parte oscura trasera/inferior) */}
            <div
              className="absolute bottom-0 left-2 right-2 h-32 bg-gradient-to-t from-slate-950 to-slate-800 rounded-b-xl border-x border-b border-slate-700/50 shadow-2xl"
              style={{
                transform: "rotateX(60deg) translateZ(-50px) translateY(20px)",
                transformOrigin: "bottom",
              }}
            />

            {/* Placa Frontal (Acrílico/Metal claro como en la foto) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] rounded-xl p-6 flex flex-col items-center justify-between border border-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ transform: "translateZ(20px)" }}
            >
              {/* Brillo especular dinámico */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Texto Superior */}
              <h3 className="text-[#1A4D8C] font-black tracking-[0.25em] text-sm mt-2">
                SÍGUENOS
              </h3>

              {/* Logo Central (Adaptado a oscuro para contrastar con el fondo claro) */}
              <div className="flex flex-col items-center my-2 transform scale-110">
                <svg
                  width="100"
                  height="80"
                  viewBox="0 0 120 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M93.3333 46.6667C93.3333 30.125 79.8833 16.6667 63.3333 16.6667C52.1 16.6667 42.3 22.8417 37.0333 31.9583C35.0333 31.3333 32.9 31 30.6667 31C20.55 31 12.3333 39.2167 12.3333 49.3333C12.3333 58.7417 19.3833 66.5 28.5167 67.5L90.8167 67.4333C99.2833 65.55 105.667 58.1167 105.667 49.1667C105.667 41.7 100.35 35.5 93.3333 34.25V46.6667Z"
                    fill="#1A4D8C"
                  />
                  <g transform="translate(45, 30) rotate(25)">
                    <rect
                      x="0"
                      y="0"
                      width="28"
                      height="48"
                      rx="6"
                      fill="#FFFFFF"
                      stroke="#1A4D8C"
                      strokeWidth="2"
                    />
                    <rect
                      x="3"
                      y="4"
                      width="22"
                      height="34"
                      rx="2"
                      fill="#E2E8F0"
                    />
                    <circle cx="14" cy="43" r="2" fill="#1A4D8C" />
                  </g>
                  <g transform="translate(75, 20)">
                    <path
                      d="M0 20C4 16 6 11 6 5"
                      stroke="#1A4D8C"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 23C11 18 13 12 13 4"
                      stroke="#1A4D8C"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 26C18 20 20 13 20 3"
                      stroke="#1A4D8C"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <span className="font-bold tracking-wider text-[#1A4D8C] text-sm mt-1">
                  CLOUD<span className="font-extrabold opacity-80">TAPP</span>
                </span>
              </div>

              {/* Textos Inferiores */}
              <div className="text-center w-full flex flex-col items-center gap-4 mb-2">
                <p className="text-[#334155] text-xs font-semibold leading-relaxed">
                  Descubre contenido <br /> y novedades.
                </p>
                <div className="flex flex-col items-center gap-1.5 text-[#1A4D8C]">
                  <Smartphone className="w-5 h-5 animate-bounce" />
                  <span className="text-[9px] font-bold tracking-wider uppercase">
                    Acerca tu celular
                    <br />y conéctate!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
