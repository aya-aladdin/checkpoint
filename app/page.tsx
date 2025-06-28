'use client';

import {Navigation} from "@/components/Navigation";
import {HeroSection} from "@/components/HeroSection";
import {RegisterSection} from "@/components/RegisterSection";
import {AboutSection} from "@/components/AboutSection";
import {SponsorSection} from "@/components/SponsorSection";
import {ContactSection} from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation/>
            <HeroSection/>
            <RegisterSection/>
            <AboutSection/>
            <SponsorSection/>
            <ContactSection/>
        </main>
    );
}