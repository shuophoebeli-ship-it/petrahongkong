import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getFooterNavLinks } from '../config/navigation'

export default function Footer() {
  const { t } = useLanguage()
  const footerNavLinks = getFooterNavLinks(t)

  return (
    <footer className="bg-neutral-800 text-neutral-400">
      <div className="section-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
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
          <p className="text-sm leading-relaxed">{t.footer.contact.hkOffice}</p>
          <p className="mt-2 text-sm leading-relaxed">{t.footer.contact.szOffice}</p>
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
          <p className="mt-6 text-sm leading-relaxed text-neutral-500">{t.footer.copyright.text}</p>
        </div>
      </div>

      <div className="border-t border-neutral-700">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-gold-400">
              {t.footer.privacy}
            </span>
            <span className="cursor-pointer transition-colors hover:text-gold-400">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
