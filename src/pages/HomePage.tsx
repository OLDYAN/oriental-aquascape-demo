import { CategoryIndex } from '../components/CategoryIndex';
import { CommercePreview } from '../components/CommercePreview';
import { ConsultationPreview } from '../components/ConsultationPreview';
import { Hero } from '../components/Hero';
import { LookbookPreview } from '../components/LookbookPreview';
import { PlatformPreview } from '../components/PlatformPreview';
import { StudioStatement } from '../components/StudioStatement';
import type { SiteContent } from '../i18n/content';

type HomePageProps = {
  content: SiteContent;
};

export function HomePage({ content }: HomePageProps) {
  return (
    <>
      <Hero content={content} />
      <StudioStatement content={content} />
      <CategoryIndex content={content} />
      <LookbookPreview content={content} />
      <CommercePreview content={content} />
      <PlatformPreview content={content} />
      <ConsultationPreview content={content} />
    </>
  );
}
