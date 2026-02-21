import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-gold/10 via-cosmic-blue/5 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-nova-gold/20 border border-nova-gold/30 rounded-full text-nova-gold font-bold mb-6 text-sm uppercase">
            Ready to Get Started?
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-liquid-silver mb-6 leading-tight uppercase">
            Light Your Way to the Future
          </h2>
          <p className="text-sm md:text-base text-liquid-silver/70 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward energy independence and sustainability. 
            Our team is ready to design a custom solution tailored to your unique needs.
          </p>
        </div>

        {/* Email signup form */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-liquid-silver/60" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-10 bg-dark-card border-liquid-silver/30 text-liquid-silver placeholder:text-liquid-silver/50 focus:border-cosmic-blue h-12 text-sm"
              />
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-nova-gold to-cosmic-blue hover:from-nova-gold hover:to-nova-gold text-deep-space-black font-bold shadow-nova-gold h-12 text-sm uppercase"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-liquid-silver/60 mt-3">
            Join our newsletter for energy insights and exclusive offers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-liquid-silver/20">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-nova-gold mb-2">10K+</div>
            <div className="text-sm text-liquid-silver/70">Installations Worldwide</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-nova-gold mb-2">99.9%</div>
            <div className="text-sm text-liquid-silver/70">System Uptime</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-nova-gold mb-2">50M+</div>
            <div className="text-sm text-liquid-silver/70">kWh Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
