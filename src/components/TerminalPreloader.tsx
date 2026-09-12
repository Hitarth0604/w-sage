import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "INITIALIZING WSAGE OS [v4.2.0]...",
  "ALLOCATING MEMORY BLOCKS... OK",
  "LOADING CORE ASSETS... OK",
  "ESTABLISHING SECURE CONNECTION...",
  "BYPASSING MAINFRAME ENCRYPTION... SUCCESS",
  "SYSTEM READY."
];

interface TerminalPreloaderProps {
  onComplete: () => void;
}

export const TerminalPreloader: React.FC<TerminalPreloaderProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLines(prev => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
        }, 800);
      }
    }, 250); // Speed of lines appearing

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-[#0B0B0B] flex flex-col items-start justify-end p-8 md:p-16 pointer-events-none"
        >
          <div className="flex flex-col gap-2 font-mono text-sm md:text-base text-accent w-full max-w-3xl">
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="opacity-50 mr-4">{`>`}</span>
                {line}
              </motion.div>
            ))}
            {lines.length < bootLogs.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-5 bg-accent mt-2"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
