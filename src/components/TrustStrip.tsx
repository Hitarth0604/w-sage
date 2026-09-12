import React from 'react';

const clients = [
  "Kala Horology",
  "Mumbai Fashion Week",
  "Auralize Labs",
  "Veritas Media",
  "Obsidian",
  "Kinetic",
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 md:py-12 border-b border-white/[0.06] bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase shrink-0">
          TRUSTED BY
        </span>
        
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-16 opacity-60">
          {clients.map((client, idx) => (
            <span key={idx} className="text-sm md:text-base font-display font-semibold tracking-widest text-text-secondary uppercase hover:text-text-primary transition-colors cursor-default">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
