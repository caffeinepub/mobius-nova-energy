import { Zap, Infinity, Leaf, Shield, TrendingUp, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Layers,
    title: 'Multi-Modal Single Core',
    description: 'Unlike competitors limited to wind-only or hydro-only solutions, our revolutionary single-core technology integrates multiple renewable energy sources seamlessly for unmatched versatility and reliability.',
  },
  {
    icon: Infinity,
    title: 'Infinite Potential',
    description: 'Harness the boundless power of renewable energy sources with our innovative Möbius technology that maximizes efficiency and sustainability.',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Deployment',
    description: 'Rapid installation and integration of energy systems that get you powered up in record time without compromising quality or safety.',
  },
  {
    icon: Leaf,
    title: 'Zero Carbon Footprint',
    description: 'Our solutions are designed to eliminate emissions entirely, helping you achieve your sustainability goals while reducing operational costs.',
  },
  {
    icon: Shield,
    title: 'Unmatched Reliability',
    description: 'Enterprise-grade infrastructure with 99.9% uptime guarantee ensures your operations never skip a beat, day or night.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From residential to industrial applications, our modular systems grow with your needs, adapting seamlessly to changing demands.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nova-gold/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-liquid-silver mb-4 uppercase">
            Revolutionary Energy Solutions
          </h2>
          <p className="text-sm md:text-base text-liquid-silver/70 max-w-3xl mx-auto">
            Experience the future of energy with technology that transforms how we power our world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-dark-card border-liquid-silver/20 hover:border-cosmic-blue/50 transition-all duration-300 hover:shadow-cosmic-blue-glow group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nova-gold to-cosmic-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-deep-space-black" />
                </div>
                <CardTitle className="text-lg font-bold text-liquid-silver group-hover:text-nova-gold transition-colors uppercase">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-liquid-silver/70 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
