import React, { useState } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06] overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute top-12 right-12 opacity-[0.03] pointer-events-none">
        <Quote className="w-64 h-64 text-white" />
      </div>

      <div className="flex flex-col gap-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // PERSPECTIVE</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-white/[0.1] hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-text-muted"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-white/[0.1] hover:border-accent hover:text-accent flex items-center justify-center transition-colors text-text-muted"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Editorial Quote */}
        <div className="space-y-8 max-w-5xl">
          <p className="text-2xl sm:text-4xl md:text-5xl font-serif-italic font-normal leading-[1.25] text-text-primary">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-lg font-bold uppercase tracking-tight text-text-primary block">
                {current.author}
              </span>
              <span className="text-xs font-mono text-text-secondary">
                {current.role} — <span className="text-accent">{current.company}</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono tracking-widest text-text-muted uppercase w-fit">
              <span>PROJECT // {current.projectTag}</span>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 pt-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-10 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
