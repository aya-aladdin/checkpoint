"use client";

import React from 'react';
import {StoreItemProps, StoreItemType} from '@/lib/types';
import { Package, Coins } from 'lucide-react';
import Image from 'next/image';


const StoreItem: React.FC<StoreItemProps> = ({ item }) => {
  const getRarityColor = (rarity: StoreItemType['rarity']) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400 border-gray-400/30';
      case 'Rare': return 'text-neon-blue border-accent-blue/30';
      case 'Epic': return 'text-neon-pink border-accent-pink/30';
      case 'Legendary': return 'text-yellow-400 border-yellow-400/30';
      default: return 'text-gray-400 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: StoreItemType['category']) => {
    switch (category) {
      case 'Tech': return '💻';
      case 'Merch': return '👕';
      case 'Collectible': return '🏆';
      case 'Experience': return '✨';
      default: return '�';
    }
  };

  return (
    <div className="bg-dark-bg border-2 border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300">
      <div className="relative">
        <Image
          src={item.img}
          alt={item.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 flex items-center space-x-2">
          <div className={`px-2 py-1 rounded-full text-xs font-bold border ${getRarityColor(item.rarity)} bg-black/50 backdrop-blur-sm`}>
            {item.rarity}
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-2xl">{getCategoryIcon(item.category)}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-light leading-tight">
            {item.name}
          </h3>
          <div className="flex items-center space-x-1 text-accent-green">
            <Package className="w-4 h-4" />
            <span className="text-xs font-medium whitespace-nowrap">{item.stock} in stock</span>
          </div>
        </div>
        
        <p className="text-gray-custom text-sm mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-accent-green" />
            <span className="text-neon-green font-bold text-lg">
              {item.startingBid} CheckPoints
            </span>
            <span className="text-xs text-gray-custom">starting bid</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-xs text-gray-custom">
            <span>{item.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;