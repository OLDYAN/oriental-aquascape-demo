import type { Product } from '../data/products';

export type SpaceType =
  | 'Residential interior'
  | 'Office / studio'
  | 'Restaurant / hospitality'
  | 'Retail / showroom'
  | 'Designer / B2B project';

export type PreferredDirection =
  | 'Minimal Eastern aquascape'
  | 'Heritage vessel composition'
  | 'Plant-focused living water'
  | 'Equipment-forward modern setup'
  | 'Decorative pieces and spatial atmosphere'
  | 'AI-assisted product discovery';

export type PrimaryInterest =
  | 'Aquascaping design'
  | 'Heritage Aquariums'
  | 'Aquatic plants'
  | 'Aquarium equipment'
  | 'Vessels & Decorative Pieces'
  | 'I Ching & Feng Shui Spatial Consultation'
  | 'B2B Partnership';

export type Timeline = 'Exploring' | '1-3 months' | '3-6 months' | 'B2B planning cycle';

export type BudgetRange =
  | 'Concept only'
  | 'Entry project'
  | 'Premium project'
  | 'Commercial / partnership';

export type MaintenancePreference =
  | 'Low-maintenance'
  | 'Balanced'
  | 'High-design / specialist maintenance'
  | 'Not sure yet';

export type ConsultationSelections = {
  spaceType?: SpaceType;
  preferredDirection?: PreferredDirection;
  primaryInterest?: PrimaryInterest;
  timeline?: Timeline;
  budgetRange?: BudgetRange;
  maintenancePreference?: MaintenancePreference;
};

export type ConsultationRecommendation = {
  isComplete: boolean;
  briefText: string;
  suggestedNextStep: string;
  categoryPathways: string[];
  conceptDirection: 'Eastern Courtyard Water' | 'Jade Stone Composition' | 'Heritage Vessel Aquascape';
  spatialConsultationNote: string;
};

export type RecommendationInput = {
  preferredCategory?: string;
  atmosphere?: string;
};

function uniqueLimited(values: string[], limit: number) {
  return Array.from(new Set(values)).slice(0, limit);
}

function formatSelection(value: string | undefined, fallback: string) {
  return value ?? fallback;
}

function getDirectionPathways(direction: PreferredDirection | undefined) {
  switch (direction) {
    case 'Heritage vessel composition':
      return ['Heritage Aquariums', 'Vessels & Decorative Pieces'];
    case 'Plant-focused living water':
      return ['Aquatic Plants', 'Eastern Aquascapes'];
    case 'Equipment-forward modern setup':
      return ['Aquarium Equipment', 'AI-Assisted Platform'];
    case 'Decorative pieces and spatial atmosphere':
      return ['Vessels & Decorative Pieces', 'I Ching & Feng Shui Spatial Consultation'];
    case 'AI-assisted product discovery':
      return ['AI-Assisted Platform', 'Aquarium Equipment'];
    case 'Minimal Eastern aquascape':
      return ['Eastern Aquascapes', 'Aquatic Plants'];
    default:
      return ['Eastern Aquascapes', 'AI-Assisted Platform'];
  }
}

function getInterestPathway(primaryInterest: PrimaryInterest | undefined) {
  switch (primaryInterest) {
    case 'Aquascaping design':
      return 'Eastern Aquascapes';
    case 'Aquatic plants':
      return 'Aquatic Plants';
    case 'Aquarium equipment':
      return 'Aquarium Equipment';
    default:
      return primaryInterest;
  }
}

function getConceptDirection(selections: ConsultationSelections) {
  if (
    selections.preferredDirection === 'Heritage vessel composition' ||
    selections.primaryInterest === 'Heritage Aquariums'
  ) {
    return 'Heritage Vessel Aquascape';
  }

  if (
    selections.preferredDirection === 'Decorative pieces and spatial atmosphere' ||
    selections.primaryInterest === 'Vessels & Decorative Pieces' ||
    selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation'
  ) {
    return 'Jade Stone Composition';
  }

  return 'Eastern Courtyard Water';
}

