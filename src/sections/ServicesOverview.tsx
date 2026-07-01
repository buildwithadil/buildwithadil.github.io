import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/cn'
import { services } from '../data/content'

/**
 * Interactive services selector: pick a service on the left, its detail panel
 * updates on the right. Hover-driven on desktop, focus/click accessible.
 */
export default function ServicesOverview() {
  const [active, setActive] = useState(0)
  const service = services[active]

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I build"
          intro="Three ways I help teams grow online — each engineered for performance, SEO, and long-term maintainability."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Selector */}
          <ScrollReveal className="flex flex-col gap-2">
            {services.map((s, i) => {
              const on = i === active
              return (
                <button
                  key={s.slug}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={cn(
                    'group flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-[var(--duration-base)] ease-[var(--ease-out-expo)]',
                    on
                      ? 'border-border-strong bg-surface shadow-sm'
                      : 'border-transparent hover:bg-bg-subtle',
                  )}
                >
                  <span
                    className={cn(
                      'font-display text-lg font-bold tabular-nums transition-colors',
                      on ? 'text-gradient' : 'text-fg-subtle',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold">
                      {s.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-fg-muted">
                      {s.forWho}
                    </span>
                  </span>
                  <ArrowRight
                    className={cn(
                      'size-4 shrink-0 transition-all',
                      on
                        ? 'translate-x-0 text-accent opacity-100'
                        : '-translate-x-1 opacity-0',
                    )}
                    aria-hidden
                  />
                </button>
              )
            })}
          </ScrollReveal>

          {/* Detail panel */}
          <ScrollReveal
            delay={80}
            className="overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
          >
            <div key={active} className="motion-safe:animate-in">
              <h3 className="font-display text-2xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-fg-muted">{service.outcome}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-fg-muted"
                  >
                    <Check
                      className="size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary" className="mt-8">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
