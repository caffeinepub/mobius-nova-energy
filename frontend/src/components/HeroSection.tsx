import { ArrowDown, TrendingUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-deep-space-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-nova-gold/5 via-transparent to-transparent opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-nova-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center">
        {/* Logo - enlarged */}
        <div className="mb-6 w-full max-w-2xl mx-auto">
          <img
            src="/assets/generated/mobius-nova-logo.dim_1024x1024.png"
            alt="MOBIUS-NOVA ENERGY — Lighting the way to the future and beyond"
            className="w-full h-auto drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 40px rgba(255,215,0,0.15))' }}
          />
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg lg:text-xl font-bold text-nova-gold uppercase tracking-widest mb-10 font-heading">
          LIGHTING THE WAY TO THE FUTURE AND BEYOND
        </p>

        {/* Sub-headline */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-liquid-silver leading-tight uppercase mb-4 font-heading">
          MULTI-MODAL RENEWABLE ENERGY — WIND, HYDRO & WAVE
        </h1>
        <p className="text-sm md:text-base text-liquid-silver/70 max-w-2xl mx-auto leading-relaxed mb-10">
          The MOBIUS-NOVA Frictionless Power Core delivers 4.5–8kW of clean energy from a single modular unit. 
          Seeking investors and early test site partners to bring this technology to the world.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Button
            size="lg"
            className="bg-nova-gold hover:bg-nova-gold/90 text-deep-space-black font-bold px-10 py-6 text-sm uppercase tracking-wider shadow-nova-gold"
            onClick={() => scrollToSection('investor')}
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            INVESTOR OPPORTUNITY
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-liquid-silver/40 text-liquid-silver hover:bg-liquid-silver/10 hover:border-liquid-silver px-10 py-6 text-sm uppercase tracking-wider"
            onClick={() => scrollToSection('test-site')}
          >
            <MapPin className="mr-2 h-5 w-5" />
            BECOME A TEST SITE
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('technology')}
          className="animate-bounce text-liquid-silver/40 hover:text-nova-gold transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-7 w-7" />
        </button>
      </div>
    </section>
  );
}
