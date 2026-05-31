export type Language = 'en' | 'zh';

export type RouteId = 'home' | 'shop' | 'consultation' | 'story' | 'lookbook';

export type NavItem = {
  route: RouteId;
  href: string;
  label: string;
};
