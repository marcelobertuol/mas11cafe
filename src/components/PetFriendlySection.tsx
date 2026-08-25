import React from 'react';
import { Heart, Sparkles, ShieldCheck, Smile } from 'lucide-react';

export const PetFriendlySection: React.FC = () => {
  return (
    <section id="pet-friendly" className="py-20 bg-[#F6ECE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#6D4327]/10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left: Text & Amenities */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F0] text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-4 border border-[#6D4327]/10">
              <Heart className="w-4 h-4 text-[#F49B1A] fill-current" />
              <span>100% Pet Friendly</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2C221E] tracking-tight leading-tight mb-4">
              Tu mejor amigo también es parte de +11.
            </h2>

            <p className="font-sans text-stone-600 text-base leading-relaxed mb-6">
              En +11 Café al Paso las mascotas son siempre bienvenidas. Podés entrar con tu perro sin inconvenientes mientras pedís tu café preferido.
            </p>

            {/* Amenities Grid */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F49B1A]/20 text-[#F49B1A] flex items-center justify-center shrink-0 font-bold">
                  🐾
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#2C221E]">Entrá con tu Mascota</h4>
                  <p className="text-xs text-stone-500">Podés ingresar tranquilamente al local mientras te preparamos el pedido.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#6D4327]/20 text-[#6D4327] flex items-center justify-center shrink-0 font-bold">
                  💧
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#2C221E]">Bebedero Disponible</h4>
                  <p className="text-xs text-stone-500">Agua fresca siempre lista para que tu mascota se hidrate durante el paseo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F49B1A]/20 text-[#F49B1A] flex items-center justify-center shrink-0 font-bold">
                  📸
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#2C221E]">¡Foto para nuestras Historias!</h4>
                  <p className="text-xs text-stone-500">Si querés, le sacamos una foto a tu mascota y la subimos a la historia de Instagram de <strong>@mas11cafe</strong>.</p>
                </div>
              </div>
            </div>

            {/* Novelty Callout Box */}
            <div className="bg-[#FFF8F0] border-2 border-[#F49B1A] rounded-2xl p-4 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🎁🐶</span>
                <div>
                  <span className="inline-flex items-center gap-1 bg-[#F49B1A] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1">
                    <Sparkles className="w-3 h-3 text-white fill-current" />
                    ¡NOVEDAD EN LA CARTA!
                  </span>
                  <h4 className="font-extrabold text-[#2C221E] text-sm">Café grande para vos, premio para tu mejor amigo</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Pedí tu café grande y, si venís acompañado de tu perro ¡Nosotros invitamos la golosina! Un buen café se disfruta de a dos, ¡Los esperamos!
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-[#6D4327]/10 bg-stone-100">
              <img
                src="https://lh3.googleusercontent.com/d/1omlmX04BGttLUFwDbb7zdFOkdLasu23L"
                alt="Café grande premio para tu mejor amigo"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#6D4327] text-white p-4 rounded-2xl shadow-xl font-bold text-xs flex items-center gap-2">
              <span className="text-xl">🐶</span>
              <div>
                <p className="font-extrabold text-white text-sm">Amigos de cuatro patas</p>
                <p className="text-stone-300 text-[11px]">Bienvenidos los 365 días del año</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
