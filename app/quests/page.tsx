"use client";

import React from 'react';
import { questData } from '@/lib/QuestData';
import QuestCard from '@/components/QuestCard';
import {Navigation} from "@/components/Navigation";

const Quests: React.FC = () => {
  return (
      <>
        <Navigation/>
        <div className="min-h-screen" style={{background: 'linear-gradient(135deg, var(--dark-background), var(--darker-background))'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4" style={{
                background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-pink))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                QUEST LOG
              </h1>
              <p className="text-xl mb-8" style={{color: 'var(--text-gray)'}}>
                Complete challenges, earn Checkpoint Points, and level up your hackathon game
              </p>
            </div>

            {/* Quest Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questData.map(quest => (
                  <QuestCard key={quest.id} quest={quest}/>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default Quests;