import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { type Project, PROJECTS } from '../data/agencyData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onStartProject: (service?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-card border border-white/[0.12] sm:rounded-2xl overflow-hidden shadow-2xl min-h-screen sm:min-h-0 sm:max-h-[90vh] flex flex-col">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-canvas/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
              CASE STUDY // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-accent hover:text-canvas text-text-primary transition-all duration-200"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-12">
          {/* Title and Metadata Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.08]">
              <Sparkles className="w-3 h-3" />
              <span>{project.client} · {project.year}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-text-primary">
              {project.title}
            </h2>

            <p className="text-base sm:text-xl text-text-secondary max-w-3xl font-normal leading-relaxed">
              {project.tagline}
            </p>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block">
                  CLIENT
                </span>
                <span className="text-sm font-semibold text-text-primary mt-1 block">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block">
                  CATEGORY
                </span>
                <span className="text-sm font-semibold text-text-primary mt-1 block">
                  {project.category}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block">
                  YEAR
                </span>
                <span className="text-sm font-semibold text-text-primary mt-1 block">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block">
                  STUDIO TEAM
                </span>
                <span className="text-sm font-semibold text-accent mt-1 block">
                  WSAGE Core Sprint
                </span>
              </div>
            </div>
          </div>

          {/* Hero Showcase Image */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.1] bg-canvas">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-text-muted bg-black/70 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
              MASTER VISUAL ASSET // 4K BROADCAST
            </div>
          </div>

          {/* The Brief & The Idea */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-xl bg-surface border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase block">
                // 01 THE BRIEF
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">
                The Creative Challenge
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {project.caseStudy.brief}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono tracking-widest text-accent uppercase block">
                // 02 THE IDEA
              </span>
              <h3 className="text-lg font-bold uppercase tracking-tight text-text-primary">
                The Direction & Visual Stance
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                {project.caseStudy.idea}
              </p>
            </div>
          </div>

          {/* The Execution Breakdown */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                // 03 THE EXECUTION
              </span>
              <span className="text-text-muted text-xs">• Behind the Craft</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.caseStudy.execution.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-text-muted">PHASE 0{idx + 1}</span>
                    <h4 className="text-base font-bold text-text-primary uppercase tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Results / Metrics (PRD Section 17) */}
          <div className="p-8 rounded-xl bg-surface border border-accent/20 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                // 04 MEASURABLE OUTCOMES
              </span>
              <span className="text-xs text-text-muted font-mono">VERIFIED DATA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.caseStudy.results.map((res, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-accent font-mono">
                    {res.metric}
                  </span>
                  <span className="text-xs text-text-secondary uppercase tracking-wider mt-1">
                    {res.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables tags */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
              FINAL DELIVERABLES PACK:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.deliverables.map((deliv, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] text-xs font-mono text-text-secondary border border-white/[0.08]"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent" />
                  <span>{deliv}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Next Project & Inquiry Trigger */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-accent text-canvas font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <span>START A SIMILAR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-text-primary text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 border border-white/[0.1] transition-all group"
            >
              <div className="text-left">
                <span className="text-[10px] font-mono text-text-muted block">NEXT CASE STUDY</span>
                <span className="text-xs group-hover:text-accent transition-colors font-bold">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
