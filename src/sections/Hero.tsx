import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Container } from '../ui'
import Backdrop from '../components/Backdrop'
import Magnetic from '../components/Magnetic'

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

/**
 * Hero as a large typographic moment. Headline animates transform-only
 * (`animate-rise`, LCP-safe); everything else fades + rises in a subtle stagger.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Backdrop />
      <Container className="pb-24 pt-24 sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40">
        <div className="max-w-4xl">
          <div className="animate-in" style={delay(0)}>
            <Badge>
              <span
                className="size-1.5 rounded-full bg-emerald-500"
                aria-hidden
              />
              Available for new projects
            </Badge>
          </div>

          <h1
            className="animate-rise mt-7 text-balance text-6xl font-semibold leading-[1.0] tracking-[-0.035em] sm:text-7xl lg:text-[5.25rem]"
            style={delay(80)}
          >
            Websites and platforms,{' '}
            <span className="text-gradient">engineered to perform.</span>
          </h1>

          <p
            className="animate-in mt-8 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
            style={delay(220)}
          >
            I’m Adil Shaikh — I help academies and ambitious teams turn ideas
            into fast, SEO-strong products people trust.
          </p>

          <div
            className="animate-in mt-10 flex flex-wrap items-center gap-4"
            style={delay(320)}
          >
            <Magnetic>
              <Button asChild size="lg">
                <Link to="/contact">Start a project</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="secondary" size="lg">
              <Link to="/work">See selected work</Link>
            </Button>
          </div>

          <p
            className="animate-in mt-6 text-sm text-fg-subtle"
            style={delay(400)}
          >
            No obligation. I usually reply within a day.
          </p>
        </div>
      </Container>
    </section>
  )
}
