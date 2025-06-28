'use client';

import {Button} from '@/components/ui/button';
import {Download} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {sponsorBenefits} from "@/components/TextData";


export function SponsorSection() {
    return (
        <section id="sponsor-us-section" className="py-20 bg-slate-800/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Sponsor CheckPoint</h2>
                    <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
                        Partner with CheckPoint and help us empower the next generation of innovators!
                        Your sponsorship helps cover essential event costs like venue setup, swag, prizes, and logistics
                        —
                        all while keeping the event completely free for participants.
                        As a sponsor, you&#39;ll gain valuable exposure to a talented, tech-driven youth audience from
                        across the UAE.
                    </p>
                </div>

                {/* Why Sponsor Us */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Why Sponsor Us?</h3>

                    <Accordion type="single" collapsible className="space-y-4">
                        {sponsorBenefits.map((benefit, index) => (
                            <AccordionItem
                                key={index}
                                value={`sponsor-${index}`}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 px-6 py-2"
                            >
                                <AccordionTrigger
                                    className="text-left text-white hover:text-purple-400 transition-colors duration-200 font-medium">
                                    {benefit.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                                    {benefit.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Call to Action */}
                <div
                    className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30">
                    <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                        Ready to make an impact? Download our sponsorship package for more details on tiers and
                        benefits,
                        or contact us directly to discuss a custom partnership!
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="
    bg-gradient-to-r from-green-600 to-emerald-600
    hover:from-green-700 hover:to-emerald-700
    text-white font-semibold
    px-4 py-4
    sm:px-8 sm:py-6
    text-base sm:text-lg
    transition-all duration-300
    hover:scale-105
    shadow-lg
    w-full sm:w-auto
    max-w-full
  "
                    >
                        <a
                            href="/static/Checkpoint-2025-Prospectus.pdf"
                            download
                            className="inline-flex items-center justify-center"
                        >
                            <Download className="mr-2 h-5 w-5"/>
                            Download Sponsorship Prospectus
                        </a>
                    </Button>

                </div>
            </div>
        </section>
    );
}