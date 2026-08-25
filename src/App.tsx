/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroPdf } from './components/HeroPdf';
import { InfoLocalPdf } from './components/InfoLocalPdf';
import { GalleryPdf } from './components/GalleryPdf';
import { PausaOncePdf } from './components/PausaOncePdf';
import { SpecialtyCoffeePdf } from './components/SpecialtyCoffeePdf';
import { MenuSection } from './components/MenuSection';
import { InstagramSection } from './components/InstagramSection';
import { FooterPdf } from './components/FooterPdf';
import { ItemDetailModal } from './components/ItemDetailModal';
import { FranchiseModal } from './components/FranchiseModal';

import { MenuItem } from './types';

export default function App() {
  const [selectedItemModal, setSelectedItemModal] = useState<MenuItem | null>(null);
  const [franchiseModalOpen, setFranchiseModalOpen] = useState<boolean>(false);
  const [showMenuSection, setShowMenuSection] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setShowMenuSection(true);
    const el = document.getElementById('seccion-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#2C221E] relative selection:bg-[#EA7C12] selection:text-white">
      
      {/* SECTION 1: HERO SUPERIOR (Foto panorámica + curva semicircular + logo centrado) */}
      <HeroPdf
        onOpenMenu={handleOpenMenu}
        onOpenFranchise={() => setFranchiseModalOpen(true)}
      />

      {/* SECTION 2: INFORMACIÓN DEL LOCAL (Horarios, Ubicación, Contacto, Franquicias) */}
      <InfoLocalPdf
        onOpenFranchise={() => setFranchiseModalOpen(true)}
      />

      {/* SECTIONS 3 & 4: TRANSICIÓN CURVA Y GALERÍA DE FOTOS (Fondo Naranja, Flechas, Ilustraciones) */}
      <GalleryPdf />

      {/* SECTION 5: TU PAUSA EN EL ONCE (Fondo Terracota, 3 fotos circulares, 3 textos exactos) */}
      <PausaOncePdf />

      {/* SECTION 6: CAFÉ DE ESPECIALIDAD (Fondo Marrón Oscuro, +COL, 100% Arábico Caturra 1700 msnm) */}
      <SpecialtyCoffeePdf />

      {/* OPTIONAL EXPANDABLE CARTA / MENÚ DE PRODUCTOS */}
      <div id="seccion-menu" className="bg-[#FFF9F3] py-12 px-4 border-t border-b border-amber-100">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <button
            onClick={() => setShowMenuSection(!showMenuSection)}
            className="px-8 py-4 bg-[#2C221E] hover:bg-[#42322C] text-white rounded-full font-black text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
          >
            <span>{showMenuSection ? 'Ocultar Carta Digital' : '☕ Explorar Carta Digital'}</span>
          </button>
        </div>

        {showMenuSection && (
          <MenuSection
            onSelectItem={(item) => setSelectedItemModal(item)}
            onQuickAdd={() => {}}
          />
        )}
      </div>

      {/* INSTAGRAM FEED SECTION (@mas11cafe) */}
      <InstagramSection />

      {/* SECTION 7: FOOTER (Blanco, WhatsApp, Instagram, Website, Amigos de los animales) */}
      <FooterPdf
        onOpenMenu={handleOpenMenu}
        onOpenFranchise={() => setFranchiseModalOpen(true)}
      />

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItemModal}
        onClose={() => setSelectedItemModal(null)}
      />

      {/* Franchise Modal */}
      <FranchiseModal
        isOpen={franchiseModalOpen}
        onClose={() => setFranchiseModalOpen(false)}
      />

    </div>
  );
}

