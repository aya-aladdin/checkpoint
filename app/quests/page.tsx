"use client";

import React, { useState } from 'react';
import { questData } from '@/lib/QuestData';
import QuestCard from '@/components/QuestCard';
import { Filter, Trophy } from 'lucide-react';
import {Navigation} from "@/components/Navigation";

const Quests: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const questTypes = ['All', 'Workshop', 'Submission', 'Challenge', 'Social', 'Bonus'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredQuests = questData.filter(quest => {
    const typeMatch = selectedType === 'All' || quest.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'All' || quest.difficulty === selectedDifficulty;
    return typeMatch && difficultyMatch;
  });

  return (
      <>
        <Navigation/>
        <br/><br/>
        <div className="min-h-screen bg-darker">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-light mb-4">
                <span className="text-neon-purple animate-glow">QUEST</span> LOG
              </h1>
              <p className="text-xl text-gray-custom mb-8">
                Complete challenges, earn Checkpoint Points, and level up your hackathon game
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-custom"/>
                <span className="text-gray-custom font-medium">Filter by:</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-custom">Type:</span>
                  <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 text-light text-sm focus:border-accent-purple focus:outline-none"
                  >
                    {questTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-custom">Difficulty:</span>
                  <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 text-light text-sm focus:border-accent-purple focus:outline-none"
                  >
                    {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Quest Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuests.map(quest => (
                  <QuestCard key={quest.id} quest={quest}/>
              ))}
            </div>

            {filteredQuests.length === 0 && (
                <div className="text-center py-12">
                  <Trophy className="w-16 h-16 text-gray-600 mx-auto mb-4"/>
                  <h3 className="text-xl font-bold text-gray-custom mb-2">No quests found</h3>
                  <p className="text-gray-custom">Try adjusting your filters to see more quests.</p>
                </div>
            )}
          </div>
        </div>
      </>
  );
};

export default Quests;