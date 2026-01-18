
import React, { useState } from 'react';

const StatusToast: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 glass-panel px-5 py-3 rounded-xl border border-white/5 flex items-center gap-4 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-lg bg-slate-800 flex items-center justify-center">
          <span className="material-symbols-outlined text-slate-400 text-lg">info</span>
        </div>
        <div className="pr-4 border-r border-white/10">
          <p className="text-xs font-semibold text-slate-200">Session Status</p>
          <p className="text-[10px] text-slate-500 font-mono">Encrypted Connection</p>
        </div>
      </div>
      <button 
        onClick={() => setVisible(false)}
        className="text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
  );
};

export default StatusToast;
