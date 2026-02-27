import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.hostname)
    : 'mobius-nova-energy';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-liquid-silver/10 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/assets/generated/mobius-nova-logo.dim_1024x1024.png"
                alt="MOBIUS-NOVA ENERGY"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-xs text-liquid-silver/60 mb-4 max-w-sm leading-relaxed">
              LIGHTING THE WAY TO THE FUTURE AND BEYOND. Multi-modal renewable energy for a world that never stops moving.
            </p>
            <div className="flex gap-3">
              {[
                { icon: SiFacebook, label: 'Facebook' },
                { icon: SiX, label: 'X (Twitter)' },
                { icon: SiLinkedin, label: 'LinkedIn' },
                { icon: SiInstagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-dark-card border border-liquid-silver/10 hover:border-nova-gold/40 flex items-center justify-center text-liquid-silver/50 hover:text-nova-gold transition-all"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-liquid-silver font-bold mb-4 text-xs uppercase tracking-wider font-heading">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('technology')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  The Technology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('specs')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  Key Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('investor')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  Investor Opportunity
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('test-site')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  Become a Test Site
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-liquid-silver font-bold mb-4 text-xs uppercase tracking-wider font-heading">GET INVOLVED</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('get-involved')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  Investor Inquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('get-involved')}
                  className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide"
                >
                  Partnership
                </button>
              </li>
              <li>
                <Link to="/about" className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs text-liquid-silver/60 hover:text-nova-gold transition-colors uppercase tracking-wide">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-liquid-silver/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-liquid-silver/40 text-xs uppercase tracking-wide">
            © {currentYear} MOBIUS-NOVA ENERGY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-liquid-silver/40 text-xs">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-nova-gold fill-nova-gold" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nova-gold hover:text-nova-gold/80 transition-colors font-bold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
