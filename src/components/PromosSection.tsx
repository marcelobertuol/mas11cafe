import React from 'react';
import { Tag, Sparkles, Check, ArrowRight, Flame } from 'lucide-react';
import { PROMO_COMBOS } from '../data/coffeeData';
import { PromoCombo } from '../types';

interface PromosSectionProps {
  onClaimPromo: (promo: PromoCombo) => void;
}

export const PromosSection: React.FC<PromosSectionProps> = ({ onClaimPromo }) => {
  return (
    <section id="promociones" className="py-20 bg-[#F6ECE1] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm border border-[#6D4327]/10">
            <Tag className="w-4 h-4 text-[#F49B1A]" />
            <span>Descuentos & Combos del Día</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2C221E] tracking-tight leading-tight mb-4">
            Promociones Especiales
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-normal">
            Combinaciones ideales pensadas para tu desayuno, almuerzo ligero o pausa de la tarde.
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROMO_COMBOS.map((promo) => {
            return (
              <div
                key={promo.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#6D4327]/10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-100">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className={`w-full h-full object-cover ${promo.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-[#F49B1A] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    {promo.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#2C221E] mb-1">
                      {promo.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F49B1A] uppercase tracking-wider mb-3">
                      {promo.subtitle}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm mb-4 leading-relaxed">
                      {promo.description}
                    </p>

                    {/* Included Items Checklist */}
                    <div className="space-y-2 mb-6 bg-[#FFF8F0] p-3.5 rounded-2xl border border-[#6D4327]/10">
                      <p className="text-[11px] font-bold text-[#6D4327] uppercase tracking-wider">Incluye:</p>
                      {promo.includedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#2C221E] font-medium">
                          <div className="w-4 h-4 rounded-full bg-[#F49B1A]/20 text-[#F49B1A] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-[#6D4327]/10 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFF8F0] border border-[#6D4327]/10 text-[#6D4327] font-extrabold text-xs rounded-xl">
                      <Sparkles className="w-3.5 h-3.5 text-[#F49B1A]" />
                      <span>Combo Especial</span>
                    </div>

                    <a
                      href="#ubicacion"
                      className="px-4 py-2.5 bg-[#6D4327] hover:bg-[#4A2B18] text-white rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Pedilo en el local</span>
                      <ArrowRight className="w-4 h-4 text-[#F49B1A]" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Reusable Mug Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#6D4327] to-[#4A2B18] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F49B1A] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              ☕
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                ¿Traés tu propio vaso reutilizable o mug térmico?
              </h4>
              <p className="text-stone-300 text-xs sm:text-sm mt-1">
                Te hacemos un <strong className="text-[#F49B1A]">10% de descuento directo</strong> en cualquier café de la carta. ¡Cuidamos el planeta juntos!
              </p>
            </div>
          </div>
          <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold text-amber-200 border border-white/20 whitespace-nowrap">
            10% OFF en caja
          </span>
        </div>

      </div>
    </section>
  );
};
