import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import HeroCarousel from '../components/HeroCarousel'
import { ROUTES } from '../routes'
import type { RoutePath } from '../routes'

const PORTAL_ICONS = [
  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'M13 10V3L4 14h7v7l9-11h-7z',
  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
]

export default function Home() {
  const { t } = useLanguage()
  const h = t.home
  const about = h.aboutIntro

  return (
    <div className="bg-white">
      <HeroCarousel />

      {/* 關於我們 */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <img
          src="/home-about-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-white/88" />

        <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gold-700 md:text-3xl lg:text-4xl">
            {about.title}
          </h2>
          <p className="mt-2 text-center text-sm tracking-[0.25em] text-gold-600 md:text-base">
            {about.subtitle}
          </p>

          <div className="mt-8 space-y-5 text-left text-sm leading-relaxed text-neutral-700 md:mt-10 md:text-base md:leading-loose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:mt-10 md:justify-end">
            <Link
              to={ROUTES.about}
              className="inline-flex items-center border border-neutral-300 bg-white/80 px-5 py-2.5 text-sm text-neutral-800 transition-colors hover:border-gold-500/60 hover:text-gold-700 md:text-base"
            >
              {about.cta}
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-xs bg-gold-500/30" />

      {/* 六大入口 */}
      <section className="section-container section-padding">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {h.portals.map((portal, index) => (
            <Link
              key={portal.route}
              to={portal.route as RoutePath}
              className="group relative flex min-h-[180px] flex-col rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg md:min-h-[200px] md:p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-white text-gold-600 transition group-hover:border-gold-500/50">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={PORTAL_ICONS[index] ?? PORTAL_ICONS[0]} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{portal.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{portal.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700 transition group-hover:gap-2">
                {h.portalArrow}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>


      {/* 最新動態 */}
      <section className="section-container section-padding pb-20 md:pb-24">
        <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">{h.news.title}</h2>
        <div className="mx-auto mt-12 max-w-lg rounded-xl border border-dashed border-neutral-300 bg-neutral-50/50 px-8 py-16 text-center">
          <p className="text-2xl font-bold tracking-widest text-neutral-400">{h.news.comingSoon}</p>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-neutral-500">{h.news.subtitle}</p>
        </div>
      </section>
    </div>
  )
}
