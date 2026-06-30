import type { ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionBanner from '../components/SectionBanner'
import { usePageBanner } from '../hooks/usePageBanner'

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
      {children}
    </h2>
  )
}

function SplitSectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold leading-snug text-neutral-900 md:text-3xl lg:text-4xl">
      {title}
    </h2>
  )
}

export default function Solutions() {
  const { t } = useLanguage()
  const s = t.solutions
  const banner = usePageBanner('solutions')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const chenpiSite = s.chenpiProject.officialWebsite

  return (
    <div className="bg-white">
      {/* SECTION 1 — Banner */}
      <SectionBanner
        size="about"
        src={banner.src}
        alt={banner.alt}
        headline={s.banner.headline}
        subtext={s.banner.subtext}
        objectPosition={banner.objectPosition}
      />

      {/* SECTION 2 — 全鏈路運營閉環 */}
      <section id="closed-loop" className="scroll-mt-28 section-container section-padding">
        <SectionHeading>{s.closedLoop.title}</SectionHeading>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gold-500/25 md:left-8" />

          <div className="space-y-12 md:space-y-16">
            {s.closedLoop.steps.map((step, index) => (
              <div key={step.label} className="relative flex gap-6 md:gap-10">
                <div className="relative z-10 flex w-14 shrink-0 justify-center md:w-16">
                  <span className="text-3xl font-bold text-gold-500 md:text-5xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 pb-2">
                  <span className="tag-pill mb-3 inline-flex">{step.label}</span>
                  <h3 className="text-lg font-bold text-neutral-900 md:text-xl">{step.title}</h3>

                  {step.bullets && (
                    <ul className="mt-4 space-y-2">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-sm leading-relaxed text-neutral-600 md:text-base"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.flow && (
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {step.flow.map((item, i) => (
                        <span key={item} className="flex items-center gap-2">
                          <span className="rounded-lg border border-gold-500/30 bg-gold-500/5 px-3 py-1.5 text-xs font-medium text-gold-700 md:text-sm">
                            {item}
                          </span>
                          {i < step.flow!.length - 1 && (
                            <span className="text-gold-400">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  {step.description && (
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — 兩個解決方案入口 */}
      <section className="section-container pb-16 md:pb-20">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {s.entryButtons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => scrollTo(btn.id)}
              className="btn-gold w-full text-center"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      <div className="mx-auto h-px max-w-xs bg-gold-500/30" />

      {/* SECTION 4 — 新會陳皮首期項目落地 */}
      <section
        id="chenpi-project"
        className="scroll-mt-28 section-container section-padding"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex items-start lg:sticky lg:top-28 lg:self-start">
            <SplitSectionTitle title={s.chenpiProject.title} />
          </div>

          <div className="space-y-5">
            {s.chenpiProject.cards.map((card) => (
              <div key={card.title} className="content-card">
                <span className="text-xs font-semibold tracking-wider text-gold-600 uppercase">
                  {card.title}
                </span>
                <h3 className="mt-2 text-lg font-bold text-neutral-900 md:text-xl">
                  {card.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 項目官網 */}
        <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
          <h3 className="text-center text-xl font-bold text-neutral-900 md:text-2xl">
            {chenpiSite.sectionTitle}
          </h3>
          <div className="mt-8 overflow-hidden rounded-[12px] border border-gold-500/40 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:mt-10">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 lg:aspect-auto lg:min-h-[320px]">
                <img
                  src="/chenpi-genesis-preview.jpg"
                  alt={chenpiSite.previewAlt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent px-4 py-3 lg:hidden">
                  <span className="text-xs text-white/90">chenpigenesis.io</span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <h4 className="text-xl font-bold text-neutral-900 md:text-2xl">{chenpiSite.title}</h4>
                <p className="mt-2 text-sm font-medium text-gold-700 md:text-base">{chenpiSite.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                  {chenpiSite.description}
                </p>
                <a
                  href={chenpiSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-6 inline-flex w-fit"
                >
                  {chenpiSite.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-xs bg-gold-500/30" />

      {/* SECTION 5 — 業務拓展與複製能力 */}
      <section
        id="business-expansion"
        className="scroll-mt-28 section-container section-padding pb-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex items-start lg:sticky lg:top-28 lg:self-start">
            <SplitSectionTitle title={s.expansion.title} />
          </div>

          <div className="relative space-y-6">
            <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gold-500/20" />

            {s.expansion.phases.map((phase) => (
              <div key={phase.period} className="relative flex gap-6 pl-0">
                <div className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-500/40 bg-white">
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                </div>
                <div className="content-card flex-1">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-base font-bold text-neutral-900">{phase.period}</span>
                    <span className="text-sm font-medium text-gold-600">{phase.timeframe}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
