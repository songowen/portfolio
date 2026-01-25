import React from 'react';
import { Award, GraduationCap, Trophy, CheckCircle } from 'lucide-react';

interface CardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  bgColor: string;
  borderColor?: string;
  darkBgColor?: string;
}

const Card: React.FC<CardProps> = ({ title, items, icon, bgColor, borderColor = "border-black", darkBgColor = "dark:bg-[#2a2a2a]" }) => (
  <div className={`${bgColor} ${darkBgColor} border-2 ${borderColor} dark:border-white/30 rounded-2xl p-4 md:p-5 flex flex-col h-full pop-shadow hover:translate-y-[-4px] transition-all duration-300`}>
    <div className="flex items-center justify-between mb-3">
      <div className="bg-white dark:bg-brand-dark w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black dark:border-white flex items-center justify-center">
        {/* Cloning element to adjust size for mobile if needed, or just let it fit */}
        {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 20, className: `${(icon.props as any).className || ''} dark:text-white` }) : icon}
      </div>
    </div>
    
    <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight break-keep text-brand-dark dark:text-white">{title}</h3>
    
    <ul className="space-y-1.5 flex-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle size={14} className="text-brand-dark/60 dark:text-white/60 shrink-0 mt-0.5" />
          <span className="font-sans text-sm font-medium text-brand-dark/90 dark:text-gray-300 leading-relaxed break-keep">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export const ServiceCards: React.FC = () => {
  const Highlight = ({ children, color = "bg-brand-green/40" }: { children: React.ReactNode, color?: string }) => (
    <span className={`font-bold text-brand-dark dark:text-white ${color} dark:bg-opacity-30 px-1 rounded mx-0.5 inline-block`}>
      {children}
    </span>
  );

  const Emphasis = ({ children }: { children: React.ReactNode }) => (
    <span className="font-bold text-brand-dark dark:text-white">
      {children}
    </span>
  );

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20">
      
      <div className="text-center mb-12">
        <p className="font-sans text-brand-dark/80 dark:text-gray-300 text-lg max-w-5xl mx-auto break-keep leading-relaxed transition-colors duration-300">
          프론트엔드 개발자로서는 <Highlight>React</Highlight>와 <Highlight>TypeScript</Highlight>를 중심으로 사용자 흐름을 고려한 <Emphasis>화면 구현</Emphasis>과 <Emphasis>기능 완성</Emphasis>에 집중했습니다.
          <br className="my-1 block" />
          백엔드 개발자로서는 <Highlight color="bg-brand-blue/40">Node.js</Highlight>, <Highlight color="bg-brand-blue/40">NestJS</Highlight>, <Highlight color="bg-brand-blue/40">Django</Highlight>를 활용해 <Emphasis>API 구현</Emphasis>과 <Emphasis>데이터 처리</Emphasis> 경험을 쌓았습니다.
          <br className="my-1 block" />
          <Highlight color="bg-brand-pink/40">사용자 경험</Highlight>을 고려해 <Emphasis>인터랙션</Emphasis>과 <Emphasis>화면 흐름</Emphasis>을 개선함으로써 서비스의 완성도를 높였습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Profile Image with Torn Paper Speech Bubble Frame */}
        <div className="relative h-full min-h-[250px] md:min-h-auto flex items-center justify-center p-4">
           {/* Torn Paper Container */}
           <div className="w-full max-w-[240px] md:max-w-[280px] aspect-square relative z-10 transition-transform duration-300 hover:scale-105 drop-shadow-xl flex items-center justify-center">
             
             {/* Outer Border (Brand Green) - Torn Paper Shape */}
             <div 
                className="absolute inset-0 bg-brand-green"
                style={{ clipPath: 'polygon(10% 20%, 30% 12%, 55% 15%, 80% 10%, 95% 25%, 92% 60%, 88% 85%, 60% 92%, 40% 88%, 25% 98%, 32% 78%, 10% 70%, 5% 45%)' }}
             ></div>

             {/* Inner Image - Same Shape inset */}
             <div 
                className="absolute inset-[8px] bg-white"
                style={{ clipPath: 'polygon(10% 20%, 30% 12%, 55% 15%, 80% 10%, 95% 25%, 92% 60%, 88% 85%, 60% 92%, 40% 88%, 25% 98%, 32% 78%, 10% 70%, 5% 45%)' }}
             >
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-110"
                />
             </div>
           </div>
           
           {/* Decorative elements behind */}
           <div className="absolute top-10 right-10 w-20 h-20 bg-brand-pink rounded-full blur-xl opacity-60 animate-pulse"></div>
           <div className="absolute bottom-10 left-10 w-24 h-24 bg-brand-blue rounded-full blur-xl opacity-60 animate-pulse delay-700"></div>
        </div>

        <Card 
          title="Award & Growth" 
          items={[
            "SSAFY 12기 특화프로젝트 우수상 (삼성전자주식회사)",
            "사용자 피드백을 반영해 UI/UX를 지속적으로 개선합니다."
          ]}
          icon={<Trophy size={24} className="text-yellow-500" />}
          bgColor="bg-white"
        />
        <Card 
          title="Certificates" 
          items={[
            "SQLD (2024.09)",
            "네트워크관리사 2급 (2024.07)",
            "탄탄한 CS 지식을 바탕으로 백엔드와의 원활한 소통이 가능합니다."
          ]}
          icon={<Award size={24} className="text-blue-500" />}
          bgColor="bg-brand-blue"
          darkBgColor="dark:bg-blue-900/50"
        />
        <Card 
          title="Education" 
          items={[
            "경상국립대학교 중어중문학과 졸업 (4.02/4.5)",
            "삼성청년SW·AI아카데미 12기",
            "스파르타코딩클럽 Node.js 과정 수료"
          ]}
          icon={<GraduationCap size={24} className="text-brand-dark" />}
          bgColor="bg-brand-pink"
          darkBgColor="dark:bg-pink-900/50"
        />
      </div>

    </section>
  );
};