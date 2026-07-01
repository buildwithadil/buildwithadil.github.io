import { Link, NavLink } from 'react-router-dom'
import { Button, Container } from '../ui'
import { cn } from '../lib/cn'
import { site } from '../config/site'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

/**
 * Sticky, minimal header. Desktop shows the nav + theme toggle + primary CTA;
 * mobile collapses the nav behind an accessible full-screen menu.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'text-sm transition-colors duration-[var(--duration-fast)] hover:text-fg',
                    isActive ? 'text-fg' : 'text-fg-muted',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link to={site.primaryCta.href}>{site.primaryCta.label}</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}
