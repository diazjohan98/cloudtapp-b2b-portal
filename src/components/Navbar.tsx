import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "../config/brand";

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useGSAP(
    () => {
      // Escuchar el scroll para aplicar mayor opacidad a la barra
      const handleScroll = () => {
        if (window.scrollY > 40) {
          gsap.to(navRef.current, {
            height: "64px",
            backgroundColor: "rgba(2, 6, 23, 0.85)",
            borderColor: "rgba(0, 212, 255, 0.25)",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(navRef.current, {
            height: "80px",
            backgroundColor: "rgba(2, 6, 23, 0.4)",
            borderColor: "rgba(255, 255, 255, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    { scope: navRef },
  );

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 h-20 px-6 sm:px-12 flex items-center justify-between transition-all liquid-glass-nav border-b"
    >
      {/* Brand Isotipo & Name */}
      <a href="#" className="flex items-center gap-3 group">
        <svg
          width="40"
          height="32"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform"
        >
          <path
            d="M93.3333 46.6667C93.3333 30.125 79.8833 16.6667 63.3333 16.6667C52.1 16.6667 42.3 22.8417 37.0333 31.9583C35.0333 31.3333 32.9 31 30.6667 31C20.55 31 12.3333 39.2167 12.3333 49.3333C12.3333 58.7417 19.3833 66.5 28.5167 67.5L90.8167 67.4333C99.2833 65.55 105.667 58.1167 105.667 49.1667C105.667 41.7 100.35 35.5 93.3333 34.25V46.6667Z"
            fill={BRAND.colors.primaryBlue}
          />
          <g transform="translate(45, 30) rotate(25)">
            <rect
              x="0"
              y="0"
              width="28"
              height="48"
              rx="6"
              fill="#FFFFFF"
              stroke={BRAND.colors.primaryBlue}
              strokeWidth="2"
            />
            <rect x="3" y="4" width="22" height="34" rx="2" fill="#E2E8F0" />
            <circle cx="14" cy="43" r="2" fill={BRAND.colors.primaryBlue} />
          </g>
          <g transform="translate(75, 20)">
            <path
              d="M0 20C4 16 6 11 6 5"
              stroke={BRAND.colors.techCyan}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M6 23C11 18 13 12 13 4"
              stroke={BRAND.colors.techCyan}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M12 26C18 20 20 13 20 3"
              stroke={BRAND.colors.techCyan}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <span className="font-bold tracking-wider text-white text-lg sm:text-xl font-['Poppins']">
          CLOUD<span className="text-cyan-400 font-extrabold">TAPP</span>
        </span>
      </a>

      {/* Nav Links Desktop */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B0BCC5]">
        <a href="#empresa" className="hover:text-cyan-400 transition-colors">
          Para Empresas
        </a>
        <a
          href="#restaurantes"
          className="hover:text-cyan-400 transition-colors"
        >
          Gastronomía
        </a>
        <a href="#materiales" className="hover:text-cyan-400 transition-colors">
          Materiales
        </a>
        <a href="#cotizador" className="hover:text-cyan-400 transition-colors">
          Cotizador Express
        </a>
      </nav>

      {/* CTA Directo a WhatsApp */}
      <a
        href={getWhatsAppUrl("corporate")}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:border-cyan-400/80 transition-all text-xs font-semibold uppercase tracking-wider"
      >
        <MessageCircle className="w-4 h-4 text-cyan-400" />
        <span>Cotizar Ahora</span>
      </a>

      {/* Toggle Mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white p-2"
        aria-label="Abrir Menú"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </header>
  );
};
