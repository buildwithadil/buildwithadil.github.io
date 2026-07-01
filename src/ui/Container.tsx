import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

const containerVariants = cva('mx-auto w-full px-6 sm:px-8', {
  variants: {
    // `default` = page content; `narrow` = long-form reading measure.
    size: {
      default: 'max-w-6xl',
      narrow: 'max-w-3xl',
    },
  },
  defaultVariants: { size: 'default' },
})

export interface ContainerProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

/** Centered, max-width page gutter. The single source of horizontal rhythm. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ className, size, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    )
  },
)
