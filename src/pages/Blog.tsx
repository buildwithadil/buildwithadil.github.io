import { Container } from '../ui'
import SeoHead from '../components/SeoHead'

export default function Blog() {
  return (
    <>
      <SeoHead
        title="Blog"
        description="Notes on building fast, findable, high-converting websites and web apps."
        path="/blog"
      />
      <Container className="py-16 sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Writing</h1>
        <p className="measure mt-4 text-lg text-fg-muted">
          The blog structure ships in M6 (MDX-powered). Articles on performance,
          SEO, and building for growth follow after launch.
        </p>
      </Container>
    </>
  )
}
