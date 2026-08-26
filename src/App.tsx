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
import { InstagramSection } from './components/InstagramSection';
import { FooterPdf } from './components/FooterPdf';
import { FranchiseModal } from './components/FranchiseModal';

export default function App() {
  const [franchiseModalOpen, setFranchiseModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#2C221E] relative selection:bg-[#EA7C12] selection:text-white">
      
      {/* SECTION 1: HERO SUPERIOR (Foto panorámica + curva semicircular + logo centrado) */}
      <HeroPdf
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

      {/* INSTAGRAM FEED SECTION (@mas11cafe) */}
      <InstagramSection />

      {/* SECTION 7: FOOTER (Blanco, WhatsApp, Instagram, Website, Amigos de los animales) */}
      <FooterPdf
        onOpenFranchise={() => setFranchiseModalOpen(true)}
      />

      {/* Franchise Modal */}
      <FranchiseModal
        isOpen={franchiseModalOpen}
        onClose={() => setFranchiseModalOpen(false)}
      />

    </div>
  );
}

