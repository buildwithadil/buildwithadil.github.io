import type { CSSProperties } from 'react'

const dotGrid: CSSProperties = {
  backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  maskImage:
    'radial-gradient(ellipse 55% 60% at 50% 0%, #000 40%, transparent 100%)',
  WebkitMaskImage:
    'radial-gradient(ellipse 55% 60% at 50% 0%, #000 40%, transparent 100%)',
  opacity: 0.6,
}

const vignette: CSSProperties = {
  background:
    'radial-gradient(ellipse 70% 100% at 50% -10%, color-mix(in srgb, var(--color-fg) 5%, transparent), transparent 70%)',
}

/**
 * Subtle, neutral depth for hero/CTA sections: a masked dot grid + a faint
 * tonal vignette. No colourful gradients — texture does the work.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0" style={vignette} />
      <div className="absolute inset-0" style={dotGrid} />
    </div>
  )
}
