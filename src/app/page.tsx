import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { TechStackSection } from '@/components/sections/tech-stack'
import { CtaSection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TechStackSection />
      <CtaSection />
    </>
  )
}
