import { Link } from 'react-router-dom'
import { Button } from '../ui'

export default function Home() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-widest text-fg-muted">
        Foundation · M0–M2
      </p>
      <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight">
        Thoughtfully engineered websites, built to perform.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fg-muted">
        Scaffolding, design system, and component library are in place. The real
        homepage funnel is assembled in M4.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button asChild>
          <Link to="/work">See my work</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/work/sample-academy">Open a dynamic case study</Link>
        </Button>
      </div>
    </section>
  )
}
