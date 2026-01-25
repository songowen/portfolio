import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showDivider?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  showDivider = false
}) => (
  <div className={`mb-12 ${centered ? 'text-center flex flex-col items-center gap-2' : ''}`}>
    {subtitle && (
      <h3 className="font-sans font-bold text-xs tracking-widest uppercase mb-2 text-brand-dark dark:text-brand-green">
        {subtitle}
      </h3>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white transition-colors duration-300">
      {title}
    </h2>
    {showDivider && (
      <div className="h-1 w-20 bg-brand-dark dark:bg-white mt-4"></div>
    )}
  </div>
);
