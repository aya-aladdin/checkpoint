'use client';

import {Calendar} from '@/components/Calendar';
import {FAQSection} from '@/components/FAQSection';

export function AboutSection() {
    return (
        <section id="about-event-section" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">What is CheckPoint?</h2>
                            <p className="text-gray-300 leading-relaxed">
                                CheckPoint is HackStreet&#39;s ultimate 3-day hackathon — designed to bring together
                                students,
                                developers, and tech enthusiasts from around the UAE! Dive into a weekend of building
                                projects,
                                learning new tech, and teaming up with creative minds. Whether you&#39;re a coding pro
                                or just
                                starting out, CheckPoint is all about innovation, collaboration, and having a blast with
                                your
                                teammates while solving real-world challenges.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white">When is CheckPoint?</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Mark your calendars! CheckPoint will take place from{' '}
                                <span
                                    className="font-semibold text-purple-400">September 5th to September 7th, 2025</span>.
                                Get ready for an intense weekend of coding and creation!
                            </p>
                        </div>
                    </div>

                    {/* Calendar Component */}
                    <div className="flex justify-center lg:justify-end">
                        <Calendar/>
                    </div>
                </div>

                {/* FAQ Section */}
                <FAQSection/>
            </div>
        </section>
    );
}