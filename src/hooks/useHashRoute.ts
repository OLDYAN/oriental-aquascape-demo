import { useEffect, useState } from 'react';
import type { RouteId } from '../i18n/types';

const routeByHash: Record<string, RouteId> = {
  '#/': 'home',
  '#/shop': 'shop',
  '#/consultation': 'consultation',
  '#/story': 'story',
  '#/lookbook': 'lookbook',
};

function readRoute(): RouteId {
  if (typeof window === 'undefined') {
    return 'home';
  }

  return routeByHash[window.location.hash] ?? 'home';
}

export function useHashRoute() {
  const [route, setRoute] = useState<RouteId>(() => readRoute());

  useEffect(() => {
    function handleHashChange() {
      setRoute(readRoute());
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}
