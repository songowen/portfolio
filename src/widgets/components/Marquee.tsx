import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    "OPEN FOR WORK", "프론트엔드", "REACT", "TYPESCRIPT", "TAILWIND", "NEXT.JS", "UI/UX DESIGN", "웹 개발자", "NODE.JS", "CREATIVE CODING", "OPEN FOR WORK", "프론트엔드", "REACT", "TYPESCRIPT", "TAILWIND", "NEXT.JS", "UI/UX DESIGN", "웹 개발자", "NODE.JS", "CREATIVE CODING"
  ];

  return (
    <div className="w-full bg-brand-dark text-brand-cream py-3 border-y-2 border-black rotate-1 scale-105 z-20 relative">
      <div className="marquee-container">
        <div className="marquee-content flex gap-8 items-center">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="text-sm md:text-base font-bold tracking-widest uppercase flex items-center gap-4">
                {item}
                <Sparkles size={16} className="text-brand-pink" />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};