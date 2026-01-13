
import React, { useState, useEffect, useRef } from 'react';
import { CommandEntry } from '../types';
import { Language, TRANSLATIONS, SKILL_GROUPS, PROJECTS_DATA } from '../constants';
import { getTerminalResponse } from '../services/geminiService';

interface TerminalProps {
  lang: Language;
}

const Terminal: React.FC<TerminalProps> = ({ lang }) => {
  const [history, setHistory] = useState<CommandEntry[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isProcessing]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const cmd = input.trim().toLowerCase();
    const newEntry: CommandEntry = {
      id: Date.now().toString(),
      type: 'command',
      content: input,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
    setInput('');
    setIsProcessing(true);

    let response: React.ReactNode = null;

    if (cmd === 'help') {
      response = (
        <div className="pl-6 py-4 border-l-2 border-slate-800 space-y-3 my-4">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{t.commands.help}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {[
              { name: 'about', desc: t.commands.helpDesc.about },
              { name: 'stack', desc: t.commands.helpDesc.stack },
              { name: 'works', desc: t.commands.helpDesc.works },
              { name: 'contact', desc: t.commands.helpDesc.contact },
              { name: 'clear', desc: t.commands.helpDesc.clear },
            ].map(c => (
              <div key={c.name} className="flex items-center justify-between group border-b border-white/[0.02] pb-1">
                <span className="text-accent-teal/80 font-mono font-medium">{c.name}</span>
                <span className="text-slate-600 text-[10px] italic">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (cmd === 'stack') {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 my-4">
          {SKILL_GROUPS.map(group => (
            <div key={group.id} className="glass-panel p-4 rounded-lg border border-white/5 hover:border-accent-blue/20 transition-all group">
              <div className={`flex items-center gap-3 mb-3 ${group.color === 'blue' ? 'text-accent-blue' : group.color === 'teal' ? 'text-accent-teal' : 'text-slate-400'}`}>
                <span className="material-symbols-outlined text-lg">{group.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {t.sections.skills[group.id as keyof typeof t.sections.skills]}
                </span>
              </div>
              <ul className="space-y-1">
                {group.items.map(item => (
                  <li key={item} className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors flex items-center gap-2">
                    <span className="size-1 rounded-full bg-slate-700"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'works') {
      const projects = PROJECTS_DATA[lang];
      response = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          {projects.map(p => (
            <a 
              key={p.title} 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-lg border border-white/5 bg-slate-900/40 hover:bg-slate-800/60 hover:border-accent-blue/30 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-accent-blue text-[11px] font-bold uppercase flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-blue"></span>
                  {p.title}
                </h4>
                <span className="material-symbols-outlined text-[14px] text-slate-600">open_in_new</span>
              </div>
              <p className="text-slate-400 text-[10px] mb-4 leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 bg-slate-800 rounded-sm text-[8px] text-slate-500 font-mono border border-white/5">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setIsProcessing(false);
      return;
    } else if (cmd === 'about') {
      response = (
        <div className="text-slate-400 text-sm max-w-3xl space-y-4 my-4 pl-4 border-l-2 border-accent-blue/30">
          <p className="italic leading-relaxed">{t.sections.about}</p>
          <div className="flex items-center gap-4">
            <a href="https://www.xetid.cu/en" target="_blank" className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded border border-white/5 hover:border-accent-teal/40 transition-colors">
              <span className="material-symbols-outlined text-accent-teal text-sm">business</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Xetid Official</span>
            </a>
          </div>
        </div>
      );
    } else if (cmd === 'contact') {
      response = (
        <div className="flex flex-col gap-3 my-4 pl-4 border-l-2 border-accent-teal/30">
          <a href="https://github.com/cjorgeluis122333" target="_blank" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-accent-blue text-sm group-hover:scale-110 transition-transform">link</span>
            <span className="text-slate-300 text-xs font-mono group-hover:text-accent-blue transition-colors">github.com/cjorgeluis122333</span>
          </a>
          <a href="https://www.linkedin.com/in/jorge-luis-castillo-a93514341" target="_blank" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-accent-teal text-sm group-hover:scale-110 transition-transform">person</span>
            <span className="text-slate-300 text-xs font-mono group-hover:text-accent-teal transition-colors">linkedin.com/in/jorge-luis-castillo</span>
          </a>
        </div>
      );
    } else {
      const aiText = await getTerminalResponse(cmd, lang);
      response = <p className="text-slate-400 py-1 leading-relaxed text-sm">{aiText}</p>;
    }

    setHistory(prev => [...prev, {
      id: (Date.now() + 1).toString(),
      type: 'response',
      content: response,
      timestamp: new Date()
    }]);

    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-5xl h-full max-h-[85vh] flex flex-col animate-in fade-in zoom-in duration-700">
      <div 
        onClick={handleTerminalClick}
        className="glass-panel rounded-xl overflow-hidden terminal-shadow flex flex-col flex-1 border border-white/10 ring-1 ring-white/5 ring-inset bg-slate-900/40"
      >
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-white/5 shrink-0">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.3)]"></div>
            <div className="size-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.3)]"></div>
            <div className="size-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] font-semibold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[14px] text-accent-blue">security</span>
            secure_console_shell — {lang.toUpperCase()}
          </div>
          <div className="w-12"></div>
        </div>

        <div 
          ref={scrollRef}
          className="p-8 flex-1 overflow-y-auto font-mono text-sm leading-relaxed custom-scrollbar text-terminal-text selection:bg-accent-blue/30"
        >
          <div className="space-y-6">
            <div className="text-slate-600 text-[10px] flex flex-wrap gap-x-6 gap-y-1 border-b border-white/5 pb-4 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent-teal animate-pulse"></span> 
                {t.lastLogin}: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
              </span>
              <span>TTY: /dev/pts/0</span>
              <span className="text-accent-blue/50">{t.systemStable}</span>
            </div>

            <div className="space-y-3">
              <p className="text-slate-100 font-bold text-xl tracking-tight">{t.greeting.header}</p>
              <p className="text-slate-400 max-w-2xl leading-relaxed">{t.greeting.description}</p>
              <p className="text-accent-teal/60 text-xs">
                {lang === 'en' ? 'Type' : 'Escribe'} <span className="text-accent-teal font-bold underline underline-offset-4 decoration-accent-teal/30">help</span> {lang === 'en' ? 'to explore available functions.' : 'para explorar las funciones.'}
              </p>
            </div>

            {history.map((entry) => (
              <div key={entry.id} className="space-y-2 animate-in fade-in slide-in-from-left-2 duration-300">
                {entry.type === 'command' ? (
                  <div className="flex gap-3">
                    <span className="text-accent-blue font-bold">❯</span>
                    <span className="text-slate-500 font-medium">~/jorge</span>
                    <span className="text-white font-medium">{entry.content}</span>
                  </div>
                ) : (
                  <div className="ml-0">
                    {entry.content}
                  </div>
                )}
              </div>
            ))}

            {isProcessing && (
              <div className="flex gap-3 items-center">
                <span className="text-accent-blue font-bold">❯</span>
                <span className="text-slate-500 font-medium">~/jorge</span>
                <div className="w-2 h-5 bg-accent-teal/50 cursor-blink shadow-[0_0_10px_rgba(94,234,212,0.4)]"></div>
                <span className="text-slate-600 text-[10px] animate-pulse uppercase tracking-widest">{t.processing}</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 bg-slate-900/80 border-t border-white/5 shrink-0">
          <form onSubmit={handleCommand} className="flex items-center gap-4 relative">
            <span className="absolute left-4 text-accent-blue font-mono text-sm font-bold">❯</span>
            <input 
              ref={inputRef}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-slate-950/80 border border-white/5 rounded-lg pl-10 pr-32 py-4 font-mono text-slate-200 text-sm focus:ring-1 focus:ring-accent-blue/40 focus:border-accent-blue/40 outline-none transition-all placeholder:text-slate-700 shadow-inner" 
              placeholder={t.placeholder} 
              type="text"
              disabled={isProcessing}
            />
            <div className="absolute right-3 flex items-center gap-3">
              <button 
                type="submit"
                disabled={isProcessing}
                className="bg-accent-blue/10 hover:bg-accent-blue/20 text-accent-blue border border-accent-blue/20 px-6 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-30 flex items-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="size-2 bg-accent-blue rounded-full animate-ping"></span>
                    {t.busy}
                  </>
                ) : t.execute}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
