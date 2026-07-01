import type { CSSProperties } from 'react'

// Fine-grain noise (SVG feTurbulence) as a data URI — subtle tactile texture.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const dotGrid: CSSProperties = {
  backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  maskImage:
    'radial-gradient(ellipse 60% 55% at 50% 0%, #000 45%, transparent 100%)',
  WebkitMaskImage:
    'radial-gradient(ellipse 60% 55% at 50% 0%, #000 45%, transparent 100%)',
  opacity: 0.5,
}

/**
 * Decorative, theme-aware depth layer for hero/CTA sections: a drifting accent
 * glow (indigo→violet), a masked dot grid, and fine grain. Purely presentational.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-subtle to-transparent" />
      <div className="absolute inset-0" style={dotGrid} />
      <div
        className="animate-drift absolute left-1/2 top-[-18%] h-[540px] w-[min(960px,96vw)] -translate-x-1/2 rounded-full opacity-[0.24] blur-[130px]"
        style={{
          backgroundImage: 'var(--gradient-brand-soft)',
          animation: 'drift 14s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  )
}
