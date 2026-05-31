export type LookbookStudy = {
  id: string;
  title: string;
  label: 'Concept Study';
  caption: string;
};

export const lookbookStudies: LookbookStudy[] = [
  {
    id: 'eastern-courtyard-water',
    title: 'Eastern Courtyard Water',
    label: 'Concept Study',
    caption: 'A quiet water atmosphere for residential and hospitality spaces.',
  },
  {
    id: 'jade-stone-composition',
    title: 'Jade Stone Composition',
    label: 'Concept Study',
    caption: 'Stone, vessel, and planted form in restrained balance.',
  },
  {
    id: 'heritage-vessel-aquascape',
    title: 'Heritage Vessel Aquascape',
    label: 'Concept Study',
    caption: 'A vessel-led study rooted in craft techniques and daily ritual.',
  },
];
