import { Footer } from '@/components/Footer';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space-black via-dark-bg-secondary to-deep-space-black font-sans">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/assets/generated/about-background.dim_1200x800.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space-black/60 via-deep-space-black/80 to-deep-space-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-liquid-silver mb-6 uppercase tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue">MOBIUS-NOVA</span>
          </h1>
          <p className="text-xl md:text-2xl text-liquid-silver/80 max-w-3xl mx-auto">
            Pioneering the future of renewable energy with innovative multi-modal solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nova-gold/10 border border-nova-gold/30 mb-6">
                <Target className="h-5 w-5 text-nova-gold" />
                <span className="text-sm font-bold text-nova-gold uppercase">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-6 uppercase">
                Lighting the Way to the Future
              </h2>
              <p className="text-lg text-liquid-silver/70 mb-4">
                At MOBIUS-NOVA, we're revolutionizing renewable energy through our groundbreaking multi-modal single core technology. Our mission is to provide sustainable, efficient, and reliable energy solutions that power communities while protecting our planet.
              </p>
              <p className="text-lg text-liquid-silver/70">
                We believe in a future where clean energy is accessible to everyone, and we're committed to making that vision a reality through innovation, dedication, and cutting-edge technology.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nova-gold/20 to-cosmic-blue/20 rounded-3xl blur-3xl" />
              <div className="relative bg-dark-card border border-liquid-silver/20 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-nova-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Innovation First</h3>
                      <p className="text-liquid-silver/70">
                        Pushing the boundaries of what's possible in renewable energy technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-liquid-silver mb-2 uppercase">Community Focused</h3>
                      <p className="text-liquid-silver/70">
                        Building solutions that empower communities and create lasting positive impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-dark-bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-4 uppercase">
              Our Core Values
            </h2>
            <p className="text-lg text-liquid-silver/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability',
                description: 'Committed to creating solutions that protect and preserve our environment for future generations.',
                icon: '🌍'
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in engineering, design, and customer service.',
                icon: '⚡'
              },
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries and exploring new possibilities in renewable energy.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-8 hover:border-cosmic-blue/50 transition-all group"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-liquid-silver mb-3 uppercase group-hover:text-cosmic-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-liquid-silver/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-liquid-silver mb-6 uppercase">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-liquid-silver/70 mb-8">
            Be part of the renewable energy revolution. Whether you're a potential partner, investor, or simply interested in our mission, we'd love to hear from you.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-nova-gold to-cosmic-blue text-deep-space-black font-bold uppercase hover:shadow-nova-gold-glow transition-all"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
