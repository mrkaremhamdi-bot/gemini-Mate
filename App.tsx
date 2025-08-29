
import React, { useState } from 'react';
import Presentation from './components/Presentation';
import { presentationData } from './constants';
import type { SlideData, SlideContent } from './types';

const App: React.FC = () => {
  const [slides, setSlides] = useState<SlideData[]>(presentationData);

  const handleUpdateSlideData = (slideIndex: number, newKeyContent: SlideContent) => {
    const newSlides = [...slides];
    newSlides[slideIndex] = {
      ...newSlides[slideIndex],
      keyContent: newKeyContent,
    };
    setSlides(newSlides);
  };

  return (
    <main className="bg-[#0D1A2E] min-h-screen w-full flex items-center justify-center font-sans p-4 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
       <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-sky-900/50 to-emerald-900/30 blur-3xl"></div>
       </div>
      <Presentation slides={slides} onUpdateSlide={handleUpdateSlideData} />
    </main>
  );
};

export default App;
