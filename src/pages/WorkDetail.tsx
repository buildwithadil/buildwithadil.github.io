import { useParams } from 'react-router-dom'
import { Container, TextLink } from '../ui'
import SeoHead from '../components/SeoHead'
import { breadcrumbLd } from '../lib/seo'

// Dynamic route. The slug is baked into static HTML at build time via
// getStaticPaths in routes.tsx, so /work/<slug> is deep-linkable on GitHub Pages.
export default function WorkDetail() {
  const { slug = '' } = useParams<{ slug: string }>()

  return (
    <>
      <SeoHead
        title={`Case study: ${slug}`}
        path={`/work/${slug}`}
        type="article"
        jsonLd={breadcrumbLd([
          { name: 'Work', path: '/work' },
          { name: slug, path: `/work/${slug}` },
        ])}
      />
      <Container className="py-16 sm:py-24">
        <article className="max-w-2xl">
          <TextLink to="/work" showExternalIcon={false}>
            ← Back to work
          </TextLink>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Case study: <span className="text-accent">{slug}</span>
          </h1>
          <p className="mt-4 text-fg-muted">
            The full case-study template (challenge → approach → results → CTA)
            renders here in M6, from MDX content.
          </p>
        </article>
      </Container>
    </>
  )
}
