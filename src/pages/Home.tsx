import SeoHead from '../components/SeoHead'
import { faqLd, personLd, websiteLd } from '../lib/seo'
import { faqs } from '../data/content'
import {
  FAQSection,
  FinalCTA,
  Hero,
  HowIThink,
  PersonProof,
  ProcessSection,
  ServicesOverview,
  TrustBand,
  WorkShowcase,
} from '../sections'

/**
 * Homepage as a guided argument answering a skeptical remote buyer's four
 * questions in order: who is this (Hero) → are they good (TrustBand + Work) →
 * how do they think / why different (HowIThink) → can I trust them
 * (What I build → Process → Person + proof → FAQ → CTA).
 */
export default function Home() {
  return (
    <>
      <SeoHead
        path="/"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams launch fast, SEO-strong websites and platforms, built to convert."
        jsonLd={[personLd(), websiteLd(), faqLd(faqs)]}
      />
      <Hero />
      <TrustBand />
      <WorkShowcase />
      <HowIThink />
      <ServicesOverview />
      <ProcessSection />
      <PersonProof />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
