import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { HOME_CAROUSEL_IMAGES, HOME_CAROUSEL_SLIDE_COUNT } from '../config/homeCarousel'

const INTERVAL_MS = 5000

export default function HeroCarousel() {
  const { t, language } = useLanguage()
  const slogans = t.home.carousel.slogans
  const [active, setActive] = useState(0)
  const slogan = slogans[active] ?? slogans[0]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % HOME_CAROUSEL_SLIDE_COUNT)
    }, INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div aria-label={t.home.carousel.ariaLabel}>
      <section
        className="relative h-[520px] w-full overflow-hidden"
        aria-roledescription="carousel"
      >
        {HOME_CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={index !== active}
          >
            <img
              src={image.src}
              alt={language === 'zh' ? image.alt.zh : image.alt.en}
              className="h-full w-full object-cover"
              style={{ objectPosition: image.objectPosition }}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </div>
        ))}

        <div className="relative flex h-full items-center">
          <div className="section-container w-full">
            <div
              className="mx-auto w-fit max-w-[92%] px-6 py-4 text-center md:mx-0 md:max-w-none md:px-10 md:py-5"
              style={{ background: 'rgba(180, 140, 60, 0.75)' }}
            >
              <p className="text-base leading-snug font-bold whitespace-pre-line text-white md:text-lg lg:text-xl">
                {slogan}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-2.5 py-4">
        {HOME_CAROUSEL_IMAGES.map((image, index) => (
          <span
            key={image.id}
            className={`h-2 w-2 rounded-full ${
              index === active ? 'bg-neutral-800' : 'border border-neutral-300 bg-white'
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  )
}
