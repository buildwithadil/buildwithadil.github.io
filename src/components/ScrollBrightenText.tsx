import { useEffect, useRef } from 'react'
import { cn } from '../lib/cn'

interface ScrollBrightenTextProps {
  /** One string per paragraph. */
  paragraphs: string[]
  className?: string
}

// Dim state for words the reader hasn't scrolled to yet.
const DIM_OPACITY = 0.35

/**
 * Word-by-word brightness tied directly to scroll position — words are dim
 * ahead of the reader and light up to full brightness as the block scrolls
 * through, like a progress fill made of text. Renders fully bright by
 * default (SSR/no-JS safe); the dimming is a client-only enhancement, and is
 * skipped entirely under prefers-reduced-motion.
 */
export default function ScrollBrightenText({
  paragraphs,
  className,
}: ScrollBrightenTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])
  wordRefs.current = []

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const words = wordRefs.current
    const total = words.length
    if (total === 0) return

    let frame: number | null = null

    const update = () => {
      frame = null
      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight
      // Reading window: starts lighting up as the block's top approaches the
      // lower part of the viewport, fully lit by the time its bottom nears
      // the upper part — scales with the block's own height.
      const start = vh * 0.88
      const end = vh * 0.32
      const denom = rect.height + (start - end)
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / Math.max(denom, 1)),
      )
      const litFloat = progress * total

      words.forEach((el, i) => {
        let amount: number
        if (i < Math.floor(litFloat)) amount = 1
        else if (i === Math.floor(litFloat)) amount = litFloat - i
        else amount = 0
        el.style.opacity = String(DIM_OPACITY + (1 - DIM_OPACITY) * amount)
      })
    }

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [paragraphs])

  let idx = -1
  return (
    <div ref={containerRef} className={className}>
      {paragraphs.map((paragraph, pi) => (
        <p key={pi} className={cn(pi > 0 && 'mt-4')}>
          {paragraph.split(/(\s+)/).map((token, ti) => {
            if (token === '' || /^\s+$/.test(token)) {
              return <span key={ti}>{token}</span>
            }
            idx += 1
            const i = idx
            return (
              <span
                key={ti}
                ref={(el) => {
                  if (el) wordRefs.current[i] = el
                }}
                style={{ opacity: 1 }}
              >
                {token}
              </span>
            )
          })}
        </p>
      ))}
    </div>
  )
}
