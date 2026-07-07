import type { ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionBanner from '../components/SectionBanner'
import PageBreadcrumb from '../components/PageBreadcrumb'
import BusinessAnchorNav from '../components/BusinessAnchorNav'
import { usePageBanner } from '../hooks/usePageBanner'

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">{children}</h2>
  )
}

function SectionDivider() {
  return <div className="mx-auto mt-16 h-px max-w-xs bg-gold-500/40" />
}

function DownArrow({ className = 'h-6 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 24"
      className={`text-neutral-400 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M8 2v16M8 18l-4-4M8 18l4-4" />
    </svg>
  )
}

function ParentToColumnsConnector() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-1" aria-hidden>
      <svg viewBox="0 0 480 40" className="mx-auto h-10 w-full text-neutral-300">
        <path
          d="M240 0 L240 12 L80 12 L80 40 M240 12 L400 12 L400 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function ColumnsToProjectsConnector() {
  return (
    <div className="mx-auto mt-2 w-full max-w-4xl px-4" aria-hidden>
      <svg viewBox="0 0 640 24" className="mx-auto h-6 w-full text-neutral-300">
        <path
          d="M128 0 L128 12 L512 12 L512 0 M128 12 L128 24 M320 12 L320 24 M512 12 L512 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function TechServiceIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        fill="#F5A623"
        stroke="#E8913A"
        strokeWidth="1"
      />
      <path
        d="M11 16h10M16 11v10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DigitalInvestmentIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
      <circle cx="16" cy="16" r="14" fill="#F5A623" stroke="#E8913A" strokeWidth="1" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        ¥
      </text>
    </svg>
  )
}

function BlockchainSegmentIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0 text-neutral-700" fill="none" aria-hidden>
      <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 16v4M14 25l4-5M26 25l-4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function RwaSegmentIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0 text-neutral-700" fill="none" aria-hidden>
      <path d="M8 30V18M14 30V12M20 30V16M26 30V10M32 30V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 30h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SegmentCardIcon({ type }: { type: 'blockchain' | 'rwa' }) {
  return type === 'blockchain' ? <BlockchainSegmentIcon /> : <RwaSegmentIcon />
}

function SynergyNetworkIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-neutral-700" fill="none" aria-hidden>
      <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 14v6M12 27l6-7M28 27l-6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SynergyGrowthIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 text-neutral-700" fill="none" aria-hidden>
      <path d="M8 30V20M16 30V14M24 30V18M32 30V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 10h6v6M32 10L22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 30h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SynergyBoxIcon({ type }: { type: 'network' | 'growth' }) {
  return type === 'network' ? <SynergyNetworkIcon /> : <SynergyGrowthIcon />
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 text-gold-400" fill="currentColor" aria-hidden>
      <path d="M8 4h16v3c0 3.3-2.7 6-6 6h-1c1.5 1.2 2.5 3 2.7 5H20v2H12v-2h.3c.2-2 1.2-3.8 2.7-5h-1c-3.3 0-6-2.7-6-6V4zm2 2v1c0 2.2 1.8 4 4 4s4-1.8 4-4V6H10zm-4 2H4c0 2.8 1.8 5.2 4.3 6.1.4-1.1 1-2.1 1.8-3C7.8 10.5 6 9.4 6 8zm22 0h-2c0 1.4-1.8 2.5-3.1 3.1.8.9 1.4 1.9 1.8 3C25.2 13.2 27 10.8 27 8z" />
    </svg>
  )
}

export default function Business() {
  const { t } = useLanguage()
  const b = t.business
  const banner = usePageBanner('business')

  return (
    <div className="bg-white">
      <SectionBanner
        size="about"
        headlineVariant="display"
        src={banner.src}
        alt={banner.alt}
        headline={b.banner.headline}
        objectPosition={banner.objectPosition}
      />

      <PageBreadcrumb currentLabel={t.nav.business} />

      <BusinessAnchorNav items={b.anchorNav} />

      {/* 核心定位 */}
      <section
        id="core-positioning"
        className="scroll-mt-36 section-container section-padding"
      >
        <SectionTitle>{b.corePositioning.title}</SectionTitle>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {b.corePositioning.boxes.map((box) => (
            <div
              key={box.title}
              className={`rounded-2xl p-8 ${
                box.variant === 'beige'
                  ? 'bg-[#F5F0E6]'
                  : 'border border-neutral-200 bg-white'
              }`}
            >
              <h3 className="text-lg font-bold leading-snug text-neutral-900 md:text-xl">
                {box.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-base">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 公司架構 */}
      <section
        id="company-structure"
        className="scroll-mt-36 section-container section-padding"
      >
        <SectionTitle>{b.companyStructure.title}</SectionTitle>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mx-auto max-w-3xl rounded-lg border-2 border-[#C0392B]/80 bg-[#F5F0E6] px-6 py-5 text-center">
            <h3 className="text-lg font-bold text-neutral-900 md:text-xl">
              {b.companyStructure.parent.name}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
              {b.companyStructure.parent.description}
            </p>
          </div>

          <ParentToColumnsConnector />

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {b.companyStructure.columns.map((col, colIndex) => (
              <div key={col.title} className="flex flex-col">
                <div className="flex items-center gap-3 rounded-t-lg border border-neutral-200 bg-[#EEF6F0] px-4 py-3">
                  {colIndex === 0 ? <TechServiceIcon /> : <DigitalInvestmentIcon />}
                  <div className="min-w-0">
                    <p className="text-base font-bold text-neutral-900">{col.title}</p>
                    {col.brand && (
                      <p className="text-xs font-medium text-[#E8913A]">{col.brand}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col rounded-b-lg border border-t-0 border-neutral-200 bg-white p-4">
                  {col.companies.map((company, index) => (
                    <div key={company.name}>
                      <div
                        className={`rounded-lg border border-neutral-200 bg-white p-4 ${
                          colIndex === 1 ? 'border-l-4 border-l-[#E8913A]' : ''
                        }`}
                      >
                        <p className="font-semibold leading-snug text-neutral-900">{company.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                          {company.description}
                        </p>
                      </div>
                      {index < col.companies.length - 1 && (
                        <div className="flex justify-center py-2">
                          <DownArrow />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ColumnsToProjectsConnector />

          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {b.companyStructure.projects.map((project) => (
              <div
                key={project.name}
                className="flex min-h-[72px] flex-col items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-3 text-center"
              >
                <span className="text-xs leading-snug font-medium text-neutral-800 md:text-sm">
                  {project.name}
                </span>
                {project.subItems?.map((subItem) => (
                  <p key={subItem} className="mt-1.5 text-[11px] leading-snug text-neutral-500 md:text-xs">
                    {subItem}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 業務板塊 */}
      <section
        id="business-segments"
        className="scroll-mt-36 section-container section-padding"
      >
        <SectionTitle>{b.businessSegments.title}</SectionTitle>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {b.businessSegments.segments.map((seg) => (
            <div
              key={seg.title}
              className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <SegmentCardIcon type={seg.icon} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-snug text-neutral-900 md:text-lg">
                    {seg.title}
                  </h3>
                  <div className="mt-3 h-px bg-neutral-200" />
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                    {seg.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 rounded-lg bg-neutral-100 p-4 sm:grid-cols-2">
                {seg.subItems.map((sub) => (
                  <div key={sub.title}>
                    <p className="text-sm font-bold text-neutral-900">{sub.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 md:text-sm">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-5xl rounded-lg bg-neutral-100 px-6 py-4 text-center text-sm leading-relaxed text-neutral-700 md:text-[15px]">
          {b.businessSegments.footer}
        </div>
      </section>

      <SectionDivider />

      {/* 業務生態 */}
      <section
        id="business-ecosystem"
        className="scroll-mt-36 section-container section-padding"
      >
        <SectionTitle>{b.businessEcosystem.title}</SectionTitle>
        <div className="mx-auto mt-12 max-w-3xl content-card space-y-8">
          {b.businessEcosystem.points.map((point) => (
            <div key={point.title}>
              <h3 className="text-base font-bold text-neutral-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 生態協同 */}
      <section
        id="ecosystem-synergy"
        className="scroll-mt-36 section-container section-padding pb-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            {b.ecosystemSynergy.title}
          </h2>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
            {b.ecosystemSynergy.intro}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {b.ecosystemSynergy.boxes.map((box) => (
              <div
                key={box.title}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <SynergyBoxIcon type={box.icon} />
                <h3 className="mt-4 text-base font-bold text-neutral-900 md:text-lg">
                  {box.title}
                </h3>
                <div className="my-4 border-t border-dashed border-neutral-300" />
                <p className="text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                  {box.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-lg bg-neutral-800 px-6 py-5 text-white md:items-center">
            <TrophyIcon />
            <p className="text-sm leading-relaxed md:text-[15px]">
              {b.ecosystemSynergy.conclusion}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
