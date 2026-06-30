interface BusinessAnchorNavProps {
  items: { id: string; label: string }[]
}

export default function BusinessAnchorNav({ items }: BusinessAnchorNavProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Business page sections"
      className="sticky top-16 z-40 border-b border-neutral-100 bg-white/95 backdrop-blur-md md:top-20"
    >
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="section-container flex gap-3 px-4 py-4 sm:justify-center sm:px-6 lg:px-8">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="shrink-0 rounded-full border border-gold-500/50 bg-gold-500/5 px-5 py-2.5 text-sm font-medium whitespace-nowrap text-neutral-800 transition-all hover:border-gold-500 hover:bg-gold-500/15 hover:text-gold-700"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
