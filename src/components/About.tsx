import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Visual: Official Brand Card / Studio Aesthetic */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[9/16] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/[0.12] bg-card shadow-2xl group">
            <img
              src="/assets/wsage-brand-card.jpg"
              alt="WSAGE Studio Identity Card"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                OFFICIAL STUDIO IDENTITY
              </span>
              <p className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                "{AGENCY_INFO.tagline}"
              </p>
              <span className="text-[11px] font-mono text-text-muted block">
                Founders: {AGENCY_INFO.founders.map(f => f.name).join(' & ')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Studio Philosophy */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // ABOUT THE STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-text-primary leading-[1.05]">
            <span>WE'RE A SMALL </span>
            <br />
            <span className="text-text-secondary">CREATIVE TEAM </span>
            <br />
            <span>WITH </span>
            <span className="font-serif-italic font-normal text-accent lowercase">
              big standards.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-text-secondary font-normal leading-relaxed">
            <p>
              WSAGE brings together creative thinking, razor-sharp design, and cinematic production to create visual work that feels intentional, contemporary, and genuinely worth paying attention to.
            </p>
            <p>
              We operate not as a bloated agency, but as an elite digital studio embedded directly into the corner of your brand. Founded by Hitarth Parekh and Karan Soni, WSAGE partners with world-class creators, ambitious startups, and established enterprises to transform raw potential into visual dominance.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
            {AGENCY_INFO.founders.map((founder, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block">
                  CO-FOUNDER // 0{idx + 1}
                </span>
                <span className="text-base font-bold text-text-primary mt-1 block">
                  {founder.name}
                </span>
                <span className="text-xs text-text-muted mt-0.5 block">
                  {founder.role}
                </span>
              </div>
            ))}
          </div>

          {/* Studio Quick Stats / Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-canvas bg-text-primary hover:bg-accent transition-all duration-300 shadow-lg"
            >
              <span>WORK WITH WSAGE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="px-6 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-text-secondary hover:text-text-primary bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all"
            >
              DIRECT INQUIRIES ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
