import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Building2,
  Utensils,
  ChevronRight,
} from "lucide-react";
import { getWhatsAppUrl } from "../config/brand";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Panel Desplegable Liquid Glass */}
      {isOpen && (
        <div className="mb-4 w-80 rounded-3xl p-5 text-white shadow-2xl backdrop-blur-2xl bg-slate-900/90 border border-cyan-500/30 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold text-sm">Asesoría Inmediata</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-gray-300 my-3 font-light">
            Selecciona tu sector para conectarte directamente con el área
            correspondiente por WhatsApp:
          </p>

          <div className="flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl("corporate")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-medium">Ventas Corporativas</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>

            <a
              href={getWhatsAppUrl("gastronomy")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-medium">Sector Gastronómico</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      )}

      {/* Botón Principal Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/30 flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};
