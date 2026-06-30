import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { ROUTES } from '../routes'

export default function NotFoundPage() {
  const { language } = useLanguage()

  return (
    <div className="section-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-bold text-neutral-200">404</h1>
      <p className="mt-4 text-lg text-neutral-600">
        {language === 'zh' ? '找不到此頁面' : 'Page not found'}
      </p>
      <Link to={ROUTES.home} className="btn-primary mt-8">
        {language === 'zh' ? '返回首頁' : 'Back to Home'}
      </Link>
    </div>
  )
}
