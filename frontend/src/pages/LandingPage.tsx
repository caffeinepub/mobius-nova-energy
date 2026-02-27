import { HeroSection } from '@/components/HeroSection';
import { TechnologySection } from '@/components/TechnologySection';
import { DeploymentsSection } from '@/components/DeploymentsSection';
import { KeySpecsSection } from '@/components/KeySpecsSection';
import { InvestorOpportunitySection } from '@/components/InvestorOpportunitySection';
import { TestSiteSection } from '@/components/TestSiteSection';
import { GetInvolvedSection } from '@/components/GetInvolvedSection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-deep-space-black font-sans">
      <HeroSection />
      <TechnologySection />
      <DeploymentsSection />
      <KeySpecsSection />
      <InvestorOpportunitySection />
      <TestSiteSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
}
