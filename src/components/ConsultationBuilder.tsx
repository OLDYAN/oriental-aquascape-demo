import { useEffect, useMemo, useState } from 'react';
import {
  buildConsultationRecommendation,
  type ConsultationSelections,
} from '../utils/recommendations';
import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

type CopyState = 'idle' | 'copied' | 'manual';

type OptionGroup = {
  id: keyof ConsultationSelections;
  label: string;
  options: string[];
};

const optionGroups: OptionGroup[] = [
  {
    id: 'spaceType',
    label: 'Space type',
    options: [
      'Residential interior',
      'Office / studio',
      'Restaurant / hospitality',
      'Retail / showroom',
      'Designer / B2B project',
    ],
  },
  {
    id: 'preferredDirection',
    label: 'Preferred direction',
    options: [
      'Minimal Eastern aquascape',
      'Heritage vessel composition',
      'Plant-focused living water',
      'Equipment-forward modern setup',
      'Decorative pieces and spatial atmosphere',
      'AI-assisted product discovery',
    ],
  },
  {
    id: 'primaryInterest',
    label: 'Primary interest',
    options: [
      'Aquascaping design',
      'Heritage Aquariums',
      'Aquatic plants',
      'Aquarium equipment',
      'Vessels & Decorative Pieces',
      'I Ching & Feng Shui Spatial Consultation',
      'B2B Partnership',
    ],
  },
  {
    id: 'timeline',
    label: 'Timeline',
    options: ['Exploring', '1-3 months', '3-6 months', 'B2B planning cycle'],
  },
  {
    id: 'budgetRange',
    label: 'Budget range',
    options: ['Concept only', 'Entry project', 'Premium project', 'Commercial / partnership'],
  },
  {
    id: 'maintenancePreference',
    label: 'Maintenance preference',
    options: [
      'Low-maintenance',
      'Balanced',
      'High-design / specialist maintenance',
      'Not sure yet',
    ],
  },
];

function getSelectionValue(
  selections: ConsultationSelections,
  optionId: keyof ConsultationSelections,
) {
  return selections[optionId];
}

function getBuilderVisual(selections: ConsultationSelections): {
  motif: VisualMotif;
  tone: VisualTone;
} {
  if (
    selections.primaryInterest === 'B2B Partnership' ||
    selections.spaceType === 'Designer / B2B project'
  ) {
    return { motif: 'b2b-network', tone: 'technology' };
  }

  if (
    selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation' ||
    selections.preferredDirection === 'Decorative pieces and spatial atmosphere'
  ) {
    return { motif: 'spatial-consultation', tone: 'spatial' };
  }

  if (
    selections.primaryInterest === 'Heritage Aquariums' ||
    selections.preferredDirection === 'Heritage vessel composition'
  ) {
    return { motif: 'heritage-aquarium', tone: 'heritage' };
  }

  if (
    selections.primaryInterest === 'Aquatic plants' ||
    selections.preferredDirection === 'Plant-focused living water'
  ) {
    return { motif: 'aquatic-plant', tone: 'plant' };
  }

  if (selections.primaryInterest === 'Aquarium equipment') {
    return { motif: 'equipment-study', tone: 'technology' };
  }

  if (selections.preferredDirection === 'AI-assisted product discovery') {
    return { motif: 'ai-platform', tone: 'technology' };
  }

  return { motif: 'hero-water-vessel', tone: 'water' };
}

