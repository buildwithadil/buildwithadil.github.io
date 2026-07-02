import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import { blogEntries } from '../content'
import { formatDate } from '../lib/format'

// Content pillars (per the brand strategy) — orient readers and put target
// keywords in visible page text.
const pillars = [
  {
    title: 'EdTech & learning platforms',
    body: 'What academies really need, build-vs-buy, and lessons from shipping real platforms.',
  },
  {
    title: 'Website performance & SEO',
    body: 'Why speed and findability decide whether a site earns its keep — and how to fix them.',
  },
  {
    title: 'Working with a developer',
    body: 'Hiring remotely, scoping a project, and getting software that actually gets done.',
  },
]

// Articles in progress. Shown (not linked) so the page reads as alive and the
// planned topics — all real buyer-intent searches — appear in the page text.
const upcoming = [
  'Build vs. buy: should your academy use an off-the-shelf LMS?',
  'Why your React site is invisible to Google — and how to fix it',
  'Hiring an overseas developer without the horror stories',
  'How I keep an exam timer accurate under load',
]

export default function Blog() {
  const [featured, ...rest] = blogEntries

  return (
    <>
      <SeoHead
        title="Writing"
        description="Practical writing on learning platforms, website performance, SEO, and hiring a developer — for founders and academies building for growth."
        path="/blog"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Notes on building for growth.
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Practical, no-hype writing for founders and academies — on learning
            platforms, website performance, SEO, and what it’s actually like to
            work with a developer. Written to be useful, not to fill a blog.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-x-10 gap-y-6 border-y border-border py-8 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}>
              <h2 className="font-display text-base font-semibold tracking-tight">
                {p.title}
              </h2>
              <p className="mt-1.5 text-sm text-fg-muted">{p.body}</p>
            </div>
          ))}
        </div>

        {blogEntries.length === 0 ? (
          <p className="mt-16 text-fg-muted">First articles coming soon.</p>
        ) : (
          <>
            {/* Featured (latest) */}
            {featured && (
              <ScrollReveal className="mt-14">
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group grid gap-6 rounded-2xl border border-border bg-surface p-8 shadow-sm transition-[border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-border-strong sm:p-10 md:grid-cols-[1fr_auto] md:items-end"
                >
                  <div className="max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      Latest · {formatDate(featured.frontmatter.date)}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {featured.frontmatter.title}
                    </h2>
                    <p className="mt-3 text-fg-muted">
                      {featured.frontmatter.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                    Read
                    <ArrowRight
                      className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </ScrollReveal>
            )}

            {/* Rest */}
            {rest.length > 0 && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {rest.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 60}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm transition-[border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-border-strong"
                    >
                      <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                        {formatDate(post.frontmatter.date)}
                      </p>
                      <h2 className="mt-3 font-display text-xl font-semibold">
                        {post.frontmatter.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm text-fg-muted">
                        {post.frontmatter.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {post.frontmatter.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs text-fg-muted"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </>
        )}

        {/* Coming next — keyword-rich, honest signal that this is active. */}
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="font-display text-lg font-semibold tracking-tight">
            On the way
          </h2>
          <p className="mt-2 text-sm text-fg-muted">
            Articles I’m working on next.
          </p>
          <ul className="mt-6 flex flex-col divide-y divide-border border-y border-border">
            {upcoming.map((title) => (
              <li
                key={title}
                className="flex items-center justify-between gap-4 py-3.5 text-fg-muted"
              >
                <span>{title}</span>
                <span className="shrink-0 text-xs font-medium uppercase tracking-widest text-fg-subtle">
                  In progress
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
