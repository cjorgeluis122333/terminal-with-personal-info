
import React from 'react';
import {Language, Mode, TRANSLATIONS} from '../constants';


interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, mode, setMode }) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-slate-950/80 backdrop-blur-md shrink-0 z-50">
      <div className="flex items-center gap-4">
        <div className="size-9 bg-slate-800 border border-white/10 rounded-lg flex items-center justify-center text-accent-blue shadow-inner">
          <span className="material-symbols-outlined text-xl">terminal</span>
        </div>
        <div>
          <h1 className="text-slate-100 text-sm font-semibold tracking-tight flex items-center gap-2">
            {t.header}
            <span className="text-slate-600 font-mono text-[9px] font-normal px-1.5 py-0.5 bg-white/5 rounded border border-white/5 uppercase tracking-wider">v4.2.0-lts</span>
          </h1>
        </div>
      </div>
      
       <div className="flex items-center gap-6">
         {/* Mode Switcher */}
         <div className="flex bg-slate-900 rounded-lg p-1 border border-white/5 shadow-inner">
           <button
             onClick={() => setMode('terminal')}
             className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${mode === 'terminal' ? 'bg-accent-teal/20 text-accent-teal shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
           >
             {lang === 'en' ? 'Terminal' : 'Terminal'}
           </button>
           <button
             onClick={() => setMode('ai')}
             className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${mode === 'ai' ? 'bg-accent-teal/20 text-accent-teal shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
           >
             {lang === 'en' ? 'AI' : 'IA'}
           </button>
         </div>

         {/* Language Switcher */}
         <div className="flex bg-slate-900 rounded-lg p-1 border border-white/5 shadow-inner">
           <button
             onClick={() => setLang('en')}
             className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${lang === 'en' ? 'bg-accent-blue/20 text-accent-blue shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
           >
             EN
           </button>
           <button
             onClick={() => setLang('es')}
             className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${lang === 'es' ? 'bg-accent-blue/20 text-accent-blue shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
           >
             ES
           </button>
         </div>

        <div className="h-6 w-[1px] bg-white/5 hidden sm:block"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-bold text-slate-200 uppercase tracking-tight">{t.name}</p>
            <p className="text-[9px] text-accent-teal/70 font-mono uppercase">{t.sessionStatus}</p>
          </div>
          <div className="size-8 rounded-full border border-accent-blue/20 p-0.5 bg-slate-900 overflow-hidden">
            <div 
              className="size-full rounded-full bg-cover bg-center grayscale contrast-125" 
              style={{ backgroundImage: 'url("https://picsum.photos/seed/jorge/100/100")' }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
