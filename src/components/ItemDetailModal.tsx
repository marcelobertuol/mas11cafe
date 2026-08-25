import React, { useState } from 'react';
import { X, Coffee, Sparkles, MapPin, Clock, Flame } from 'lucide-react';
import { MenuItem } from '../types';
import { STORE_INFO } from '../data/coffeeData';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart?: (item: MenuItem, quantity: number) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const [size, setSize] = useState<'Chico' | 'Grande'>('Chico');
  const basePrice = (size === 'Grande' && item.priceGrande) ? item.priceGrande : item.price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#FFF8F0] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#6D4327]/15 max-h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover ${item.imagePosition || 'object-center'}`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8F0] via-transparent to-black/30" />
          
          {(item.id === 'mate-cocido-ahumado' || item.id === 'sopa-paraguaya' || item.id === 'cakepy' || item.id === 'cafe-grande-premio-amigo') && (
            <span className="absolute top-4 left-4 bg-[#6D4327] text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 border border-[#F49B1A]">
              <Flame className="w-3.5 h-3.5 text-[#F49B1A] fill-current animate-pulse" />
              NOVEDAD DE LA CASA
            </span>
          )}

          <div className="absolute bottom-3 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-[#F49B1A] uppercase tracking-wider bg-[#FFF8F0]/90 px-2.5 py-1 rounded-md">
                {item.prepTime} servido
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#2C221E] mt-1">
                {item.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          <p className="text-stone-600 leading-relaxed text-base">
            {item.description}
          </p>

          {item.flavorNotes && (
            <div className="bg-[#F2ECE4] p-3.5 rounded-xl flex items-center gap-2 text-xs font-medium text-[#6D4327]">
              <Sparkles className="w-4 h-4 text-[#F49B1A] shrink-0" />
              <span><strong>Notas de sabor / Detalle:</strong> {item.flavorNotes}</span>
            </div>
          )}

          {/* Size Choice display if priceGrande is available */}
          {item.priceGrande && (
            <div className="space-y-2">
              <label className="font-bold text-[#2C221E] block">Tamaños Disponibles</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSize('Chico')}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                    size === 'Chico'
                      ? 'border-[#F49B1A] bg-[#F49B1A]/10 text-[#2C221E]'
                      : 'border-[#6D4327]/15 bg-white text-stone-600'
                  }`}
                >
                  <div className="text-left">
                    <span className="block font-black">Chico</span>
                    <span className="text-[11px] text-stone-500 font-normal">Vaso estándar</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSize('Grande')}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                    size === 'Grande'
                      ? 'border-[#F49B1A] bg-[#F49B1A]/10 text-[#2C221E]'
                      : 'border-[#6D4327]/15 bg-white text-stone-600'
                  }`}
                >
                  <div className="text-left">
                    <span className="block font-black">Grande</span>
                    <span className="text-[11px] text-stone-500 font-normal">Vaso XL</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Location & Store Hours Banner */}
          <div className="bg-[#6D4327]/5 border border-[#6D4327]/15 p-4 rounded-2xl space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-[#6D4327]">
              <MapPin className="w-4 h-4 text-[#F49B1A]" />
              <span>Pedilo al paso en {STORE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-600 font-medium pl-6">
              <Clock className="w-3.5 h-3.5 text-[#6D4327]" />
              <span>{STORE_INFO.hours.weekdays} • {STORE_INFO.hours.saturday}</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 bg-white border-t border-[#6D4327]/10 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 bg-[#F2ECE4] hover:bg-[#EAE1D6] text-[#2C221E] font-bold text-xs sm:text-sm rounded-xl transition-all"
          >
            Cerrar
          </button>

          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 bg-[#F49B1A] hover:bg-[#E0890B] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4" />
            <span>Ver cómo llegar en Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};
