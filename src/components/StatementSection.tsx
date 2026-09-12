import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const StatementSection: React.FC = () => {
  const words = ['CONTENT', 'VISUALS', 'ATTENTION', 'IMPACT'];
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06] overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] font-black text-[22vw] leading-none text-white whitespace-nowrap">
        ATTENTION
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Sub-Header */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // THE MANIFESTO</span>
          </div>

          <span className="text-xs font-mono text-text-muted uppercase tracking-widest">
            ENGINEERED FOR THE SCROLL CULTURE
          </span>

          {/* Animated Word Evolution Pill */}
          <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex flex-col gap-2">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
              TRANSFORMATION PIPELINE:
            </span>
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono font-semibold">
              {words.map((w, idx) => (
                <React.Fragment key={w}>
                  <span
                    className={`transition-all duration-300 px-2 py-0.5 rounded ${
                      activeWordIdx === idx
                        ? 'bg-accent text-canvas font-bold scale-105 shadow-sm'
                        : 'text-text-muted'
                    }`}
                  >
                    {w}
                  </span>
                  {idx < words.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-white/20" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Right Large Typographic Statement */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-text-primary uppercase">
            <span>WE DON'T JUST</span>
            <br />
            <span className="text-text-secondary">MAKE CONTENT.</span>
            <br />
            <span>WE BUILD </span>
            <span className="font-serif-italic font-normal text-accent lowercase">
              attention.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed">
            WSAGE is a creative production agency helping modern brands, creators, and businesses turn raw ideas into visual experiences that people actually want to watch, remember, and share. No corporate jargon. No generic templates. Just obsessive craft.
          </p>

          {/* Qualitative Proof Pillars (PRD Section 21) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                // MULTI-DISCIPLINARY
              </span>
              <span className="text-sm font-medium text-text-primary">
                Creative Production
              </span>
              <span className="text-xs text-text-muted">
                Video, 3D motion, graphic identity & campaigns
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                // REMOTE-FIRST
              </span>
              <span className="text-sm font-medium text-text-primary">
                Global Collaboration
              </span>
              <span className="text-xs text-text-muted">
                Seamless sprints with founders & directors worldwide
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                // INTEGRATED
              </span>
              <span className="text-sm font-medium text-text-primary">
                Design × Motion × Video
              </span>
              <span className="text-xs text-text-muted">
                One cohesive creative partner under one roof
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
