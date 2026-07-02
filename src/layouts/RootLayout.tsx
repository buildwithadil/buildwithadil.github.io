import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCTABar from '../components/MobileCTABar'
import Texture from '../components/Texture'
import Analytics from '../components/Analytics'

/**
 * App shell. Composes the chrome and owns cross-route behaviour:
 *  - scroll reset on navigation (SPAs don't do this for you),
 *  - focus moved to <main> so keyboard/screen-reader users land on new content,
 *  - a subtle per-route fade (reduced-motion safe),
 *  - bottom padding on mobile so the fixed CTA bar never covers content.
 */
export default function RootLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)
  const [navigated, setNavigated] = useState(false)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus()
    setNavigated(true)
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col pb-[76px] md:pb-0">
      <Texture />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>

      <Header />

      <main
        id="main"
        ref={mainRef}
        tabIndex={-1}
        className="flex-1 outline-none"
      >
        <div
          key={pathname}
          className={navigated ? 'motion-safe:animate-fade-in' : undefined}
        >
          <Outlet />
        </div>
      </main>

      <Footer />
      <MobileCTABar />
      <Analytics />
    </div>
  )
}
