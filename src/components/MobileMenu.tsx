import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'
import { site } from '../config/site'

/**
 * Full-screen mobile navigation. Radix Dialog gives us the focus trap, Escape
 * handling, scroll lock, and ARIA for free; we style it with tokens.
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors duration-[var(--duration-fast)] hover:border-border-strong hover:text-fg md:hidden"
        >
          <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/60 backdrop-blur-sm md:hidden" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-bg p-6 md:hidden">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-lg font-semibold">
              {site.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-md border border-border text-fg-muted hover:border-border-strong hover:text-fg"
              >
                <X size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>

          <nav className="mt-10 flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md py-3 font-display text-2xl font-medium text-fg transition-colors hover:text-fg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <Button asChild size="lg" className="w-full">
              <Link to={site.primaryCta.href} onClick={() => setOpen(false)}>
                {site.primaryCta.label}
              </Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
