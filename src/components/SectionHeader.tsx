interface SectionHeaderProps {
  headline: string
  badge?: string
  intro?: string
  as?: 'h1' | 'h2'
  className?: string
  compact?: boolean
}

export default function SectionHeader({
  headline,
  badge,
  intro,
  as: Tag = 'h2',
  className = '',
  compact = false,
}: SectionHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 ${className}`}>
      <Tag className="text-3xl font-bold leading-snug tracking-tight text-neutral-900 md:text-4xl lg:text-[2.75rem]">
        {headline}
      </Tag>

      {badge && (
        <div
          className={`inline-flex items-center rounded-full border border-gold-500/60 px-5 py-2 ${
            compact ? 'mt-5' : 'mt-8'
          }`}
        >
          <span className="text-sm font-medium text-gold-600">{badge}</span>
        </div>
      )}

      {intro && (
        <p
          className={`mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 md:text-[17px] ${
            compact ? 'mt-6' : 'mt-10'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
