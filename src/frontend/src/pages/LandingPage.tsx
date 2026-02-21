import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { FounderExpertiseSection } from '@/components/FounderExpertiseSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { CallToActionSection } from '@/components/CallToActionSection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space-black via-dark-bg-secondary to-deep-space-black font-sans">
      <HeroSection />
      <FeaturesSection />
      <FounderExpertiseSection />
      <BenefitsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
