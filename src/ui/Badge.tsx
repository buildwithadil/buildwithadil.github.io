import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

/**
 * Small label for tech tags, status ("Available for work"), or categories.
 * One quiet, token-driven style — consistency over configurability.
 */
export const Badge = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(function Badge({ className, ...props }, ref) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs font-medium text-fg-muted',
        className,
      )}
      {...props}
    />
  )
})
