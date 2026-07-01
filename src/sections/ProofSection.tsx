import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { testimonials } from '../data/content'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

/** Social proof — education-led. Clean, equal, aligned cards. */
export default function ProofSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by the founders I build with"
          intro="Partners on real education platforms — in their words."
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 80}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
            >
              <span
                className="text-gradient font-display text-5xl leading-none"
                aria-hidden
              >
                &ldquo;
              </span>

              {import.meta.env.DEV && t.temporary && (
                <span className="mt-4 w-fit rounded-full border border-dashed border-border-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fg-subtle">
                  Temporary — replace before launch
                </span>
              )}

              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-fg">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-bg-subtle font-display text-sm font-semibold text-fg-muted"
                  aria-hidden
                >
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">
                    {t.name}
                  </span>
                  <span className="block text-sm text-fg-muted">{t.role}</span>
                </span>
              </figcaption>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
