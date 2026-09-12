import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Clock } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { playHoverSound, playClickSound } from '../utils/soundEngine';

interface NavbarProps {
  onOpenContact: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const updateTime = () => {
      const now = new Date();
      // Format as IST (or local)
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      };
      try {
        setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' IST');
      } catch {
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="WSAGE Home"
          >
            <img
              src="/brand/wsage-logo-white.png"
              alt="WSAGE"
              className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.18em] font-medium text-text-secondary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-text-primary transition-colors duration-200 hover-underline-animation py-1"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & CTA */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Live studio time */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] tracking-widest text-text-muted font-mono bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <Clock className="w-3 h-3 text-text-muted" />
              <span>{currentTime}</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] tracking-[0.16em] uppercase font-semibold text-canvas bg-text-primary hover:bg-accent transition-all duration-300 overflow-hidden shadow-lg hover:shadow-accent/20"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-canvas/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[11px] font-mono tracking-widest text-accent uppercase">
            // NAVIGATION MENU
          </span>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="text-3xl font-display font-light text-text-primary hover:text-accent transition-colors flex items-center justify-between border-b border-white/[0.06] pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-text-muted">0{idx + 1}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-text-muted">
            <span>{AGENCY_INFO.location}</span>
            <span>{currentTime}</span>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-4 rounded-full bg-accent text-canvas font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-xs text-text-secondary">
            <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-text-primary">
              {AGENCY_INFO.email}
            </a>
            <a
              href={AGENCY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {AGENCY_INFO.instagram}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
