import { useState } from 'react';
import { categories } from '../data/categories';
import type { VisualMotif, VisualTone } from '../data/visualMotifs';
import { IllustrationPanel } from './IllustrationPanel';

const categoryVisuals: Record<string, { motif: VisualMotif; tone: VisualTone }> = {
  'eastern-aquascapes': { motif: 'hero-water-vessel', tone: 'water' },
  'high-end-ornamental-fish': { motif: 'ornamental-fish', tone: 'water' },
  'aquatic-plants': { motif: 'aquatic-plant', tone: 'plant' },
  'aquarium-equipment': { motif: 'equipment-study', tone: 'technology' },
  'heritage-aquariums': { motif: 'heritage-aquarium', tone: 'heritage' },
  'vessels-decorative-pieces': { motif: 'decorative-pieces', tone: 'heritage' },
  'spatial-consultation': { motif: 'spatial-consultation', tone: 'spatial' },
  'ai-assisted-platform': { motif: 'ai-platform', tone: 'technology' },
};

export function CategoryIndex() {
  const primaryCategories = categories.slice(0, 8);
  const partnershipCategory = categories.find((category) => category.id === 'b2b-partnership');
  const [activeCategoryId, setActiveCategoryId] = useState(primaryCategories[0]?.id ?? '');
  const activeCategory =
    primaryCategories.find((category) => category.id === activeCategoryId) ?? primaryCategories[0];
  const activeVisual = categoryVisuals[activeCategory.id] ?? categoryVisuals['eastern-aquascapes'];

  return (
    <section className="category-section section-shell" aria-labelledby="category-index-title">
      <div className="section-header">
        <div>
          <p className="section-kicker">What the platform works with</p>
          <h2 id="category-index-title">A minimal index for living water and cultural material.</h2>
        </div>
        <p>
          Categories stay quiet and legible now, with room for interactive shop and platform
          workflows later.
        </p>
      </div>

      <div className="category-layout">
        <div className="category-list" aria-label="Oriental Aquascape category index">
          {primaryCategories.map((category, index) => (
            <button
              className={`category-index-item ${
                category.id === activeCategory.id ? 'is-active' : ''
              }`}
              key={category.id}
              type="button"
              aria-pressed={category.id === activeCategory.id}
              onClick={() => setActiveCategoryId(category.id)}
              onFocus={() => setActiveCategoryId(category.id)}
              onMouseEnter={() => setActiveCategoryId(category.id)}
            >
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="category-title">{category.title}</span>
              <span className="category-caption">{category.caption}</span>
            </button>
          ))}
        </div>

        <aside className="category-visual-panel" aria-live="polite">
          <p className="section-kicker">Selected focus</p>
          <h3>{activeCategory.title}</h3>
          <p>{activeCategory.caption}</p>
          <IllustrationPanel
            label="Selected focus"
            caption={activeCategory.title}
            motif={activeVisual.motif}
            tone={activeVisual.tone}
            size="compact"
            className="category-focus-illustration"
          />
        </aside>
      </div>

      {partnershipCategory ? (
        <p className="section-note">
          {partnershipCategory.title}: {partnershipCategory.caption}
        </p>
      ) : null}
    </section>
  );
}
