import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Bus, Train, Compass, Star, MessageSquare, ThumbsUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6ECE1] text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-3">
            <MapPin className="w-4 h-4 text-[#F49B1A]" />
            <span>Encuéntranos en CABA</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2C221E] tracking-tight leading-tight mb-4">
            Ubicación & Reseñas en Google Maps
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-normal">
            Estamos estratégicamente ubicados en Larrea 777, entre Av. Córdoba y Paraguay, en el límite entre Recoleta y Balvanera.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-lg border border-[#6D4327]/10 space-y-6">
            
            {/* Address box */}
            <div className="flex items-start gap-4 pb-6 border-b border-[#6D4327]/10">
              <div className="w-12 h-12 rounded-2xl bg-[#F49B1A] text-white flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#F49B1A] uppercase tracking-wider">Dirección Exacta</p>
                <h3 className="font-heading font-extrabold text-2xl text-[#2C221E] mt-0.5">
                  Larrea 777
                </h3>
                <p className="text-stone-500 text-xs mt-1 font-medium">
                  CABA (Ciudad Autónoma de Buenos Aires) • Recoleta / Balvanera
                </p>
              </div>
            </div>

            {/* Google Rating Summary Badge */}
            <div className="bg-[#FFF8F0] p-4 rounded-2xl border border-[#6D4327]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4285F4] text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                  G
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-stone-900 text-base">4.9</span>
                    <div className="flex text-amber-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {STORE_INFO.googleReviewCount}+ opiniones en Google Maps
                  </p>
                </div>
              </div>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#4285F4] hover:underline flex items-center gap-1"
              >
                <span>Ver ficha</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Live Business Hours Status */}
            <div className="bg-[#FFF8F0] p-4 rounded-2xl border border-[#6D4327]/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6D4327] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#F49B1A]" />
                  Horarios de Atención
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Abierto ahora
                </span>
              </div>
              <div className="text-xs text-[#2C221E] space-y-1 pt-1 font-medium">
                <p className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <strong className="text-[#6D4327]">08:00 a 19:30 hs</strong>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <strong className="text-[#6D4327]">10:00 a 14:00 hs</strong>
                </p>
                <p className="flex justify-between">
                  <span>Domingos:</span>
                  <strong className="text-stone-400">Cerrado</strong>
                </p>
              </div>
            </div>

            {/* How to get there / Transit */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-[#2C221E] uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#F49B1A]" />
                ¿Cómo llegar en transporte público?
              </p>

              <div className="grid grid-cols-1 gap-2 text-xs text-stone-600">
                <div className="flex items-center gap-2 bg-[#F2ECE4] p-2.5 rounded-xl font-medium">
                  <Train className="w-4 h-4 text-[#6D4327] shrink-0" />
                  <span><strong>Subte H:</strong> Estación Córdoba (a 2 cuadras)</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F2ECE4] p-2.5 rounded-xl font-medium">
                  <Train className="w-4 h-4 text-[#6D4327] shrink-0" />
                  <span><strong>Subte D / H:</strong> Estación Santa Fe - Pueyrredón (a 3 cuadras)</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F2ECE4] p-2.5 rounded-xl font-medium">
                  <Bus className="w-4 h-4 text-[#6D4327] shrink-0" />
                  <span><strong>Colectivos:</strong> 12, 29, 39, 68, 95, 106, 109, 132, 152</span>
                </div>
              </div>
            </div>

            {/* Open Google Maps Button */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="open-google-maps-button"
              className="w-full py-4 bg-[#F49B1A] hover:bg-[#E0890B] text-white rounded-2xl font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </a>

          </div>

          {/* Interactive Map Embed Container (7 cols) */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl shadow-lg border border-[#6D4327]/10 overflow-hidden relative group">
            
            {/* Custom Styled Map Frame */}
            <div className="w-full h-[450px] lg:h-[520px] rounded-2xl overflow-hidden relative">
              <iframe
                title="Mapa Larrea 777 CABA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.453303792019!2d-58.40121112347702!3d-34.59902695691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9098733b8b%3A0xc3911b6d13db79ef!2sLarrea%20777%2C%20C1058AAO%20CABA!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full grayscale-[10%] contrast-[105%]"
              />

              {/* Floating Pin Card on top of map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#6D4327]/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F49B1A] text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                  +11
                </div>
                <div>
                  <p className="font-extrabold text-xs text-[#2C221E]">+11 Café al Paso</p>
                  <p className="text-[11px] text-stone-500 font-medium">Larrea 777, CABA</p>
                </div>
              </div>

              {/* Floating Direct Maps link at bottom right */}
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#2C221E] text-white hover:bg-[#6D4327] px-4 py-2.5 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Abrir ubicación directa</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F49B1A]" />
              </a>
            </div>

          </div>

        </div>

        {/* GOOGLE MAPS DIRECT REVIEWS BANNER */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-[#6D4327]/10 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#4285F4] font-extrabold text-xs uppercase tracking-wider mb-2">
                <Star className="w-4 h-4 fill-[#4285F4]" />
                <span>Reseñas Oficiales de Google Maps</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2C221E] tracking-tight">
                Leé las últimas opiniones directamente en Google
              </h3>
              <p className="text-stone-500 text-sm mt-1 max-w-xl">
                Contamos con una calificación perfecta de <strong className="text-stone-900 font-bold">5.0 ★★★★★</strong> en Google Maps. Accedé para ver las opiniones reales de los clientes y vecinos que pasan por Larrea 777.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="leave-google-review-btn"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#FFF8F0] hover:bg-[#F2ECE4] text-[#6D4327] border border-[#6D4327]/20 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#F49B1A]" />
                <span>Escribir una Opinión</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="see-all-google-reviews-btn"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#4285F4] hover:bg-[#3367D6] text-white rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
              >
                <span>Ver Reseñas en Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