function getNextStep(selections: ConsultationSelections) {
  if (
    selections.spaceType === 'Designer / B2B project' ||
    selections.primaryInterest === 'B2B Partnership' ||
    selections.timeline === 'B2B planning cycle'
  ) {
    return 'Prepare a partner brief with site context, schedule, and procurement scope.';
  }

  if (selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation') {
    return 'Begin with a cultural, spatial, symbolic, and aesthetic review before product selection.';
  }

  if (selections.timeline === 'Exploring' || selections.budgetRange === 'Concept only') {
    return 'Start with a concept study to clarify scale, materials, and maintenance rhythm.';
  }

  return 'Use a formal consultation to refine scale, materials, product pathway, and maintenance.';
}

function getSpatialConsultationNote(selections: ConsultationSelections) {
  const mayBenefitFromSpatialReview =
    selections.primaryInterest === 'I Ching & Feng Shui Spatial Consultation' ||
    selections.preferredDirection === 'Decorative pieces and spatial atmosphere' ||
    selections.spaceType === 'Restaurant / hospitality' ||
    selections.spaceType === 'Retail / showroom';

  if (!mayBenefitFromSpatialReview) {
    return 'Spatial Consultation is optional and can remain secondary to aquascape direction.';
  }

  return 'Spatial Consultation may help frame placement, balance, material, atmosphere, and symbolic meaning without outcome promises.';
}

export function buildConsultationRecommendation(
  selections: ConsultationSelections,
): ConsultationRecommendation {
  const selectedValues = Object.values(selections).filter(Boolean);
  const isComplete = selectedValues.length === 6;
  const interestPathway = getInterestPathway(selections.primaryInterest);
  const categoryPathways = uniqueLimited(
    [
      ...getDirectionPathways(selections.preferredDirection),
      ...(interestPathway ? [interestPathway] : []),
      ...(selections.spaceType === 'Designer / B2B project' ? ['B2B Partnership'] : []),
      ...(selections.maintenancePreference === 'Low-maintenance' ? ['Aquarium Equipment'] : []),
      'AI-Assisted Platform',
    ],
    4,
  );
  const projectSetting = formatSelection(selections.spaceType, 'an unselected space');
  const designDirection = formatSelection(selections.preferredDirection, 'an open design direction');
  const primaryFocus = formatSelection(selections.primaryInterest, 'a primary focus to be selected');
  const timeline = formatSelection(selections.timeline, 'an open timeline');
  const maintenance = formatSelection(
    selections.maintenancePreference,
    'a maintenance preference to be clarified',
  );
  const briefText = isComplete
    ? `Preliminary direction: ${designDirection} for ${projectSetting}, with ${primaryFocus} as the primary focus. Timeline: ${timeline}. Maintenance: ${maintenance}. Recommended path: ${categoryPathways.join(', ')}. A formal consultation would clarify scale, materials, and spatial atmosphere.`
    : `Draft direction: ${designDirection} for ${projectSetting}, with ${primaryFocus}. Select the remaining preferences to refine recommended categories, timeline, and maintenance.`;

  return {
    isComplete,
    briefText,
    suggestedNextStep: getNextStep(selections),
    categoryPathways,
    conceptDirection: getConceptDirection(selections),
    spatialConsultationNote: getSpatialConsultationNote(selections),
  };
}

export function getDemoRecommendations(
  products: Product[],
  input: RecommendationInput = {},
) {
  const preferredProducts = input.preferredCategory
    ? products.filter((product) => product.category === input.preferredCategory)
    : products;

  return preferredProducts.slice(0, 3).map((product) => ({
    product,
    reason: input.atmosphere
      ? `Demo match for a ${input.atmosphere} atmosphere.`
      : 'Demo match for restrained Eastern aquatic living.',
  }));
}
