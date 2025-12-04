"use client"
import { HomeIcon, Moon, PanelsTopLeft, Send, Sun, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"

export default function Header() {
    const [scrollStep, setScrollStep] = useState(0);
    const [theme, setTheme] = useState(
        typeof window !== "undefined" ? localStorage.getItem("currentMode") ?? "dark" : "dark"
    );
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        const x = e.clientX || Math.floor(window.innerWidth / 2);
        const y = e.clientY || Math.floor(window.innerHeight / 2);

        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);

        const applyTheme = () => {
            const newMode = theme === "dark" ? "light" : "dark";

            localStorage.setItem("currentMode", newMode);

            document.documentElement.classList.toggle("dark", newMode === "dark");

            setTheme(newMode);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof (document as any).startViewTransition === "function") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (document as any).startViewTransition(applyTheme);
        } else {
            applyTheme();
        }
    };


    const navLinks = [
        { name: "Home", link: "/", icon: <HomeIcon className='w-[18px] h-[18px]' /> },
        { name: "About", link: "/about", icon: <UserIcon className='w-[18px] h-[18px]' /> },
        { name: "Projects", link: "/projects", icon: <PanelsTopLeft className='w-[18px] h-[18px]' /> },
        { name: "Contact", link: "/contact", icon: <Send className='w-[18px] h-[18px]' /> },
    ];

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) {
                setScrollStep(0);
                return;
            }

            const y = window.scrollY || 0;

            if (y > 400) setScrollStep(2);
            else if (y > 0) setScrollStep(1);
            else setScrollStep(0);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const widthClass =
        scrollStep === 0
            ? 'md:w-[80%] w-full border-none'
            : scrollStep === 1
                ? 'md:w-[60%] w-full border-[var(--bg-700)]'
                : 'md:w-[40%] w-full border-[var(--bg-700)]';

    const styleClass =
        scrollStep === 0
            ? 'border-[var(--bg-700)]'
            : 'md:bg-[var(--backdrop)] md:backdrop-blur-[12px] md:rounded-full md:border md:border-[var(--bg-700)]';

    return (
        <header
            className={`fixed top-4 inset-x-0 z-50 md:px-4 px-6 h-[44px] sm:h-[48px] 
            flex items-center justify-between py-2 sm:py-4 
            ${widthClass} mx-auto transition-all duration-300 ${styleClass}`}
        >

            {/* LOGO */}
            <h1 className='text-(--text-primary) text-xl sm:text-2xl font-medium'>TA</h1>

            {/* DESKTOP NAV */}
            <ul className="hidden sm:flex gap-6 text-sm">
                {navLinks.map((item) => {
                    const isActive = pathname === item.link;

                    return (
                        <li key={item.name} className="group relative flex items-center justify-center gap-2">

                            {isActive && (
                                <span className="w-[6px] h-[6px] rounded-full bg-(--highlight) absolute -left-3 top-1/2 -translate-y-1/2"></span>
                            )}

                            <Link
                                href={item.link}
                                className="text-(--text-secondary)"
                            >
                                <span className="relative inline-flex overflow-hidden">
                                    <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                                        {item.name}
                                    </div>
                                    <div className="text-text-primary absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                        {item.name}
                                    </div>
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* THEME BUTTON */}
            {theme === "light" ? (
                <button
                    onClick={toggleTheme}
                    className="inline-flex items-center justify-center h-11 w-11 rounded-full border 
                    md:hover:bg-(--secondary) cursor-pointer border-(--bg-700) shadow backdrop-blur-md 
                    transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none 
                    sm:bg-transparent sm:shadow-none sm:backdrop-blur-none"
                >
                    <Sun className='w-[18px] h-[18px] text-[0a0a0a]' />
                    <span className="sr-only">Toggle theme</span>
                </button>
            ) : (
                <button
                    onClick={toggleTheme}
                    className="inline-flex items-center justify-center h-11 w-11 rounded-full border 
                    md:hover:bg-(--secondary) cursor-pointer border-(--bg-700) shadow backdrop-blur-md 
                    transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none 
                    sm:bg-transparent sm:shadow-none sm:backdrop-blur-none"
                >
                    <Moon className='w-[18px] h-[18px] text-[0a0a0a]' />
                    <span className="sr-only">Toggle theme</span>
                </button>
            )}

            {/* MOBILE NAV */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center">
                <ul className="flex w-full justify-evenly rounded-t-3xl border-t border-(--bg-700) bg-(--backdrop) shadow backdrop-blur-md">
                    {navLinks.map((item, index) => {
                        const isActive = pathname === item.link;

                        return (
                            <li key={index} className="p-3">
                                <Link
                                    href={item.link}
                                    className="flex flex-col items-center justify-center gap-1"
                                >
                                    <span className={`w-[18px] h-[18px] ${isActive ? "text-(--highlight)" : "text-(--text-primary)"}`}>
                                        {item.icon}
                                    </span>

                                    <span className={`text-[10px] ${isActive ? "text-(--highlight)" : "text-(--text-primary)"}`}>
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

        </header>
    );
}
