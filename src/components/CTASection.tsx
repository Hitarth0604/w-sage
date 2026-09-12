import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface CTASectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section className="relative py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECT COMMISSIONING // 2025–2026</span>
        </div>

        {/* Dramatic Typography */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tightest leading-[0.92] text-text-primary max-w-5xl">
          <span>HAVE A PROJECT </span>
          <br />
          <span className="text-text-secondary">IN MIND?</span>
          <br />
          <span>LET'S MAKE </span>
          <span className="font-serif-italic font-normal text-accent lowercase">
            something good.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed">
          Whether you need a flagship brand film, high-converting social creative, or a total motion overhaul, we turn high ambitions into visual reality.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartProject}
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-canvas bg-accent hover:bg-white transition-all duration-300 shadow-xl shadow-accent/20 hover:scale-[1.03]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={onExploreWork}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-text-primary bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all duration-300"
          >
            <span>VIEW OUR WORK</span>
            <ArrowDown className="w-4 h-4 text-text-muted group-hover:text-accent transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        {/* Studio Direct Reach */}
        <div className="pt-6 text-xs font-mono text-text-muted flex items-center gap-4">
          <span>DIRECT: {AGENCY_INFO.email}</span>
          <span className="text-white/20">•</span>
          <span>{AGENCY_INFO.phone}</span>
        </div>
      </div>
    </section>
  );
};
