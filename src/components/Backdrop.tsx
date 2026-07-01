import type { CSSProperties } from 'react'

// Fine-grain noise (SVG feTurbulence) as a data URI — adds a subtle tactile
// texture that reads premium. Tiled, very low opacity.
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const dotGrid: CSSProperties = {
  backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  maskImage:
    'radial-gradient(ellipse 60% 55% at 50% 0%, #000 50%, transparent 100%)',
  WebkitMaskImage:
    'radial-gradient(ellipse 60% 55% at 50% 0%, #000 50%, transparent 100%)',
  opacity: 0.55,
}

/**
 * Decorative, theme-aware depth layer for hero/CTA sections: a masked dot grid,
 * a soft monochrome glow, and fine grain. Purely presentational (aria-hidden),
 * token-driven so it adapts to light/dark.
 */
export default function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* subtle vertical gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-subtle to-transparent" />
      {/* masked dot grid */}
      <div className="absolute inset-0" style={dotGrid} />
      {/* soft neutral glow */}
      <div className="absolute left-1/2 top-[-20%] h-[420px] w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-fg/[0.05] blur-[110px]" />
      {/* fine grain */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: NOISE }}
      />
    </div>
  )
}
