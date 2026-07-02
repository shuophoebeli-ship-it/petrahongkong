import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ROUTES } from '../routes'

interface PageBreadcrumbProps {
  currentLabel: string
}

export default function PageBreadcrumb({ currentLabel }: PageBreadcrumbProps) {
  const { t } = useLanguage()

  return (
    <nav aria-label={t.breadcrumb.ariaLabel} className="section-container pt-6 md:pt-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium md:text-[15px]">
        <li>
          <Link
            to={ROUTES.home}
            className="relative text-gold-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold-700 after:transition-all after:duration-200 hover:text-gold-700 hover:after:w-full"
          >
            {t.breadcrumb.home}
          </Link>
        </li>
        <li className="text-neutral-300" aria-hidden="true">
          /
        </li>
        <li className="text-neutral-900" aria-current="page">
          {currentLabel}
        </li>
      </ol>
    </nav>
  )
}
