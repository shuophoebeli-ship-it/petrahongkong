import type { ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionBanner from '../components/SectionBanner'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { usePageBanner } from '../hooks/usePageBanner'

type TeamIcon =
  | 'legal'
  | 'blockchain'
  | 'finance'
  | 'regulation'
  | 'tech'
  | 'ecosystem'
  | 'standard'

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

function GoldIcon({ name, className = 'h-7 w-7' }: { name: TeamIcon; className?: string }) {
  const props = {
    className,
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'legal':
      return (
        <svg {...props}>
          <path d="M16 4v24M10 8h12M12 28h8" />
          <path d="M11 12h10M11 16h10M11 20h6" />
        </svg>
      )
    case 'blockchain':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="10" height="10" rx="1.5" />
          <rect x="18" y="4" width="10" height="10" rx="1.5" />
          <rect x="11" y="18" width="10" height="10" rx="1.5" />
          <path d="M14 9h4M23 9v4M16 14v4" />
        </svg>
      )
    case 'finance':
      return (
        <svg {...props}>
          <path d="M6 26V14l10-6 10 6v12" />
          <path d="M12 26v-8h8v8M16 8v4" />
        </svg>
      )
    case 'regulation':
      return (
        <svg {...props}>
          <path d="M16 4l10 4v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4z" />
          <path d="M12 16l2.5 2.5L20 13" />
        </svg>
      )
    case 'tech':
      return (
        <svg {...props}>
          <rect x="6" y="6" width="20" height="20" rx="2" />
          <path d="M11 11h4v4h-4zM17 11h4M17 17h4M11 21h4" />
        </svg>
      )
    case 'ecosystem':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="10" />
          <path d="M16 6v20M6 16h20M9 9l14 14M23 9L9 23" />
        </svg>
      )
    case 'standard':
      return (
        <svg {...props}>
          <path d="M8 6h16v20H8z" />
          <path d="M12 12h8M12 16h8M12 20h5" />
          <path d="M14 6V4" />
        </svg>
      )
  }
}

export default function Team() {
  const { t } = useLanguage()
  const team = t.team
  const pageBanner = usePageBanner('team')

  return (
    <section className="bg-white">
      <SectionBanner
        size="about"
        src={pageBanner.src}
        alt={pageBanner.alt}
        headline={team.banner.headline}
        subtext={team.banner.subtext}
        objectPosition={pageBanner.objectPosition}
      />

      <PageBreadcrumb currentLabel={t.nav.team} />

      {/* 核心管理團隊 */}
      <div className="section-container pt-6 pb-16 md:pt-8 md:pb-20">
        <SectionTitle>{team.management.title}</SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {team.management.members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-xl border border-gold-500/35 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
            >
              <div className="border-b border-neutral-100 pb-5">
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-gold-700 uppercase">
                  {member.role}
                </p>
              </div>
              <ul className="mt-5 space-y-2.5">
                {member.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-neutral-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* 未來展望 */}
      <div className="section-container section-padding pb-20 md:pb-24">
        <SectionTitle>{team.outlook.title}</SectionTitle>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-neutral-600 md:mt-8 md:text-base">
          {team.outlook.summary}
        </p>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {team.outlook.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gold-500/25 text-gold-600">
                <GoldIcon name={pillar.icon} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{pillar.title}</h3>
              <p className="mt-1 text-sm font-medium text-gold-700">{pillar.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
