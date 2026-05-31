import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { getIllustrationAsset } from '../data/illustrationAssets';
import { GeneratedImagePanel } from './GeneratedImagePanel';

type IllustrationPanelProps = {
  label: string;
  caption?: string;
  motif: VisualMotif;
  tone?: VisualTone;
  size?: 'default' | 'large' | 'compact';
  className?: string;
};

export function IllustrationPanel({
  label,
  caption,
  motif,
  tone = 'water',
  size = 'default',
  className = '',
}: IllustrationPanelProps) {
  const asset = getIllustrationAsset(motif);
  const panelAlt = caption ? `${label}: ${caption}` : label;

  return (
    <GeneratedImagePanel
      label={label}
      caption={caption}
      src={asset.finalSrc}
      alt={panelAlt}
      imageReady={asset.status === 'final'}
      motif={motif}
      tone={tone}
      size={size}
      ratio={asset.ratio}
      className={className}
    />
  );
}
