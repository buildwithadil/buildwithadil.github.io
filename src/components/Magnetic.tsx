import { useRef, type CSSProperties, type ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  /** 0–1: how strongly the element follows the cursor. */
  strength?: number
  className?: string
}

/**
 * Cursor-aware "magnetic" wrapper — the child gently follows the pointer, then
 * springs back. Disabled for touch and reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const allowed = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function onMove(e: React.PointerEvent) {
    const el = ref.current
    if (!el || !allowed()) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  function reset() {
    if (ref.current) ref.current.style.transform = ''
  }

  const style: CSSProperties = {
    display: 'inline-flex',
    transition: 'transform 0.35s var(--ease-spring)',
    willChange: 'transform',
  }

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={className}
      style={style}
    >
      {children}
    </span>
  )
}
