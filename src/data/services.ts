export type Service = {
  id: string;
  title: string;
  caption: string;
};

export const services: Service[] = [
  {
    id: 'aquascape-consultation',
    title: 'Aquascape Consultation',
    caption: 'Design-led guidance for living water and spatial atmosphere.',
  },
  {
    id: 'spatial-consultation',
    title: 'I Ching & Feng Shui Spatial Consultation',
    caption: 'Cultural, spatial, symbolic, and aesthetic consultation without outcome claims.',
  },
  {
    id: 'ai-assisted-discovery',
    title: 'AI-Assisted Discovery',
    caption: 'A static recommendation prototype for matching, preparation, and guided browsing.',
  },
  {
    id: 'b2b-partnership',
    title: 'B2B Partnership',
    caption: 'Planning path for designers, hospitality spaces, offices, and supply partners.',
  },
];
