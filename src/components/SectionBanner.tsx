interface SectionBannerProps {
  src: string
  alt: string
  headline: string
  subtext?: string
  objectPosition?: string
  /** default: 420px full — about: responsive compact heights for About page */
  size?: 'default' | 'about'
  /** display: single-line financial hero headline (Business page) */
  headlineVariant?: 'default' | 'display'
}

function renderDisplayHeadline(text: string) {
  const parts = text.split(/(RWA)/g)

  return parts.map((part, index) =>
    part === 'RWA' ? (
      <span key={index} className="inline align-baseline tracking-wide">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

export default function SectionBanner({
  src,
  alt,
  headline,
  subtext,
  objectPosition,
  size = 'default',
  headlineVariant = 'default',
}: SectionBannerProps) {
  const isAbout = size === 'about'
  const position = objectPosition ?? (isAbout ? 'center' : '50% 45%')

  return (
    <div
      className={
        isAbout
          ? 'relative h-[200px] w-full overflow-hidden md:h-[300px] lg:h-[380px]'
          : 'relative h-[420px] w-full overflow-hidden'
      }
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(30,41,59,0.42) 0%, rgba(15,23,42,0.28) 50%, rgba(0,0,0,0.4) 100%), linear-gradient(to top, rgba(201,162,39,0.14) 0%, transparent 45%)',
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h3
          className={
            headlineVariant === 'display'
              ? 'section-banner-headline-display text-white'
              : isAbout
                ? 'max-w-4xl text-[30px] leading-tight font-bold text-white md:text-[42px] lg:text-[56px]'
                : 'max-w-4xl text-2xl font-bold text-white md:text-4xl lg:text-[2.5rem]'
          }
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}
        >
          {headlineVariant === 'display' ? renderDisplayHeadline(headline) : headline}
        </h3>
        {subtext && (
          <p
            className={
              isAbout
                ? 'mx-auto mt-3 max-w-[900px] text-xs leading-relaxed text-white/90 md:mt-4 md:text-sm lg:text-base'
                : 'mt-5 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base'
            }
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  )
}
