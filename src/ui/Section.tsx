import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

/**
 * Vertical rhythm wrapper. Renders a semantic <section> with the site's
 * standard block spacing so every page section breathes consistently.
 */
export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  function Section({ className, ...props }, ref) {
    return (
      <section
        ref={ref}
        className={cn('py-16 sm:py-24', className)}
        {...props}
      />
    )
  },
)
