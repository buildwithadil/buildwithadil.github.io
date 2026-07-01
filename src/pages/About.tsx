import { Link } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import { personLd } from '../lib/seo'

export default function About() {
  return (
    <>
      <SeoHead
        title="About"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams ship fast, findable, high-converting websites."
        path="/about"
        jsonLd={personLd()}
      />
      <Container className="py-16 sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight">About</h1>
        <p className="measure mt-4 text-lg text-fg-muted">
          The About page — the story, credibility, and how I work — is written
          in M5 from the content intake. It’s where trust is built.
        </p>
        <Button asChild variant="secondary" className="mt-8">
          <Link to="/contact">Work with me</Link>
        </Button>
      </Container>
    </>
  )
}
