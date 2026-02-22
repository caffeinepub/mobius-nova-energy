import { Footer } from '@/components/Footer';
import { Zap, TrendingUp, Shield, Leaf, Clock, DollarSign, Settings, Globe } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space-black via-dark-bg-secondary to-deep-space-black font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-nova-gold/5 via-transparent to-transparent opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nova-gold/10 border border-nova-gold/30 mb-6">
            <Zap className="h-5 w-5 text-nova-gold" />
            <span className="text-sm font-bold text-nova-gold uppercase">Comprehensive Features</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-liquid-silver mb-6 uppercase tracking-tight">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue">Capabilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-liquid-silver/80 max-w-3xl mx-auto">
            Discover the features that make MOBIUS-NOVA the most advanced renewable energy solution available
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Multi-Modal Single Core',
                description: 'Revolutionary technology that combines wind and hydro power generation in one unified system for maximum efficiency and reliability.',
                color: 'nova-gold'
              },
              {
                icon: TrendingUp,
                title: 'Scalable Architecture',
                description: 'Flexible design that scales from residential installations to utility-grade power plants, adapting to your specific energy needs.',
                color: 'cosmic-blue'
              },
              {
                icon: Shield,
                title: 'Weather Resilient',
                description: 'Engineered to operate reliably in extreme conditions, from harsh winters to tropical storms, ensuring continuous power generation.',
                color: 'nova-gold'
              },
              {
                icon: Leaf,
                title: 'Zero Emissions',
                description: 'Completely clean energy production with no carbon footprint, helping you meet sustainability goals and environmental regulations.',
                color: 'cosmic-blue'
              },
              {
                icon: Clock,
                title: '24/7 Power Generation',
                description: 'Continuous energy production day and night, leveraging multiple renewable sources to eliminate downtime and ensure reliability.',
                color: 'nova-gold'
              },
              {
                icon: DollarSign,
                title: 'Cost Effective',
                description: 'Lower installation and maintenance costs compared to traditional renewable systems, with faster ROI and reduced operational expenses.',
                color: 'cosmic-blue'
              },
              {
                icon: Settings,
                title: 'Smart Monitoring',
                description: 'Advanced IoT integration with real-time performance tracking, predictive maintenance alerts, and remote system optimization.',
                color: 'nova-gold'
              },
              {
                icon: Globe,
                title: 'Minimal Footprint',
                description: 'Compact design requires less land and infrastructure than traditional renewable installations, preserving natural landscapes.',
                color: 'cosmic-blue'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-dark-card border border-liquid-silver/20 rounded-3xl p-8 hover:border-cosmic-blue/50 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-full bg-${feature.color}/10 border border-${feature.color}/30 flex items-center justify-center mb-6 group-hover:shadow-${feature.color}-glow transition-all`}>
                    <Icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-liquid-silver mb-4 uppercase group-hover:text-cosmic-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-liquid-silver/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 bg-dark-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-4 uppercase">
              Performance Metrics
            </h2>
            <p className="text-lg text-liquid-silver/70">
              Real-world results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '92%+', label: 'Energy Efficiency', description: 'Industry-leading conversion rate' },
              { metric: '99.9%', label: 'Uptime Reliability', description: 'Continuous power generation' },
              { metric: '40%', label: 'Cost Reduction', description: 'Compared to traditional systems' },
              { metric: '25+', label: 'Years Lifespan', description: 'Long-term investment value' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-8 text-center hover:border-nova-gold/50 transition-all"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue mb-3">
                  {stat.metric}
                </div>
                <div className="text-xl font-bold text-liquid-silver mb-2 uppercase">
                  {stat.label}
                </div>
                <div className="text-sm text-liquid-silver/70">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Compatibility */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-nova-gold/5 to-cosmic-blue/5 border border-liquid-silver/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-4 uppercase">
                Seamless Integration
              </h2>
              <p className="text-lg text-liquid-silver/70 max-w-2xl mx-auto">
                Our system integrates effortlessly with existing infrastructure and modern smart grid technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔌</div>
                <h3 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Grid Compatible</h3>
                <p className="text-liquid-silver/70">
                  Plug-and-play integration with existing power grids and distribution systems
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-liquid-silver mb-2 uppercase">IoT Enabled</h3>
                <p className="text-liquid-silver/70">
                  Full connectivity with smart home systems and energy management platforms
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🔋</div>
                <h3 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Battery Ready</h3>
                <p className="text-liquid-silver/70">
                  Compatible with all major energy storage solutions for enhanced reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
