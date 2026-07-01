import { Link } from 'react-router-dom'
import { Card, Container } from '../ui'
import SeoHead from '../components/SeoHead'

export default function Work() {
  return (
    <>
      <SeoHead
        title="Work"
        description="Selected case studies — fast, SEO-strong websites and web apps built to convert."
        path="/work"
      />
      <Container className="py-16 sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Work</h1>
        <p className="measure mt-4 text-lg text-fg-muted">
          Case studies land here in M6 — a filterable grid backed by MDX
          content, education projects first.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link to="/work/sample-academy" className="block">
            <Card interactive className="h-full p-6">
              <h2 className="font-display text-lg font-medium">
                Sample Academy
              </h2>
              <p className="mt-2 text-sm text-fg-muted">
                Prerendered dynamic route — the case-study template preview.
              </p>
            </Card>
          </Link>
        </div>
      </Container>
    </>
  )
}
