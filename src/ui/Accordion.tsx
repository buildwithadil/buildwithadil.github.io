import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '../lib/cn'

/**
 * Accessible accordion (Radix): full keyboard + ARIA behaviour for free, styled
 * with our tokens. Used for the FAQ. Height animation honours reduced-motion.
 */
export const Accordion = AccordionPrimitive.Root

export const AccordionItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn('border-b border-border', className)}
      {...props}
    />
  )
})

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-fg transition-colors duration-[var(--duration-fast)] hover:text-fg-muted',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className="size-5 shrink-0 text-fg-subtle transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

export const AccordionContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('measure pb-5 text-fg-muted', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
