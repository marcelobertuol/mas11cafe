export type MenuCategory = 
  | 'todos'
  | 'espresso'
  | 'latte'
  | 'flat-white'
  | 'capuccino'
  | 'cold-brew'
  | 'pasteleria'
  | 'promociones';

export type DietaryTag = 'vegan' | 'sin-tacc' | 'destacado' | 'artesanal' | 'organico';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // Precio Chico / Estándar
  priceGrande?: number; // Precio Grande si aplica
  description: string;
  image: string;
  imagePosition?: string;
  tags?: DietaryTag[];
  prepTime: string;
  popular?: boolean;
  flavorNotes?: string;
  options?: {
    milkChoice?: boolean;
    tempChoice?: boolean;
    extraShot?: boolean;
    sweetener?: boolean;
    sizeChoice?: boolean;
  };
}

export interface PromoCombo {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  badge: string;
  description: string;
  image: string;
  imagePosition?: string;
  includedItems: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiente' | 'barista' | 'detalles' | 'fachada';
  image: string;
  caption: string;
}

export interface CartCustomization {
  size?: 'Chico' | 'Grande';
  milk?: 'Entera' | 'Descremada' | 'Almendras' | 'Avena (+ $400)';
  temp?: 'Caliente' | 'Tibio' | 'Con Hielo';
  extraShot?: boolean;
  notes?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  customization?: CartCustomization;
  calculatedPrice: number;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  relativeTime: string;
  rating: number;
  text: string;
  isLocalGuide?: boolean;
}
