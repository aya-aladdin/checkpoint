'use client';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {faqData} from "@/components/TextData";


export function FAQSection() {
    return (
        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>

            <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 px-6 py-2"
                    >
                        <AccordionTrigger
                            className="text-left text-white hover:text-purple-400 transition-colors duration-200 font-medium">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 leading-relaxed pt-2">
                            {faq.answer}
                            {faq.question === "Do I need a team?" && (
                                <span>
                  {" "}
                                    <a
                                        href="https://discord.gg/4ZjKrG8Q"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                                    >
                    Discord server
                  </a>
                </span>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}