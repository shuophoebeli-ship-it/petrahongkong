import { ROUTES } from '../routes'
import type { Translation } from '../i18n/translations'

export interface NavLinkItem {
  path: string
  label: string
}

/** 全站导航链接 — 统一使用 React Router 路径，不使用锚点 */
export function getNavItems(t: Translation): NavLinkItem[] {
  return [
    { path: ROUTES.about, label: t.nav.about },
    { path: ROUTES.business, label: t.nav.business },
    { path: ROUTES.solutions, label: t.nav.solutions },
    { path: ROUTES.advantages, label: t.nav.advantages },
    { path: ROUTES.team, label: t.nav.team },
    { path: ROUTES.contact, label: t.nav.contact },
  ]
}

export function getFooterNavLinks(t: Translation): NavLinkItem[] {
  return getNavItems(t)
}
