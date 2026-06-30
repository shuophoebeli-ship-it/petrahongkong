import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