export function ConsultationBuilder() {
  const [selections, setSelections] = useState<ConsultationSelections>({});
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const recommendation = useMemo(
    () => buildConsultationRecommendation(selections),
    [selections],
  );
  const builderVisual = getBuilderVisual(selections);
  const selectedCount = Object.values(selections).filter(Boolean).length;

  useEffect(() => {
    if (copyState !== 'copied') {
      return;
    }

    const timer = window.setTimeout(() => setCopyState('idle'), 1800);

    return () => window.clearTimeout(timer);
  }, [copyState]);

  function updateSelection(groupId: keyof ConsultationSelections, option: string) {
    setCopyState('idle');
    setSelections((currentSelections) => ({
      ...currentSelections,
      [groupId]: option,
    }));
  }

  async function copyBrief() {
    if (!navigator.clipboard?.writeText) {
      setCopyState('manual');
      return;
    }

    try {
      await navigator.clipboard.writeText(recommendation.briefText);
      setCopyState('copied');
    } catch {
      setCopyState('manual');
    }
  }

  function resetBuilder() {
    setSelections({});
    setCopyState('idle');
  }

  return (
    <section
      className="consultation-builder section-shell"
      id="consultation-builder"
      aria-labelledby="consultation-builder-title"
    >
      <div className="section-header">
        <div>
          <p className="section-kicker">AI-Assisted Discovery</p>
          <h2 id="consultation-builder-title">Build a Consultation Brief</h2>
        </div>
        <p>A static prototype that helps frame an initial direction before a formal consultation.</p>
      </div>

      <div className="builder-grid">
        <div className="builder-panel" aria-label="Consultation preferences">
          <div className="builder-progress">
            <span>{selectedCount} of {optionGroups.length} preferences selected</span>
            <button className="builder-reset" type="button" onClick={resetBuilder}>
              Reset
            </button>
          </div>

          {optionGroups.map((group) => (
            <fieldset className="option-group" key={group.id}>
              <legend>{group.label}</legend>
              <div className="option-list">
                {group.options.map((option) => {
                  const isActive = getSelectionValue(selections, group.id) === option;

                  return (
                    <button
                      className={`option-control ${isActive ? 'option-control-active' : ''}`}
                      type="button"
                      key={option}
                      aria-pressed={isActive}
                      onClick={() => updateSelection(group.id, option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="builder-results">
          <IllustrationPanel
            label="AI-Assisted Discovery Prototype"
            caption={recommendation.conceptDirection}
            motif={builderVisual.motif}
            tone={builderVisual.tone}
            size="default"
            className="discovery-visual"
          />

          <div className="brief-output" aria-live="polite">
            <p className="section-kicker">Consultation Brief</p>
            <h3>Project Direction</h3>
            <p>{recommendation.briefText}</p>

            <dl className="brief-detail-list">
              <div>
                <dt>Project setting</dt>
                <dd>{selections.spaceType ?? 'Select a space type'}</dd>
              </div>
              <div>
                <dt>Design Direction</dt>
                <dd>{selections.preferredDirection ?? 'Select a preferred direction'}</dd>
              </div>
              <div>
                <dt>Primary focus</dt>
                <dd>{selections.primaryInterest ?? 'Select a primary interest'}</dd>
              </div>
              <div>
                <dt>Suggested next step</dt>
                <dd>{recommendation.suggestedNextStep}</dd>
              </div>
            </dl>

            <div className="recommendation-block">
              <h4>Recommended categories</h4>
              <div className="recommendation-list">
                {recommendation.categoryPathways.map((pathway) => (
                  <span className="recommendation-chip" key={pathway}>
                    {pathway}
                  </span>
                ))}
              </div>
            </div>

            <div className="recommendation-block">
              <h4>Suggested concept direction</h4>
              <p>{recommendation.conceptDirection}</p>
            </div>

            <div className="recommendation-block">
              <h4>Spatial Consultation note</h4>
              <p>{recommendation.spatialConsultationNote}</p>
            </div>

            <p className="prototype-note">
              This prototype does not submit a request or create a final design proposal. It is a
              static recommendation prototype for early project framing.
            </p>

            <div className="brief-actions">
              <button className="button button-primary" type="button" onClick={copyBrief}>
                Copy brief
              </button>
              <button className="button button-secondary" type="button" onClick={resetBuilder}>
                Reset
              </button>
            </div>

            {copyState !== 'idle' ? (
              <p className="copy-state">
                {copyState === 'copied'
                  ? 'Brief copied.'
                  : 'Clipboard is unavailable. Copy the brief text manually.'}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
