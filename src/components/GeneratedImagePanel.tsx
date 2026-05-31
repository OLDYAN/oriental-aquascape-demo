import { useState } from 'react';
import type { IllustrationRatio } from '../data/illustrationAssets';
import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { SketchMotif } from './SketchMotif';

type GeneratedImagePanelProps = {
  label: string;
  caption?: string;
  src?: string;
  alt: string;
  imageReady?: boolean;
  motif: VisualMotif;
  tone?: VisualTone;
  size?: 'default' | 'large' | 'compact';
  ratio?: IllustrationRatio;
  className?: string;
};

export function GeneratedImagePanel({
  label,
  caption,
  src,
  alt,
  imageReady = false,
  motif,
  tone = 'water',
  size = 'default',
  ratio = 'landscape',
  className = '',
}: GeneratedImagePanelProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const panelLabel = caption ? `${label}: ${caption}` : label;
  const showImage = Boolean(src && imageReady && failedSrc !== src);
  const imageStatus = showImage ? 'final' : imageReady ? 'missing' : 'fallback';
  const panelClassName = [
    'illustration-panel',
    'generated-image-panel',
    'visual-panel-textured',
    `illustration-panel-${size}`,
    `illustration-panel-${tone}`,
    `image-ratio-${ratio}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure
      className={panelClassName}
      role={showImage ? undefined : 'img'}
      aria-label={showImage ? undefined : panelLabel}
      data-image-src={src}
      data-image-status={imageStatus}
    >
      <span className="illustration-label">{label}</span>
      {caption ? <span className="illustration-caption">{caption}</span> : null}
      <span className="image-mat">
        {showImage ? (
          <img className="generated-image" src={src} alt={alt || panelLabel} onError={() => setFailedSrc(src)} />
        ) : (
          <span className="generated-image-fallback" aria-hidden="true">
            <SketchMotif motif={motif} />
          </span>
        )}
      </span>
    </figure>
  );
}
