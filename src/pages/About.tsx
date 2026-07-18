import { MessageSquare, Search, Wrench, Zap } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import PhotoIntro from '../components/PhotoIntro'
import ScrollBrightenText from '../components/ScrollBrightenText'
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

// Plain strings (not JSX) so ScrollBrightenText can split them into words.
const bio = [
  `I’m a freelance full-stack developer based in ${site.location}, working with clients worldwide. Since 2022 I’ve built websites and platforms for academies, educational institutes, and businesses — the kind of work where the site isn’t a decoration, it’s how the business runs and grows.`,
  `I’m self-taught. As a kid I was the one who’d lose whole afternoons at the computer, taking apart software and games just to see how they worked. When school finished and it was time to actually make something of myself, I started where I already felt at home — the screen. A bit of research led me to HTML, then CSS, then JavaScript, and it clicked: it was fun, and I was good at it. “Fun” quietly became a career, and I haven’t looked back since. What keeps me at it is simple — I like building things people actually use, that make someone’s work genuinely easier.`,
  `The first time I got to put my whole skill set into a single project, it was a full learning platform for an academy — and that pull has stuck. Most of my work now is full-stack and education-led: student portals, admin systems, and AI-assisted tools, alongside fast marketing sites for professional services. I gravitate toward the parts that compound — performance, SEO, and clean code that holds up as you grow — because those quietly decide whether a project still works a year later.`,
  `I work directly with every client. No account managers, no handoffs — just clear communication and someone genuinely invested in the outcome. When something’s wrong, you talk to the person who can fix it. That’s the whole point of hiring me instead of an agency.`,
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

      {/* Intro — large landscape stage photo leads; the fuller story flows
          below in a single readable column instead of being squeezed into a
          side-by-side split. */}
      <Container className="py-16 sm:py-24">
        <PhotoIntro
          kicker="Hi, I’m Adil."
          heading="I build the web presence a good business actually deserves."
          headingAs="h1"
        />

        <ScrollBrightenText
          paragraphs={bio}
          className="mt-14 max-w-2xl text-lg leading-relaxed text-fg"
        />

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

      {/* A bit of the how and where — facts */}
      <div className="border-t border-border bg-bg-subtle">
        <Section>
          <Container>
            <ScrollReveal>
              <h2 className="text-3xl font-semibold tracking-tight">
                A bit of the how and where.
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
