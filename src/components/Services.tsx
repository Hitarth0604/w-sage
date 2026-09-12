import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ScrambleText } from './ScrambleText';
import { SERVICES, type Service } from '../data/agencyData';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Relative to viewport for smooth floating thumbnail tracking
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-primary flex items-center gap-3">
            <ScrambleText text="WHAT" />
            <span className="font-serif-italic font-normal text-accent lowercase">
              <ScrambleText text="we do." />
            </span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-text-secondary max-w-md font-normal leading-relaxed">
          From viral social hooks to luxury cinematic brand films and complete identity overhauls. We build visual assets that command attention.
        </p>
      </div>

      {/* Editorial Numbered Service Rows */}
      <div className="flex flex-col border-t border-white/[0.12]">
        {SERVICES.map((service) => {
          const isHovered = hoveredService?.slug === service.slug;

          return (
            <div
              key={service.slug}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => onSelectService(service.title)}
              className={`group relative py-7 md:py-9 border-b border-white/[0.08] transition-all duration-300 cursor-pointer ${
                isHovered ? 'bg-white/[0.02] px-4 md:px-6' : 'px-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Number & Service Title */}
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-xs md:text-sm font-mono tracking-widest text-text-muted group-hover:text-accent transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                </div>

                {/* Subtitle / Quote & Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-6 pl-12 lg:pl-0">
                  <p className="text-xs sm:text-sm text-text-secondary max-w-md font-normal">
                    "{service.shortDesc}"
                  </p>

                  <div className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-text-muted group-hover:text-canvas group-hover:bg-accent group-hover:border-accent transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Tags and Expanded Details (Visible on hover or mobile) */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isHovered ? 'max-h-24 opacity-100 mt-4 pt-3 border-t border-white/[0.06]' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2 pl-12">
                  <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase mr-2">
                    DELIVERABLES:
                  </span>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white/[0.04] text-text-secondary border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Hover Visual Preview Following Mouse on Desktop (PRD Section 13) */}
      {hoveredService && (
        <div
          className="hidden xl:block fixed pointer-events-none z-40 w-72 h-44 rounded-xl overflow-hidden border border-white/20 shadow-2xl transition-opacity duration-200"
          style={{
            left: `${mousePos.x + 30}px`,
            top: `${mousePos.y - 80}px`,
          }}
        >
          <img
            src={hoveredService.previewImage}
            alt={hoveredService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-3 flex flex-col justify-end">
            <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
              WSAGE // {hoveredService.number}
            </span>
            <span className="text-xs font-semibold text-text-primary uppercase">
              {hoveredService.title}
            </span>
          </div>
        </div>
      )}

      {/* Bottom Service Note */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
            LOOKING FOR A BESPOKE CREATIVE RETAINER?
          </span>
        </div>
        <button
          onClick={() => onSelectService('Full Retainer')}
          className="text-xs font-semibold uppercase tracking-widest text-accent hover:underline flex items-center gap-1.5"
        >
          <span>LET'S DISCUSS YOUR BRAND SCOPE</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
