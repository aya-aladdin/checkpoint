'use client';

import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

const navItems = [
    {href: '#home-section', label: 'Home'},
    {href: '#register-section', label: 'Register'},
    {href: '#about-event-section', label: 'About'},
    {href: '#sponsor-us-section', label: 'Sponsor Us'},
    {href: '#contact-us-section', label: 'Contact'},
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50'
                        : 'bg-gradient-background'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div
                            className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            CheckPoint
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-gray-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6"/>
                                ) : (
                                    <Menu className="block h-6 w-6"/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className="text-gray-300 hover:text-white hover:bg-slate-700/50 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}