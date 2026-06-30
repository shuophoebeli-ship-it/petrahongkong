import { useLanguage } from '../context/LanguageContext'
import SectionHeader from '../components/SectionHeader'
import SectionBanner from '../components/SectionBanner'
import { usePageBanner } from '../hooks/usePageBanner'

export default function About() {
  const { t } = useLanguage()
  const banner = usePageBanner('about')

  return (
    <section className="bg-white">
      <SectionBanner
        size="about"
        src={banner.src}
        alt={banner.alt}
        headline={t.about.banner.headline}
        subtext={t.about.banner.subtext}
        objectPosition={banner.objectPosition}
      />

      <div className="section-container pt-[60px] pb-16 md:pb-20">
        <SectionHeader
          headline={t.about.headline}
          badge={t.about.badge}
          intro={t.about.intro}
          compact
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-10 md:space-y-12">
          {t.about.valueProps.map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="text-lg font-bold text-neutral-900 md:text-xl">{item.title}</h4>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:mt-4 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
