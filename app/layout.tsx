import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from "react";

const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '400', '700'],
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'CheckPoint 2025 - HackStreet UAE Hackathon',
    description: 'Join CheckPoint 2025, the ultimate 3-day hackathon by HackStreet. Build innovative projects, connect with like-minded individuals, and compete for amazing prizes!',
    keywords: 'hackathon, UAE, CheckPoint, HackStreet, coding, innovation, students, technology',
    authors: [{name: 'HackStreet Team'}],
    openGraph: {
        title: 'CheckPoint 2025 - HackStreet UAE Hackathon',
        description: 'Join CheckPoint 2025, the ultimate 3-day hackathon by HackStreet.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CheckPoint 2025 - HackStreet UAE Hackathon',
        description: 'Join CheckPoint 2025, the ultimate 3-day hackathon by HackStreet.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="icon" href="/static/iconbg.png"/>
            <meta name="theme-color" content="#8B5CF6"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>CheckPoint 2025</title>
        </head>
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}