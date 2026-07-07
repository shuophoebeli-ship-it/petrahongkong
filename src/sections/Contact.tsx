import { type ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import SectionBanner from '../components/SectionBanner'
import PageBreadcrumb from '../components/PageBreadcrumb'
import { usePageBanner } from '../hooks/usePageBanner'

function LocationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/25 bg-gold-500/5 text-gold-600">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">{label}</p>
        <div className="mt-1.5 text-sm leading-relaxed text-neutral-700">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact
  const pageBanner = usePageBanner('contact')

  return (
    <section className="bg-white">
      {/* SECTION 1 — Banner */}
      <SectionBanner
        size="about"
        src={pageBanner.src}
        alt={pageBanner.alt}
        headline={c.banner.headline}
        subtext={c.banner.subtext}
        objectPosition={pageBanner.objectPosition}
      />

      <PageBreadcrumb currentLabel={t.nav.contact} />

      {/* SECTION 2 — 聯絡資訊 + 辦公地點地圖 */}
      <div className="section-container pt-6 pb-20 md:pt-8 md:pb-24">
        <h2 className="text-center text-2xl font-bold text-neutral-900 md:text-3xl">
          {c.offices.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-600 md:text-base">
          {c.maps.title}
        </p>

        <div className="mx-auto mt-12 max-w-xl lg:mt-16">
          {c.offices.locations.map((office, index) => {
            const map = c.maps.items[index]
            return (
              <div key={office.city} className="flex flex-col gap-4">
                <div className="flex flex-col gap-6 rounded-xl border border-gold-500/40 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
                  <div className="border-b border-neutral-100 pb-5">
                    <p className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
                      {office.city}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-neutral-900 md:text-xl">
                      {office.company}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{office.companyEn}</p>
                  </div>

                  <InfoRow icon={<LocationIcon />} label={c.offices.labels.address}>
                    {office.address.split('\n').map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </InfoRow>

                  <InfoRow icon={<PhoneIcon />} label={c.offices.labels.phone}>
                    <div className="space-y-1">
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block transition-colors hover:text-gold-700"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </InfoRow>
                </div>

                {map && (
                  <a
                    href={map.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center justify-center rounded-lg border border-gold-500/60 bg-white px-5 py-2.5 text-sm font-semibold text-gold-700 transition-all hover:border-gold-600 hover:bg-gold-500/5 hover:text-gold-800"
                  >
                    {c.maps.viewButton}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
