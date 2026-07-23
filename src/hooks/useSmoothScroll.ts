import { useEffect } from 'react'
import type Lenis from 'lenis'

let instance: Lenis | null = null

/** The live Lenis instance, or null (SSR, or reduced motion). */
export function getLenis() {
  return instance
}

/**
 * Scrolls to the top the way the current scroller expects — Lenis owns the
 * scroll position when it's running, so `window.scrollTo` alone would fight it.
 */
export function scrollToTop() {
  if (instance) instance.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

/** Freeze/unfreeze the page (mobile nav panel). Falls back to `overflow`. */
export function setScrollLocked(locked: boolean) {
  if (instance) {
    if (locked) instance.stop()
    else instance.start()
    return
  }
  document.body.style.overflow = locked ? 'hidden' : ''
}

/**
 * Mounts Lenis once, at the app shell. Native scrolling stays the source of
 * truth (Lenis just eases the position), so IntersectionObserver reveals and
 * `scroll` listeners keep working untouched.
 *
 * Loaded lazily after mount — it's an enhancement, so it stays out of the
 * initial JS budget. Skipped entirely under prefers-reduced-motion, and torn
 * down live if the visitor flips that preference mid-session.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    let mounted = true

    const start = async () => {
      if (instance) return
      const { default: Lenis } = await import('lenis')
      // Bailed out (unmounted, or reduced motion switched on) while loading.
      if (!mounted || query.matches || instance) return
      instance = new Lenis({
        // Feel: quick to respond, settles without floatiness.
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        // Touch keeps the OS's own momentum; smoothing it feels laggy.
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
        // In-page links (e.g. the hero's "scroll to work" cue) ease too, with
        // room for the sticky header.
        anchors: { offset: -80 },
      })
    }

    const stop = () => {
      instance?.destroy()
      instance = null
    }

    if (!query.matches) void start()

    const onChange = () => (query.matches ? stop() : void start())
    query.addEventListener('change', onChange)
    return () => {
      mounted = false
      query.removeEventListener('change', onChange)
      stop()
    }
  }, [])
}
