import { Link } from 'react-router-dom'
import { Badge, Button, Container } from '../ui'
import Backdrop from '../components/Backdrop'

/**
 * Above-the-fold hero. Deliberately NOT scroll-revealed — it's the LCP element,
 * so it renders immediately (Motion System: never delay content with motion).
 * The Backdrop adds crafted depth without competing with the message.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Backdrop />
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <Badge>
            <span
              className="size-1.5 rounded-full bg-emerald-500"
              aria-hidden
            />
            Available for new projects
          </Badge>

          <h1 className="mt-6 text-balance text-6xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
            Thoughtfully engineered websites and platforms, built to perform.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
            I’m Adil Shaikh — I help academies and ambitious teams launch fast,
            SEO-strong sites and platforms, engineered with care.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/work">See my work</Link>
            </Button>
          </div>

          <p className="mt-5 text-sm text-fg-subtle">
            No obligation. I usually reply within a day.
          </p>
        </div>
      </Container>
    </section>
  )
}
