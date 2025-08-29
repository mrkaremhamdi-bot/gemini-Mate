
import React from 'react';

export const ArrowLeftIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const ArrowRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const GearsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        <path d="M12 2v2"/>
        <path d="M12 22v-2"/>
        <path d="m17 20.66-1-1.73"/>
        <path d="m11 10.27 1 1.73"/>
        <path d="m7 3.34 1 1.73"/>
        <path d="m13 13.73-1-1.73"/>
        <path d="M17 3.34l-1 1.73"/>
        <path d="m11 13.73 1-1.73"/>
        <path d="m7 20.66 1-1.73"/>
        <path d="m13 10.27-1 1.73"/>
        <path d="M2 12h2"/>
        <path d="M22 12h-2"/>
        <path d="m3.34 7 1.73 1"/>
        <path d="m10.27 11 1.73-1"/>
        <path d="m3.34 17 1.73-1"/>
        <path d="m10.27 13 1.73 1"/>
        <path d="m20.66 7-1.73 1"/>
        <path d="m13.73 11-1.73-1"/>
        <path d="m20.66 17-1.73-1"/>
        <path d="m13.73 13-1.73 1"/>
    </svg>
);

export const LotusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-2.072.63-4.004 1.704-5.603C2.59 7.91 2 9.832 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-2.168-.59-4.09-1.704-5.603C21.37 7.996 22 9.928 22 12z M12 2C6.477 2 2 6.477 2 12h20C22 6.477 17.523 2 12 2z M8.93 11.07C7.8 12.2 7.8 14.008 8.93 15.138s2.83.277 3.96-.858c1.13-1.135 1.13-2.943 0-4.078-1.13-1.135-2.83-.277-3.96.858z M15.07 11.07c-1.13-1.135-2.83-.277-3.96.858 1.13 1.135 1.13 2.943 0 4.078 1.13 1.135 2.83.277 3.96-.858s.277-2.83-.858-3.96c.558-.558 1.46-.558 2.018 0 .558.558.558 1.46 0 2.018s-1.46.558-2.018 0z" opacity="0.5"/>
    </svg>
);

export const ChartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

export const UAEFlagIcon: React.FC = () => (
    <div className="flex w-64 h-8 mx-auto shadow-lg">
        <div className="w-1/4 bg-red-600"></div>
        <div className="w-3/4 flex flex-col">
            <div className="h-1/3 bg-green-600"></div>
            <div className="h-1/3 bg-white"></div>
            <div className="h-1/3 bg-black"></div>
        </div>
    </div>
);

export const BrainCircuitIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a2.5 2.5 0 0 1 3 4" />
    <path d="M12 2a2.5 2.5 0 0 0-3 4" />
    <path d="M14 13a2.5 2.5 0 0 1 2 3" />
    <path d="M14 13a2.5 2.5 0 0 0 2 3" />
    <path d="M4 13a2.5 2.5 0 0 1 2-3" />
    <path d="M4 13a2.5 2.5 0 0 0 2-3" />
    <path d="M18 13a2.5 2.5 0 0 1 2 3" />
    <path d="M18 13a2.5 2.5 0 0 0 2 3" />
    <path d="M9 6a2.5 2.5 0 0 0-3-4" />
    <path d="M9 6a2.5 2.5 0 0 1-3-4" />
    <path d="M16 16a2.5 2.5 0 0 0-2-3" />
    <path d="M16 16a2.5 2.5 0 0 1-2-3" />
    <path d="M8 10a2.5 2.5 0 0 0-2 3" />
    <path d="M8 10a2.5 2.5 0 0 1-2 3" />
    <path d="M10 13a2.5 2.5 0 0 0 2-3" />
    <path d="M10 13a2.5 2.5 0 0 1 2-3" />
    <path d="M14.5 3.5a2.5 2.5 0 0 0 0 5" />
    <path d="M9.5 3.5a2.5 2.5 0 0 1 0 5" />
    <path d="M14.5 15.5a2.5 2.5 0 0 0 0 5" />
    <path d="M9.5 15.5a2.5 2.5 0 0 1 0 5" />
    <path d="M22 12a2.5 2.5 0 0 0-3-2" />
    <path d="M2 12a2.5 2.5 0 0 1 3-2" />
    <path d="M22 12a2.5 2.5 0 0 1-3 2" />
    <path d="M2 12a2.5 2.5 0 0 0 3 2" />
    <path d="M12 22a2.5 2.5 0 0 0-3-4" />
    <path d="M12 22a2.5 2.5 0 0 1-3-4" />
    <path d="M15 18a2.5 2.5 0 0 0-3 4" />
    <path d="M15 18a2.5 2.5 0 0 1-3 4" />
  </svg>
);

export const EditIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);
