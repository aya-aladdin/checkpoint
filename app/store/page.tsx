"use client";

import React from 'react';
import { storeItems } from '@/lib/StoreData';
import StoreItemComponent from '@/components/StoreItem';
import { ShoppingBag, Package, Trophy } from 'lucide-react';
import {Navigation} from "@/components/Navigation";

const Store: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
      </style>
      <Navigation/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
            CHECKPOINT STORE
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-semibold">
            Bid on exclusive items using your hard-earned Checkpoint Points
          </p>

          <div className="mt-16 rounded-2xl p-8 bg-gray-800 border-2 border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <h2 className="text-3xl font-bold mb-6 uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">How Bidding Works</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Package className="w-12 h-12 mx-auto mb-3 text-neon-blue"/>
                <h3 className="font-bold mb-2 text-white text-xl uppercase">Choose Your Item</h3>
                <p className="text-sm text-gray-400">Browse through our exclusive collection of hackathon rewards</p>
              </div>
              <div>
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-neon-green"/>
                <h3 className="font-bold mb-2 text-white text-xl uppercase">Place Your Bid</h3>
                <p className="text-sm text-gray-400">Use your earned CP to bid on items you want once the auction begins</p>
              </div>
              <div>
                <Trophy className="w-12 h-12 mx-auto mb-3 text-neon-pink"/>
                <h3 className="font-bold mb-2 text-white text-xl uppercase">Win the Auction</h3>
                <p className="text-sm text-gray-400">The highest bid at the end of the auction wins the item. Ties are broken by the earliest bid.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storeItems.map(item => (
            <StoreItemComponent key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
