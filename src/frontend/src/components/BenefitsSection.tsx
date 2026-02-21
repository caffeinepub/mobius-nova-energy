import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Reduce Energy Costs by Up to 70%',
    description: 'Our advanced systems optimize energy consumption and generation, delivering substantial savings on your utility bills while maintaining peak performance.',
  },
  {
    title: 'Future-Proof Your Infrastructure',
    description: 'Stay ahead of regulatory changes and market shifts with adaptable technology designed to evolve with emerging energy standards and innovations.',
  },
  {
    title: 'Enhance Your Brand Reputation',
    description: 'Demonstrate your commitment to sustainability and corporate responsibility, attracting environmentally conscious customers and partners.',
  },
  {
    title: 'Access Expert Support 24/7',
    description: 'Our dedicated team of energy specialists is always available to ensure optimal system performance and address any concerns immediately.',
  },
  {
    title: 'Achieve Energy Independence',
    description: 'Break free from grid dependency and volatile energy prices with self-sufficient power generation that puts you in control.',
  },
  {
    title: 'Contribute to a Sustainable Future',
    description: 'Every kilowatt generated through our systems represents a step toward a cleaner planet and a legacy of environmental stewardship.',
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nova-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cosmic-blue to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - heading */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-liquid-silver mb-6 leading-tight uppercase">
              Transform Your Energy Future Today
            </h2>
            <p className="text-sm md:text-base text-liquid-silver/70 leading-relaxed mb-8">
              Join thousands of forward-thinking organizations and individuals who have already made the switch to MOBIUS-NOVA. 
              Experience the benefits that come with choosing innovation, sustainability, and excellence.
            </p>
            <div className="flex items-center gap-4 p-6 bg-dark-card border border-nova-gold/30 rounded-lg">
              <div className="text-4xl font-bold text-nova-gold">∞</div>
              <div>
                <div className="text-xl font-bold text-liquid-silver uppercase">Infinite Possibilities</div>
                <div className="text-sm text-liquid-silver/70">Endless clean energy for a better tomorrow</div>
              </div>
            </div>
          </div>

          {/* Right column - benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-dark-card border border-liquid-silver/20 rounded-lg hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-cosmic-blue-glow group"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-nova-gold group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-liquid-silver mb-2 group-hover:text-cosmic-blue transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-liquid-silver/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
