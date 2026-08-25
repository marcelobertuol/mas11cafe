import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, Clock, Menu as MenuIcon, X, Coffee, Sparkles, Building2 } from 'lucide-react';
import { STORE_INFO } from '../data/coffeeData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenFranchise?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenFranchise }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre +11', href: '#sobre-nosotros' },
    { name: 'Nuestra Carta', href: '#carta' },
    { name: 'El Local', href: '#el-local' },
    { name: 'Pet Friendly', href: '#pet-friendly' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF8F0]/90 backdrop-blur-md shadow-sm border-b border-[#6D4327]/10 py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Image */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            id="brand-logo"
          >
            <img
              src="https://lh3.googleusercontent.com/d/1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V"
              alt="+11 Café al Paso"
              className="h-16 sm:h-20 md:h-24 max-w-[260px] sm:max-w-[360px] md:max-w-[420px] object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md"
              onError={(e) => {
                // Fallback direct view URL if lh3 url fails
                (e.target as HTMLImageElement).src = "https://drive.google.com/thumbnail?id=1DZ8dLmx01m6mgC2Pd-kfSqhyPwYjke6V&sz=w500";
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="desktop-navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#F49B1A] relative py-1 group ${
                  scrolled ? 'text-[#6D4327]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F49B1A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Status pill (Desktop) */}
            <div
              className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                scrolled
                  ? 'bg-[#F2ECE4] text-[#6D4327] border-[#6D4327]/10'
                  : 'bg-white/15 text-white backdrop-blur-sm border-white/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lun-Vie 8:00 a 19:30hs • Sáb 10 a 14hs</span>
            </div>

            {/* Franchise Button */}
            {onOpenFranchise && (
              <button
                onClick={onOpenFranchise}
                id="header-franchise-button"
                className={`hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-300 border ${
                  scrolled
                    ? 'bg-[#F49B1A] text-white hover:bg-[#E0890B] border-[#F49B1A]'
                    : 'bg-white/20 text-white hover:bg-white/30 border-white/30'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Franquicias</span>
              </button>
            )}

            {/* Location / Google Maps Link Button */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-location-button"
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-sm active:scale-95 ${
                scrolled
                  ? 'bg-[#6D4327] text-white hover:bg-[#4A2B18]'
                  : 'bg-[#F49B1A] text-white hover:bg-[#E0890B]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Larrea 777</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Abrir menú"
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-[#2C221E] hover:bg-[#F2ECE4]'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden fixed inset-x-0 top-full bg-[#FFF8F0] border-b border-[#6D4327]/10 shadow-xl px-6 py-6 transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#6D4327]/10 text-xs font-semibold text-[#6D4327]">
              <MapPin className="w-4 h-4 text-[#F49B1A]" />
              <span>Larrea 777, CABA • Abierto Lun-Vie 8 a 19:30hs</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#2C221E] hover:text-[#F49B1A] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {onOpenFranchise && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFranchise();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F49B1A] text-white rounded-xl font-bold text-sm shadow-md"
              >
                <Building2 className="w-4 h-4" />
                <span>Franquicias</span>
              </button>
            )}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F2ECE4] text-[#6D4327] rounded-xl font-semibold text-sm hover:bg-[#EAE1D6] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Cómo llegar a Larrea 777</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
