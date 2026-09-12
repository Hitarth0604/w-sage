import React from 'react';
import { Sparkles } from 'lucide-react';
import { ScrambleText } from './ScrambleText';

const industries = [
  "ENTERTAINMENT",
  "CREATORS",
  "STARTUPS",
  "D2C BRANDS",
  "FASHION",
  "TECH & SAAS",
  "MEDIA",
  "LUXURY",
  "PERSONAL BRANDS",
];

export const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 md:py-36 border-b border-white/[0.06] bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side: Header */}
        <div className="md:w-1/3 shrink-0">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDUSTRY ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-text-primary mb-6">
            <ScrambleText text="WHO WE" />
            <br />
            <span className="font-serif-italic font-normal text-accent lowercase">
              <ScrambleText text="work with." />
            </span>
          </h2>
          <p className="text-sm text-text-secondary max-w-sm">
            We partner with ambitious teams across visual-first industries. Our cross-disciplinary approach allows us to steal like artists—applying high-fashion aesthetics to tech startups, and cinematic storytelling to D2C brands.
          </p>
        </div>

        {/* Right Side: Typographic List */}
        <div className="md:w-2/3 flex flex-wrap gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6 align-content-start">
          {industries.map((industry, idx) => (
            <div key={idx} className="group flex items-center gap-4 cursor-default">
              <span className="text-[10px] font-mono text-white/20 group-hover:text-accent transition-colors duration-300">
                0{idx + 1}
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-text-primary/20 group-hover:text-text-primary transition-colors duration-300">
                {industry}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
