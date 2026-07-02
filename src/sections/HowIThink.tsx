import { Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import { decisions } from '../data/content'

/**
 * "How I think" — the signature beat. Instead of *claiming* product thinking
 * ("business-first thinking" on a card), it *shows* it: three real decisions
 * from real builds, each told as problem → the call → why → result. The call
 * itself is the visual hero of every block. Editorial, hairline-separated —
 * deliberately not a card grid, so it reads as someone's actual reasoning.
 */
export default function HowIThink() {
  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Anyone can list technologies.
              <br className="hidden sm:block" />{' '}
              <span className="text-fg-muted">
                The difference is the calls you make.
              </span>
            </h2>
            <p className="measure mt-5 text-lg leading-relaxed text-fg-muted">
              Every project has a moment where two paths diverge and the obvious
              one is wrong. Here’s how I think about three of them — pulled
              straight from real academy builds.
            </p>
          </div>

          <div className="mt-16 flex flex-col">
            {decisions.map((d, i) => (
              <ScrollReveal
                key={d.label}
                delay={i * 60}
                className="grid gap-x-12 gap-y-6 border-t border-border py-12 first:border-t-0 first:pt-0 lg:grid-cols-[10rem_1fr] lg:py-16"
              >
                {/* Index + attribution */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="section-index text-5xl lg:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-fg-subtle">
                    {d.project}
                  </span>
                </div>

                {/* The reasoning */}
                <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
                    The problem
                  </p>
                  <p className="mt-2 max-w-xl text-lg leading-relaxed text-fg-muted">
                    {d.problem}
                  </p>

                  <h3 className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[1.75rem]">
                    {d.label}.
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg">
                    {d.decision}
                  </p>

                  <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
                        Why this call
                      </p>
                      <p className="mt-2 leading-relaxed text-fg-muted">
                        {d.why}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-widest text-accent">
                        The result
                      </p>
                      <p className="mt-2 leading-relaxed text-fg-muted">
                        {d.result}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
