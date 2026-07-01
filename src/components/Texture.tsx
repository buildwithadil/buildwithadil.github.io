import type { CSSProperties } from 'react'

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const grid: CSSProperties = {
  backgroundImage:
    'radial-gradient(var(--color-border) 0.6px, transparent 0.6px)',
  backgroundSize: '30px 30px',
}

/**
 * Global, fixed background texture — a faint dot grid + fine grain. Sits behind
 * all content (base surfaces cover it), giving the site a quiet tactile depth
 * without any colourful gradients.
 */
export default function Texture() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-60" style={grid} />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  )
}
