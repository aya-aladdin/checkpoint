'use client';

import {Instagram} from 'lucide-react';
import Image from 'next/image';

export function ContactSection() {
    return (
        <section id="contact-us-section" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <Image
                            src="/static/icon.png"
                            alt="HackStreet Logo"
                            width={300}
                            height={300}
                            className="w-full h-auto rounded-lg max-w-xs lg:max-w-md" 
                        />
                    </div>

                    <div className="space-y-8 order-last lg:order-first">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">Get in Touch!</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Have questions, suggestions, or just want to say hello? Reach out to us using our
                                contact channels,
                                or connect through our social media!
                            </p>
                        </div>

                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex items-center space-x-4">
                                <a
                                    href="https://www.instagram.com/hackstreet.ae/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors duration-200 group"
                                >
                                    <div
                                        className="p-2 bg-pink-400/20 rounded-lg group-hover:bg-pink-400/30 transition-colors duration-200">
                                        <Instagram className="h-6 w-6"/>
                                    </div>
                                    <span className="font-medium">@hackstreet.ae</span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
                            <h3 className="text-xl font-semibold text-white mb-2">Ready to Join?</h3>
                            <p className="text-gray-300 mb-4">
                                Don&#39;t wait — secure your spot at CheckPoint today and be part of something amazing!
                            </p>
                            <a
                                href="#register-section"
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('register-section')?.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}