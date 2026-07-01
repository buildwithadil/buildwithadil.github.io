import { Link } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'

// Rendered for the catch-all route; vite-react-ssg emits this to 404.html,
// which GitHub Pages serves for any unknown path.
export default function NotFound() {
  return (
    <>
      <SeoHead title="Page not found" path="/404" noindex />
      <Container className="py-24 sm:py-32">
        <section className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-widest text-fg-muted">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            This page took a wrong turn.
          </h1>
          <p className="mt-4 text-lg text-fg-muted">
            The page you were looking for doesn’t exist or has moved.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Back home</Link>
          </Button>
        </section>
      </Container>
    </>
  )
}
