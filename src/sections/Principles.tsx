import {
  Gauge,
  MessageSquare,
  Search,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/cn'

interface Cell {
  icon: LucideIcon
  title: string
  body: string
  span?: string
  feature?: boolean
  stat?: string
  statLabel?: string
}

const cells: Cell[] = [
  {
    icon: Gauge,
    title: 'Performance is a feature',
    body: 'Fast, stable pages by default — Core Web Vitals treated as part of the build, never a cleanup task at the end.',
    span: 'md:col-span-2 md:row-span-2',
    feature: true,
    stat: '100',
    statLabel: 'Lighthouse performance',
  },
  {
    icon: Search,
    title: 'Findable by design',
    body: 'Semantic structure and technical SEO built in from the first line.',
  },
  {
    icon: ShieldCheck,
    title: 'Accessible by default',
    body: 'WCAG 2.2 AA — keyboard, contrast, and screen-reader tested.',
  },
  {
    icon: MessageSquare,
    title: 'Direct and senior',
    body: 'You work with me — no account managers, no handoff telephone game.',
    span: 'md:col-span-2',
  },
  {
    icon: Wrench,
    title: 'Built to maintain',
    body: 'Clean, typed, documented code your team can grow with.',
  },
]

export default function Principles() {
  return (
    <div className="border-t border-border bg-bg-subtle">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How I think"
            title="Principles I build on"
            intro="The habits behind work that performs — and keeps performing after launch."
          />

          <div className="mt-12 grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 md:grid-cols-3">
            {cells.map((cell, i) => (
              <ScrollReveal
                key={cell.title}
                delay={i * 60}
                className={cell.span}
              >
                <div
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-border-strong hover:shadow-md',
                    cell.feature ? 'bg-bg-subtle' : 'bg-surface',
                  )}
                >
                  <span className="relative grid size-11 place-items-center rounded-lg border border-border bg-surface text-fg">
                    <cell.icon className="size-5" aria-hidden />
                  </span>

                  {cell.feature && cell.stat && (
                    <div className="relative mt-6">
                      <span className="text-gradient font-display text-6xl font-bold tracking-tight">
                        {cell.stat}
                      </span>
                      <span className="mt-1 block text-sm text-fg-subtle">
                        {cell.statLabel}
                      </span>
                    </div>
                  )}

                  <h3
                    className={cn(
                      'relative font-display font-semibold',
                      cell.feature ? 'mt-6 text-2xl' : 'mt-5 text-lg',
                    )}
                  >
                    {cell.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-fg-muted">
                    {cell.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
