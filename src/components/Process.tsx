import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // WORKFLOW</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-primary">
            <span>FROM IDEA </span>
            <br />
            <span className="font-serif-italic font-normal text-accent lowercase">
              to final frame.
            </span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-text-secondary max-w-md font-normal leading-relaxed">
          A tested, agile production pipeline structured to eliminate endless feedback loops and deliver broadcast-ready assets on schedule.
        </p>
      </div>

      {/* Process Steps Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeStep === idx;

          return (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                isActive
                  ? 'bg-surface border-accent shadow-xl shadow-accent/5 -translate-y-1'
                  : 'bg-card border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              <div>
                {/* Step number & Turnaround tag */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-2xl font-extrabold font-mono transition-colors ${
                      isActive ? 'text-accent' : 'text-white/30 group-hover:text-white/60'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] text-text-muted border border-white/[0.06]">
                    {step.turnaround}
                  </span>
                </div>

                <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  PHASE // {step.name}
                </span>

                <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary mt-2 group-hover:text-accent transition-colors">
                  {step.headline}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed font-normal mt-3">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-muted">
                  STEP 0{idx + 1} OF 05
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-accent scale-125' : 'bg-white/20'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Timeline Indicator */}
      <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold text-text-primary uppercase tracking-wide block">
              Direct Slack & Frame.io Integration
            </span>
            <span className="text-xs text-text-muted">
              Clients receive a dedicated portal with timecoded video revisions and instant sprint updates.
            </span>
          </div>
        </div>

        <a
          href="#contact"
          className="text-xs font-mono tracking-widest text-accent uppercase hover:underline shrink-0"
        >
          VIEW SAMPLE SPRINT BRIEF ↗
        </a>
      </div>
    </section>
  );
};
