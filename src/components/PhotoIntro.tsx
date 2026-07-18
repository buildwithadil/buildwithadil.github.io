import type { ElementType, ReactNode } from 'react'
import ScrollReveal from './ScrollReveal'
import Headshot from './Headshot'

interface PhotoIntroProps {
  kicker: string
  heading: ReactNode
  /** Heading tag — use 'h1' where this is the page's primary heading. */
  headingAs?: ElementType
  /** Optional content rendered below the heading (intro copy, CTA, etc). */
  children?: ReactNode
  className?: string
  /** Constrains just the photo (e.g. 'max-w-sm') — omit for full-width. */
  imageClassName?: string
}

/**
 * The stage photo leads, shown uncropped at its native landscape aspect
 * ratio — the photo is the thing being promoted, so nothing crops it or
 * sits on top of it. The kicker, heading, and any copy follow underneath at
 * a normal reading width, independent of how wide the photo itself is.
 */
export default function PhotoIntro({
  kicker,
  heading,
  headingAs: Heading = 'h2',
  children,
  className,
  imageClassName,
}: PhotoIntroProps) {
  return (
    <div className={className}>
      <ScrollReveal className={imageClassName}>
        <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
          <Headshot className="aspect-[1414/1113]" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100} className="mt-8 max-w-2xl sm:mt-10">
        <p className="text-sm font-medium text-fg-subtle">{kicker}</p>
        <Heading className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {heading}
        </Heading>
        {children}
      </ScrollReveal>
    </div>
  )
}
