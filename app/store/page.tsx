"use client";

import React, { useState } from 'react';
import { storeItems } from '@/lib/StoreData';
import StoreItemComponent from '@/components/StoreItem';
import { ShoppingBag, Package, Filter, Trophy } from 'lucide-react';
import {Navigation} from "@/components/Navigation";

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRarity, setSelectedRarity] = useState<string>('All');

  const categories = ['All', 'Apparel', 'Tech', 'Collectible', 'Experience'];
  const rarities = ['All', 'Common', 'Rare', 'Epic', 'Legendary'];

  const filteredItems = storeItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const rarityMatch = selectedRarity === 'All' || item.rarity === selectedRarity;
    return categoryMatch && rarityMatch;
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
                <span className="text-neon-green animate-glow">CHECKPOINT</span> STORE
              </h1>
              <p className="text-xl text-gray-custom mb-8">
                Bid on exclusive items using your hard-earned Checkpoint Points
              </p>


              {/* Auction Info */}
              <div className="mt-16 bg-dark-bg border border-accent-purple/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-light mb-4 text-center">How Bidding Works</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Package className="w-8 h-8 text-neon-purple mx-auto mb-3"/>
                    <h3 className="font-bold text-light mb-2">Choose Your Item</h3>
                    <p className="text-sm text-gray-custom">Browse through our exclusive collection of hackathon
                      rewards</p>
                  </div>
                  <div>
                    <ShoppingBag className="w-8 h-8 text-neon-green mx-auto mb-3"/>
                    <h3 className="font-bold text-light mb-2">Place Your Bid</h3>
                    <p className="text-sm text-gray-custom">Use your earned CP to bid on items you want once the auction
                      begins</p>
                  </div>
                  <div>
                    <Trophy className="w-8 h-8 text-neon-blue mx-auto mb-3"/>
                    <h3 className="font-bold text-light mb-2">Win & Collect</h3>
                    <p className="text-sm text-gray-custom">Highest bidder wins when the auction ends - as a tip have
                      1.5x the start bid amount.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-custom"/>
                <span className="text-gray-custom font-medium">Filter by:</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-custom">Category:</span>
                  <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 text-light text-sm focus:border-accent-green focus:outline-none"
                  >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-custom">Rarity:</span>
                  <select
                      value={selectedRarity}
                      onChange={(e) => setSelectedRarity(e.target.value)}
                      className="bg-dark-bg border border-gray-700 rounded-lg px-3 py-2 text-light text-sm focus:border-accent-green focus:outline-none"
                  >
                    {rarities.map(rarity => (
                        <option key={rarity} value={rarity}>{rarity}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Store Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                  <StoreItemComponent key={item.id} item={item}/>
              ))}
            </div>

            {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4"/>
                  <h3 className="text-xl font-bold text-gray-custom mb-2">No items found</h3>
                  <p className="text-gray-custom">Try adjusting your filters to see more items.</p>
                </div>
            )}
          </div>
        </div>
      </>
  );
};

export default Store;