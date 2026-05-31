export type CategoryStatus = 'active-planning' | 'future-later';

export type Category = {
  id: string;
  title: string;
  caption: string;
  status: CategoryStatus;
};

export const categories: Category[] = [
  {
    id: 'eastern-aquascapes',
    title: 'Eastern Aquascapes',
    caption: 'Living water compositions for contemporary spaces.',
    status: 'active-planning',
  },
  {
    id: 'high-end-ornamental-fish',
    title: 'High-End Ornamental Fish',
    caption: 'Future/later category pending sourcing, care, and logistics standards.',
    status: 'future-later',
  },
  {
    id: 'aquatic-plants',
    title: 'Aquatic Plants',
    caption: 'Curated planting direction for refined aquascapes.',
    status: 'active-planning',
  },
  {
    id: 'aquarium-equipment',
    title: 'Aquarium Equipment',
    caption: 'Quiet infrastructure for stable living systems.',
    status: 'active-planning',
  },
  {
    id: 'heritage-aquariums',
    title: 'Heritage Aquariums',
    caption: 'Craft techniques rooted in intangible cultural heritage traditions.',
    status: 'active-planning',
  },
  {
    id: 'vessels-decorative-pieces',
    title: 'Vessels & Decorative Pieces',
    caption: 'Ceramic, jade, and other decorative pieces for spatial atmosphere.',
    status: 'active-planning',
  },
  {
    id: 'spatial-consultation',
    title: 'I Ching & Feng Shui Spatial Consultation',
    caption: 'Cultural, spatial, symbolic, and aesthetic consultation.',
    status: 'active-planning',
  },
  {
    id: 'ai-assisted-platform',
    title: 'AI-Assisted Platform',
    caption: 'Discovery and preparation tools with human judgment at the center.',
    status: 'active-planning',
  },
  {
    id: 'b2b-partnership',
    title: 'B2B Partnership',
    caption: 'Future To B workflows for designers, hospitality, offices, and partners.',
    status: 'future-later',
  },
];
