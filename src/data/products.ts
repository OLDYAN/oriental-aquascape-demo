import type { VisualMotif } from './visualMotifs';

export type ProductCategory =
  | 'Heritage Aquariums'
  | 'Vessels & Decorative Pieces'
  | 'Aquatic Plants'
  | 'Aquarium Equipment'
  | 'Consultation'
  | 'High-End Ornamental Fish';

export type ProductAvailability =
  | 'Demo product only'
  | 'Demo consultation item'
  | 'Future category / consultation required'
  | 'Consultation required';

export type ProductVisualTone = 'vessel' | 'stone' | 'platform' | 'commerce';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  displayPrice: string;
  tags: string[];
  material: string;
  useCase: string;
  availability: ProductAvailability;
  isPrototype: boolean;
  isLiveGoods: boolean;
  requiresConsultation: boolean;
  isPurchasable: boolean;
  visualTone: ProductVisualTone;
  visualMotif: VisualMotif;
};

export const products: Product[] = [
  {
    id: 'heritage-vessel-01',
    name: 'Heritage Vessel No. 01',
    category: 'Heritage Aquariums',
    description:
      'A demo product study for a vessel-led Heritage Aquarium with quiet proportion and daily ritual.',
    price: 68000,
    displayPrice: '$680 demo price',
    tags: ['Heritage Aquariums', 'vessel', 'porcelain', 'living water'],
    material: 'Porcelain-inspired ceramic with restrained bronze detailing',
    useCase: 'Low-profile interior display for homes, studios, and hospitality spaces',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'vessel',
    visualMotif: 'heritage-aquarium',
  },
  {
    id: 'jade-stone-composition-set',
    name: 'Jade Stone Composition Set',
    category: 'Vessels & Decorative Pieces',
    description:
      'A curated material composition for spatial atmosphere, display rhythm, and calm contrast.',
    price: 34000,
    displayPrice: '$340 demo price',
    tags: ['jade', 'stone', 'decorative pieces', 'composition'],
    material: 'Jade-toned stone selections with soft silver display surface',
    useCase: 'Shelf, console, or aquascape-adjacent spatial styling',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'stone',
    visualMotif: 'jade-stone',
  },
  {
    id: 'ceramic-water-bowl',
    name: 'Ceramic Water Bowl',
    category: 'Vessels & Decorative Pieces',
    description:
      'A quiet vessel study for water, surface reflection, and Eastern interior restraint.',
    price: 22000,
    displayPrice: '$220 demo price',
    tags: ['ceramic', 'water bowl', 'vessel', 'decorative pieces'],
    material: 'Fine ceramic with porcelain-white finish',
    useCase: 'Water display, entry console, or contemplative interior accent',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'vessel',
    visualMotif: 'decorative-pieces',
  },
  {
    id: 'aquatic-plant-selection',
    name: 'Aquatic Plant Selection',
    category: 'Aquatic Plants',
    description:
      'A planning assortment for planted aquascapes, tonal softness, and balanced living texture.',
    price: 9500,
    displayPrice: '$95 demo price',
    tags: ['aquatic plants', 'planting', 'aquascape', 'living system'],
    material: 'Demo planting palette for submerged and emergent compositions',
    useCase: 'Prototype plant direction for a calm aquascape layout',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'stone',
    visualMotif: 'aquatic-plant',
  },
  {
    id: 'low-profile-aquascaping-tools',
    name: 'Low-Profile Aquascaping Tools',
    category: 'Aquarium Equipment',
    description:
      'A restrained tool set for setup, trimming, placement, and quiet maintenance rituals.',
    price: 14500,
    displayPrice: '$145 demo price',
    tags: ['tools', 'aquascaping', 'maintenance', 'equipment'],
    material: 'Brushed steel and matte graphite tool finishes',
    useCase: 'Hands-on aquascape preparation and routine care',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'platform',
    visualMotif: 'equipment-study',
  },
  {
    id: 'equipment-starter-set',
    name: 'Equipment Starter Set',
    category: 'Aquarium Equipment',
    description:
      'Quiet aquatic infrastructure for stable circulation, lighting, and introductory setup planning.',
    price: 38000,
    displayPrice: '$380 demo price',
    tags: ['equipment', 'starter set', 'lighting', 'filtration'],
    material: 'Compact equipment bundle with graphite and cool mist finish direction',
    useCase: 'Demo setup path for small contemporary aquascapes',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'platform',
    visualMotif: 'equipment-study',
  },
  {
    id: 'decorative-jade-piece',
    name: 'Decorative Jade Piece',
    category: 'Vessels & Decorative Pieces',
    description:
      'A jade-toned display piece for material presence, negative space, and refined composition.',
    price: 26000,
    displayPrice: '$260 demo price',
    tags: ['jade', 'decorative pieces', 'display', 'material'],
    material: 'Jade-inspired stone with soft hand-finished surface',
    useCase: 'Interior styling beside vessels, water bowls, and aquascape studies',
    availability: 'Demo product only',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'commerce',
    visualMotif: 'decorative-pieces',
  },
  {
    id: 'heritage-aquarium-consultation-deposit',
    name: 'Heritage Aquarium Consultation Deposit',
    category: 'Consultation',
    description:
      'A demo-only planning item for consultation flow testing. No payment is processed.',
    price: 15000,
    displayPrice: '$150 demo price',
    tags: ['consultation', 'Heritage Aquariums', 'planning', 'demo only'],
    material: 'Consultation planning placeholder',
    useCase: 'Prototype pathway for project intake and preparation',
    availability: 'Demo consultation item',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: false,
    isPurchasable: true,
    visualTone: 'vessel',
    visualMotif: 'spatial-consultation',
  },
  {
    id: 'high-end-ornamental-fish-selection',
    name: 'High-End Ornamental Fish Selection',
    category: 'High-End Ornamental Fish',
    description:
      'A future/later category requiring specialist sourcing, care standards, and consultation.',
    price: 0,
    displayPrice: 'Future category / consultation required',
    tags: ['High-End Ornamental Fish', 'future category', 'consultation required'],
    material: 'Live-goods category planning only',
    useCase: 'Future consultation pathway, not live checkout',
    availability: 'Future category / consultation required',
    isPrototype: true,
    isLiveGoods: true,
    requiresConsultation: true,
    isPurchasable: false,
    visualTone: 'commerce',
    visualMotif: 'ornamental-fish',
  },
  {
    id: 'i-ching-feng-shui-spatial-consultation',
    name: 'I Ching & Feng Shui Spatial Consultation',
    category: 'Consultation',
    description:
      'Cultural, spatial, symbolic, and aesthetic consultation for placement, balance, material, and atmosphere.',
    price: 0,
    displayPrice: 'Consultation required',
    tags: ['consultation', 'placement', 'balance', 'symbolic meaning', 'aesthetic'],
    material: 'Spatial consultation and cultural interpretation',
    useCase: 'Project direction for contemporary spaces without outcome promises',
    availability: 'Consultation required',
    isPrototype: true,
    isLiveGoods: false,
    requiresConsultation: true,
    isPurchasable: false,
    visualTone: 'platform',
    visualMotif: 'spatial-consultation',
  },
];
