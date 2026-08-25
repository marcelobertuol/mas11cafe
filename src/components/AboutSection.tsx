import React from 'react';
import { Coffee, Heart, Zap, ShieldCheck, MapPin, Award, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface AboutSectionProps {
  onOpenFranchise?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenFranchise }) => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-[#FFF8F0] relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F49B1A]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#6D4327]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-column layout with generous gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Main Image & Secondary Layer */}
          <div className="relative pb-6 lg:pb-0">
            {/* Main Local Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#6D4327]/10 aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="Local de +11 Mastí Café al paso en Larrea 777"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlaid Secondary Image Badge */}
            <div className="absolute -bottom-5 right-2 sm:right-6 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFF8F0] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
                alt="Barista de Mastí Café preparando café"
                className="w-full h-32 sm:h-36 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 left-2 sm:left-4 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#6D4327]/10 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#F49B1A] text-white flex items-center justify-center font-black text-lg sm:text-xl">
                +11
              </div>
              <div>
                <p className="font-bold text-xs uppercase tracking-wider text-[#6D4327]">Larrea 777</p>
                <p className="text-xs text-stone-500 font-medium">Once • Balvanera</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-4">
              <Coffee className="w-4 h-4 text-[#F49B1A]" />
              <span>Café al paso • Tu pausa en el Once</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C221E] tracking-tight leading-tight mb-6">
              Experiencia urbana, dinámica y multicultural.
            </h2>

            {/* Exact Manifesto Copy from Flyer Document */}
            <div className="space-y-4 text-stone-700 text-base leading-relaxed font-normal mb-8">
              <p className="bg-white/80 p-4 rounded-2xl border-l-4 border-[#F49B1A] shadow-xs">
                En el barrio más vibrante y cosmopolita de Buenos Aires, nace un nuevo concepto de café al paso, diseñado para quienes viven la ciudad a mil por hora.
              </p>
              <p>
                Somos la parada obligatoria para la comunidad universitaria y los trabajadores de la zona que buscan calidad sin perder tiempo.
              </p>
              <p className="font-semibold text-[#6D4327]">
                Fusionamos la rapidez del servicio con la calidez de un buen producto, ofreciendo una experiencia urbana, dinámica y multicultural.
              </p>
            </div>

            {/* Specialty Bean Card - CATURRA 1700 msnm */}
            <div className="p-5 rounded-2xl bg-[#2C221E] text-white shadow-xl mb-6 relative overflow-hidden border border-amber-500/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#F49B1A] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md mb-2">
                    <Sparkles className="w-3 h-3" />
                    GRANO DESTACADO DE AUTOR
                  </div>
                  <h3 className="text-2xl font-black text-amber-100 tracking-tight">
                    CATURRA <span className="text-sm font-bold text-amber-300/80">1700 msnm</span>
                  </h3>
                  <p className="text-xs text-amber-100/90 italic mt-1 font-serif">
                    "Azúcar morena, almendras, caramelo y cítricos."
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Coffee className="w-6 h-6 text-[#F49B1A]" />
                </div>
              </div>
            </div>

            {/* Franchise Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#F49B1A] to-[#D8820B] text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-md inline-block mb-1">
                  FRANQUICIAS +11 MASTÍ CAFÉ
                </span>
                <p className="text-sm font-bold leading-tight">
                  ¿Te gustaría abrir tu propio Mastí Café al Paso?
                </p>
              </div>

              <button
                onClick={onOpenFranchise}
                id="about-franchise-button"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#2C221E] hover:bg-[#1A1412] text-white rounded-xl text-xs font-black transition-all shadow-md flex items-center justify-center gap-1.5 group shrink-0"
              >
                <Building2 className="w-4 h-4 text-[#F49B1A]" />
                <span>Info Franquicias</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
