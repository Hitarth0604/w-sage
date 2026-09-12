import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, type Project } from '../data/agencyData';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'video-motion' | 'branding-graphic' | 'social-thumbnails'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === activeFilter);

  const filters = [
    { label: 'ALL WORK', slug: 'all' },
    { label: 'VIDEO & MOTION', slug: 'video-motion' },
    { label: 'BRANDING & GRAPHIC', slug: 'branding-graphic' },
    { label: 'SOCIAL & THUMBNAILS', slug: 'social-thumbnails' },
  ] as const;

  return (
    <section id="work" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Header and Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-primary">
            <span>SELECTED </span>
            <span className="font-serif-italic font-normal text-accent lowercase">
              work.
            </span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap bg-white/[0.02] p-1.5 rounded-full border border-white/[0.08] w-fit">
          <Filter className="w-3.5 h-3.5 text-text-muted ml-2 mr-1 hidden sm:inline" />
          {filters.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActiveFilter(f.slug)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-sans font-medium tracking-wider uppercase transition-all duration-300 ${
                activeFilter === f.slug
                  ? 'bg-text-primary text-canvas font-semibold shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => {
          // Layout styling according to PRD section 14:
          // index 0 -> Full Width
          // index 1 & 2 -> 6 cols each (or 7 + 5)
          // index 3 -> Full Width
          // index 4 & 5 -> 6 cols each
          const isFullWidth = project.featured || (index === 0 && activeFilter === 'all') || (index === 3 && activeFilter === 'all');
          const colSpan = isFullWidth ? 'md:col-span-12' : 'md:col-span-6';
          const heightClass = isFullWidth ? 'aspect-[16/9] sm:aspect-[21/9] max-h-[620px]' : 'aspect-[4/3] sm:aspect-[16/11]';

          return (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`${colSpan} group cursor-pointer flex flex-col gap-4`}
            >
              {/* Featured Label above the primary project */}
              {index === 0 && activeFilter === 'all' && (
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase">
                    FEATURED PROJECT
                  </span>
                </div>
              )}

              {/* Image Container with Subtle Hover Scale */}
              <div
                className={`relative w-full ${heightClass} rounded-2xl overflow-hidden border border-white/[0.1] bg-card`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Corner Metadata */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest text-text-primary bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 uppercase">
                    {project.category}
                  </span>

                  <span className="text-[10px] font-mono tracking-widest text-text-muted bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Overlay Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="px-4 py-2 rounded-full bg-accent text-canvas text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 px-1 mt-2">
                <div>
                  <h3 className={`font-bold uppercase tracking-tight text-text-primary group-hover:text-accent transition-colors duration-300 ${index === 0 && activeFilter === 'all' ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-2xl'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-text-secondary mt-2 font-normal line-clamp-2 max-w-xl ${index === 0 && activeFilter === 'all' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                    {project.tagline}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-mono text-text-muted block">
                    {project.client}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Portfolio Bottom Callout */}
      <div className="mt-16 text-center">
        <p className="text-xs font-mono tracking-widest text-text-muted uppercase mb-4">
          HAVE A SPECIFIC VISION OR CUSTOM FORMAT IN MIND?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-text-primary hover:text-accent transition-colors underline decoration-white/20 hover:decoration-accent underline-offset-8"
        >
          <span>REQUEST A CUSTOM CREATIVE PORTFOLIO REEL</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
