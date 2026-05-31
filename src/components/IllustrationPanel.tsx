import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { SketchMotif } from './SketchMotif';

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
  const panelClassName = [
    'illustration-panel',
    `illustration-panel-${size}`,
    `illustration-panel-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={panelClassName} role="img" aria-label={`${label} illustration panel`}>
      <span className="illustration-label">{label}</span>
      {caption ? <span className="illustration-caption">{caption}</span> : null}
      <SketchMotif motif={motif} />
    </div>
  );
}
