import { useLanguage } from '../context/LanguageContext'
import type { Language } from '../i18n/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const options: { lang: Language; label: string }[] = [
    { lang: 'zh', label: '繁' },
    { lang: 'en', label: 'EN' },
  ]

  return (
    <div
      className="flex items-center rounded-lg border border-neutral-200 bg-neutral-50 px-1 py-1 text-xs font-medium"
      role="group"
      aria-label="Language switcher"
    >
      {options.map((option, index) => (
        <span key={option.lang} className="flex items-center">
          {index > 0 && <span className="px-0.5 text-neutral-300 select-none">｜</span>}
          <button
            onClick={() => setLanguage(option.lang)}
            className={`rounded-md px-2.5 py-1 transition-all ${
              language === option.lang
                ? 'bg-gold-500/15 text-gold-700'
                : 'text-neutral-500 hover:text-neutral-800'
            }`}
            aria-pressed={language === option.lang}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  )
}
