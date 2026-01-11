import React, { useState } from 'react';
import { ExternalLink, Github, X, Server, Database, Code, Smartphone, Zap, Monitor, Image as ImageIcon } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  background: string;
  features: string[];
  techStack: string[];
  image: string;
  role: string;
  period: string;
  troubleshooting?: { problem: string; solution: string; result: string }[];
  screenshots?: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "CheckMate",
    category: "AI Contract Service",
    role: "Frontend Lead, UI/UX Design",
    period: "2025.04 ~ 2025.05",
    shortDescription: "복잡한 계약서를 AI로 분석하고 작성하는 올인원 법률 보조 서비스입니다.",
    background: "부동산 및 근로 계약 등 일상적인 법률 행위에서 발생하는 어려움을 해결하기 위해 기획되었습니다. '변호사 없는 법률 상담'을 목표로, 사용자가 업로드한 계약서 이미지를 OCR로 추출하고 LLM을 통해 독소 조항을 분석해주는 서비스를 개발했습니다.",
    fullDescription: "CheckMate는 사용자의 법률적 지식 부족을 보완해주는 AI 기반 계약서 분석 플랫폼입니다. \n\n단순한 텍스트 분석을 넘어, 사용자가 모바일 환경에서도 쉽게 계약서를 촬영하고 분석 결과를 직관적으로 이해할 수 있도록 PWA(Progressive Web App)를 도입하여 앱 수준의 사용자 경험을 제공합니다. \n\n프론트엔드 리드로서 FSD(Feature-Sliced Design) 아키텍처를 도입하여 대규모 프로젝트의 유지보수성을 확보했으며, 복잡한 비동기 데이터 처리를 위해 Redux Toolkit과 RTK Query를 활용했습니다.",
    features: [
      "WebSocket 기반 실시간 AI 분석 알림 및 스트리밍 답변 구현",
      "OCR 이미지 인식 및 React-Crop을 활용한 정교한 이미지 전처리",
      "Chart.js와 Framer Motion을 활용한 계약 위험도 시각화 대시보드",
      "Tesseract.js를 활용한 클라이언트 사이드 1차 텍스트 검증",
      "서비스 워커(Service Worker)를 활용한 오프라인 페이지 캐싱"
    ],
    techStack: ["React", "TypeScript", "Redux Toolkit", "PWA", "Vite", "TailwindCSS", "WebSocket"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    ],
    troubleshooting: [
      {
        problem: "AI 응답 대기 시간이 길어(평균 5초 이상) 사용자 이탈 발생 가능성",
        solution: "SSE(Server-Sent Events) 대신 WebSocket을 도입하여 분석 진행률을 실시간 프로그레스 바 형태로 시각화하고, 중간 분석 결과를 청크 단위로 스트리밍 렌더링",
        result: "체감 대기 시간 80% 단축 및 사용자 이탈률 감소"
      },
      {
        problem: "모바일 카메라로 촬영한 고해상도 이미지 업로드 시 전송 지연",
        solution: "Browser-image-compression 라이브러리를 도입하여 클라이언트 단에서 이미지를 WebP 포맷으로 변환 및 압축 후 서버 전송",
        result: "데이터 전송량 90% 감소 (12MB -> 0.8MB) 및 업로드 속도 개선"
      }
    ],
    github: "https://github.com/songowen"
  },
  {
    title: "ARI (아리)",
    category: "Blockchain Streaming",
    role: "Frontend, Smart Contract Integration",
    period: "2025.03 ~ 2025.04",
    shortDescription: "투명한 수익 분배를 위한 블록체인 기반 음원 스트리밍 플랫폼입니다.",
    background: "기존 음원 플랫폼의 불투명한 정산 시스템과 높은 수수료 문제를 해결하기 위해 시작된 프로젝트입니다. 블록체인 스마트 컨트랙트를 통해 창작자에게 수익이 즉시, 그리고 투명하게 정산되는 생태계를 구축하고자 했습니다.",
    fullDescription: "ARI는 Web3 기술을 Web2 사용자 경험에 녹여낸 하이브리드 스트리밍 앱입니다. \n\n사용자는 기존 앱처럼 음악을 듣지만, 백그라운드에서는 청취 시간에 비례하여 토큰이 창작자에게 자동 전송됩니다. Flutter의 단일 코드베이스로 안드로이드와 iOS를 동시 지원하며, Clean Architecture를 도입하여 도메인 로직과 UI를 철저히 분리했습니다. \n\n특히 오디오 스트리밍의 끊김 없는 경험을 위해 Isolate(별도 스레드)를 활용한 백그라운드 재생 처리에 집중했습니다.",
    features: [
      "Just_Audio & Audio_Service 패키지를 커스텀하여 백그라운드 재생 제어 완벽 구현",
      "Metamask 등의 지갑 연동 없이 소셜 로그인 기반의 Custodial Wallet(위탁 지갑) 생성",
      "Hive NoSQL 로컬 DB를 활용한 오프라인 재생 목록 캐싱 및 데이터 동기화",
      "SliverAppbar 및 CustomScrollView를 활용한 고성능 스크롤 인터랙션",
      "Jenkins CI/CD 파이프라인 구축으로 배포 자동화 (TestFlight/PlayConsole)"
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Solidity", "NestJS", "Docker", "Jenkins"],
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80"
    ],
    troubleshooting: [
      {
        problem: "복잡한 비즈니스 로직(블록체인 트랜잭션, 재생 로직)과 UI 코드가 섞여 유지보수 난해",
        solution: "MVVM 패턴과 Clean Architecture 도입. Repository 패턴으로 데이터 소스(API, DB)를 추상화하고 UseCase 계층에서 비즈니스 로직 캡슐화",
        result: "테스트 코드 작성 용이성 확보 및 UI 수정 시 로직 영향도 0%"
      },
      {
        problem: "재생 중 화면 전환 시 UI 프레임 드랍 발생",
        solution: "Flutter의 RepaintBoundary를 활용하여 오디오 플레이어 위젯의 리렌더링 범위를 제한하고, 앨범 아트 이미지를 메모리 캐싱(CachedNetworkImage) 처리",
        result: "스크롤 시 60FPS 안정적 유지"
      }
    ],
    github: "https://github.com/songowen"
  },
  {
    title: "우끼끼 (Ukiki)",
    category: "Travel Collaboration",
    role: "Frontend Developer",
    period: "2025.03 ~ 2025.04",
    shortDescription: "실시간 동시 편집이 가능한 여행 계획 및 가이드 매칭 플랫폼입니다.",
    background: "친구들과 여행 계획을 짤 때 엑셀, 카카오톡, 지도 앱을 번갈아 쓰는 불편함에서 착안했습니다. '여행 계획의 Google Docs'를 목표로, 여러 사용자가 하나의 지도 위에서 실시간으로 핀을 꽂고 메모를 남길 수 있는 기능을 구현했습니다.",
    fullDescription: "우끼끼는 실시간 협업 기능을 핵심으로 하는 여행 플랫폼입니다. \n\nWebSocket(StompJS)을 활용하여 여러 사용자가 동시에 여행 코스를 편집할 때 발생할 수 있는 데이터 충돌을 제어하고, 마우스 커서 위치 공유 등 실시간 인터랙션을 구현했습니다. \n\nGoogle Maps API를 고도화하여 단순 마커 표시를 넘어, 클러스터링, 커스텀 오버레이, 경로 최적화 알고리즘 시각화 등 풍부한 지도 경험을 제공합니다.",
    features: [
      "SockJS & StompJS 기반의 실시간 여행 경로 동시 편집 시스템",
      "Google Maps API: 커스텀 마커, 폴리라인 경로 그리기, 장소 검색 자동완성",
      "React-Beautiful-DnD를 활용한 드래그 앤 드롭 일정 순서 변경 UI",
      "Optimistic UI(낙관적 업데이트) 적용으로 네트워크 지연 없는 즉각적인 편집 경험 제공",
      "Tanstack Query(React Query)를 활용한 서버 상태 관리 및 캐싱"
    ],
    techStack: ["React", "Zustand", "Tanstack Query", "WebSocket", "Google Maps API", "Styled-components"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
    ],
    troubleshooting: [
      {
        problem: "다수의 사용자가 동시에 마커를 추가/삭제할 때 Race Condition 발생",
        solution: "Last-Write-Wins 전략과 함께 작업 큐(Queue)를 도입하여 서버에서 순차적으로 이벤트를 처리하고, 클라이언트에서는 버전 관리를 통해 최신 상태 동기화",
        result: "데이터 정합성 100% 보장 및 실시간 동기화 지연 200ms 미만 유지"
      },
      {
        problem: "지도에 수백 개의 마커 렌더링 시 브라우저 성능 저하",
        solution: "Google Maps의 마커 클러스터링(Clustering)을 도입하고, 뷰포트(Viewport) 내에 있는 마커만 렌더링하는 최적화 로직 적용",
        result: "초기 렌더링 속도 1.5초 단축 및 줌 인/아웃 시 버벅임 제거"
      }
    ],
    github: "https://github.com/songowen"
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-brand-cream dark:bg-brand-dark border-y-2 border-black dark:border-white/20 py-20 relative transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h3 className="font-sans font-bold text-xs tracking-widest uppercase mb-2 text-brand-dark dark:text-brand-green">Selected Work</h3>
            <h2 className="text-5xl font-bold break-keep text-brand-dark dark:text-white">Featured Projects</h2>
          </div>
          <a href="https://github.com/songowen" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-brand-dark dark:bg-white text-white dark:text-brand-dark border-2 border-transparent px-6 py-2 rounded-full font-bold hover:bg-transparent hover:text-brand-dark dark:hover:text-white hover:border-black dark:hover:border-white transition-all">
            <Github size={18} /> Github 방문
          </a>
       </div>

       {/* Added pt-8 to container to accommodate hover translateY */}
       <div className="flex overflow-x-auto gap-8 px-4 pt-8 pb-10 hide-scrollbar snap-x snap-mandatory max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(project)}
              className="snap-center shrink-0 w-[85vw] md:w-[380px] bg-white dark:bg-[#2a2a2a] border-2 border-black dark:border-white/30 rounded-3xl overflow-hidden pop-shadow flex flex-col cursor-pointer group hover:translate-y-[-8px] transition-transform duration-300 relative"
            >
               <div className="h-64 overflow-hidden border-b-2 border-black dark:border-white/30 relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white dark:bg-brand-dark dark:text-white border-2 border-black dark:border-white px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      자세히 보기
                    </span>
                  </div>
               </div>
               <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-brand-green/30 dark:bg-brand-green/20 text-brand-dark dark:text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-black/10 dark:border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{project.period}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 break-keep text-brand-dark dark:text-white">{project.title}</h3>
                  <p className="font-sans text-gray-700 dark:text-gray-300 mb-6 flex-1 break-keep leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.techStack.slice(0, 3).map(tag => (
                      <span key={tag} className="font-mono text-xs border border-black dark:border-gray-500 rounded-md px-2 py-1 bg-gray-50 dark:bg-black/30 text-brand-dark dark:text-gray-200">
                        #{tag}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="font-mono text-xs border border-black dark:border-gray-500 rounded-md px-2 py-1 bg-gray-50 dark:bg-black/30 text-brand-dark dark:text-gray-200">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
               </div>
            </div>
          ))}
       </div>

       {/* Project Detail Modal */}
       {selectedProject && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div 
             className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
             onClick={() => setSelectedProject(null)}
           ></div>
           
           <div className="bg-white dark:bg-[#1a1a1a] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-black dark:border-white/20 shadow-2xl relative z-10 animate-[scaleIn_0.2s_ease-out]">
             <button 
               onClick={() => setSelectedProject(null)}
               className="absolute top-4 right-4 bg-white dark:bg-black/50 rounded-full p-2 border-2 border-black dark:border-white/50 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors z-20"
             >
               <X size={24} className="text-black dark:text-white"/>
             </button>

             <div className="h-64 md:h-96 w-full overflow-hidden border-b-2 border-black dark:border-white/20 relative">
               <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 pt-32">
                 <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">{selectedProject.title}</h2>
                 <p className="text-brand-green text-xl font-bold">{selectedProject.category} | {selectedProject.role}</p>
               </div>
             </div>

             <div className="p-6 md:p-12 space-y-12">
               
               {/* Intro Section */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-brand-dark dark:text-white">
                        <Monitor size={24} className="text-brand-pink" /> 
                        프로젝트 배경
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line break-keep">
                        {selectedProject.background}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-brand-dark dark:text-white">
                        <Smartphone size={24} className="text-blue-400" /> 
                        상세 설명
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line break-keep">
                        {selectedProject.fullDescription}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Sidebar */}
                  <div className="bg-brand-cream/50 dark:bg-white/5 p-6 rounded-2xl border border-black/10 dark:border-white/10 h-fit">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                       <Code size={20} /> 기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.techStack.map(stack => (
                         <span key={stack} className="bg-white dark:bg-black/40 border border-black dark:border-white/20 px-3 py-1.5 rounded-lg font-mono text-sm font-bold text-brand-dark dark:text-gray-200">
                           {stack}
                         </span>
                       ))}
                    </div>
                  </div>
               </div>

               <div className="h-px bg-gray-200 dark:bg-white/10 w-full"></div>

               {/* Features & Troubleshooting Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                   <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                     <Zap size={24} className="text-yellow-500" /> 주요 기능 구현
                   </h3>
                   <ul className="space-y-4">
                     {selectedProject.features.map((feature, i) => (
                       <li key={i} className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 text-base flex items-start gap-3">
                         <span className="text-brand-green font-bold text-xl mt-[-2px]">•</span>
                         <span className="break-keep font-medium">{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 {selectedProject.troubleshooting && (
                   <div className="space-y-4">
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                       <Server size={24} className="text-red-400" /> 트러블슈팅 & 성과
                     </h3>
                     <div className="space-y-4">
                       {selectedProject.troubleshooting.map((ts, i) => (
                         <div key={i} className="bg-white dark:bg-[#222] border border-black dark:border-white/20 p-5 rounded-xl shadow-sm">
                           <div className="flex flex-col gap-3">
                             <div className="flex gap-2 items-start">
                               <span className="shrink-0 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Problem</span>
                               <p className="font-bold text-sm text-brand-dark dark:text-gray-200 break-keep leading-tight">{ts.problem}</p>
                             </div>
                             <div className="flex gap-2 items-start">
                               <span className="shrink-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Solution</span>
                               <p className="text-sm text-gray-600 dark:text-gray-400 break-keep leading-relaxed">{ts.solution}</p>
                             </div>
                             <div className="mt-1 pt-3 border-t border-dashed border-gray-200 dark:border-white/10 flex gap-2 items-center">
                               <span className="shrink-0 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Result</span>
                               <p className="text-sm font-bold text-brand-green dark:text-brand-green break-keep">{ts.result}</p>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>

               {/* Screenshots Section */}
               {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                 <>
                   <div className="h-px bg-gray-200 dark:bg-white/10 w-full"></div>
                   <div className="space-y-6">
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                       <ImageIcon size={24} className="text-purple-500" /> 프로젝트 스크린샷
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {selectedProject.screenshots.map((shot, idx) => (
                         <div key={idx} className="rounded-xl overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-sm group">
                           <img 
                             src={shot} 
                             alt={`${selectedProject.title} screenshot ${idx+1}`} 
                             className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
                           />
                         </div>
                       ))}
                     </div>
                   </div>
                 </>
               )}

               <div className="flex justify-end gap-4 pt-8 border-t border-gray-200 dark:border-white/10">
                  <a href={selectedProject.github || "https://github.com/songowen"} target="_blank" rel="noopener noreferrer" className="bg-brand-dark dark:bg-white text-white dark:text-brand-dark px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-lg">
                    <Github size={24} /> GitHub 보러가기
                  </a>
               </div>

             </div>
           </div>
         </div>
       )}
    </section>
  );
};