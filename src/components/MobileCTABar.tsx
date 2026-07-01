import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'
import { site } from '../config/site'

/**
 * Persistent bottom CTA on mobile only — keeps the primary action + WhatsApp in
 * the thumb zone on long pages. RootLayout adds matching bottom padding so it
 * never covers content.
 */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/90 backdrop-blur-md md:hidden">
      <div
        className="flex items-center gap-3 p-3"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <Button asChild className="flex-1">
          <Link to={site.primaryCta.href}>{site.primaryCta.label}</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="icon"
          aria-label="Chat on WhatsApp"
        >
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} aria-hidden="true" />
          </a>
        </Button>
      </div>
    </div>
  )
}
