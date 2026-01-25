import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import profileImg from "@/shared/assets/images/profile/profile.jpg";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-cream pt-20 pb-10 px-4 border-t-2 border-black dark:border-white/20 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Grid on Footer */}
      <div className="absolute inset-0 opacity-10" style={{
         backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
         backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        
        {/* Changed font-serif to font-bold */}
        <h2 className="text-5xl md:text-7xl mb-6 font-bold break-keep text-brand-cream">
          Building products,<br />
          not just features.
        </h2>
        <p className="font-sans text-xl opacity-80 mb-10 max-w-xl mx-auto break-keep text-brand-cream">
          새로운 프로젝트 협업 제안이나 커피챗은 언제나 환영입니다.<br/>
          사용자에게 가치를 전달하는 서비스를 함께 만들어가요.
        </p>
        
        <div className="flex justify-center gap-8 mt-12 mb-20 text-brand-cream">
          <a href="https://github.com/songowen" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors p-3 border-2 border-transparent hover:border-brand-pink rounded-xl" title="Github">
            <Github size={32} />
          </a>
          <a href="mailto:schxun67@gmail.com" className="hover:text-brand-pink transition-colors p-3 border-2 border-transparent hover:border-brand-pink rounded-xl" title="Email">
            <Mail size={32} />
          </a>
          <div className="hover:text-brand-pink transition-colors p-3 border-2 border-transparent hover:border-brand-pink rounded-xl cursor-pointer" title="010-4472-3375" onClick={() => {
            navigator.clipboard.writeText('010-4472-3375');
            alert('전화번호가 복사되었습니다!');
          }}>
             <Phone size={32} />
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex justify-center items-center text-sm opacity-50 font-mono text-brand-cream">
          <p>© 2025 Song Chang-hyun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};