"use client";

import React from 'react';
import { questData } from '@/lib/QuestData';
import QuestCard from '@/components/QuestCard';
import { Navigation } from "@/components/Navigation";

const Quests: React.FC = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
        <Navigation/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              QUEST LOG
            </h1>
            <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
              Complete challenges, earn Checkpoint Points, and level up your hackathon game
            </p>
          </div>

          {/* Quest Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {questData.map(quest => (
                <QuestCard key={quest.id} quest={quest}/>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Quests;
