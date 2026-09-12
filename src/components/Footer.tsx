import React from 'react';
import { ArrowUp, ArrowUpRight, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-canvas pt-20 pb-12 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <img
                src="/brand/wsage-logo-white.png"
                alt="WSAGE"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-text-secondary max-w-sm font-normal leading-relaxed">
              WSAGE is an elite creative studio producing high-impact video, motion design, graphic branding, and digital campaigns for forward-thinking brands and creators worldwide.
            </p>

            <div className="text-xs font-mono text-text-muted space-y-1">
              <p>{AGENCY_INFO.location}</p>
              <p className="text-accent">Available for worldwide engagements</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              {['WORK', 'SERVICES', 'WHY US', 'PROCESS', 'ABOUT', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-secondary hover:text-accent transition-colors block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
              CAPABILITIES
            </span>
            <ul className="space-y-2 text-xs font-mono text-text-secondary">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.slug} className="flex items-center gap-1.5">
                  <span className="text-accent">•</span>
                  <span>{srv.title}</span>
                </li>
              ))}
              <li className="text-text-muted pt-1">
                + Thumbnail Design, Campaigns & 3D
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
              CHANNELS
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent flex items-center gap-2 group"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent flex items-center gap-2 group"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent flex items-center gap-2 group"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent flex items-center gap-2 group"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Oversized Watermark Logo Treatment (PRD Section 25) */}
        <div className="pt-12 pb-6 border-t border-white/[0.06] flex items-center justify-center opacity-[0.08] hover:opacity-[0.16] transition-opacity duration-700 select-none pointer-events-none">
          <img
            src="/brand/wsage-logo-white.png"
            alt="WSAGE Watermark"
            className="w-full max-w-5xl h-auto object-contain"
          />
        </div>

        {/* Bottom Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-4">
            <span>© 2026 WSAGE. ALL RIGHTS RESERVED.</span>
            <span className="text-white/20">•</span>
            <span>DESIGN × MOTION × CRAFT</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              TERMS OF SERVICE
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-text-primary hover:text-accent transition-colors ml-4 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
