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

      {/* 5 Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRINCIPLES.map((item, idx) => {
          // Span 2 columns on the last card for balanced layout
          const isWide = idx === 4;

          return (
            <div
              key={item.number}
              className={`p-8 rounded-2xl bg-card border border-white/[0.08] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group ${
                isWide ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-accent transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent group-hover:scale-150 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>WSAGE PRINCIPLE</span>
                <span className="group-hover:translate-x-1 transition-transform text-accent">→</span>
              </div>
            </div>
          );
        })}

        {/* Agency CTA Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-canvas border border-accent/30 flex flex-col justify-between group">
          <div className="space-y-4">
            <span className="text-[11px] font-mono tracking-widest text-accent uppercase">
              // READY TO BUILD
            </span>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-text-primary">
              EXPERIENCE THE STANDARD.
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Book a discovery session with our senior directors and see how WSAGE elevates your brand.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="mt-6 w-full py-3.5 rounded-full bg-accent text-canvas text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
