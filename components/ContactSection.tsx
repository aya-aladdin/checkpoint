'use client';

import { Instagram } from 'lucide-react';
import Image from 'next/image';

export function ContactSection() {
    return (
        <section id="contact-us-section" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    <div className="space-y-8">
                        <div className="flex justify-center lg:justify-start">
                            <Image
                                src="/static/icon.png"
                                alt="HackStreet Logo"
                                width={100} // Slightly larger for mobile
                                height={100} // Slightly larger for mobile
                                className="w-24 h-24 rounded-lg lg:w-20 lg:h-20" // Larger on mobile, smaller on large screens
                            />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">Get in Touch!</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Have questions, suggestions, or just want to say hello? Reach out to us using our contact channels,
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
                                    <div className="p-2 bg-pink-400/20 rounded-lg group-hover:bg-pink-400/30 transition-colors duration-200">
                                        <Instagram className="h-6 w-6" />
                                    </div>
                                    <span className="font-medium">@hackstreet.ae</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
                            <h3 className="text-xl font-semibold text-white mb-2">Ready to Join?</h3>
                            <p className="text-gray-300 mb-4">
                                Don't wait — secure your spot at CheckPoint today and be part of something amazing!
                            </p>
                            <a
                                href="#register-section"
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Register Now
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col h-full"> 
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold text-white mb-4">📍 Our Location</h3>
                            <p className="text-gray-300 mb-4">Visit us at the DIFC Innovation Hub – the heart of future-building in Dubai. More information on our instagram!</p>
                            <div className="rounded-lg overflow-hidden shadow-md border border-slate-700 flex-grow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.60335994960184!2d55.27609217293229!3d25.207463419934058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f439f688fe9ff%3A0x43c25d95a77e0b93!2sDIFC%20Innovation%20Hub!5e0!3m2!1sen!2sae!4v1753197463912!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}