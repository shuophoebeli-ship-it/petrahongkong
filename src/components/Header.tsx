import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { ROUTES } from '../routes'
import { getNavItems } from '../config/navigation'

export default function Header() {
  const { t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = getNavItems(t)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm transition-colors ${
      isActive ? 'font-medium text-gold-600' : 'text-neutral-600 hover:text-gold-600'
    }`

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full rounded-lg px-4 py-3 text-left text-sm transition-colors ${
      isActive
        ? 'bg-neutral-50 font-medium text-gold-600'
        : 'text-neutral-600 hover:bg-neutral-50 hover:text-gold-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
      <div className="section-container flex h-20 items-center justify-between md:h-24">
        <Link to={ROUTES.home} className="shrink-0">
          <img
            src="/logo.png"
            alt="盤石數科 Petra Digital Technology"
            className="h-11 w-auto sm:h-12 md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-50 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-neutral-100 bg-white px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mobileNavLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
