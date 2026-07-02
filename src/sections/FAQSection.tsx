import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  Section,
} from '../ui'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/content'

export default function FAQSection() {
  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                title="Questions, answered"
                intro="The things people ask before we start — timeline, pricing, ownership, and how we’ll work together."
              />
            </div>

            <div>
              <Accordion type="single" collapsible>
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={String(i)}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
