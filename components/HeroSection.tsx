import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden">
      
      {/* Scaled Iframe Container */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-100 overflow-hidden">
        <iframe 
          src="https://my.spline.design/googlyeyes-XGnuCyNMOPrpfYp2nA4Skblg-Dpr/?ui_infos=0&ui_watermark=0" 
          frameBorder="0" 
          title="3D Content"
          className="pointer-events-auto absolute top-0 left-0 w-[300%] h-[300%] scale-[0.33] md:w-[200%] md:h-[200%] md:scale-50 origin-top-left"
        ></iframe>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none mt-0">
        
        {/* Changed font-serif to font-bold (Pretendard) */}
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-brand-dark dark:text-brand-cream leading-[1.1] tracking-tight mb-8 drop-shadow-sm break-keep transition-colors duration-300">
          사용자 경험을 <br/><span className="text-blue-600 dark:text-brand-green" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}>최우선</span>으로<br/> 생각하는
          개발자 <span className="text-blue-600 dark:text-brand-green underline decoration-4 decoration-blue-300 dark:decoration-brand-green/30 underline-offset-4">송창현</span>입니다.
        </h1>
        
      </div>

    </header>
  );
};