import { forwardRef, type AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/cn'

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Internal route path → renders a React Router <Link> (SPA navigation). */
  to?: string
  /** Show a ↗ glyph for external links. Ignored for internal links. */
  showExternalIcon?: boolean
}

const baseClass =
  'inline-flex items-center gap-0.5 font-medium text-fg underline decoration-border-strong decoration-1 underline-offset-4 transition-colors duration-[var(--duration-fast)] hover:decoration-fg'

function isExternalHref(href?: string) {
  return !!href && /^(https?:|mailto:|tel:)/.test(href)
}

/**
 * Inline text link. Use `to` for internal SPA routes and `href` for external
 * ones (which automatically get safe `target`/`rel`). Nav-style links that
 * shouldn't be underlined use the router's <Link> directly instead.
 */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  function TextLink(
    { className, to, href, showExternalIcon = true, children, ...props },
    ref,
  ) {
    if (to) {
      return (
        <Link ref={ref} to={to} className={cn(baseClass, className)} {...props}>
          {children}
        </Link>
      )
    }

    const external = isExternalHref(href)
    const opensNewTab = external && !/^(mailto:|tel:)/.test(href ?? '')

    return (
      <a
        ref={ref}
        href={href}
        className={cn(baseClass, className)}
        {...(opensNewTab
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {children}
        {external && showExternalIcon && (
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        )}
      </a>
    )
  },
)
