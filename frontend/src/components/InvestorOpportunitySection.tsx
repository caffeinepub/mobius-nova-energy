import { TrendingUp, Globe, Zap, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const investorPoints = [
  {
    icon: Globe,
    title: 'MASSIVE MARKET OPPORTUNITY',
    desc: 'The global distributed renewable energy market is projected to exceed $1.5 trillion by 2030. Off-grid and remote communities represent an underserved segment with urgent energy needs and willingness to pay premium for reliable solutions.',
  },
  {
    icon: Zap,
    title: 'TECHNOLOGY DIFFERENTIATION',
    desc: 'No competitor offers a single modular core that operates across wind, hydro, and wave energy modes. The Frictionless Halbach bearing system eliminates the #1 failure point in conventional turbines — mechanical wear — dramatically reducing lifetime maintenance costs.',
  },
  {
    icon: TrendingUp,
    title: 'EARLY-STAGE ADVANTAGE',
    desc: 'Pre-commercial prototype stage means early investors capture maximum upside. Engineering analysis confirms 4.5–8kW realistic output with 5–15 year grid-tie ROI. First-mover advantage in multi-modal distributed energy is available now.',
  },
  {
    icon: Shield,
    title: 'DEFENSIBLE IP POSITION',
    desc: 'The combination of Gorlov-inspired helical geometry, Halbach magnetic levitation, and multi-modal shaft architecture creates a unique and defensible intellectual property position across multiple patent categories.',
  },
];

export function InvestorOpportunitySection() {
  const scrollToContact = () => {
    const el = document.getElementById('get-involved');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="investor" className="py-20 px-4 bg-deep-space-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-nova-gold/10 border border-nova-gold/30 rounded-full px-4 py-1 mb-4">
            <span className="text-nova-gold text-xs font-bold uppercase tracking-widest font-heading">
              EARLY-STAGE INVESTMENT OPPORTUNITY
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            INVESTOR OPPORTUNITY
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            MOBIUS-NOVA is seeking strategic investors to fund prototype completion, field testing, and initial production. 
            Join us at the ground floor of a multi-modal renewable energy revolution.
          </p>
        </div>

        {/* Investor value points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {investorPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-dark-card border border-nova-gold/20 rounded-lg p-6 hover:border-nova-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-nova-gold/10 rounded-lg flex items-center justify-center group-hover:bg-nova-gold/20 transition-colors">
                    <Icon className="h-5 w-5 text-nova-gold" />
                  </div>
                  <div>
                    <h3 className="text-nova-gold font-bold uppercase tracking-wider text-sm mb-2 font-heading">
                      {point.title}
                    </h3>
                    <p className="text-liquid-silver/70 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Investment tiers */}
        <div className="bg-dark-card border border-nova-gold/30 rounded-xl p-8 mb-10">
          <h3 className="text-nova-gold font-bold uppercase tracking-wider text-center mb-6 font-heading text-lg">
            INVESTMENT TIERS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { range: 'Under $10K', tier: 'SEED SUPPORTER', perks: 'Early access updates, name in credits' },
              { range: '$10K – $50K', tier: 'ANGEL PARTNER', perks: 'Quarterly reports, advisory input' },
              { range: '$50K – $250K', tier: 'STRATEGIC INVESTOR', perks: 'Board observer rights, equity stake' },
              { range: '$250K+', tier: 'LEAD INVESTOR', perks: 'Board seat, co-development rights' },
            ].map((tier) => (
              <div
                key={tier.tier}
                className="border border-liquid-silver/10 rounded-lg p-4 text-center hover:border-nova-gold/40 transition-all"
              >
                <div className="text-nova-gold font-bold text-sm mb-1 font-heading">{tier.range}</div>
                <div className="text-liquid-silver text-xs font-bold uppercase tracking-wider mb-2 font-heading">{tier.tier}</div>
                <div className="text-liquid-silver/50 text-xs">{tier.perks}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-nova-gold hover:bg-nova-gold/90 text-deep-space-black font-bold px-12 py-6 text-sm uppercase tracking-wider shadow-nova-gold font-heading"
            onClick={scrollToContact}
          >
            <ChevronRight className="mr-2 h-5 w-5" />
            REQUEST INVESTOR DECK
          </Button>
          <p className="text-liquid-silver/40 text-xs mt-4">
            Investor deck available upon request. All investment involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
