import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getFooterNavLinks } from '../config/navigation'

export default function Footer() {
  const { t } = useLanguage()
  const footerNavLinks = getFooterNavLinks(t)

  return (
    <footer className="bg-neutral-800 text-neutral-400">
      <div className="section-container grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <h5 className="mb-4 text-sm font-semibold text-white">{t.companyName}</h5>
          <p className="text-sm leading-relaxed text-neutral-500">{t.companyNameEn}</p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold text-white">
            {t.footer.navigation.title}
          </h5>
          <ul className="space-y-2.5">
            {footerNavLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm transition-colors hover:text-gold-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold text-white">{t.footer.contact.title}</h5>
          <p className="text-sm leading-relaxed">{t.footer.contact.address}</p>
          <a
            href={`tel:${t.footer.contact.phone.replace(/\s/g, '')}`}
            className="mt-3 block text-sm transition-colors hover:text-gold-400"
          >
            {t.footer.contact.phone}
          </a>
          <a
            href={`mailto:${t.footer.contact.email}`}
            className="mt-1 block text-sm transition-colors hover:text-gold-400"
          >
            {t.footer.contact.email}
          </a>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold text-white">{t.footer.legal.title}</h5>
          <ul className="space-y-2.5">
            {t.footer.legal.links.map((link) => (
              <li key={link}>
                <span className="cursor-pointer text-sm transition-colors hover:text-gold-400">
                  {link}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="section-container px-4 pt-6 pb-7 md:pb-8">
          <p className="mx-auto max-w-[1100px] text-center text-[12px] leading-[1.8] font-normal text-[#9B9B9B] md:text-[13px]">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
