import React, { useState, useMemo } from 'react';
import { Search, Plus, Sparkles, Clock, Filter, Check, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/coffeeData';
import { MenuItem, MenuCategory, DietaryTag, CartCustomization } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem, quantity: number, customization?: CartCustomization) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<DietaryTag | 'todos'>('todos');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'espresso', label: 'Espresso' },
    { id: 'latte', label: 'Latte' },
    { id: 'flat-white', label: 'Flat White' },
    { id: 'capuccino', label: 'Capuccino' },
    { id: 'cold-brew', label: 'Cold Brew' },
    { id: 'pasteleria', label: 'Pastelería' },
  ];

  const dietaryFilters: { id: DietaryTag | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Sin Filtros' },
    { id: 'destacado', label: '⭐ Destacados' },
    { id: 'artesanal', label: '🥖 Artesanal' },
    { id: 'sin-tacc', label: '🌾 Sin TACC' },
    { id: 'vegan', label: '🌱 Vegano' },
  ];

  // Filter items logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'todos' || item.category === activeCategory;
      
      // Search match
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.flavorNotes && item.flavorNotes.toLowerCase().includes(searchQuery.toLowerCase()));

      // Dietary tag match
      const tagMatch = selectedTag === 'todos' || (item.tags && item.tags.includes(selectedTag));

      return categoryMatch && searchMatch && tagMatch;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  return (
    <section id="carta" className="py-24 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6ECE1] text-[#6D4327] font-semibold text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#F49B1A]" />
            <span>Carta Digital Oficial</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#2C221E] tracking-tight leading-tight mb-4">
            Nuestra Carta
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg font-normal mb-6">
            Café de especialidad recién molido, leche vaporizada a la perfección y pastelería horneada cada mañana.
          </p>

          {/* Specialty Coffee Supplier Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-[#FFF8F0] via-white to-[#FFF8F0] px-5 py-2.5 rounded-2xl shadow-sm border-2 border-[#6D4327]/15">
            <span className="text-xs font-black text-[#6D4327] uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F49B1A] animate-ping" />
              Café de Especialidad Servido:
            </span>
            <div className="flex items-center gap-2 bg-[#FFF8F0] px-3 py-1 rounded-xl border border-[#6D4327]/10">
              <img
                src="https://lh3.googleusercontent.com/d/1dMmuzYhwUW4f0oZZFJJRNhyY12knLRjm"
                alt="SORO Café de Especialidad"
                className="h-9 w-auto object-contain max-w-[140px]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://drive.google.com/thumbnail?id=1dMmuzYhwUW4f0oZZFJJRNhyY12knLRjm&sz=w800";
                }}
              />
              <span className="font-extrabold text-sm text-[#6D4327] tracking-tight">SORO</span>
            </div>
          </div>
        </div>

        {/* Search & Secondary Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl shadow-sm border border-[#6D4327]/10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar espresso, cold brew, medialunas..."
              className="w-full pl-10 pr-4 py-2 bg-[#F2ECE4] text-xs sm:text-sm text-[#2C221E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F49B1A]/50 font-medium placeholder-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-[#6D4327] mr-1 shrink-0 hidden lg:inline">Etiquetas:</span>
            {dietaryFilters.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedTag === tag.id
                    ? 'bg-[#6D4327] text-white shadow-sm'
                    : 'bg-[#F2ECE4] text-stone-600 hover:bg-[#EAE1D6]'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Main Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#6D4327]/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#F49B1A] text-white shadow-md shadow-[#F49B1A]/20 scale-105'
                  : 'bg-white text-[#6D4327] border border-[#6D4327]/10 hover:bg-[#F2ECE4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#6D4327]/20 p-8">
            <p className="text-stone-500 text-lg font-semibold mb-2">No encontramos opciones para tu búsqueda</p>
            <p className="text-stone-400 text-sm mb-4">Intenta cambiando el filtro de categoría o limpiando la búsqueda.</p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
                setSelectedTag('todos');
              }}
              className="px-5 py-2 bg-[#F49B1A] text-white rounded-xl text-xs font-bold hover:bg-[#E0890B] transition-colors"
            >
              Mostrar toda la carta
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#6D4327]/10 flex flex-col group relative"
              >
                {/* Image & Badges */}
                <div
                  className="relative h-60 sm:h-64 w-full overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover ${item.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Novelty or Popular Tag */}
                  {item.id === 'cakepy' || item.id === 'cafe-grande-premio-amigo' ? (
                    <span className="absolute top-3 left-3 bg-[#F49B1A] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-amber-300">
                      <Flame className="w-3.5 h-3.5 text-white fill-current animate-pulse" />
                      NOVEDAD
                    </span>
                  ) : item.popular ? (
                    <span className="absolute top-3 left-3 bg-[#6D4327] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-[#F49B1A]">
                      <Sparkles className="w-3.5 h-3.5 text-[#F49B1A] fill-current" />
                      PRINCIPAL
                    </span>
                  ) : null}

                  {/* Prep Time Tag */}
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F49B1A]" />
                    {item.prepTime}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Item Title */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        onClick={() => onSelectItem(item)}
                        className="font-heading font-extrabold text-xl text-[#2C221E] group-hover:text-[#F49B1A] transition-colors cursor-pointer leading-tight"
                      >
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    {item.flavorNotes && (
                      <p className="text-[11px] font-medium text-[#6D4327] bg-[#F6ECE1] p-2 rounded-lg mb-4 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#F49B1A] shrink-0" />
                        <span className="truncate">{item.flavorNotes}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-[#6D4327]/10 flex items-center justify-between gap-2 mt-auto">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="w-full py-2.5 bg-[#F6ECE1] hover:bg-[#F49B1A] text-[#6D4327] hover:text-white rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <span>Ver detalle</span>
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
