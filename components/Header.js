'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <header className="flex items-center justify-between px-4 py-3 md:px-6 border-b border-white/5">
            <div>
                <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
                <p className="text-xs text-muted-foreground mt-0.5">{date}</p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <Sun size={16} className="text-white" />
                    ) : (
                        <Moon size={16} className="text-foreground" />
                    )}
                </button>
                <div className="hidden md:flex flex-col items-end">
                    <span className="text-xs font-medium text-foreground">John Doe</span>
                    <span className="text-xs text-muted-foreground">Admin</span>
                </div>
                <div className="h-9 w-9 rounded-full bg-white/10 overflow-hidden border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">JD</span>
                </div>
            </div>
        </header>
    );
}
