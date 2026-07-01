import { Card, Container, Section } from '../ui'
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

/** Social proof. Testimonials are education-led (our proof wedge). */
export default function ProofSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          intro="Founders I’ve partnered with on real education platforms."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 60}>
              <Card className="flex h-full flex-col p-8">
                {import.meta.env.DEV && t.temporary && (
                  <span className="mb-4 w-fit rounded-full border border-dashed border-border-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fg-subtle">
                    Temporary — replace before launch
                  </span>
                )}
                <blockquote className="flex-1 text-lg leading-relaxed text-fg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-bg-subtle text-sm font-semibold text-fg-muted"
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-fg">
                      {t.name}
                    </span>
                    <span className="block text-sm text-fg-muted">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
