import React from 'react';
import { Clock, MapPin, Phone, Instagram, Mail, ExternalLink, Building2 } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface InfoLocalPdfProps {
  onOpenFranchise?: () => void;
}

export const InfoLocalPdf: React.FC<InfoLocalPdfProps> = ({ onOpenFranchise }) => {
  return (
    <section className="bg-white pt-4 sm:pt-6 pb-0 px-0 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Layout Centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center pb-8 sm:pb-12">
          
          {/* COLUMN 1: HORARIOS */}
          <div className="flex flex-col items-center justify-start text-center">
            <h3 className="font-black text-xl sm:text-2xl text-[#2C221E] uppercase tracking-wider mb-3">
              HORARIOS
            </h3>

            <div className="space-y-3 text-sm font-extrabold uppercase text-center">
              <div>
                <p className="text-[#8C4F18] font-black text-xs tracking-wider">LUNES A VIERNES</p>
                <p className="text-[#EA7C12] text-base sm:text-lg">09:00 A 19:00 HS.</p>
              </div>

              <div>
                <p className="text-[#8C4F18] font-black text-xs tracking-wider">SÁBADOS</p>
                <p className="text-[#EA7C12] text-base sm:text-lg">10:00 A 14:00 HS.</p>
              </div>
            </div>

            {/* Amigos de los animales badge */}
            <div className="mt-4 px-3 py-1 bg-black text-white rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <span>🐾 AMIGOS DE LOS ANIMALES</span>
            </div>
          </div>

          {/* COLUMN 2: UBICACIÓN */}
          <div className="flex flex-col items-center justify-start text-center">
            <h3 className="font-black text-xl sm:text-2xl text-[#2C221E] uppercase tracking-wider mb-3">
              UBICACIÓN
            </h3>

            <div className="space-y-1 text-sm font-extrabold text-[#EA7C12] uppercase leading-snug text-center">
              <p className="text-base sm:text-lg text-[#2C221E]">LARREA 777</p>
              <p className="text-[#EA7C12]">BALVANERA / RECOLETA</p>
              <p className="text-[#8C4F18] text-xs">BUENOS AIRES - ARGENTINA</p>
            </div>

            {/* Google Logo / Action Button */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#2C221E] hover:bg-[#42322C] text-white rounded-full text-xs font-black transition-colors shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#EA7C12]" />
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>

          {/* COLUMN 3: CONTACTO & FRANQUICIAS */}
          <div className="flex flex-col items-center justify-start text-center">
            <h3 className="font-black text-xl sm:text-2xl text-[#2C221E] uppercase tracking-wider mb-3">
              CONTACTO
            </h3>

            <div className="space-y-2 text-sm font-extrabold text-[#EA7C12] flex flex-col items-center text-center">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:underline text-[#EA7C12]"
              >
                <Instagram className="w-4 h-4 shrink-0 text-[#2C221E]" />
                <span>@mas11cafe</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:underline text-[#EA7C12]"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#2C221E]" />
                <span>+54 9 11 3191-6092</span>
              </a>

              <a
                href={`mailto:${STORE_INFO.email}`}
                className="flex items-center justify-center gap-2 hover:underline text-[#8C4F18] text-xs lowercase"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#2C221E]" />
                <span>mas11cafealpaso@gmail.com</span>
              </a>
            </div>

            {/* Orange Franchise Button */}
            {onOpenFranchise && (
              <button
                onClick={onOpenFranchise}
                id="info-local-franchise-btn"
                className="mt-4 px-6 py-2.5 bg-[#EA7C12] hover:bg-[#d86d0a] text-white rounded-full font-black text-xs uppercase tracking-widest shadow-md transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>FRANQUICIAS</span>
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Semicircular Smooth Curved Transition from White to Orange (#EA7C12) */}
      <div className="relative w-full bg-[#EA7C12]">
        <div className="relative w-full overflow-visible leading-none bg-white">
          <svg
            viewBox="0 0 1440 240"
            className="relative block w-full h-[140px] sm:h-[200px] md:h-[260px] text-[#EA7C12] fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,200 960,200 1440,0 L1440,240 L0,240 Z" />
          </svg>

          {/* Standalone Emblem Logo centered right over the middle of the curved line */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-y-1 sm:translate-y-2">
            <img
              src="https://lh3.googleusercontent.com/d/17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK"
              alt="+11 Café Brand Emblem"
              className="w-28 sm:w-40 md:w-48 lg:w-52 h-auto object-contain max-w-[80vw] transition-transform hover:scale-105 pointer-events-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://drive.google.com/thumbnail?id=17J7q1FAr4-G-HKY4s3GaF0tE1orBN9JK&sz=w1000';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

