import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 py-20 ${className}`.trim()}>
    {children}
  </section>
);
