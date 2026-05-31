import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

type VisualPanelVariant = 'hero' | 'vessel' | 'stone' | 'platform' | 'commerce';

type VisualPanelProps = {
  label?: string;
  caption?: string;
  variant?: VisualPanelVariant;
};

const variantMap: Record<VisualPanelVariant, { motif: VisualMotif; tone: VisualTone }> = {
  hero: { motif: 'hero-water-vessel', tone: 'water' },
  vessel: { motif: 'heritage-aquarium', tone: 'heritage' },
  stone: { motif: 'jade-stone', tone: 'stone' },
  platform: { motif: 'ai-platform', tone: 'technology' },
  commerce: { motif: 'decorative-pieces', tone: 'heritage' },
};

export function VisualPanel({
  label = 'Visual system',
  caption,
  variant = 'hero',
}: VisualPanelProps) {
  const visual = variantMap[variant];

  return (
    <IllustrationPanel
      label={label}
      caption={caption}
      motif={visual.motif}
      tone={visual.tone}
      size={variant === 'hero' ? 'large' : 'default'}
      className={`visual-panel visual-panel-${variant}`}
    />
  );
}
