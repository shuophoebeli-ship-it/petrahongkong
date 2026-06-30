import type { ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionBanner from '../components/SectionBanner'
import SectionHeader from '../components/SectionHeader'
import { usePageBanner } from '../hooks/usePageBanner'

type PillarIcon = 'innovation' | 'compliance' | 'replication'
type HighlightIcon = 'market' | 'model' | 'verified' | 'scale' | 'exit'
type IconName = PillarIcon | HighlightIcon

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl">
      {children}
    </h2>
  )
}

function SectionDivider() {
  return <div className="mx-auto h-px max-w-xs bg-gold-500/30" />
}

function GoldIcon({ name, className = 'h-8 w-8' }: { name: IconName; className?: string }) {
  const stroke = 'currentColor'
  const props = {
    className,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'innovation':
      return (
        <svg {...props}>
          <path d="M16 4v2M16 26v2M6 16H4M28 16h-2M8.5 8.5l1.4 1.4M22.1 22.1l1.4 1.4M8.5 23.5l1.4-1.4M22.1 9.9l1.4-1.4" />
          <path d="M16 10a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V20h4v-2.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4z" />
          <circle cx="16" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <path d="M13 22h6" />
        </svg>
      )
    case 'compliance':
      return (
        <svg {...props}>
          <path d="M16 4l10 4v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4z" />
          <path d="M12 16l2.5 2.5L20 13" />
        </svg>
      )
    case 'replication':
      return (
        <svg {...props}>
          <path d="M6 20l10-5 10 5-10 5-10-5z" />
          <path d="M6 14l10-5 10 5M6 8l10-5 10 5" />
        </svg>
      )
    case 'market':
      return (
        <svg {...props}>
          <path d="M4 24l6-8 6 4 6-10 6 6" />
          <path d="M4 26h24" />
        </svg>
      )
    case 'model':
      return (
        <svg {...props}>
          <circle cx="10" cy="16" r="6" />
          <circle cx="22" cy="16" r="6" />
          <path d="M16 16h0" />
        </svg>
      )
    case 'verified':
      return (
        <svg {...props}>
          <path d="M16 4l10 4v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4z" />
          <path d="M11 16l3 3 7-7" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...props}>
          <path d="M6 20l10-5 10 5-10 5-10-5z" />
          <path d="M6 14l10-5 10 5" />
        </svg>
      )
    case 'exit':
      return (
        <svg {...props}>
          <path d="M6 26V10l10-6 10 6v16" />
          <path d="M12 26v-6h8v6M16 4v6" />
        </svg>
      )
  }
}

export default function Advantages() {
  const { t } = useLanguage()
  const { banner, coreTitle, pillars, investmentHighlights } = t.advantages
  const pageBanner = usePageBanner('advantages')

  return (
    <section className="bg-white">
      <SectionBanner
        size="about"
        src={pageBanner.src}
        alt={pageBanner.alt}
        headline={banner.headline}
        subtext={banner.subtext}
        objectPosition={pageBanner.objectPosition}
      />

      <div className="section-container pt-[60px] pb-16 md:pb-20">
        <SectionHeader headline={coreTitle} compact />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-xl border border-gold-500/40 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/30 text-gold-600">
                <GoldIcon name={pillar.icon} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 md:text-xl">{pillar.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 md:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      <div className="bg-[#FAFAF8] section-padding pb-16 md:pb-20">
        <div className="section-container">
          <SectionTitle>{investmentHighlights.title}</SectionTitle>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-5">
            {investmentHighlights.items.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-gold-500/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-gold-600/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-gold-600">
                    <GoldIcon name={item.icon} className="h-6 w-6" />
                  </div>
                </div>
                {item.highlight && (
                  <p className="mt-4 text-2xl font-bold text-gold-600">{item.highlight}</p>
                )}
                <h3
                  className={`font-bold text-neutral-900 ${item.highlight ? 'mt-1 text-base' : 'mt-4 text-base'}`}
                >
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
