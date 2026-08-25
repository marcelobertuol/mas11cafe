import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

export const SpecialtyCoffeePdf: React.FC = () => {
  return (
    <section className="bg-[#2C221E] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-amber-900/30">
      
      {/* Background Subtle Warm Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#EA7C12]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#EA7C12]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Coffee Bag Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-amber-500/20 shadow-2xl bg-stone-900 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://lh3.googleusercontent.com/d/1rESjPWyp92dmkJhkUM4c94w2MUlkVESa"
                alt="Paquete de Café +COL Caturra 1700 msnm"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://drive.google.com/thumbnail?id=1rESjPWyp92dmkJhkUM4c94w2MUlkVESa&sz=w1000';
                }}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
                <span className="text-[10px] font-black uppercase text-[#EA7C12] tracking-widest block">
                  ORIGEN SELECCIONADO
                </span>
                <span className="text-xs font-bold text-white">
                  100% Arábico · Caturra 1700 msnm
                </span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Product Specs & Content */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-4">
            
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#EA7C12]" />
              <span>CAFÉ DE ESPECIALIDAD</span>
            </div>

            {/* Giant +COL Title */}
            <div className="leading-none">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase inline-flex items-baseline">
                <span className="text-[#EA7C12] font-black">+</span>
                <span className="text-white">COL</span>
              </h2>
            </div>

            {/* Subtitle Details */}
            <p className="text-xl sm:text-2xl font-black text-amber-100 uppercase tracking-wider">
              100% ARÁBICO · CATURRA
            </p>

            {/* Flavor Notes Quote */}
            <div className="py-2">
              <blockquote className="text-lg sm:text-xl font-serif italic text-amber-200/90 leading-snug border-l-4 border-[#EA7C12] pl-4 my-2 text-left">
                “Azúcar morena, almendras, caramelo y cítricos.”
              </blockquote>
            </div>

            {/* Altitude Badge */}
            <div className="inline-block bg-white/10 px-4 py-2 rounded-2xl border border-white/15">
              <span className="text-2xl font-black text-white tracking-tight">
                1700 <span className="text-sm font-bold text-amber-400">msnm</span>
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Google Drive Illustration (1385qqjj8clXntglEI9Q-7AMRzOkAGBVO) - Agrandada considerablemente */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:max-w-md lg:h-96 relative flex items-center justify-center p-2">
              <img
                src="https://drive.google.com/thumbnail?id=1385qqjj8clXntglEI9Q-7AMRzOkAGBVO&sz=w1000"
                alt="Ilustración +11 Café"
                className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/d/1385qqjj8clXntglEI9Q-7AMRzOkAGBVO';
                }}
              />
            </div>

            <p className="text-sm font-black text-amber-200/90 uppercase tracking-widest mt-2">
              Arte & Esencia +11
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
