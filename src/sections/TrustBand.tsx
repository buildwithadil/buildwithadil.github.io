import { Container } from '../ui'
import { workEntries } from '../content'

/**
 * Credibility strip directly under the hero. Real project names + industries —
 * honest proof of a real client base without fabricated logos or marks.
 */
export default function TrustBand() {
  return (
    <div className="border-y border-border bg-bg-subtle">
      <Container className="py-10">
        <p className="text-center text-sm text-fg-subtle">
          Real platforms and sites, shipped end to end
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {workEntries.map(({ slug, frontmatter: fm }) => (
            <li key={slug} className="text-center">
              <span className="block font-display text-sm font-semibold text-fg">
                {fm.title}
              </span>
              <span className="mt-0.5 block text-xs text-fg-subtle">
                {fm.industry}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
