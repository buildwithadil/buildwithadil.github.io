import { Link } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import { personLd, websiteLd } from '../lib/seo'

export default function Home() {
  return (
    <>
      <SeoHead path="/" jsonLd={[personLd(), websiteLd()]} />
      <Container className="py-20 sm:py-28">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-fg-muted">
            Fast, findable, built to convert
          </p>
          <h1 className="mt-4 text-balance text-6xl font-semibold leading-[1.03] tracking-tight">
            Thoughtfully engineered websites, built to perform.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fg-muted">
            I’m Adil Shaikh — I help academies and ambitious teams launch fast,
            SEO-strong sites and web apps, engineered with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/work">See my work</Link>
            </Button>
          </div>
        </section>
      </Container>
    </>
  )
}
