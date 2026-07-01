import { Link } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'

export default function Services() {
  return (
    <>
      <SeoHead
        title="Services"
        description="Business & marketing websites, web apps & platforms, and performance & SEO rebuilds — for teams whose growth depends on their web presence."
        path="/services"
      />
      <Container className="py-16 sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Services</h1>
        <p className="measure mt-4 text-lg text-fg-muted">
          The full services page — three outcome-framed offerings, how I work,
          and the stack — is assembled in M5. In short: fast, SEO-strong
          websites and web apps, built to convert.
        </p>
        <Button asChild className="mt-8">
          <Link to="/contact">Start a project</Link>
        </Button>
      </Container>
    </>
  )
}
