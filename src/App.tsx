import React, {useState} from 'react';
import Header from './components/Header';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import {Language, Mode} from './constants';


const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('es');
    const [mode, setMode] = useState<Mode>('terminal');

    return (
        <div className="relative z-10 flex flex-col h-screen overflow-hidden bg-slate-950">
            {/* Enhanced Background Decorative Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-[-5%] left-[10%] w-[50%] h-[50%] bg-accent-blue/10 rounded-full blur-[140px] opacity-40"></div>
                <div
                    className="absolute bottom-[5%] right-[10%] w-[50%] h-[50%] bg-accent-teal/10 rounded-full blur-[140px] opacity-40"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] border-[1px] border-white/[0.02] rounded-full rotate-12"></div>
            </div>
            {/*TopAppBar*/}
            <Header lang={lang} setLang={setLang} mode={mode} setMode={setMode}/>
            {/*Body*/}
            <main
                className="flex-1 flex flex-col items-center justify-start pt-6 pb-2 px-6 md:px-12 overflow-hidden z-10">
                <div className="w-full max-w-5xl flex-1 flex flex-col items-center gap-6 overflow-hidden">
                    <Terminal lang={lang} mode={mode}/>
                    <Footer lang={lang}/>
                </div>
            </main>

            {/*<StatusToast/>*/}
        </div>
    );
};

export default App;
