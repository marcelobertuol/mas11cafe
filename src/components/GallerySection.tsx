import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = filter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const filterTabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'barista', label: 'Baristas' },
    { id: 'detalles', label: 'Detalles' },
    { id: 'fachada', label: 'Vereda & Fachada' },
  ];

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="el-local" className="py-24 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6ECE1] text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-3">
            <Camera className="w-4 h-4 text-[#F49B1A]" />
            <span>Galería del Espacio</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2C221E] tracking-tight leading-tight mb-4">
            El Local
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-normal">
            Un rincón pensado para la pausa diaria. Madera cálida, café fresco y luz natural en Larrea 777.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#6D4327] text-white shadow-md'
                  : 'bg-[#F2ECE4] text-stone-600 hover:bg-[#EAE1D6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#6D4327]/10 bg-stone-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase font-bold text-[#F49B1A] tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-extrabold text-xl mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-stone-300 text-xs font-normal line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-amber-200">
                  <Eye className="w-4 h-4" />
                  <span>Ver foto completa</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 z-10 w-11 h-11 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white max-w-xl">
              <h3 className="font-heading font-extrabold text-2xl text-[#F49B1A]">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-stone-300 text-sm mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
};
