import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BusinessPage from './pages/BusinessPage'
import SolutionsPage from './pages/SolutionsPage'
import AdvantagesPage from './pages/AdvantagesPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './routes'

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.business} element={<BusinessPage />} />
          <Route path={ROUTES.solutions} element={<SolutionsPage />} />
          <Route path={ROUTES.advantages} element={<AdvantagesPage />} />
          <Route path={ROUTES.team} element={<TeamPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
