import React from 'react';
import { ScrambleText } from './ScrambleText';

export const Metrics: React.FC = () => {
  return (
    <section className="py-24 md:py-36 border-b border-white/[0.06] bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          
          <div className="flex flex-col gap-2 group">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase border-b border-white/[0.06] pb-4 mb-4 group-hover:border-accent/40 transition-colors">
              TOTAL OUTPUT
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500">
              <ScrambleText text="120+" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary mt-2">
              Projects Delivered
            </span>
          </div>

          <div className="flex flex-col gap-2 group">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase border-b border-white/[0.06] pb-4 mb-4 group-hover:border-accent/40 transition-colors">
              CLIENT NETWORK
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500">
              <ScrambleText text="38" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary mt-2">
              Global Brands
            </span>
          </div>

          <div className="flex flex-col gap-2 group">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase border-b border-white/[0.06] pb-4 mb-4 group-hover:border-accent/40 transition-colors">
              AUDIENCE REACH
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500">
              <ScrambleText text="14M+" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary mt-2">
              Organic Views
            </span>
          </div>

          <div className="flex flex-col gap-2 group">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase border-b border-white/[0.06] pb-4 mb-4 group-hover:border-accent/40 transition-colors">
              INDUSTRY EXPERIENCE
            </span>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500">
              <ScrambleText text="06" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary mt-2">
              Years Active
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
