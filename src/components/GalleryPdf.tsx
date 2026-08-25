import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryPdf: React.FC = () => {
  // Real menu food & drinks gallery items (clean product photos without price overlays)
  const galleryImages = [
    {
      id: 'mbeyu',
      title: 'Mbeyú Típico',
      src: 'https://drive.google.com/thumbnail?id=1POW-XJZJvczS8ue_vcmCNp-EMLz_o8IN&sz=w1000',
      fallback: 'https://lh3.googleusercontent.com/d/1POW-XJZJvczS8ue_vcmCNp-EMLz_o8IN',
    },
    {
      id: 'prod1',
      title: 'Especialidades de la Casa',
      src: 'https://drive.google.com/thumbnail?id=1UprA3PKNSIWp4LMwKE_6RhO4eebaQKx2&sz=w1000',
      fallback: 'https://lh3.googleusercontent.com/d/1UprA3PKNSIWp4LMwKE_6RhO4eebaQKx2',
    },
    {
      id: 'prod2',
      title: 'Sabor Artesanal',
      src: 'https://drive.google.com/thumbnail?id=1ffebajHRYeG9MKHAPkpkOI-HABZZr-l4&sz=w1000',
      fallback: 'https://lh3.googleusercontent.com/d/1ffebajHRYeG9MKHAPkpkOI-HABZZr-l4',
    },
    {
      id: 'flatwhite',
      title: 'Flat White +11',
      src: 'https://drive.google.com/thumbnail?id=1GO1AfHmBYk6YnWIF3GihQqYYGJbQvi8J&sz=w1000',
      fallback: 'https://lh3.googleusercontent.com/d/1GO1AfHmBYk6YnWIF3GihQqYYGJbQvi8J',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#EA7C12] text-white pt-2 sm:pt-4 pb-16 sm:pb-20 select-none overflow-x-clip">
      
      {/* Preload hidden images to prevent any loading flash on transition */}
      <div className="hidden" aria-hidden="true">
        {galleryImages.map((item) => (
          <React.Fragment key={item.id}>
            <img src={item.src} alt="" referrerPolicy="no-referrer" />
            <img src={item.fallback} alt="" referrerPolicy="no-referrer" />
          </React.Fragment>
        ))}
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-32 sm:pt-4">
        
        {/* Title Centered with flanking enlarged illustrations positioned higher up */}
        <div className="relative text-center mb-14 sm:mb-14">
          
          {/* LADO IZQUIERDO / SUPERIOR: ILUSTRACIÓN NUEVA (levemente a la derecha en web) */}
          <div className="absolute -left-14 sm:-left-16 md:-left-26 lg:-left-40 xl:-left-50 -top-38 sm:top-auto sm:-bottom-21 md:-bottom-28 lg:-bottom-34 xl:-bottom-46 z-20 pointer-events-none">
            <img
              src="https://drive.google.com/thumbnail?id=1dbRPo9nqE5XH-R4lsrxoQu6uthCQeg-D&sz=w1000"
              alt="Ilustración +11"
              className="w-64 sm:w-64 md:w-80 lg:w-96 xl:w-[420px] h-auto object-contain drop-shadow-xl transform -rotate-6 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1dbRPo9nqE5XH-R4lsrxoQu6uthCQeg-D';
              }}
            />
          </div>

          {/* LADO DERECHO: TAZAS DE CAFÉ */}
          <div className="absolute -right-4 sm:-right-3 md:-right-6 lg:-right-10 -top-36 sm:top-auto sm:-bottom-9 md:-bottom-13 lg:-bottom-17 xl:-bottom-20 z-20 pointer-events-none">
            <img
              src="https://drive.google.com/thumbnail?id=1JjnSAnTyUuyBwllamgxavJLpJq4eGrrD&sz=w800"
              alt="Tazas de Café +11"
              className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto object-contain drop-shadow-2xl transform rotate-12 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://lh3.googleusercontent.com/d/1JjnSAnTyUuyBwllamgxavJLpJq4eGrrD';
              }}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white drop-shadow-sm relative z-20">
            GALERÍA DE FOTOS
          </h2>
          <div className="w-16 h-1 bg-white/80 mx-auto mt-3 rounded-full relative z-20" />
        </div>

        {/* Gallery Carousel Grid */}
        <div className="relative px-8 sm:px-12">
          
          {/* Desktop 3 Columns Carousel - Pass through 3 items at a time */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const item = galleryImages[(currentIndex + offset) % galleryImages.length];
              return (
                <div
                  key={`${item.id}-${offset}`}
                  className="group relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white transition-all duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover bg-white transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = item.fallback;
                    }}
                  />
                  {/* Subtle Title Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                    <span className="text-xs font-black tracking-wide uppercase drop-shadow-sm">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Single Photo Carousel - Pre-rendered stack for instant transitions without orange flash */}
          <div className="md:hidden relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white [webkit-tap-highlight-color:transparent]">
            {galleryImages.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-300 ease-in-out bg-white ${
                  currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover bg-white"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = item.fallback;
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-center justify-between">
                  <span className="text-xs font-black tracking-wide uppercase drop-shadow-sm">{item.title}</span>
                  <span className="text-[10px] font-extrabold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">{idx + 1} / {galleryImages.length}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Side Carousel Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#EA7C12] hover:bg-amber-50 shadow-2xl flex items-center justify-center transition-all border-2 border-white z-20 hover:scale-110 active:scale-95 [webkit-tap-highlight-color:transparent] outline-none"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-7 h-7 stroke-[3]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#EA7C12] hover:bg-amber-50 shadow-2xl flex items-center justify-center transition-all border-2 border-white z-20 hover:scale-110 active:scale-95 [webkit-tap-highlight-color:transparent] outline-none"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-7 h-7 stroke-[3]" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6 [webkit-tap-highlight-color:transparent]">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-white' : 'w-2.5 bg-white/40'
              }`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

