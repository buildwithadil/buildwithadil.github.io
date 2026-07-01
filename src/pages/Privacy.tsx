import { Container, TextLink } from '../ui'
import SeoHead from '../components/SeoHead'
import { site } from '../config/site'

export default function Privacy() {
  return (
    <>
      <SeoHead
        title="Privacy"
        description="How this site handles your data — the short version: minimally, and without cookies."
        path="/privacy"
      />
      <Container className="py-16 sm:py-24">
        <div className="measure">
          <h1 className="text-5xl font-semibold tracking-tight">Privacy</h1>
          <div className="mt-6 space-y-4 text-fg-muted">
            <p>
              This site keeps things minimal. It uses privacy-friendly,
              cookieless analytics that record anonymous, aggregate visit data
              only — no cookies, no cross-site tracking, and nothing that
              identifies you.
            </p>
            <p>
              If you contact me via WhatsApp, a booking call, or email, I use
              the details you share solely to respond and discuss your project.
              I don’t sell or share your information.
            </p>
            <p>
              Questions? Email{' '}
              <TextLink href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </TextLink>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
