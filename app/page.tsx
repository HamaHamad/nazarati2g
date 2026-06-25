import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBand } from "@/components/stats-band"
import { AudienceCards } from "@/components/audience-cards"
import { HowItWorks } from "@/components/how-it-works"
import { DiscoverSection } from "@/components/discover-section"
import { MarketplaceSection } from "@/components/marketplace-section"
import { MerchantSection } from "@/components/merchant-section"
import { WholesalerSection } from "@/components/wholesaler-section"
import { WholesaleCatalogSection } from "@/components/wholesale-catalog"
import { AdminSection } from "@/components/admin-section"
import { CtaFooter } from "@/components/cta-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <StatsBand />
      <AudienceCards />
      <HowItWorks />
      <DiscoverSection />
      <MarketplaceSection />
      <MerchantSection />
      <WholesalerSection />
      <WholesaleCatalogSection />
      <AdminSection />
      <CtaFooter />
    </main>
  )
}
