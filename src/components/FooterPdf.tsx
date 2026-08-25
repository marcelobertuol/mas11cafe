import React from 'react';
import { Instagram, Phone, Globe, Heart, ExternalLink, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface FooterPdfProps {
  onOpenMenu?: () => void;
  onOpenFranchise?: () => void;
}

export const FooterPdf: React.FC<FooterPdfProps> = ({ onOpenMenu, onOpenFranchise }) => {
  return (
    <footer className="bg-white text-[#2C221E] pt-12 pb-8 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Distribution (Horizontal Desktop / Vertical Mobile) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-stone-200 text-center md:text-left">
          
          {/* Logo & Brand Name */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src="https://lh3.googleusercontent.com/d/17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK"
              alt="+11 Café Logo"
              className="w-16 h-16 rounded-full object-contain bg-white p-1 shadow-md border-2 border-stone-200"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://drive.google.com/thumbnail?id=17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK&sz=w1000';
              }}
            />

            <div>
              <h3 className="font-black text-2xl tracking-tight text-[#2C221E] uppercase">
                +11 CAFÉ AL PASO
              </h3>
              <p className="text-xs font-bold text-[#EA7C12] uppercase tracking-wider">
                Larrea 777 • Balvanera / Recoleta
              </p>
            </div>
          </div>

          {/* Contact Details (WhatsApp, Instagram, Website) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-extrabold text-[#2C221E]">
            
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>+54 9 11 3191-6092</span>
            </a>

            {/* Instagram */}
            <a
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-50 text-[#EA7C12] border border-amber-200 hover:bg-amber-100 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#EA7C12]" />
              <span>@mas11cafe</span>
            </a>

            {/* Website */}
            <a
              href={`https://${STORE_INFO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-100 text-[#2C221E] border border-stone-200 hover:bg-stone-200 transition-colors"
            >
              <Globe className="w-4 h-4 text-[#2C221E]" />
              <span>www.mas11cafe.com.ar</span>
            </a>

          </div>

          {/* Stamp "Amigos de los animales" / Pet Friendly */}
          <div className="flex items-center gap-3 bg-[#FFF9F3] p-3 px-4 rounded-2xl border border-amber-200">
            <div className="w-10 h-10 rounded-full bg-[#EA7C12]/20 text-[#EA7C12] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#EA7C12]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" opacity="0.3" />
                <circle cx="8" cy="9" r="1.5" fill="currentColor" />
                <circle cx="16" cy="9" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="text-left">
              <span className="font-black text-xs text-[#2C221E] uppercase block leading-none">
                AMIGOS DE LOS ANIMALES
              </span>
              <span className="text-[10px] font-bold text-[#EA7C12]">
                100% Pet Friendly
              </span>
            </div>
          </div>

        </div>

        {/* Quick Links & Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} +11 Café al Paso. Todos los derechos reservados. Larrea 777, Buenos Aires.</p>
          
          <div className="flex items-center gap-4">
            {onOpenMenu && (
              <button onClick={onOpenMenu} className="font-bold text-[#EA7C12] hover:underline">
                Ver Carta Digital
              </button>
            )}
            {onOpenFranchise && (
              <button onClick={onOpenFranchise} className="font-bold text-[#EA7C12] hover:underline">
                Franquicias
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
