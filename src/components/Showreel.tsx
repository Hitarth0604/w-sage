import React, { useRef, useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { ScrambleText } from './ScrambleText';

export const Showreel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Will throw an error if no actual video file, but we have a placeholder poster anyway
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 md:py-36 border-b border-white/[0.06] bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SHOWREEL 2026</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-text-primary">
            <ScrambleText text="90 SECONDS." />
            <br />
            <span className="font-serif-italic font-normal text-accent lowercase">
              <ScrambleText text="a lot of noise." />
            </span>
          </h2>
        </div>
        <p className="text-sm text-text-secondary max-w-sm">
          A rapid-fire compilation of our best cinematic edits, motion graphics, and campaign visuals from the past year. Press play.
        </p>
      </div>

      {/* Massive Full-Width Video Container */}
      <div className="w-full relative px-6 md:px-12 max-w-[100rem] mx-auto">
        <div 
          onClick={togglePlay}
          data-cursor="PLAY"
          className="relative w-full aspect-video md:aspect-[21/9] bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.12] group cursor-pointer shadow-2xl"
        >
          {/* Fallback image */}
          <img 
            src="/assets/hero-composition.jpg" 
            alt="WSAGE Showreel Cover" 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-0 scale-110' : 'opacity-100 group-hover:scale-105'}`}
          />
          
          <video
            ref={videoRef}
            src="/assets/showreel-placeholder.mp4"
            className="w-full h-full object-cover absolute inset-0 z-0"
            loop
            muted={false}
            playsInline
          />

          {/* Dark Overlay */}
          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 z-10 ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:bg-black/20'}`} />

          {/* Centered Play Button */}
          <div className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent text-canvas flex items-center justify-center shadow-[0_0_60px_rgba(215,240,0,0.3)] transition-all duration-500 ${isPlaying ? 'scale-150 opacity-0 pointer-events-none' : 'scale-100 opacity-100 group-hover:scale-110'}`}>
            <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-2" />
          </div>

          {/* UI Overlays */}
          <div className={`absolute z-20 bottom-6 left-6 text-[10px] font-mono tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            WSAGE // REEL.MOV
          </div>
        </div>
      </div>
    </section>
  );
};
