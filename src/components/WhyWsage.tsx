import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { ScrambleText } from './ScrambleText';
import { PRINCIPLES } from '../data/agencyData';

interface WhyWsageProps {
  onStartProject: () => void;
}

export const WhyWsage: React.FC<WhyWsageProps> = ({ onStartProject }) => {
  return (
    <section id="why-us" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // THE DIFFERENCE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-primary flex items-center gap-3">
            <ScrambleText text="WHY" />
            <span className="font-serif-italic font-normal text-accent lowercase">
              <ScrambleText text="wsage?" />
            </span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-text-secondary max-w-md font-normal leading-relaxed">
          Traditional agencies are bloated and slow. Freelance marketplaces are inconsistent. WSAGE exists in the sweet spot of senior-level craft and agile execution.
        </p>
      </div>

      {/* Editorial Statements List */}
      <div className="flex flex-col border-t border-white/[0.12]">
        {PRINCIPLES.map((item) => (
          <div
            key={item.number}
            className="group py-12 md:py-16 border-b border-white/[0.08] flex flex-col md:flex-row gap-6 md:gap-16 items-start"
          >
            <span className="text-sm font-mono tracking-widest text-text-muted mt-2 shrink-0">
              {item.number}
            </span>
            <div className="flex-1">
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-text-secondary mt-6 max-w-2xl font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
