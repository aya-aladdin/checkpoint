'use client';

import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {ExternalLink, MessageCircle, Wallet} from 'lucide-react';
import Image from 'next/image';
import {phrases} from "@/components/TextData";

export function HeroSection() {
    const [typewriterText, setTypewriterText] = useState('');

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeSpeed = isDeleting ? 75 : 150;
        const currentPhrase = phrases[currentPhraseIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentPhrase.length) {
                    setTypewriterText(currentPhrase.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (charIndex > 0) {
                    setTypewriterText(currentPhrase.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentPhraseIndex]);

    return (
        <section id="home-section" className="min-h-screen flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <Image
                            src="/static/Group_1.png"
                            alt="CheckPoint Event Illustration"
                            width={500}
                            height={400}
                            className="w-full h-auto rounded-lg max-w-sm lg:max-w-lg" 
                            priority
                        />
                    </div>

                    <div className="text-center lg:text-left space-y-8 order-last lg:order-first">
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Join us at{' '}
                                <span
                                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  CheckPoint!
                </span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text min-h-[1.2em]">
                                {typewriterText}
                                <span className="animate-pulse">|</span>
                            </h2>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                            Get ready for an incredible event full of innovation, collaboration, and challenges.
                            Connect with like-minded individuals, expand your skills, and build awesome projects!
                            Whether you are a seasoned pro or just starting, CheckPoint offers an unforgettable
                            experience!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg rounded-full"
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScXCsXDXKfIc_UlECBnENYnfi_4K6lXlcqV5Ql6v7g75YRmtw/viewform?embedded"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register Now
                                    <ExternalLink className="ml-2 h-5 w-5"/>
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-full"
                            >
                                <a
                                    href="https://discord.gg/4ZjKrG8Q"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5"/>
                                    Join Discord
                                </a>
                            </Button>
                        </div>

                        <div className="pt-2">
                            <Button
                                asChild
                                variant="secondary"
                                size="lg"
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-6 transition-all duration-300 hover:scale-105 rounded-full -mt-2"
                            >
                                <a
                                    href="https://flask-bank.vercel.app/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Wallet className="mr-2 h-5 w-5"/>
                                    Make a wallet at HackStreet Bank
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}