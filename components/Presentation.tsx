
import React, { useState, useCallback, useEffect } from 'react';
import type { SlideData, SlideContent } from '../types';
import Slide from './Slide';
import { ArrowLeftIcon, ArrowRightIcon } from './IconComponents';

interface PresentationProps {
  slides: SlideData[];
  onUpdateSlide: (slideIndex: number, newKeyContent: SlideContent) => void;
}

const Presentation: React.FC<PresentationProps> = ({ slides, onUpdateSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full max-w-6xl aspect-video bg-slate-800/50 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/30 text-white flex flex-col relative overflow-hidden border border-slate-700">
      <div className="flex-grow p-12 md:p-16 flex items-center justify-center">
        <Slide 
            data={slides[currentSlide]}
            onUpdate={(newKeyContent) => onUpdateSlide(currentSlide, newKeyContent)}
        />
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <span className="text-sm font-mono text-slate-400">
          A New Paradigm for Public Education
        </span>
        <div className="flex items-center gap-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/70 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400" aria-label="Previous slide">
            <ArrowLeftIcon />
          </button>
          <span className="font-mono text-slate-300 text-lg">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button onClick={nextSlide} className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/70 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400" aria-label="Next slide">
            <ArrowRightIcon />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
