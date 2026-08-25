import React from 'react';
import { MapPin, Clock, Instagram, Heart, ExternalLink, MessageCircle, Building2 } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface FooterProps {
  onOpenFranchise?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFranchise }) => {
  return (
    <footer className="bg-[#2C221E] text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Instagram & Franchise Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-0.5 rounded-3xl shadow-2xl">
          <div className="bg-[#2C221E] rounded-[23px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                <Instagram className="w-3.5 h-3.5" />
                <span>Seguinos en Instagram</span>
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-3">
                Sumate a nuestra comunidad <span className="text-[#F49B1A]">{STORE_INFO.instagramHandle}</span>
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Seguinos para enterarte de nuestras novedades diarias, promos exclusivas, menús especiales y el día a día de nuestro café al paso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-banner-btn"
                className="px-6 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white rounded-2xl font-black text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Instagram className="w-4 h-4" />
                <span>Seguir en Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {onOpenFranchise && (
                <button
                  onClick={onOpenFranchise}
                  className="px-6 py-3.5 bg-[#F49B1A] hover:bg-[#E0890B] text-white rounded-2xl font-black text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Franquicias</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a href="#" className="inline-block bg-[#FFF8F0] p-3 rounded-2xl border border-white/20 shadow-md hover:scale-105 transition-transform">
              <img
                src="https://lh3.googleusercontent.com/d/1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V"
                alt="+11 Café al Paso"
                className="h-14 sm:h-16 w-auto max-w-[220px] object-contain drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://drive.google.com/thumbnail?id=1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V&sz=w500";
                }}
              />
            </a>

            <p className="text-stone-300 text-xs leading-relaxed font-normal">
              Café de especialidad urbano, cálido y veloz en el corazón del Once (Larrea 777). Granos seleccionados Caturra y pastelería artesanal.
            </p>

            <div className="pt-1">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-xs hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {STORE_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Location & Info */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#F49B1A]">
              Ubicación
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F49B1A] shrink-0 mt-0.5" />
                <div>
                  <span>Larrea 777, CABA<br />Once / Balvanera, Buenos Aires</span>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F49B1A] hover:underline font-bold text-[11px] mt-1.5"
                  >
                    <span>Ver en Google Maps (5.0 ★)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#F49B1A]">
              Horarios
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#F49B1A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Lunes a Viernes:</strong>
                  <span>08:00 a 19:30 hs</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#F49B1A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Sábados:</strong>
                  <span>10:00 a 14:00 hs</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-400">Domingos:</strong>
                  <span className="text-stone-400">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#F49B1A]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#sobre-nosotros" className="hover:text-white transition-colors">Sobre +11</a></li>
              <li><a href="#carta" className="hover:text-white transition-colors">Nuestra Carta</a></li>
              <li><a href="#el-local" className="hover:text-white transition-colors">El Local</a></li>
              <li><a href="#pet-friendly" className="hover:text-white transition-colors">Pet Friendly</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">Ubicación & Mapas</a></li>
              {onOpenFranchise && (
                <li>
                  <button onClick={onOpenFranchise} className="text-[#F49B1A] font-bold hover:underline">
                    Franquicias
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} +11 Mastí Café al Paso. Larrea 777, CABA. www.masticafe.com.ar</p>
          <p className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#F49B1A] fill-current" />
            <span>para los amantes del buen café en Buenos Aires.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
