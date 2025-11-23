import React, { useState, useEffect } from 'react';
import { Wine, Code, Terminal, ChevronRight } from 'lucide-react';

function App() {
    const [text, setText] = useState('');
    const fullText = 'Wine Coding...';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-500 p-8 font-mono relative overflow-hidden">
            {/* Matrix-like background effect (simplified) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-10 text-xs vertical-text">0101010101</div>
                <div className="absolute top-0 right-20 text-xs vertical-text">1010101010</div>
            </div>

            <nav className="flex justify-between items-center mb-20">
                <div className="flex items-center gap-2">
                    <Terminal size={24} />
                    <span className="font-bold">v0.1</span>
                </div>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Manifesto</a>
                    <a href="#" className="hover:text-white transition-colors">Events</a>
                    <a href="#" className="hover:text-white transition-colors">Join</a>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto">
                <div className="mb-24 text-center relative">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
                        {text}
                        <span className="animate-pulse">_</span>
                    </h1>
                    <div className="absolute -top-10 -right-10 md:right-20 animate-bounce">
                        <Wine size={64} className="text-pink-500" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-green-900 bg-green-900/10 p-8 rounded-lg hover:border-green-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400">Vibecoding Workshops</h2>
                        <p className="text-gray-400 mb-6">
                            Build from scratch without waiting for developers.
                            <br />
                            From zero → full-stack-ready prototype.
                        </p>
                        <p className="font-bold text-green-400">
                            Coding like a girl. Shipping like a boss.
                        </p>
                    </div>

                    <div className="border border-green-900 bg-green-900/10 p-8 rounded-lg hover:border-green-500 transition-colors group">
                        <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400">Atelier Nights — Vika</h2>
                        <p className="text-gray-400 mb-6">
                            Where bad ideas turn great in a gallery setting — with wine, art and low-light focus.
                        </p>
                        <p className="font-bold text-green-400">
                            Community, code & cabernet.
                        </p>
                    </div>
                </div>

                <div className="mt-24 grid md:grid-cols-2 gap-8 opacity-50">
                    <div className="border-t border-green-900 pt-4">
                        <h3 className="text-xl mb-2">Office Hours — StartupLab</h3>
                        <p className="text-sm">Draft & Debug</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
