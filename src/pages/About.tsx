import { MessageSquare, Search, Wrench, Zap } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import PhotoIntro from '../components/PhotoIntro'
import FinalCTA from '../sections/FinalCTA'
import { Link } from 'react-router-dom'
import { personLd } from '../lib/seo'
import { site } from '../config/site'
import { stack } from '../data/content'

const principles = [
  {
    icon: MessageSquare,
    title: 'Direct and senior',
    body: 'You work with me, not a middle layer — clearer communication and faster decisions.',
  },
  {
    icon: Zap,
    title: 'Performance-obsessed',
    body: 'Fast load times and strong Core Web Vitals, treated as a default, not an add-on.',
  },
  {
    icon: Search,
    title: 'Findable by design',
    body: 'SEO and clean, semantic structure built in from the first line — not bolted on later.',
  },
  {
    icon: Wrench,
    title: 'Built to last',
    body: 'Maintainable, well-structured code you and your team can grow with over time.',
  },
]

const facts = [
  { label: 'Based in', value: `${site.location}, working worldwide` },
  { label: 'Building since', value: '2022' },
  { label: 'Focus', value: 'EdTech platforms & fast marketing sites' },
  { label: 'How you work with me', value: 'Directly — no handoffs' },
]

// The story, told in short beats instead of long paragraphs — each one a node
// on the timeline. Grounded entirely in the real bio; nothing invented.
const chapters = [
  {
    kicker: 'Where it started',
    title: 'The kid who took things apart',
    body: 'As a kid I’d lose whole afternoons at the computer — pulling software and games apart just to see how they worked.',
  },
  {
    kicker: 'Self-taught, by choice',
    title: 'The screen already felt like home',
    body: 'When school finished, I started where I was comfortable. A bit of research led me to HTML, then CSS, then JavaScript — and it clicked.',
  },
  {
    kicker: 'Fun became a career',
    title: 'I haven’t looked back since',
    body: 'It was fun, and I was good at it. What keeps me here is simple: I like building things people actually use, that make someone’s work genuinely easier.',
  },
  {
    kicker: 'The work that stuck',
    title: 'A whole platform, start to finish',
    body: 'The first time I put my full skill set into one project, it was a learning platform for an academy. That pull never left — most of my work now is full-stack and education-led.',
  },
  {
    kicker: 'What I obsess over',
    title: 'The parts that compound',
    body: 'Performance, SEO, clean code that holds up as you grow. The unglamorous details quietly decide whether a project still works a year later.',
  },
  {
    kicker: 'How I work',
    title: 'You talk to the person who builds it',
    body: 'Every client, directly — no account managers, no handoffs. When something’s wrong, you reach the person who can actually fix it.',
  },
]

export default function About() {
  return (
    <>
      <SeoHead
        title="About"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams ship fast, findable, high-converting websites and platforms."
        path="/about"
        jsonLd={personLd()}
      />

      {/* Opening — the stage photo leads, then a short hook. The full story
          unfolds below as a scrollable timeline rather than a wall of text. */}
      <Container className="py-16 sm:py-24">
        <PhotoIntro
          kicker="Hi, I’m Adil."
          heading="I build the web presence a good business actually deserves."
          headingAs="h1"
        >
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            A freelance full-stack developer in {site.location}, working with
            clients worldwide. I build the sites and platforms businesses
            actually run on — mostly for academies and founders.
          </p>
        </PhotoIntro>
      </Container>

      {/* Story — a scrollable timeline of short beats. */}
      <div className="border-t border-border bg-bg-subtle">
        <Section>
          <Container>
            <ScrollReveal className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
                My story
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                How a kid taking software apart{' '}
                <span className="text-fg-muted">
                  ended up building platforms.
                </span>
              </h2>
            </ScrollReveal>

            <ol className="mt-14 sm:mt-16">
              {chapters.map((c, i) => (
                <ScrollReveal
                  key={c.title}
                  as="li"
                  delay={(i % 2) * 60}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-5 pb-12 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-x-8"
                >
                  {/* Numeral rail with the connecting spine. */}
                  <div className="flex flex-col items-center">
                    <span className="section-index text-2xl leading-none text-accent sm:text-3xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < chapters.length - 1 && (
                      <span
                        aria-hidden
                        className="mt-3 w-px flex-1 bg-border-strong"
                      />
                    )}
                  </div>

                  {/* The beat. */}
                  <div className="pb-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      {c.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-lg leading-relaxed text-fg-muted">
                      {c.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </Container>
        </Section>
      </div>

      {/* Belief statement */}
      <div className="border-t border-border">
        <Section>
          <Container>
            <ScrollReveal>
              <p className="mx-auto max-w-3xl text-balance text-center font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                I’d rather build one thing that genuinely works than ten that
                just look the part.{' '}
                <span className="text-fg-muted">
                  The details most people never notice are the ones I care about
                  most.
                </span>
              </p>
            </ScrollReveal>
          </Container>
        </Section>
      </div>

      {/* The quick version — facts */}
      <div className="border-t border-border bg-bg-subtle">
        <Section>
          <Container>
            <ScrollReveal>
              <h2 className="text-3xl font-semibold tracking-tight">
                The quick version.
              </h2>
              <dl className="mt-8 grid max-w-2xl gap-x-8 gap-y-5 sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-fg">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                  Core stack
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-fg-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </div>

      {/* Principles */}
      <div className="border-t border-border">
        <Section>
          <Container>
            <SectionHeading title="What you can expect" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 60}>
                  <div className="flex gap-4">
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-bg-subtle text-fg"
                      aria-hidden
                    >
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-fg-muted">{p.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="mt-12">
              <Button asChild variant="secondary">
                <Link to="/work">See what I’ve built</Link>
              </Button>
            </ScrollReveal>
          </Container>
        </Section>
      </div>

      <FinalCTA />
    </>
  )
}
