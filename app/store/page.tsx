"use client";

import React from 'react';
import { storeItems } from '@/lib/StoreData';
import StoreItemComponent from '@/components/StoreItem';
import { ShoppingBag, Package, Trophy } from 'lucide-react';
import {Navigation} from "@/components/Navigation";

const Store: React.FC = () => {
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
                CHECKPOINT STORE
              </h1>
              <p className="text-xl text-gray-custom mb-8" style={{color: 'var(--text-gray)'}}>
                Bid on exclusive items using your hard-earned Checkpoint Points
              </p>

              {/* Auction Info */}
              <div className="mt-16 rounded-xl p-8" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <h2 className="text-2xl font-bold mb-4 text-center" style={{color: 'var(--text-light)'}}>How Bidding Works</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Package className="w-8 h-8 mx-auto mb-3" style={{color: 'var(--accent-purple)'}}/>
                    <h3 className="font-bold mb-2" style={{color: 'var(--text-light)'}}>Choose Your Item</h3>
                    <p className="text-sm" style={{color: 'var(--text-gray)'}}>Browse through our exclusive collection of hackathon
                      rewards</p>
                  </div>
                  <div>
                    <ShoppingBag className="w-8 h-8 mx-auto mb-3" style={{color: 'var(--accent-green)'}}/>
                    <h3 className="font-bold mb-2" style={{color: 'var(--text-light)'}}>Place Your Bid</h3>
                    <p className="text-sm" style={{color: 'var(--text-gray)'}}>Use your earned CP to bid on items you want once the auction
                      begins</p>
                  </div>
                  <div>
                    <Trophy className="w-8 h-8 mx-auto mb-3" style={{color: 'var(--accent-blue)'}}/>
                    <h3 className="font-bold mb-2" style={{color: 'var(--text-light)'}}>Win & Collect</h3>
                    <p className="text-sm" style={{color: 'var(--text-gray)'}}>Highest bidder wins when the auction ends - as a tip have
                      1.5x the start bid amount.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storeItems.map(item => (
                  <StoreItemComponent key={item.id} item={item}/>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default Store;