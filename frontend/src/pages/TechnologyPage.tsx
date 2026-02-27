import { Footer } from '@/components/Footer';
import { Zap, Wind, Droplets, Battery, Gauge, Shield } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space-black via-dark-bg-secondary to-deep-space-black font-sans">
      {/* Hero Section with Technology Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(/assets/generated/technology-hero.dim_1200x600.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space-black/70 via-deep-space-black/85 to-deep-space-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 mb-6">
            <Zap className="h-5 w-5 text-cosmic-blue" />
            <span className="text-sm font-bold text-cosmic-blue uppercase">Advanced Technology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-liquid-silver mb-6 uppercase tracking-tight">
            Multi-Modal <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue">Energy System</span>
          </h1>
          <p className="text-xl md:text-2xl text-liquid-silver/80 max-w-3xl mx-auto">
            Revolutionary single-core technology that harnesses multiple renewable energy sources simultaneously
          </p>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-4 uppercase">
              How It Works
            </h2>
            <p className="text-lg text-liquid-silver/70 max-w-2xl mx-auto">
              Our patented multi-modal single core technology integrates wind and hydro power generation into one unified system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-dark-card border border-liquid-silver/20 rounded-3xl p-8 hover:border-nova-gold/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center mb-6">
                <Wind className="h-8 w-8 text-nova-gold" />
              </div>
              <h3 className="text-2xl font-bold text-liquid-silver mb-4 uppercase">Wind Energy Capture</h3>
              <p className="text-liquid-silver/70 mb-4">
                Advanced turbine design optimized for maximum efficiency across varying wind conditions. Our system captures energy from even light breezes while maintaining stability in high winds.
              </p>
              <ul className="space-y-2 text-liquid-silver/70">
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">•</span>
                  <span>Variable pitch blade technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">•</span>
                  <span>Low-speed operation capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-nova-gold mt-1">•</span>
                  <span>Minimal noise generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-card border border-liquid-silver/20 rounded-3xl p-8 hover:border-cosmic-blue/50 transition-all">
              <div className="w-16 h-16 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-cosmic-blue" />
              </div>
              <h3 className="text-2xl font-bold text-liquid-silver mb-4 uppercase">Hydro Power Integration</h3>
              <p className="text-liquid-silver/70 mb-4">
                Innovative water flow management system that generates power from natural water movement without requiring large dams or disrupting ecosystems.
              </p>
              <ul className="space-y-2 text-liquid-silver/70">
                <li className="flex items-start gap-2">
                  <span className="text-cosmic-blue mt-1">•</span>
                  <span>Micro-hydro turbine array</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cosmic-blue mt-1">•</span>
                  <span>Fish-friendly design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cosmic-blue mt-1">•</span>
                  <span>Continuous power generation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Single Core Advantage */}
          <div className="bg-gradient-to-br from-nova-gold/5 to-cosmic-blue/5 border border-liquid-silver/20 rounded-3xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-liquid-silver mb-4 uppercase">
                The Single Core Advantage
              </h3>
              <p className="text-lg text-liquid-silver/70 max-w-2xl mx-auto">
                Unlike traditional systems that require separate installations, our unified core integrates both energy sources into one efficient unit
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-8 w-8 text-nova-gold" />
                </div>
                <h4 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Higher Efficiency</h4>
                <p className="text-liquid-silver/70">
                  Shared infrastructure reduces energy loss and maximizes output
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-cosmic-blue" />
                </div>
                <h4 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Consistent Power</h4>
                <p className="text-liquid-silver/70">
                  Multiple sources ensure stable energy generation 24/7
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-nova-gold" />
                </div>
                <h4 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Lower Footprint</h4>
                <p className="text-liquid-silver/70">
                  Compact design minimizes environmental impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-dark-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-4 uppercase">
              Technical Specifications
            </h2>
            <p className="text-lg text-liquid-silver/70">
              Engineered for performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Power Output', value: 'Up to 500kW', icon: '⚡' },
              { label: 'Efficiency Rate', value: '92%+', icon: '📊' },
              { label: 'Lifespan', value: '25+ Years', icon: '⏱️' },
              { label: 'Maintenance', value: 'Minimal', icon: '🔧' }
            ].map((spec, index) => (
              <div 
                key={index}
                className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-6 text-center hover:border-cosmic-blue/50 transition-all"
              >
                <div className="text-4xl mb-3">{spec.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue mb-2">
                  {spec.value}
                </div>
                <div className="text-sm text-liquid-silver/70 uppercase font-bold">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
