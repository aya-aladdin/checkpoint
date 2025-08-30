"use client";

import React from 'react';
import { storeItems } from '@/lib/StoreData';
import StoreItemComponent from '@/components/StoreItem';
import { ShoppingBag, Package, Trophy } from 'lucide-react';
import { Navigation } from "@/components/Navigation";

const Store: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            CHECKPOINT STORE
          </h1>
          <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
            Bid on exclusive items using your hard-earned Checkpoint Points.
            Secure unique rewards and show off your hackathon skills.
          </p>
        </div>

        <div className="mb-20 p-8 rounded-2xl bg-gray-900 bg-opacity-50 border border-gray-700 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-10 text-white">How Bidding Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-900 rounded-2xl border border-gray-800 transition-transform duration-300 hover:border-purple-500">
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-purple-500/20">
                <Package className="w-8 h-8 text-purple-400"/>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">CHOOSE YOUR ITEM</h3>
              <p className="text-sm text-gray-400">
                Browse our exclusive collection of hackathon rewards, from tech gadgets to exclusive swag.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-900 rounded-2xl border border-gray-800 transition-transform duration-300 hover:border-pink-500">
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-pink-500/20">
                <ShoppingBag className="w-8 h-8 text-pink-400"/>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">PLACE YOUR BID</h3>
              <p className="text-sm text-gray-400">
                Use the Checkpoint Points you’ve earned to place bids on items you want once the auction begins.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-900 rounded-2xl border border-gray-800 transition-transform duration-300 hover:border-cyan-500">
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-cyan-500/20">
                <Trophy className="w-8 h-8 text-cyan-400"/>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">WIN THE AUCTION</h3>
              <p className="text-sm text-gray-400">
                The highest bid at the end of the auction wins the item. Ties are broken by the earliest bid.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {storeItems.map(item => (
            <StoreItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
