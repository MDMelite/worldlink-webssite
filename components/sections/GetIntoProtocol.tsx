// components/sections/GetIntoProtocol.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Import the WLPScene component with dynamic loading (no SSR)
const WLPScene = dynamic(() => import('./WLPScene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] md:h-[800px] bg-gray-950 rounded-lg flex items-center justify-center">
      <div className="text-gray-400 text-center">
        <div className="animate-spin inline-block w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full mb-4"></div>
        <p>Loading 3D Protocol Visualization...</p>
      </div>
    </div>
  )
});

export default function GetIntoProtocol() {
  const [selectedTab, setSelectedTab] = useState('visualize');
  
  return (
    <section id="get-into-protocol" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get Into The Protocol
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
          Explore the WorldLink Protocol architecture in this interactive 3D visualization. 
          Discover how agents, modules, and connections work together to enable AI communication.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-gray-800 p-1">
            <button
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'visualize' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setSelectedTab('visualize')}
            >
              Visualize
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'interact' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setSelectedTab('interact')}
            >
              Interact
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'inspect' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setSelectedTab('inspect')}
            >
              Inspect
            </button>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mb-8 text-center text-gray-400 text-sm">
          {selectedTab === 'visualize' && (
            <p>Observe the protocol structure. The visualization will fly through key components automatically.</p>
          )}
          {selectedTab === 'interact' && (
            <p>Click and drag to rotate. Scroll to zoom. Hover over elements to see details.</p>
          )}
          {selectedTab === 'inspect' && (
            <p>Click on any module or agent to view detailed information about its role and connections.</p>
          )}
        </div>
        
        {/* 3D Visualization */}
        <div className="mb-8">
          <WLPScene />
        </div>
        
        {/* Legend */}
        <div className="bg-gray-900 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Protocol Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded bg-purple-600 mr-3"></div>
              <span className="text-gray-300">Core Modules</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-blue-500 mr-3"></div>
              <span className="text-gray-300">Agents</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-1 bg-green-500 mr-3"></div>
              <span className="text-gray-300">Connections</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}