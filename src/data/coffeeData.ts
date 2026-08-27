import { MenuItem, PromoCombo, GalleryItem } from '../types';

export const STORE_INFO = {
  name: '+11 Café al Paso',
  slogan: 'Tu pausa en el Once',
  tagline: 'Café al paso',
  address: 'Larrea 777 siete siete siete',
  neighborhood: 'Balvanera / Recoleta',
  city: 'Buenos Aires - Argentina',
  instagramHandle: '@mas11cafe',
  instagramUrl: 'https://www.instagram.com/mas11cafe',
  whatsappNumber: '+5491131916092',
  whatsappDisplay: '+54 9 11 3191-6092',
  email: 'mas11cafealpaso@gmail.com',
  website: 'www.mas11cafe.com.ar',
  googleMapsUrl: 'https://maps.app.goo.gl/re3E9EBqnGjErGhS6',
  googleRating: 5.0,
  googleReviewCount: 250,
  hours: {
    weekdays: '09:00 a 19:00 hs.',
    saturday: '10:00 a 14:00 hs.',
    sunday: 'Cerrado',
  },
  granoDestacado: {
    variedad: 'CATURRA',
    notas: 'Azúcar morena, almendras, caramelo y cítricos.',
    altura: '1700 msnm',
    origen: '100% Arábico'
  },
  manifesto: [
    'En el barrio más vibrante y cosmopolita de Buenos Aires, nace un nuevo concepto de café al paso, diseñado para quienes viven la ciudad a mil por hora.',
    'Somos la parada obligatoria para la comunidad universitaria y los trabajadores de la zona que buscan calidad sin perder tiempo.',
    'Fusionamos la rapidez del servicio con la calidez de un buen producto, ofreciendo una experiencia urbana, dinámica y multicultural.'
  ],
  stats: [
    { label: 'Calificación Google', value: '5.0 ★★★★★' },
    { label: 'Grano de Especialidad', value: '100% Arábico · Caturra' },
    { label: 'Tiempo de Entrega', value: '< 3 mins' },
    { label: 'Ubicación Clave', value: 'Larrea 777, CABA' },
    { label: 'Amigos de los animales', value: '100% Pet Friendly' },
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  /* PRINCIPALES DESTACADOS Y NOVEDADES DE LA CARTA */
  {
    id: 'cafe-grande-premio-amigo',
    name: 'Café Grande + Premio para tu Mejor Amigo',
    category: 'espresso',
    price: 5500,
    description: 'Pedí tu café grande y, si venís acompañado de tu perro ¡Nosotros invitamos la golosina! Un buen café se disfruta de a dos, ¡Los esperamos!',
    image: 'https://lh3.googleusercontent.com/d/1omlmX04BGttLUFwDbb7zdFOkdLasu23L',
    tags: ['destacado', 'artesanal'],
    prepTime: '2 min',
    popular: true,
    flavorNotes: '🔥 NOVEDAD • ¡Golosina de regalo para tu perro con tu café grande!',
    options: { milkChoice: true, tempChoice: true, extraShot: true }
  },
  {
    id: 'cakepy',
    name: 'CakePy',
    category: 'pasteleria',
    price: 3500,
    description: 'CakePy es un bizcochuelo salado, húmedo y esponjoso a base de harina de maíz y queso criollo.',
    image: 'https://lh3.googleusercontent.com/d/1iKP0Xmxm-NzjeHUk5SFlyjbKbm5l-Au_',
    tags: ['destacado', 'sin-tacc', 'artesanal'],
    prepTime: '2 min',
    popular: true,
    flavorNotes: '🔥 NOVEDAD • Típico, esponjoso & calentito',
  },
  {
    id: 'mbeyu',
    name: 'Mbeyú Típico',
    category: 'pasteleria',
    price: 3500,
    description: 'Tortilla tradicional de almidón de mandioca y abundante queso a la plancha bien dorada.',
    image: 'https://lh3.googleusercontent.com/d/1POW-XJZJvczS8ue_vcmCNp-EMLz_o8IN',
    imagePosition: 'object-center',
    tags: ['destacado', 'sin-tacc', 'artesanal'],
    prepTime: '2 min',
    popular: true,
    flavorNotes: '⭐ PRINCIPAL • Crocante por fuera y suave por dentro',
  },
  {
    id: 'chipas-3x',
    name: 'Chipitas Paraguayas',
    category: 'pasteleria',
    price: 3500,
    description: 'Chipitas horneadas en el día con auténtico queso criollo y fécula de mandioca (Sin TACC).',
    image: 'https://lh3.googleusercontent.com/d/1SeapN3I1gifaQ5x614SpxSdbrmTie5uT',
    imagePosition: 'object-center',
    tags: ['destacado', 'sin-tacc', 'artesanal'],
    prepTime: '30 seg',
    popular: true,
    flavorNotes: '⭐ PRINCIPAL • Porción de 3 chipitas calentitas',
  },
  {
    id: 'medialunas-manteca-2x',
    name: 'Clásicas Medialunas',
    category: 'pasteleria',
    price: 3000,
    description: 'Dupla de medialunas hojaldradas artesanales con 100% manteca y almíbar liviano.',
    image: 'https://lh3.googleusercontent.com/d/1csh8ApCjvY2JS1F4Um5VPsHndwg9yzVp',
    imagePosition: 'object-center',
    tags: ['destacado', 'artesanal'],
    prepTime: '30 seg',
    popular: true,
    flavorNotes: '⭐ PRINCIPAL • Recién horneadas (2 unidades)',
  },
  {
    id: 'te-negro-verde',
    name: 'Té de Especialidad',
    category: 'espresso',
    price: 2500,
    priceGrande: 3000,
    description: 'Hojas seleccionadas de té de origen (Negro o Verde), aromas intensos y reconfortantes.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    tags: ['destacado', 'organico'],
    prepTime: '1 min',
    popular: true,
    flavorNotes: '⭐ PRINCIPAL • Selección de hojas de té de origen',
    options: { sizeChoice: true }
  },
  {
    id: 'mate-cocido-ahumado',
    name: 'Mate Cocido Ahumado',
    category: 'espresso',
    price: 2500,
    priceGrande: 3000,
    description: 'Infusión tradicional con notas ahumadas reconfortantes, ideal para acompañar tus chipas o mbeju.',
    image: 'https://lh3.googleusercontent.com/d/15GEktFFfy9FESEj23L9QBbONNkNOWmwT',
    tags: ['destacado', 'organico'],
    prepTime: '1 min',
    popular: true,
    flavorNotes: '⭐ PRINCIPAL • Infusión tradicional con notas ahumadas',
    options: { sizeChoice: true }
  },

  /* OTRAS BEBIDAS Y CAFÉS */
  {
    id: 'flat-white-signature',
    name: 'Flat White +11',
    category: 'flat-white',
    price: 4500,
    priceGrande: 5500,
    description: 'Doble Ristretto de especialidad con microespuma sedosa de leche entera o vegetal.',
    image: 'https://lh3.googleusercontent.com/d/1GO1AfHmBYk6YnWIF3GihQqYYGJbQvi8J',
    imagePosition: 'object-center',
    tags: ['destacado'],
    prepTime: '2 min',
    popular: false,
    flavorNotes: 'Notas a avellana y caramelo • Microespuma sedosa',
    options: { sizeChoice: true, milkChoice: true, tempChoice: true, extraShot: true }
  },
  {
    id: 'latte-clasico',
    name: 'Latte +11',
    category: 'latte',
    price: 4500,
    priceGrande: 5500,
    description: 'Espresso suave y cremoso combinado con leche vaporizada en textura terciopelo.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '2 min',
    popular: false,
    flavorNotes: 'Espresso suave con leche vaporizada terciopelo',
    options: { sizeChoice: true, milkChoice: true, tempChoice: true, extraShot: true }
  },
  {
    id: 'capuccino-italiano',
    name: 'Capuccino',
    category: 'capuccino',
    price: 4500,
    priceGrande: 5500,
    description: 'Espresso doble, leche vaporizada con espuma abundante y espolvoreado de cacao.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '2 min',
    flavorNotes: 'Espresso doble con espuma abundante y cacao',
    options: { sizeChoice: true, milkChoice: true, tempChoice: true, extraShot: true }
  },
  {
    id: 'cafe-moca',
    name: 'Café Moca +11',
    category: 'latte',
    price: 4800,
    priceGrande: 5800,
    description: 'Deliciosa combinación de espresso de especialidad, salsa de cacao artesanal y leche cremosa vaporizada.',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '2 min',
    popular: false,
    flavorNotes: 'Espresso, cacao artesanal y leche cremosa',
    options: { sizeChoice: true, milkChoice: true, tempChoice: true, extraShot: true }
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'espresso',
    price: 3800,
    priceGrande: 4500,
    description: 'Espresso diluido con agua caliente manteniendo todo el aroma y acidez balanceada.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '1 min',
    flavorNotes: 'Aroma intenso y acidez balanceada',
    options: { sizeChoice: true, extraShot: true }
  },
  {
    id: 'espresso-simple',
    name: 'Espresso',
    category: 'espresso',
    price: 3000,
    description: 'Extracción directa e intensa de granos 100% Arábica con crema avellanada.',
    image: 'https://lh3.googleusercontent.com/d/1Viy-LBDHknUbYEWllIDcUCJdKtu-I0cr',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '1 min',
    flavorNotes: 'Sabor denso, notas a cacao 70%',
    options: { extraShot: true }
  },
  {
    id: 'espresso-doble',
    name: 'Espresso Doble',
    category: 'espresso',
    price: 3500,
    description: 'Doble shot concentrado para máxima energía y cuerpo.',
    image: 'https://lh3.googleusercontent.com/d/1d-mK2m6Q_GYHnU42ASmo-BLyPg1gU5K6',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '1 min',
    flavorNotes: 'Doble shot de pura energía',
    options: { extraShot: true }
  },
  {
    id: 'chocolate-caliente',
    name: 'Chocolate +11',
    category: 'latte',
    price: 5000,
    priceGrande: 6000,
    description: 'Una clásica y reconfortante chocolatada caliente, bien cremosa y dulce, preparada con amor y leche a elección.',
    image: 'https://lh3.googleusercontent.com/d/1r7qq_iDlVhNfD_bQqIosi8dlCcaq8Ge8',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '2 min',
    flavorNotes: 'Clásica chocolatada caliente y dulce',
    options: { sizeChoice: true, milkChoice: true, tempChoice: true }
  },

  /* OTRAS OPCIONES DE PASTELERÍA Y COMIDAS */
  {
    id: 'criollos-2x',
    name: '2 Criollos de Hojaldre',
    category: 'pasteleria',
    price: 3000,
    description: 'Criollitos tradicionales crocantes por fuera y suaves por dentro.',
    image: 'https://lh3.googleusercontent.com/d/1iagk3fClfY60T8xb32EtCzQEVBGHhisz',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '30 seg',
  },
  {
    id: 'muffin-budin',
    name: 'Muffin / Budín Casero',
    category: 'pasteleria',
    price: 5000,
    description: 'Opción dulce esponjosa del día (Limón & Amapolas, Chocolate o Zanahoria con Nueces).',
    image: 'https://lh3.googleusercontent.com/d/15k_K3GlSKoPzFuK-rtVu_XZik-34bO0y',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '30 seg',
  },
  {
    id: 'tostado-jamon-queso',
    name: 'Tostado de Jamón & Queso',
    category: 'pasteleria',
    price: 9000,
    description: 'Tostado abundante en pan miga/mosaico dorado con abundante queso derretido y jamón cocido.',
    image: 'https://lh3.googleusercontent.com/d/1wnG0jZeYmfZsr1OZDP9hgWQoTNc84xeq',
    imagePosition: 'object-center',
    tags: ['artesanal'],
    prepTime: '3 min',
  }
];

export const PROMO_COMBOS: PromoCombo[] = [
  {
    id: 'promo-pet-friendly',
    title: 'NOVEDAD: Café Grande + Premio Perruno',
    subtitle: '¡Un buen café se disfruta de a dos!',
    price: 5500,
    originalPrice: 6500,
    badge: 'PET FRIENDLY',
    description: 'Pedí tu café grande y, si venís acompañado de tu perro ¡Nosotros invitamos la golosina! Un buen café se disfruta de a dos, ¡Los esperamos!',
    image: 'https://lh3.googleusercontent.com/d/1omlmX04BGttLUFwDbb7zdFOkdLasu23L',
    imagePosition: 'object-center',
    includedItems: ['1 Café Grande a elección', '1 Golosina de regalo para tu mascota 🐶']
  },
  {
    id: 'promo-1',
    title: 'PROMO 1: Infusión / Café + CakePy',
    subtitle: 'Nuestra combinación estrella',
    price: 5500,
    originalPrice: 6000,
    badge: 'NOVEDAD',
    description: 'Café de Especialidad o Infusión + 1 CakePy caliente recién horneado.',
    image: 'https://lh3.googleusercontent.com/d/1iKP0Xmxm-NzjeHUk5SFlyjbKbm5l-Au_',
    imagePosition: 'object-center',
    includedItems: ['1 Café Chico o Infusión a elección', '1 CakePy bizcochuelo salado esponjoso']
  },
  {
    id: 'promo-2',
    title: 'PROMO: Café + 1 Mbeyú Típico',
    subtitle: 'Auténtica delicia dorada a la plancha',
    price: 5500,
    originalPrice: 6000,
    badge: 'MÁS PEDIDO',
    description: 'Café o Infusión a elección + 1 Mbeyú tradicional de almidón de mandioca y abundante queso.',
    image: 'https://lh3.googleusercontent.com/d/1ay8AWmsMwEc43F_mvJ9CtlpczfCQpeVk',
    imagePosition: 'object-center',
    includedItems: ['1 Café Chico o Infusión a elección', '1 Mbeyú tradicional de queso']
  },
  {
    id: 'promo-3',
    title: 'PROMO: Café + 3 Chipitas Paraguayas',
    subtitle: 'Calentitas y repletas de queso criollo',
    price: 5500,
    originalPrice: 6000,
    badge: 'SIN TACC',
    description: 'Café o Infusión a elección + Porción de 3 Chipitas Paraguayas horneadas en el día.',
    image: 'https://lh3.googleusercontent.com/d/1SeapN3I1gifaQ5x614SpxSdbrmTie5uT',
    imagePosition: 'object-center',
    includedItems: ['1 Café Chico o Infusión a elección', '3 Chipitas Paraguayas (Sin TACC)']
  },
  {
    id: 'promo-4',
    title: 'PROMO: Café + 2 Clásicas Medialunas',
    subtitle: 'El clásico infaltable de cada mañana',
    price: 5000,
    originalPrice: 5500,
    badge: 'TRADICIONAL',
    description: 'Café o Infusión Chico a elección + 2 Clásicas Medialunas de manteca recién horneadas.',
    image: 'https://lh3.googleusercontent.com/d/1xY3DBatTWFITxFDbveAE8AOySGU0BsF4',
    imagePosition: 'object-center',
    includedItems: ['1 Café Chico o Infusión a elección', '2 Medialunas de manteca']
  },
  {
    id: 'promo-5',
    title: 'PROMO: Café + Muffin Casero',
    subtitle: 'Momento dulce e irresistible',
    price: 6500,
    originalPrice: 7500,
    badge: 'DULCE',
    description: 'Café o Infusión a elección + 1 Muffin o Budín casero esponjoso del día.',
    image: 'https://lh3.googleusercontent.com/d/1FhOl4NO8RWMYEznjQHVBqouU1sIJshUZ',
    imagePosition: 'object-center',
    includedItems: ['1 Café Chico o Infusión a elección', '1 Muffin o Budín casero']
  },
  {
    id: 'promo-6',
    title: 'PROMO: Chocolate + 2 Criollos',
    subtitle: 'El abrazo calentito del día',
    price: 6000,
    originalPrice: 7000,
    badge: 'INVIERNO',
    description: 'Una rica chocolatada caliente reconfortante + 2 Criollos de hojaldre crocantes.',
    image: 'https://lh3.googleusercontent.com/d/1r7qq_iDlVhNfD_bQqIosi8dlCcaq8Ge8',
    imagePosition: 'object-center',
    includedItems: ['1 Chocolatada caliente', '2 Criollitos de hojaldre']
  },
  {
    id: 'promo-7',
    title: 'PROMO: +Tostado de Jamón y Queso',
    subtitle: 'Sabor irresistible bien derretido',
    price: 11000,
    originalPrice: 12500,
    badge: 'ESPECIAL',
    description: 'Abundante Tostado de Jamón y Queso en pan miga/mosaico dorado + Café o Infusión a elección.',
    image: 'https://lh3.googleusercontent.com/d/1wnG0jZeYmfZsr1OZDP9hgWQoTNc84xeq',
    imagePosition: 'object-center',
    includedItems: ['1 Tostado de Jamón y Queso', '1 Café Chico o Infusión a elección']
  },
  {
    id: 'promo-8',
    title: 'PROMO: Recuperá Energías',
    subtitle: 'Carga completa para tu jornada',
    price: 7000,
    originalPrice: 8500,
    badge: 'ENERGÍA',
    description: 'Combina tu bebida reconfortante con tu salado o dulce preferido para recargar el día al 100%.',
    image: 'https://lh3.googleusercontent.com/d/1mSm_O1IPQGIoMT6VD3CJjx-CGddV8To-',
    imagePosition: 'object-center',
    includedItems: ['1 Café o Infusión Grande', '1 Acompañamiento a elección']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Extracción de precisión',
    category: 'barista',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    caption: 'Máquina espresso de alta gama y baristas certificados cuidando molienda y temperatura.'
  },
  {
    id: 'gal-2',
    title: 'El ambiente en Larrea 777',
    category: 'ambiente',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    caption: 'Espacio minimalista y cálido con detalles en madera natural, luz cálida y banquetas al paso.'
  },
  {
    id: 'gal-3',
    title: 'Arte en cada taza',
    category: 'detalles',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=80',
    caption: 'Microespuma sedosa y diseño de tulipanes y rosettas en nuestro Flat White insignia.'
  },
  {
    id: 'gal-4',
    title: 'Pausa urbana en la vereda',
    category: 'fachada',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Barra exterior pensada para tomar tu café al sol o esperar tu vaso takeaway en minutos.'
  },
  {
    id: 'gal-5',
    title: 'Amigos perrunos bienvenidos',
    category: 'ambiente',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Espacio pet friendly con recipientes de agua fresca y premios especiales.'
  },
  {
    id: 'gal-6',
    title: 'Infusiones & Té de Origen',
    category: 'detalles',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hojas seleccionadas e infusiones herbales reconfortantes para cualquier momento.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'El mejor Flat White de Recoleta/Balvanera por lejos. Salgo de cursar en Medicina y en 2 minutos ya tengo mi café caliente con lecha de avena increíble.',
    author: 'Sofía M.',
    role: 'Estudiante UBA & Vecina',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'Atención súper cálida, rapidez impecable. Voy todas las mañanas con Milo (mi Golden) y le regalan una galletita mientras me preparan mi café.',
    author: 'Gonzalo R.',
    role: 'Diseñador UX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'La medialuna hojaldrada con almíbar de azahar combinada con el espresso doppio es adictiva. Un lujo al paso para arrancar la jornada laboral.',
    author: 'Lucía B.',
    role: 'Arquitecta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];
