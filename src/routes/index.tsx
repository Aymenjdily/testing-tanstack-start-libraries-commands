import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/HeroSection'
import LibrariesSection from '#/components/LibrariesSection'
import BlogSection from '#/components/BlogSection'
import PricingSection from '#/components/PricingSection'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <HeroSection />
      <LibrariesSection />
      <BlogSection />
      <PricingSection />
    </>
  )
}
