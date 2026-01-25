import React from 'react';

interface SkillCardProps {
  name: string;
  description: string[];
  icon: React.ReactNode;
  colorClass: string;
  darkColorClass?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, description, icon, colorClass, darkColorClass = "dark:bg-white/10" }) => (
  <div className={`bg-white dark:bg-[#2a2a2a] border-2 border-black dark:border-white/30 rounded-xl p-6 pop-shadow-sm hover:translate-y-[-4px] transition-all duration-300 flex flex-col h-full`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-12 h-12 rounded-lg border-2 border-black dark:border-white/50 flex items-center justify-center ${colorClass} ${darkColorClass} p-1.5`}>
        {icon}
      </div>
      <h4 className="font-bold text-xl text-brand-dark dark:text-white">{name}</h4>
    </div>
    <ul className="space-y-2 flex-1">
      {description.map((desc, idx) => (
        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 font-medium break-keep leading-relaxed flex items-start gap-2">
           <span className="text-black/50 dark:text-white/50 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0"></span>
           <span>{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const SkillsSection: React.FC = () => {
  return (
    <section id="stack" className="py-20 px-4 max-w-7xl mx-auto">
       <div className="mb-12 text-center flex flex-col items-center gap-2">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white transition-colors duration-300">Skill & Tools</h2>
          <div className="h-1 w-20 bg-brand-dark dark:bg-white mt-4"></div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SkillCard 
            name="JavaScript" 
            colorClass="bg-yellow-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full" />}
            description={[
              "ES6+ 문법 활용",
              "비동기 프로그래밍 (Async/Await)",
              "DOM 조작 및 이벤트 핸들링"
            ]}
          />
          <SkillCard 
            name="TypeScript" 
            colorClass="bg-blue-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full" />}
            description={[
              "정적 타이핑을 통한 안정성 확보",
              "Interface & Generic 활용",
              "타입 추론 및 유틸리티 타입 활용"
            ]}
          />
          <SkillCard 
            name="React" 
            colorClass="bg-cyan-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full" />}
            description={[
              "Functional Component & Hooks",
              "Redux / Zustand 상태 관리",
              "SPA 아키텍처 설계"
            ]}
          />
          <SkillCard 
            name="Vue.js" 
            colorClass="bg-green-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-full h-full" />}
            description={[
               "Composition API 활용",
               "Vue Router & Pinia",
               "컴포넌트 라이프사이클 이해"
            ]}
          />
          <SkillCard 
            name="Next.js" 
            colorClass="bg-gray-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-full h-full" />}
            description={[
               "SSR / CSR / ISR 렌더링 전략",
               "App Router 활용 경험",
               "SEO 최적화"
            ]}
          />
          <SkillCard 
            name="Node.js" 
            colorClass="bg-green-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full" />}
            description={[
               "Event Loop 비동기 처리 이해",
               "Express.js 웹 서버 구축",
               "RESTful API 설계"
            ]}
          />
          <SkillCard 
            name="NestJS" 
            colorClass="bg-red-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" alt="NestJS" className="w-full h-full" />}
            description={[
               "모듈 기반 아키텍처 설계",
               "Dependency Injection (DI)",
               "TypeScript 기반 백엔드 개발"
            ]}
          />
          <SkillCard 
            name="Django" 
            colorClass="bg-green-800/20"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-full h-full" />}
            description={[
               "Python 기반 웹 프레임워크",
               "MTV 패턴 및 ORM 활용",
               "Admin 페이지 커스터마이징"
            ]}
          />
          <SkillCard 
            name="Flutter" 
            colorClass="bg-blue-50"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-full h-full" />}
            description={[
               "Cross-platform 앱 개발",
               "Dart 언어 활용",
               "Provider / Riverpod 상태 관리"
            ]}
          />
          <SkillCard 
            name="Database" 
            colorClass="bg-orange-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="Database" className="w-full h-full" />}
            description={[
               "MySQL 관계형 데이터베이스",
               "Redis 인메모리 캐싱",
               "데이터 모델링 및 쿼리 최적화"
            ]}
          />
          <SkillCard 
            name="DevOps" 
            colorClass="bg-blue-200/50"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-full h-full" />}
            description={[
               "Docker 컨테이너 환경 구축",
               "Jenkins CI/CD 파이프라인",
               "AWS (EC2) 배포 경험"
            ]}
          />
          <SkillCard 
            name="Tools" 
            colorClass="bg-purple-100"
            icon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-full h-full" />}
            description={[
               "Git / GitHub 형상 관리",
               "Figma 디자인 협업",
               "Jira 애자일 프로세스"
            ]}
          />
       </div>
    </section>
  );
};