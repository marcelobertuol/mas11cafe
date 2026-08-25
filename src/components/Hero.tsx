import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  Coffee, 
  ChevronRight, 
  Zap, 
  Plus, 
  Heart, 
  Flame, 
  Sun, 
  ShoppingBag,
  ExternalLink,
  Award,
  Compass
} from 'lucide-react';
import { STORE_INFO, MENU_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface HeroProps {
  onQuickAdd?: (item: MenuItem, quantity: number) => void;
  onOpenCart?: () => void;
  onSelectItem?: (item: MenuItem) => void;
}

type MoodOption = {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  item: MenuItem;
};

export const Hero: React.FC<HeroProps> = ({
  onQuickAdd,
  onOpenCart,
  onSelectItem,
}) => {
  // Find recommended menu items for mood options
  const flatWhite = MENU_ITEMS.find((i) => i.id === 'flat-white-signature') || MENU_ITEMS[0];
  const teEspecialidad = MENU_ITEMS.find((i) => i.id === 'te-negro-verde') || MENU_ITEMS[5];
  const latteItem = MENU_ITEMS.find((i) => i.id === 'latte-clasico') || MENU_ITEMS[4];
  const cakepyItem = MENU_ITEMS.find((i) => i.id === 'cakepy') || MENU_ITEMS[1];

  const moodOptions: MoodOption[] = [
    {
      id: 'energia',
      label: 'Pila Mañanera ⚡',
      icon: '⚡',
      tagline: 'Doble shot intenso para arrancar a full',
      item: flatWhite,
    },
    {
      id: 'refresco',
      label: 'Infusión Especial 🌿',
      icon: '🌿',
      tagline: 'Hojas seleccionadas de té de origen o mate cocido',
      item: teEspecialidad,
    },
    {
      id: 'dulce',
      label: 'Tarde Suave ☕',
      icon: '☕',
      tagline: 'Espresso suave con leche cremosa vaporizada',
      item: latteItem,
    },
    {
      id: 'cakepy',
      label: 'Momento CakePy 🧀',
      icon: '🧀',
      tagline: 'Bizcochuelo salado, húmedo y esponjoso a base de harina de maíz y queso criollo',
      item: cakepyItem,
    },
  ];

  const [activeMood, setActiveMood] = useState<MoodOption>(moodOptions[0]);
  const [cupsServedToday, setCupsServedToday] = useState(148);
  const soundTimerRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Counter animation pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setCupsServedToday((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Soft subtle ambient cafe sound on first user interaction (no UI button needed)
  useEffect(() => {
    let started = false;
    const playSubtleSound = () => {
      if (started) return;
      started = true;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.04, ctx.currentTime); // Very soft background level

        const masterFilter = ctx.createBiquadFilter();
        masterFilter.type = 'lowpass';
        masterFilter.frequency.setValueAtTime(1000, ctx.currentTime);

        masterFilter.connect(masterGain);
        masterGain.connect(ctx.destination);

        // Soft Lo-Fi / Jazz chord loop
        const chordProgressions = [
          [261.63, 329.63, 392.00, 493.88], // Cmaj7
          [220.00, 261.63, 329.63, 392.00], // Am7
          [146.83, 220.00, 261.63, 349.23], // Dm7
          [196.00, 246.94, 293.66, 349.23], // G7
        ];
        let step = 0;

        const playSubtleChord = () => {
          if (!ctx || ctx.state === 'closed') return;
          const now = ctx.currentTime;
          const notes = chordProgressions[step % chordProgressions.length];

          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const noteGain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);

            const startOffset = idx * 0.05;
            noteGain.gain.setValueAtTime(0.0001, now + startOffset);
            noteGain.gain.linearRampToValueAtTime(0.03 / (idx + 1), now + startOffset + 0.15);
            noteGain.gain.exponentialRampToValueAtTime(0.0001, now + startOffset + 2.8);

            osc.connect(noteGain);
            noteGain.connect(masterFilter);
            osc.start(now + startOffset);
            osc.stop(now + startOffset + 3.0);
          });
          step++;
        };

        playSubtleChord();
        soundTimerRef.current = window.setInterval(playSubtleChord, 4000);
      } catch (e) {
        console.error('Audio play error:', e);
      }
    };

    const handleFirstPointer = () => {
      playSubtleSound();
      window.removeEventListener('pointerdown', handleFirstPointer);
    };

    window.addEventListener('pointerdown', handleFirstPointer);

    return () => {
      window.removeEventListener('pointerdown', handleFirstPointer);
      if (soundTimerRef.current) clearInterval(soundTimerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-12 bg-[#FFF8F0] overflow-hidden text-[#2C221E]">
      
      {/* Subtle Background Decorative Graphic Shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-[#F49B1A]/10 via-[#6D4327]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Ticker Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#6D4327]/10 text-xs sm:text-sm font-semibold text-[#6D4327]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F49B1A] text-white text-xs font-black uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              Barista Activo
            </span>
            <span className="hidden sm:inline opacity-80">📍 Larrea 777, CABA • Recoleta / Balvanera</span>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#4285F4] border border-blue-200/60 font-extrabold text-xs hover:bg-blue-100 transition-colors"
              title="Ver en Google Maps"
            >
              <span>Google Maps 4.9 ★</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Counter Badge */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#6D4327]/15 shadow-xs">
              <Coffee className="w-4 h-4 text-[#F49B1A]" />
              <span className="font-extrabold text-[#2C221E]">{cupsServedToday}</span>
              <span className="opacity-70 text-xs">tazas hoy</span>
            </div>
          </div>
        </div>

        {/* ARTISTIC BENTO GRID MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* BENTO CARD 1: MAIN EDITORIAL HERO CARD (8 COLS) */}
          <div className="lg:col-span-8 relative rounded-[2.5rem] bg-[#2C221E] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[520px] border border-white/10 group">
            
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
                alt="+11 Café de especialidad Buenos Aires"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-75 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E] via-[#2C221E]/65 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C221E]/90 via-[#2C221E]/40 to-transparent" />
            </div>

            {/* Top Badge Overlay */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#F49B1A]" />
                <span>Café al Paso de Especialidad</span>
              </div>
              <div className="text-right text-xs font-semibold text-amber-100/80 uppercase tracking-widest hidden sm:block">
                Tostado Artesanal • CABA
              </div>
            </div>

            {/* Hero Main Headline */}
            <div className="relative z-10 my-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F49B1A] text-white text-xs font-extrabold mb-4 shadow-md">
                <Flame className="w-4 h-4 text-amber-100 animate-pulse" />
                <span>Novedad: Café Grande + Premio Perruno 🐶 • CakePy & Mbeyú</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.98] mb-4 text-white">
                El sabor que acompaña <span className="text-[#F49B1A] underline decoration-[#F49B1A]/40 decoration-wavy underline-offset-8">tu ritmo.</span>
              </h1>
              <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed opacity-95 max-w-xl">
                CakePy, Mbeyú calentito, Chipitas Paraguayas, Medialunas recién horneadas, Té y Mate Cocido al paso en <strong className="text-white font-bold">Larrea 777</strong>.
              </p>
            </div>

            {/* DYNAMIC INTERACTIVE MOOD PICKER INSIDE BENTO CARD */}
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 mt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest font-black text-[#F49B1A] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  ¿Qué vibra buscás hoy?
                </span>
                <span className="text-[11px] text-stone-300 hidden sm:inline">Elegí y pedí con 1 click</span>
              </div>

              {/* Mood Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {moodOptions.map((m) => {
                  const isActive = activeMood.id === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setActiveMood(m)}
                      id={`mood-tab-${m.id}`}
                      className={`px-3 py-2 rounded-xl text-xs font-bold text-left transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#F49B1A] text-white shadow-lg shadow-[#F49B1A]/30 scale-102'
                          : 'bg-white/10 text-stone-200 hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      <span className="text-sm">{m.icon}</span>
                      <span className="truncate">{m.label.split(' ')[0]} {m.label.split(' ')[1]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Mood Result Box */}
              <div className="bg-black/30 backdrop-blur-md rounded-xl p-3.5 border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={activeMood.item.image}
                    alt={activeMood.item.name}
                    className="w-12 h-12 rounded-xl object-cover border border-white/20 shrink-0 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-extrabold text-white text-sm sm:text-base leading-tight">
                        {activeMood.item.name}
                      </p>
                      <span className="text-xs font-black text-[#F49B1A] bg-[#F49B1A]/20 px-2 py-0.5 rounded-md">
                        {activeMood.item.prepTime}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 line-clamp-2 mt-0.5">
                      {activeMood.item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
                  {onSelectItem && (
                    <button
                      onClick={() => onSelectItem(activeMood.item)}
                      id="hero-customize-recommended-button"
                      className="px-4 py-2 bg-[#F49B1A] hover:bg-[#E0890B] text-white rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95"
                    >
                      <Coffee className="w-4 h-4" />
                      <span>Ver Detalle</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 mt-6">
              <a
                href="#carta"
                id="hero-ver-carta-btn"
                className="px-7 py-3.5 bg-[#F49B1A] hover:bg-[#E0890B] text-white font-bold text-sm rounded-full shadow-lg shadow-[#F49B1A]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Ver Carta Completa</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-como-llegar-btn"
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 font-bold text-sm rounded-full transition-all hover:scale-105 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#F49B1A]" />
                <span>Cómo llegar</span>
              </a>
            </div>

          </div>

          {/* BENTO COLUMN 2: RIGHT SUB-CARDS (4 COLS) */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* BENTO SUB-CARD 1: FAVORITOS DE LA CASA / MENÚ RÁPIDO */}
            <div className="bg-white rounded-[2.5rem] p-7 shadow-sm border border-[#6D4327]/10 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#F49B1A]">
                    Favoritos de la Casa
                  </span>
                  <span className="text-xs text-[#6D4327] font-bold bg-[#FFF8F0] px-2.5 py-1 rounded-full border border-[#6D4327]/10">
                    Especialidad
                  </span>
                </div>
                <h2 className="text-2xl font-black text-[#2C221E] tracking-tight mb-4">
                  Los más pedidos en el mostrador
                </h2>

                <div className="space-y-3">
                  {MENU_ITEMS.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-[#6D4327]/10 pb-2.5 group cursor-pointer hover:bg-[#FFF8F0]/60 p-1.5 rounded-xl transition-colors"
                      onClick={() => onSelectItem && onSelectItem(item)}
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-10 h-10 rounded-lg object-cover ${item.imagePosition || 'object-center'} border border-[#6D4327]/10 shrink-0`}
                        />
                        <div>
                          <p className="font-bold text-sm text-[#2C221E] group-hover:text-[#F49B1A] transition-colors leading-tight">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-stone-500 font-medium">{item.prepTime} • {item.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-[#F49B1A] group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pet Friendly Note Banner */}
              <div className="mt-5 bg-[#FFF8F0] p-4 rounded-2xl flex items-center gap-3 border border-[#6D4327]/10">
                <div className="w-10 h-10 bg-[#6D4327] rounded-xl flex items-center justify-center text-white shrink-0 text-lg shadow-xs">
                  🐾
                </div>
                <div>
                  <p className="text-xs font-black text-[#6D4327] uppercase tracking-wider">
                    100% Pet Friendly
                  </p>
                  <p className="text-[11px] text-stone-600 font-normal">
                    Agua fresca & premios gratis para tu mascota en +11.
                  </p>
                </div>
              </div>
            </div>

            {/* BENTO SUB-CARD 2: PRINCIPALES DESTACADOS */}
            <div className="bg-[#6D4327] rounded-[2.5rem] p-7 text-white relative overflow-hidden shadow-lg flex flex-col justify-between border border-[#F49B1A]/30">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-7xl font-black select-none pointer-events-none">
                ☕
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black bg-[#F49B1A] text-white px-3 py-1 rounded-full inline-block mb-3 shadow-xs">
                  ⭐ Principales de la Casa
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3 text-white">
                  Sabor Tradicional & Artesanal
                </h2>
                <p className="text-xs text-stone-200 font-normal mb-4 leading-relaxed">
                  CakePy, Mbeyú Típico, Chipitas Paraguayas, Clásicas Medialunas, Té de Especialidad y Mate Cocido preparados en el día.
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs text-amber-200 font-bold">
                  Larrea 777 • Café al Paso
                </span>

                <a
                  href="#carta"
                  className="bg-[#F49B1A] hover:bg-[#E0890B] text-white px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5"
                >
                  <span>Ir a la Carta</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM BENTO QUICK STATS STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          
          <div className="bg-white rounded-3xl p-5 border border-[#6D4327]/10 flex items-center gap-4 shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#6D4327] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-6 h-6 text-[#F49B1A]" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Ubicación Estratégica</p>
              <p className="text-sm font-extrabold text-[#2C221E]">Larrea 777, CABA</p>
              <p className="text-[11px] text-stone-500 font-medium">Recoleta / Balvanera</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-[#6D4327]/10 flex items-center gap-4 shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#F49B1A]/15 text-[#F49B1A] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Horario de Atención</p>
              <p className="text-sm font-extrabold text-[#2C221E]">Lun—Vie 9 a 19hs</p>
              <p className="text-[11px] text-stone-500 font-medium">Sáb 10 a 14hs • Dom Cerrado</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-[#6D4327]/10 flex items-center gap-4 shadow-2xs hover:shadow-sm transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#6D4327]/10 text-[#6D4327] flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-[#F49B1A]" />
            </div>
            <div>
              <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Velocidad al Paso</p>
              <p className="text-sm font-extrabold text-[#2C221E]">Listos en &lt; 3 minutos</p>
              <p className="text-[11px] text-stone-500 font-medium">Para llevar al instante</p>
            </div>
          </div>

          <div className="bg-[#6D4327] rounded-3xl p-5 text-white flex items-center justify-between shadow-2xs">
            <div>
              <p className="text-xs text-amber-200/80 font-bold uppercase tracking-wider">Reseñas en Google</p>
              <p className="text-sm font-extrabold text-amber-300">5.0 ★★★★★</p>
              <p className="text-[11px] text-stone-300 font-medium">Calificación máxima</p>
            </div>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F49B1A] text-white flex items-center justify-center font-bold hover:scale-110 transition-transform shadow-md"
              title="Ver en Google Maps"
            >
              ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
