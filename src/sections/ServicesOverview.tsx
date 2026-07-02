import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data/content'

// The building blocks that turn a website into a system. Shown as evidence of
// range — the depth lives on the Services page.
const CAPABILITIES = [
  'AI integration',
  'Payments',
  'Secure auth',
  'Admin dashboards',
  'CMS',
  'Booking & scheduling',
  'Analytics',
  'Technical SEO',
  'Performance',
  'API integrations',
  'Cloud deployment',
  'Accessibility',
]

/**
 * "What I build" — three offers told as plain rows (not a tab widget), then the
 * capability range as proof of depth. Hairline-separated so it reads as a menu,
 * not another card grid.
 */
export default function ServicesOverview() {
  return (
    <div className="border-t border-border bg-bg-subtle">
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                What I build
              </h2>
              <p className="measure mt-4 text-lg text-fg-muted">
                Three ways I help teams grow online — each engineered for
                performance, search visibility, and long-term ownership.
              </p>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              Explore services
              <ArrowUpRight
                className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          <div className="mt-12 border-t border-border">
            {services.map((s, i) => (
              <ScrollReveal
                key={s.slug}
                delay={i * 60}
                as="div"
                className="group grid gap-4 border-b border-border py-8 md:grid-cols-[1fr_1.3fr] md:items-baseline md:gap-12"
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-fg-subtle">{s.forWho}</p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-fg-muted">
                    {s.outcome}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-fg-subtle">
                    {s.includes.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          aria-hidden
                          className="size-1 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Capability range — proof of depth */}
          <ScrollReveal className="mt-10">
            <p className="text-sm font-medium text-fg">
              And the building blocks that turn a site into a system:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-fg-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
            >
              See what I can build into your product
              <ArrowRight
                className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  )
}
