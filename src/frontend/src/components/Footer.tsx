import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'mobius-nova-energy';

  return (
    <footer className="relative border-t border-liquid-silver/20 bg-dark-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-liquid-silver mb-3 uppercase block hover:text-cosmic-blue transition-colors">
              MOBIUS-NOVA
            </Link>
            <p className="text-sm text-liquid-silver/70 mb-4 max-w-md">
              Lighting the way to the future and beyond with innovative renewable energy solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-card border border-liquid-silver/20 hover:border-cosmic-blue/50 flex items-center justify-center text-liquid-silver/60 hover:text-cosmic-blue transition-all"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-card border border-liquid-silver/20 hover:border-cosmic-blue/50 flex items-center justify-center text-liquid-silver/60 hover:text-cosmic-blue transition-all"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-card border border-liquid-silver/20 hover:border-cosmic-blue/50 flex items-center justify-center text-liquid-silver/60 hover:text-cosmic-blue transition-all"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-card border border-liquid-silver/20 hover:border-cosmic-blue/50 flex items-center justify-center text-liquid-silver/60 hover:text-cosmic-blue transition-all"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="text-liquid-silver font-bold mb-3 text-sm uppercase">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technology" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-liquid-silver font-bold mb-3 text-sm uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-liquid-silver/70 hover:text-cosmic-blue transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-liquid-silver/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-liquid-silver/70 text-xs">
            © {currentYear} MOBIUS-NOVA. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-liquid-silver/70 text-xs">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-nova-gold fill-nova-gold" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nova-gold hover:text-cosmic-blue transition-colors font-bold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
