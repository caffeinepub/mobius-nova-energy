import { Zap, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-nova-gold/5 via-transparent to-transparent opacity-50 animate-pulse-slow" />
      
      {/* Logo container - static, no animations */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/assets/1000008424.jpg"
            alt="MOBIUS-NOVA - Lighting the way to the future and beyond"
            className="w-full max-w-3xl h-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-liquid-silver mb-8 italic">
          Lighting the way to the future and beyond
        </p>

        {/* Hero content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver leading-tight uppercase">
            Powering Tomorrow's World
          </h1>
          <p className="text-sm md:text-base text-liquid-silver/80 max-w-3xl mx-auto leading-relaxed">
            MOBIUS-NOVA delivers cutting-edge renewable energy solutions that illuminate the path to a sustainable future. 
            Experience the infinite potential of clean, reliable power.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-nova-gold to-cosmic-blue hover:from-nova-gold hover:to-nova-gold text-deep-space-black font-bold px-8 py-6 text-base shadow-nova-gold uppercase"
          >
            <Zap className="mr-2 h-5 w-5" />
            Discover Our Solutions
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-liquid-silver/30 text-liquid-silver hover:bg-cosmic-blue/20 hover:border-cosmic-blue/50 px-8 py-6 text-base uppercase"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToFeatures}
          className="animate-bounce text-liquid-silver/60 hover:text-liquid-silver transition-colors"
          aria-label="Scroll to features"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-nova-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl animate-float-delayed" />
    </section>
  );
}
