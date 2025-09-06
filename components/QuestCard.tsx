"use client";

import React from 'react';
import {Quest, QuestCardProps} from '@/lib/types';
import { Trophy, Star } from 'lucide-react';

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const getTypeColor = (type: Quest['type']) => {
    switch (type) {
      case 'Workshop': return 'text-neon-blue border-accent-blue/30 bg-accent-blue/5';
      case 'Submission': return 'text-neon-green border-accent-green/30 bg-accent-green/5';
      case 'Challenge': return 'text-neon-pink border-accent-pink/30 bg-accent-pink/5';
      case 'Social': return 'text-neon-purple border-accent-purple/30 bg-accent-purple/5';
      case 'Bonus': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/5';
    }
  };

  const getDifficultyIcon = (difficulty: Quest['difficulty']) => {
    switch (difficulty) {
      case 'Easy': return <Star className="w-4 h-4 fill-current" />;
      case 'Medium': return (
        <>
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </>
      );
      case 'Hard': return (
        <>
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </>
      );
    }
  };

  return (
    <div className={`bg-dark-bg border-2 border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:border-accent-purple/50 hover:glow-purple transform hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getTypeColor(quest.type)}`}>
            {quest.type}
          </div>
          <div className="flex items-center space-x-1 text-yellow-400">
            {getDifficultyIcon(quest.difficulty)}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-light mb-3 leading-tight">
        {quest.title}
      </h3>
      
      <p className="text-gray-custom text-sm mb-4 leading-relaxed">
        {quest.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-accent-green" />
          <span className="text-neon-green font-bold text-lg">
            {quest.reward} CHP
          </span>
        </div>

      </div>
    </div>
  );
};

export default QuestCard;