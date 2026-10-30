import React from "react";
import { MapPin, Smartphone } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "../config/brand";

const Instagram = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      
      {/* Resplandor superior sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[10rem] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Grid Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca y Descripción */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group inline-flex">
              <svg
                width="32"
                height="26"
                viewBox="0 0 120 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_8px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform"
              >
                <path d="M93.3333 46.6667C93.3333 30.125 79.8833 16.6667 63.3333 16.6667C52.1 16.6667 42.3 22.8417 37.0333 31.9583C35.0333 31.3333 32.9 31 30.6667 31C20.55 31 12.3333 39.2167 12.3333 49.3333C12.3333 58.7417 19.3833 66.5 28.5167 67.5L90.8167 67.4333C99.2833 65.55 105.667 58.1167 105.667 49.1667C105.667 41.7 100.35 35.5 93.3333 34.25V46.6667Z" fill={BRAND.colors.primaryBlue}/>
                <g transform="translate(45, 30) rotate(25)">
                  <rect x="0" y="0" width="28" height="48" rx="6" fill="#FFFFFF" stroke={BRAND.colors.primaryBlue} strokeWidth="2"/>
                  <rect x="3" y="4" width="22" height="34" rx="2" fill="#E2E8F0"/>
                  <circle cx="14" cy="43" r="2" fill={BRAND.colors.primaryBlue}/>
                </g>
                <g transform="translate(75, 20)">
                  <path d="M0 20C4 16 6 11 6 5" stroke={BRAND.colors.techCyan} strokeWidth="3" strokeLinecap="round"/>
                  <path d="M6 23C11 18 13 12 13 4" stroke={BRAND.colors.techCyan} strokeWidth="3" strokeLinecap="round"/>
                  <path d="M12 26C18 20 20 13 20 3" stroke={BRAND.colors.techCyan} strokeWidth="3" strokeLinecap="round"/>
                </g>
              </svg>
              <span className="font-bold tracking-wider text-white text-lg font-['Poppins']">
                CLOUD<span className="text-cyan-400 font-extrabold">TAPP</span>
              </span>
            </a>
            <p className="text-[#B0BCC5] text-sm font-light leading-relaxed">
              Soluciones NFC de próxima generación. Conectamos el mundo físico con tu ecosistema digital en un solo toque.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Plataforma</h4>
            <ul className="space-y-3">
              <li><a href="#empresa" className="text-[#B0BCC5] hover:text-cyan-400 transition-colors text-sm">Soluciones Corporativas</a></li>
              <li><a href="#restaurantes" className="text-[#B0BCC5] hover:text-cyan-400 transition-colors text-sm">Sector Gastronómico</a></li>
              <li><a href="#cotizador" className="text-[#B0BCC5] hover:text-cyan-400 transition-colors text-sm">Cotizador Express</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href={getWhatsAppUrl("general")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#B0BCC5] hover:text-cyan-400 transition-colors text-sm group">
                  <Smartphone className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400" />
                  WhatsApp Asesoría
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#B0BCC5] text-sm">
                <MapPin className="w-4 h-4 text-cyan-500/70 shrink-0 mt-0.5" />
                <span>Colombia <br/> Envíos a nivel nacional</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Síguenos</h4>
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B0BCC5] hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Barra de Copyright Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Cloud Tapp. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </footer>
  );
};