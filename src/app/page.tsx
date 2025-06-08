import Features from "@/components/features-one"
import HeroSection from "@/components/hero-section-four"
import Integrations from "@/components/integrations-two"  
import StatsSection from "@/components/call-to-action-one"
import FooterSection from "@/components/footer-one"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Features />
      <Integrations />
      <StatsSection />
      <FooterSection />
    </div>
  )
}
