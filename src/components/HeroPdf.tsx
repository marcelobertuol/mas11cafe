import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface HeroPdfProps {
  onOpenFranchise?: () => void;
}

export const HeroPdf: React.FC<HeroPdfProps> = ({ onOpenFranchise }) => {
  const heroPhotos = [
    {
      id: 'photo1',
      src: 'https://lh3.googleusercontent.com/d/1mBr6q4SDcmwHzssVBnND4ZjxP-FWwKWI',
      fallback: 'https://drive.google.com/thumbnail?id=1mBr6q4SDcmwHzssVBnND4ZjxP-FWwKWI&sz=w1000',
      alt: 'Local y ambiente de +11 Café al Paso 1'
    },
    {
      id: 'photo2',
      src: 'https://lh3.googleusercontent.com/d/1Au4sdvJrck-00kkB2mnHcl_3eIJZiWlP',
      fallback: 'https://drive.google.com/thumbnail?id=1Au4sdvJrck-00kkB2mnHcl_3eIJZiWlP&sz=w1000',
      alt: 'Local y ambiente de +11 Café al Paso 2'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroPhotos.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? heroPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroPhotos.length);
  };

  return (
    <section className="relative w-full bg-white text-[#2C221E]">
      {/* Top Floating Utility Bar (Non-intrusive) */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto">
        <div className="flex items-center gap-2 text-white/90 text-xs font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Abierto hoy:</span>
          <span className="font-bold">{STORE_INFO.hours.weekdays}</span>
        </div>

        <div className="flex items-center gap-3">
          {onOpenFranchise && (
            <button
              onClick={onOpenFranchise}
              className="px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Franquicias
            </button>
          )}
        </div>
      </div>

      {/* Panoramic Coffee Shop Image Container with Auto-Changing Photos */}
      <div className="relative w-full h-[55vh] min-h-[400px] max-h-[650px] overflow-hidden bg-stone-900">
        {heroPhotos.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = photo.fallback;
            }}
          />
        ))}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-10" />

        {/* Manual Slide Controls */}
        <div className="absolute inset-x-3 sm:inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-none">
          <button
            onClick={handlePrev}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all pointer-events-auto border border-white/20"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center transition-all pointer-events-auto border border-white/20"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-24 sm:bottom-36 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {heroPhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === activeIndex ? 'bg-amber-500 w-6' : 'bg-white/60 hover:bg-white w-2.5'
              }`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>

        {/* Large Semicircular Bottom Curve Cutout */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg
            viewBox="0 0 1440 200"
            className="relative block w-full h-[100px] sm:h-[150px] md:h-[190px] text-white fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C480,240 960,240 1440,0 L1440,200 L0,200 Z" />
          </svg>
        </div>
      </div>

      {/* Brand Logo Centered in White Area */}
      <div className="relative z-20 -mt-24 sm:-mt-36 md:-mt-48 pb-0 flex flex-col items-center justify-center text-center px-4">
        {/* Standalone Extra Large Logo without white circle */}
        <div className="flex items-center justify-center transition-transform hover:scale-105 my-0">
          <img
            src="https://lh3.googleusercontent.com/d/1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V"
            alt="+11 Café al Paso Logo"
            className="w-72 sm:w-[500px] md:w-[620px] lg:w-[720px] max-w-[90vw] h-auto object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://drive.google.com/thumbnail?id=1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V&sz=w1000';
            }}
          />
        </div>
      </div>
    </section>
  );
};
