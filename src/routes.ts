export const ROUTES = {
  home: '/',
  about: '/about',
  business: '/business',
  solutions: '/solutions',
  advantages: '/advantages',
  team: '/team',
  contact: '/contact',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
