import { CalendarClock, Mail, MessageCircle } from 'lucide-react'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import { site } from '../config/site'

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Start a project"
        description="Tell me about your project. Book a call, message on WhatsApp, or send an email — I usually reply within a day."
        path="/contact"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight">
            Start a project
          </h1>
          <p className="mt-4 text-lg text-fg-muted">
            Tell me what you’re building and where you want it to go. No
            obligation — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild iconLeft={<CalendarClock size={18} />}>
              <a
                href={site.contact.calcom}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              iconLeft={<MessageCircle size={18} />}
            >
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="ghost" iconLeft={<Mail size={18} />}>
              <a href={`mailto:${site.contact.email}`}>Email</a>
            </Button>
          </div>

          <p className="mt-10 text-sm text-fg-subtle">
            Based in {site.location} — working with clients worldwide.
          </p>
        </div>
      </Container>
    </>
  )
}
