import type { VisualMotif } from './visualMotifs';

export type IllustrationRatio = 'hero' | 'landscape' | 'portrait' | 'square';

export type IllustrationAssetStatus = 'pending' | 'final';

export type IllustrationAssetId =
  | 'hero-water-vessel'
  | 'heritage-aquarium'
  | 'jade-stone-composition'
  | 'aquatic-plant-study'
  | 'ornamental-fish-study'
  | 'equipment-study'
  | 'decorative-pieces-study'
  | 'ai-platform-study'
  | 'spatial-consultation-study'
  | 'b2b-network-study';

export type IllustrationAsset = {
  id: IllustrationAssetId;
  motif: VisualMotif;
  filename: string;
  finalSrc: string;
  status: IllustrationAssetStatus;
  ratio: IllustrationRatio;
  intendedUse: string;
  alt: {
    en: string;
    zh: string;
  };
};

export const illustrationAssets: Record<IllustrationAssetId, IllustrationAsset> = {
  'hero-water-vessel': {
    id: 'hero-water-vessel',
    motif: 'hero-water-vessel',
    filename: 'hero-water-vessel.webp',
    finalSrc: '/illustrations/final/hero-water-vessel.webp',
    status: 'final',
    ratio: 'hero',
    intendedUse: 'Hero, story, and Eastern aquascape overview panels',
    alt: {
      en: 'Concept sketch of a refined water vessel with stone, plant, and waterline studies.',
      zh: '器形、水线、石材与草木构成的东方水景概念速写。',
    },
  },
  'heritage-aquarium': {
    id: 'heritage-aquarium',
    motif: 'heritage-aquarium',
    filename: 'heritage-aquarium.webp',
    finalSrc: '/illustrations/final/heritage-aquarium.webp',
    status: 'final',
    ratio: 'square',
    intendedUse: 'Heritage aquarium product cards, drawers, and commerce preview panels',
    alt: {
      en: 'Graphite concept sketch of a heritage aquarium vessel on white rice paper.',
      zh: '白色宣纸上的古法鱼缸器形石墨概念速写。',
    },
  },
  'jade-stone-composition': {
    id: 'jade-stone-composition',
    motif: 'jade-stone',
    filename: 'jade-stone-composition.webp',
    finalSrc: '/illustrations/final/jade-stone-composition.webp',
    status: 'final',
    ratio: 'portrait',
    intendedUse: 'Lookbook, decorative material, and jade composition panels',
    alt: {
      en: 'Architectural sketch study of jade-toned stones arranged for a calm aquascape.',
      zh: '玉色石材与水景构成的安静建筑式速写研究。',
    },
  },
  'aquatic-plant-study': {
    id: 'aquatic-plant-study',
    motif: 'aquatic-plant',
    filename: 'aquatic-plant-study.webp',
    finalSrc: '/illustrations/final/aquatic-plant-study.webp',
    status: 'final',
    ratio: 'square',
    intendedUse: 'Aquatic plant product cards and commerce preview panels',
    alt: {
      en: 'Restrained pencil study of aquatic plants arranged for living water composition.',
      zh: '水生植物与活水构成的克制铅笔速写研究。',
    },
  },
  'ornamental-fish-study': {
    id: 'ornamental-fish-study',
    motif: 'ornamental-fish',
    filename: 'ornamental-fish-study.webp',
    finalSrc: '/illustrations/final/ornamental-fish-study.webp',
    status: 'final',
    ratio: 'square',
    intendedUse: 'Future high-end ornamental fish category cards and drawers',
    alt: {
      en: 'Refined study sketch of an ornamental fish silhouette with water movement lines.',
      zh: '高端观赏鱼轮廓与水流线条的精致速写研究。',
    },
  },
  'equipment-study': {
    id: 'equipment-study',
    motif: 'equipment-study',
    filename: 'equipment-study.webp',
    finalSrc: '/illustrations/final/equipment-study.webp',
    status: 'final',
    ratio: 'square',
    intendedUse: 'Aquarium equipment cards, drawers, and catalog preview panels',
    alt: {
      en: 'Precise concept sketch of quiet aquarium equipment for a contemporary interior.',
      zh: '适合当代室内空间的安静水族设备概念速写。',
    },
  },
  'decorative-pieces-study': {
    id: 'decorative-pieces-study',
    motif: 'decorative-pieces',
    filename: 'decorative-pieces-study.webp',
    finalSrc: '/illustrations/final/decorative-pieces-study.webp',
    status: 'final',
    ratio: 'square',
    intendedUse: 'Decorative pieces, vessel, shop hero, and commerce preview panels',
    alt: {
      en: 'Studio sketch of ceramic vessels and jade-toned pieces arranged on rice paper.',
      zh: '陶瓷器皿与玉色陈设在宣纸上的工作室速写。',
    },
  },
  'ai-platform-study': {
    id: 'ai-platform-study',
    motif: 'ai-platform',
    filename: 'ai-platform-study.webp',
    finalSrc: '/illustrations/final/ai-platform-study.webp',
    status: 'final',
    ratio: 'landscape',
    intendedUse: 'AI-assisted platform and discovery panels',
    alt: {
      en: 'Graphite interface concept sketch showing discovery, matching, and preparation paths.',
      zh: '表现发现、匹配与方案准备路径的石墨界面概念速写。',
    },
  },
  'spatial-consultation-study': {
    id: 'spatial-consultation-study',
    motif: 'spatial-consultation',
    filename: 'spatial-consultation-study.webp',
    finalSrc: '/illustrations/final/spatial-consultation-study.webp',
    status: 'final',
    ratio: 'landscape',
    intendedUse: 'Consultation preview, builder, story, and spatial study panels',
    alt: {
      en: 'Spatial consultation concept drawing with vessel placement and balance diagrams.',
      zh: '包含器皿摆放与平衡图式的空间咨询概念图。',
    },
  },
  'b2b-network-study': {
    id: 'b2b-network-study',
    motif: 'b2b-network',
    filename: 'b2b-network-study.webp',
    finalSrc: '/illustrations/final/b2b-network-study.webp',
    status: 'final',
    ratio: 'landscape',
    intendedUse: 'B2B partnership and commercial planning panels',
    alt: {
      en: 'Concept sketch of a restrained partnership network for designers and commercial spaces.',
      zh: '面向设计师与商业空间的克制合作网络概念速写。',
    },
  },
};

export const illustrationAssetsByMotif: Record<VisualMotif, IllustrationAsset> = {
  'hero-water-vessel': illustrationAssets['hero-water-vessel'],
  'heritage-aquarium': illustrationAssets['heritage-aquarium'],
  'jade-stone': illustrationAssets['jade-stone-composition'],
  'aquatic-plant': illustrationAssets['aquatic-plant-study'],
  'ornamental-fish': illustrationAssets['ornamental-fish-study'],
  'equipment-study': illustrationAssets['equipment-study'],
  'decorative-pieces': illustrationAssets['decorative-pieces-study'],
  'ai-platform': illustrationAssets['ai-platform-study'],
  'spatial-consultation': illustrationAssets['spatial-consultation-study'],
  'b2b-network': illustrationAssets['b2b-network-study'],
};

export function getIllustrationAsset(motif: VisualMotif) {
  return illustrationAssetsByMotif[motif];
}
