'use client';

import {Button} from '@/components/ui/button';
import {ExternalLink} from 'lucide-react';

export function RegisterSection() {
    return (
        <section id="register-section" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Registration Info */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">Where to Register</h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Ready to dive into the excitement? Joining CheckPoint is super easy! Simply fill out
                                    our quick registration form from right here on this page! It&#39;s your first step
                                    into
                                    an incredible weekend of innovation, learning, and unforgettable connections.
                                </p>
                                <p>
                                    Don&#39;t miss out on the chance to build something wonderful and be part of our
                                    amazing community!
                                </p>
                            </div>
                        </div>

                        <div
                            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30">
                            <p className="text-gray-300 mb-4">
                                You can also access the form directly via the link below:
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScXCsXDXKfIc_UlECBnENYnfi_4K6lXlcqV5Ql6v7g75YRmtw/viewform?embedded"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Registration Form
                                    <ExternalLink className="ml-2 h-4 w-4"/>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Registration Form Embed */}
                    <div className="rounded-xl p-1 border border-slate-700" style={{backgroundColor: 'to-pink-600/20'}}>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScXCsXDXKfIc_UlECBnENYnfi_4K6lXlcqV5Ql6v7g75YRmtw/viewform?embedded=true"
                            className="w-full h-[600px] lg:h-[700px] rounded-lg"
                            style={{backgroundColor: 'to-pink-600/20'}}
                            title="CheckPoint Registration Form"
                            loading="lazy"
                        >
                            Loading registration form...
                        </iframe>
                    </div>


                </div>
            </div>
        </section>
    );
}