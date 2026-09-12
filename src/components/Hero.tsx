import React, { useState, useRef } from 'react';
import { ArrowUpRight, ArrowDown, Play, Sparkles } from 'lucide-react';
import { TechyBackground } from './TechyBackground';
import { AGENCY_INFO, HERO_OPTIONS } from '../data/agencyData';
import { playHoverSound, playClickSound } from '../utils/soundEngine';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  const [selectedOptionId, setSelectedOptionId] = useState('move');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef<HTMLDivElement>(null);

  const activeOption = HERO_OPTIONS.find((opt) => opt.id === selectedOptionId) || HERO_OPTIONS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:py-24 flex flex-col justify-between overflow-hidden px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Interactive 3D Techy Background */}
      <TechyBackground />

      {/* Hero Micro-Header Details */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-text-muted uppercase border-b border-white/[0.06] pb-6">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>CREATIVE PRODUCTION STUDIO</span>
          <span className="text-white/20">|</span>
          <span className="text-text-secondary">EST. {AGENCY_INFO.foundedYear}</span>
        </div>

        {/* PRD Section 40: Interactive Headline Tester */}
        <div className="flex items-center gap-2 bg-white/[0.03] p-1 rounded-full border border-white/[0.08]">
          <span className="text-[10px] text-text-muted px-2 flex items-center gap-1 font-sans">
            <Sparkles className="w-3 h-3 text-accent" /> HEADLINE:
          </span>
          {HERO_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                playClickSound();
                setSelectedOptionId(opt.id);
              }}
              onMouseEnter={playHoverSound}
              className={`px-2.5 py-1 text-[10px] font-sans font-medium rounded-full transition-all duration-300 ${
                selectedOptionId === opt.id
                  ? 'bg-text-primary text-canvas font-semibold shadow-sm'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 text-text-secondary">
          <span>{AGENCY_INFO.location}</span>
          <ArrowUpRight className="w-3 h-3 text-accent" />
        </div>
      </div>

      {/* Main Hero Visual & Typographic Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-10 lg:py-16">
        {/* Left Column: Enormous Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit mb-6 text-[11px] font-mono tracking-widest text-accent uppercase">
            <span>01 // WSAGE PRODUCTION</span>
          </div>

          <h1 className="text-[14vw] sm:text-[9vw] lg:text-[6.2vw] font-bold leading-[0.9] tracking-tightest text-text-primary uppercase select-none transition-all duration-300">
            <span className="block font-sans">{activeOption.part1}</span>
            <span className="block font-sans text-text-primary/95 tracking-tighter">
              {activeOption.part2}
            </span>
            <span className="block font-serif-italic font-normal text-accent lowercase md:tracking-normal">
              {activeOption.part3}
            </span>
          </h1>

          <p className="mt-8 text-base md:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
            {AGENCY_INFO.subTagline} Turning ideas into visual experiences that people actually stop scrolling for.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                playClickSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-canvas bg-accent hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20 hover:scale-[1.02]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => {
                playClickSound();
                onExploreWork();
              }}
              onMouseEnter={playHoverSound}
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-text-primary bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all duration-300"
            >
              <span>VIEW OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D/Editorial Visual Composition */}
        <div
          ref={heroCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-white/[0.12] group cursor-pointer shadow-2xl bg-card"
          onClick={() => {
            playClickSound();
            onExploreWork();
          }}
          onMouseEnter={playHoverSound}
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Main Visual Image */}
          <img
            src="/assets/hero-composition.jpg"
            alt="WSAGE Creative Studio Visual Composition"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent pointer-events-none" />

          {/* Editorial corner frame markers */}
          <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-text-primary/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>3D TIMELINE // 4K</span>
          </div>

          <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-text-muted bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
            WSAGE REEL 2025
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                FEATURED SHOWCASE
              </span>
              <span className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                Kinetic Visual Engineering
              </span>
            </div>

            <div className="w-10 h-10 rounded-full bg-accent text-canvas flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Editorial Micro-Details */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-text-muted uppercase border-t border-white/[0.06] pt-6">
        <button
          onClick={onExploreWork}
          className="flex items-center gap-2 hover:text-accent transition-colors group cursor-pointer w-fit"
        >
          <span className="w-2 h-2 rounded-full border border-text-muted group-hover:border-accent group-hover:bg-accent transition-all" />
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3 h-3 text-text-muted group-hover:text-accent transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>

        <div className="flex items-center gap-6">
          <span className="text-text-secondary">VIDEO × MOTION × DESIGN × BRANDING</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-text-muted hidden sm:inline">ALL ASSETS ART-DIRECTED</span>
        </div>
      </div>
    </section>
  );
};
