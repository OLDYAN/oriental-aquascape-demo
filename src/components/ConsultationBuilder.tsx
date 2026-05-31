import { useEffect, useMemo, useState } from 'react';
import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import {
  buildLocalizedBrief,
  getConceptDirectionLabel,
  getLocalizedNextStep,
  getLocalizedOptionLabel,
  getLocalizedPathways,
  getLocalizedSpatialNote,
  type SiteContent,
} from '../i18n/content';
import type { Language } from '../i18n/types';
import {
  buildConsultationRecommendation,
  type ConsultationSelections,
} from '../utils/recommendations';
import { IllustrationPanel } from './IllustrationPanel';

type CopyState = 'idle' | 'copied' | 'manual';

type ConsultationBuilderProps = {
  content: SiteContent;
  language: Language;
};

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

export function ConsultationBuilder({ content, language }: ConsultationBuilderProps) {
  const [selections, setSelections] = useState<ConsultationSelections>({});
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const recommendation = useMemo(
    () => buildConsultationRecommendation(selections),
    [selections],
  );
  const builderVisual = getBuilderVisual(selections);
  const selectedCount = Object.values(selections).filter(Boolean).length;
  const conceptDirection = getConceptDirectionLabel(recommendation.conceptDirection, language);
  const categoryPathways =
    language === 'en'
      ? recommendation.categoryPathways
      : getLocalizedPathways(recommendation.categoryPathways, language);
  const briefText =
    language === 'en'
      ? recommendation.briefText
      : buildLocalizedBrief(selections, recommendation.categoryPathways, language);
  const suggestedNextStep =
    language === 'en' ? recommendation.suggestedNextStep : getLocalizedNextStep(selections, language);
  const spatialConsultationNote =
    language === 'en'
      ? recommendation.spatialConsultationNote
      : getLocalizedSpatialNote(selections, language);

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
      await navigator.clipboard.writeText(briefText);
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
          <p className="section-kicker">{content.builder.kicker}</p>
          <h2 id="consultation-builder-title">{content.builder.title}</h2>
        </div>
        <p>{content.builder.body}</p>
      </div>

      <div className="builder-grid">
        <div className="builder-panel" aria-label={content.builder.preferencesLabel}>
          <div className="builder-progress">
            <span>
              {selectedCount} of {content.builder.optionGroups.length}{' '}
              {content.builder.progressSuffix}
            </span>
            <button className="builder-reset" type="button" onClick={resetBuilder}>
              {content.builder.reset}
            </button>
          </div>

          {content.builder.optionGroups.map((group) => (
            <fieldset className="option-group" key={group.id}>
              <legend>{group.label}</legend>
              <div className="option-list">
                {group.options.map((option) => {
                  const isActive = getSelectionValue(selections, group.id) === option.value;

                  return (
                    <button
                      className={`option-control ${isActive ? 'option-control-active' : ''}`}
                      type="button"
                      key={option.value}
                      aria-pressed={isActive}
                      onClick={() => updateSelection(group.id, option.value)}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="builder-results">
          <IllustrationPanel
            label={content.builder.visualLabel}
            caption={conceptDirection}
            motif={builderVisual.motif}
            tone={builderVisual.tone}
            size="default"
            className="discovery-visual"
          />

          <div className="brief-output" aria-live="polite">
            <p className="section-kicker">{content.builder.outputKicker}</p>
            <h3>{content.builder.outputTitle}</h3>
            <p>{briefText}</p>

            <dl className="brief-detail-list">
              <div>
                <dt>{content.builder.projectSetting}</dt>
                <dd>
                  {getLocalizedOptionLabel(language, 'spaceType', selections.spaceType) ??
                    content.builder.fallbackSpace}
                </dd>
              </div>
              <div>
                <dt>{content.builder.designDirection}</dt>
                <dd>
                  {getLocalizedOptionLabel(
                    language,
                    'preferredDirection',
                    selections.preferredDirection,
                  ) ?? content.builder.fallbackDirection}
                </dd>
              </div>
              <div>
                <dt>{content.builder.primaryFocus}</dt>
                <dd>
                  {getLocalizedOptionLabel(language, 'primaryInterest', selections.primaryInterest) ??
                    content.builder.fallbackFocus}
                </dd>
              </div>
              <div>
                <dt>{content.builder.suggestedNextStep}</dt>
                <dd>{suggestedNextStep}</dd>
              </div>
            </dl>

            <div className="recommendation-block">
              <h4>{content.builder.recommendedCategories}</h4>
              <div className="recommendation-list">
                {categoryPathways.map((pathway) => (
                  <span className="recommendation-chip" key={pathway}>
                    {pathway}
                  </span>
                ))}
              </div>
            </div>

            <div className="recommendation-block">
              <h4>{content.builder.conceptDirection}</h4>
              <p>{conceptDirection}</p>
            </div>

            <div className="recommendation-block">
              <h4>{content.builder.spatialNote}</h4>
              <p>{spatialConsultationNote}</p>
            </div>

            <p className="prototype-note">{content.builder.prototypeNote}</p>

            <div className="brief-actions">
              <button className="button button-primary" type="button" onClick={copyBrief}>
                {content.builder.copy}
              </button>
              <button className="button button-secondary" type="button" onClick={resetBuilder}>
                {content.builder.reset}
              </button>
            </div>

            {copyState !== 'idle' ? (
              <p className="copy-state">
                {copyState === 'copied' ? content.builder.copied : content.builder.manual}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
