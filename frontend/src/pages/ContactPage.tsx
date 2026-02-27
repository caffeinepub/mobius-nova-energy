import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space-black via-dark-bg-secondary to-deep-space-black font-sans">
      {/* Hero Section with Header Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/assets/generated/contact-header.dim_1200x400.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space-black/70 via-deep-space-black/85 to-deep-space-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 mb-6">
            <Mail className="h-5 w-5 text-cosmic-blue" />
            <span className="text-sm font-bold text-cosmic-blue uppercase">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-liquid-silver mb-6 uppercase tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-gold to-cosmic-blue">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-liquid-silver/80 max-w-3xl mx-auto">
            Let's discuss how MOBIUS-NOVA can power your future
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-card border border-liquid-silver/20 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-liquid-silver mb-6 uppercase">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-liquid-silver mb-2 block uppercase text-sm font-bold">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-bg-secondary border-liquid-silver/20 text-liquid-silver focus:border-cosmic-blue"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-liquid-silver mb-2 block uppercase text-sm font-bold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-bg-secondary border-liquid-silver/20 text-liquid-silver focus:border-cosmic-blue"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-liquid-silver mb-2 block uppercase text-sm font-bold">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-dark-bg-secondary border-liquid-silver/20 text-liquid-silver focus:border-cosmic-blue"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-liquid-silver mb-2 block uppercase text-sm font-bold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-dark-bg-secondary border-liquid-silver/20 text-liquid-silver focus:border-cosmic-blue resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-nova-gold to-cosmic-blue text-deep-space-black font-bold uppercase hover:shadow-nova-gold-glow transition-all py-6 text-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-liquid-silver mb-6 uppercase">
                  Contact Information
                </h2>
                <p className="text-lg text-liquid-silver/70 mb-8">
                  Whether you're interested in becoming a pilot partner, exploring investment opportunities, or simply learning more about our technology, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-6 hover:border-nova-gold/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-nova-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-liquid-silver mb-2 uppercase">Email</h3>
                      <a href="mailto:info@mobius-nova.energy" className="text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                        info@mobius-nova.energy
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-6 hover:border-cosmic-blue/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-liquid-silver mb-2 uppercase">Phone</h3>
                      <a href="tel:+1-555-MOBIUS" className="text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                        +1 (555) MOBIUS-1
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-dark-card border border-liquid-silver/20 rounded-2xl p-6 hover:border-nova-gold/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-nova-gold/10 border border-nova-gold/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-nova-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-liquid-silver mb-2 uppercase">Location</h3>
                      <p className="text-liquid-silver/70">
                        Innovation District<br />
                        Renewable Energy Hub<br />
                        Future City, FC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership CTA */}
              <div className="bg-gradient-to-br from-nova-gold/5 to-cosmic-blue/5 border border-liquid-silver/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-liquid-silver mb-3 uppercase">
                  Become a Pilot Partner
                </h3>
                <p className="text-liquid-silver/70 mb-4">
                  We're seeking first pilot installation partners for our pre-commercial prototype. Be among the first to experience the future of renewable energy.
                </p>
                <div className="inline-flex items-center gap-2 text-nova-gold font-bold">
                  <span className="uppercase text-sm">Learn More</span>
                  <Send className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
