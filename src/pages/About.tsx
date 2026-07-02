import { MessageSquare, Search, Wrench, Zap } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import Headshot from '../components/Headshot'
import ImagePlaceholder from '../components/ImagePlaceholder'
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

export default function About() {
  return (
    <>
      <SeoHead
        title="About"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams ship fast, findable, high-converting websites and platforms."
        path="/about"
        jsonLd={personLd()}
      />

      {/* Intro */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-[300px]">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl border border-border"
              />
              <div className="overflow-hidden rounded-xl border border-border shadow-md">
                <Headshot />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-fg-subtle">
                Hi, I’m Adil.
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                I build the web presence a good business actually deserves.
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
                <p>
                  I’m a freelance full-stack developer based in {site.location},
                  working with clients worldwide. Since 2022 I’ve built websites
                  and platforms for academies, educational institutes, and
                  businesses — the kind of work where the site isn’t a
                  decoration, it’s how the business runs and grows.
                </p>
                <p>
                  I’m self-taught. As a kid I was the one who’d lose whole
                  afternoons at the computer, taking apart software and games
                  just to see how they worked. When school finished and it was
                  time to actually make something of myself, I started where I
                  already felt at home — the screen. A bit of research led me to
                  HTML, then CSS, then JavaScript, and it clicked: it was fun,
                  and I was good at it. “Fun” quietly became a career, and I
                  haven’t looked back since. What keeps me at it is simple — I
                  like building things people actually use, that make someone’s
                  work genuinely easier.
                </p>
                <p>
                  The first time I got to put my whole skill set into a single
                  project, it was a full learning platform for an academy — and
                  that pull has stuck. Most of my work now is full-stack and
                  education-led: student portals, admin systems, and AI-assisted
                  tools, alongside fast marketing sites for professional
                  services. I gravitate toward the parts that compound —
                  performance, SEO, and clean code that holds up as you grow —
                  because those quietly decide whether a project still works a
                  year later.
                </p>
                <p>
                  I work directly with every client. No account managers, no
                  handoffs — just clear communication and someone genuinely
                  invested in the outcome. When something’s wrong, you talk to
                  the person who can fix it. That’s the whole point of hiring me
                  instead of an agency.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Belief statement */}
        <ScrollReveal className="mt-16 border-t border-border pt-12">
          <p className="mx-auto max-w-3xl text-balance text-center font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            I’d rather build one thing that genuinely works than ten that just
            look the part.{' '}
            <span className="text-fg-muted">
              The details most people never notice are the ones I care about
              most.
            </span>
          </p>
        </ScrollReveal>
      </Container>

      {/* The person behind the work — candid image + facts */}
      <div className="border-t border-border bg-bg-subtle">
        <Section>
          <Container>
            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
              <ScrollReveal>
                {/* Real candid photo builds connection — replace this placeholder. */}
                <ImagePlaceholder
                  label="[Candid photo: Adil at his desk, mid-work — natural light, real workspace. A relaxed, human shot (not a posed portrait) so clients feel they’re meeting a person.]"
                  className="aspect-[4/3]"
                />
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-3xl font-semibold tracking-tight">
                  A bit of the how and where.
                </h2>
                <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
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
            </div>
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
