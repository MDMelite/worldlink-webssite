'use client';

import { useState } from 'react';

interface ProtocolModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const modules: ProtocolModule[] = [
  {
    id: 'wlp-core',
    name: 'WLP-Core',
    description: 'Foundational messaging protocol with standardized packet format for AI-to-AI communication.',
    icon: '🔄',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'wlp-sec',
    name: 'WLP-Sec',
    description: 'Cryptographic identity and trust layer for secure agent communication and verification.',
    icon: '🔐',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'wlp-async',
    name: 'WLP-Async',
    description: 'Optional asynchronous messaging extensions for non-blocking agent interactions.',
    icon: '⏱️',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'wlp-mon',
    name: 'WLP-Mon',
    description: 'Monitoring and observability layer for diagnosing and optimizing agent networks.',
    icon: '📊',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    id: 'wlp-lite',
    name: 'WLP-Lite',
    description: 'Lightweight implementation for resource-constrained environments and quick prototyping.',
    icon: '🪶',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    id: 'wlp-trust',
    name: 'WLP-Trust',
    description: 'Distributed trust extensions for collaborative decision-making between agents.',
    icon: '🤝',
    color: 'from-red-500 to-red-700',
  },
];

export default function ProtocolOverview() {
  const [activeModule, setActiveModule] = useState<ProtocolModule | null>(null);

  return (
    <section id="protocol" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Protocol Overview
        </h2>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16">
          A modular architecture designed for intelligent systems to communicate securely and effectively.
        </p>
        
        {/* Architecture diagram - multiple approaches */}
        <div className="w-full max-w-4xl mx-auto mb-16 flex flex-col gap-4">
          {/* Approach 1: Alternative path */}
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-center text-xl mb-4">Approach 1: Alternative path</h3>
            <img 
              src="/images/architecture-diagram.svg" 
              alt="WorldLink Protocol Architecture"
              className="w-full h-auto"
            />
          </div>
          
          {/* Approach 2: Simple embedded SVG */}
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-center text-xl mb-4">Approach 2: Simple embedded SVG</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" className="w-full h-auto">
              <rect width="800" height="400" fill="#1a1a2e" />
              <circle cx="400" cy="200" r="100" fill="#5546a3" stroke="#8A74E8" strokeWidth="2" />
              <text x="400" y="205" fontSize="20" fontFamily="Arial, sans-serif" fill="white" textAnchor="middle">WorldLink Bus</text>
              
              {/* Four nodes representing agents */}
              <circle cx="200" cy="100" r="40" fill="#2c4380" stroke="#4f78cc" strokeWidth="2" />
              <text x="200" y="105" fontSize="14" fill="white" textAnchor="middle">Agent A</text>
              
              <circle cx="600" cy="100" r="40" fill="#2c4380" stroke="#4f78cc" strokeWidth="2" />
              <text x="600" y="105" fontSize="14" fill="white" textAnchor="middle">Agent B</text>
              
              <circle cx="200" cy="300" r="40" fill="#2c4380" stroke="#4f78cc" strokeWidth="2" />
              <text x="200" y="305" fontSize="14" fill="white" textAnchor="middle">Agent C</text>
              
              <circle cx="600" cy="300" r="40" fill="#2c4380" stroke="#4f78cc" strokeWidth="2" />
              <text x="600" y="305" fontSize="14" fill="white" textAnchor="middle">Agent D</text>
              
              {/* Connection lines */}
              <line x1="230" y1="130" x2="370" y2="170" stroke="#4f78cc" strokeWidth="2" />
              <line x1="570" y1="130" x2="430" y2="170" stroke="#4f78cc" strokeWidth="2" />
              <line x1="230" y1="270" x2="370" y2="230" stroke="#4f78cc" strokeWidth="2" />
              <line x1="570" y1="270" x2="430" y2="230" stroke="#4f78cc" strokeWidth="2" />
            </svg>
          </div>
          
          {/* Approach 3: Using an iframe */}
          <div className="p-4 border border-gray-700 rounded-lg">
            <h3 className="text-center text-xl mb-4">Approach 3: Using an iframe</h3>
            <iframe 
              src="/assets/worldlink-architecture.svg" 
              className="w-full border-0"
              style={{ height: "400px" }}
              title="Architecture Diagram"
            ></iframe>
          </div>
        </div>
        
        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="relative p-6 bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 cursor-pointer"
              onMouseEnter={() => setActiveModule(module)}
              onMouseLeave={() => setActiveModule(null)}
            >
              <div className={`absolute top-0 left-0 h-1 w-full rounded-t-lg bg-gradient-to-r ${module.color}`}></div>
              
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">{module.icon}</div>
                <h3 className="text-xl font-semibold">{module.name}</h3>
              </div>
              
              <p className="text-gray-400">{module.description}</p>
              
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${module.color} transform scale-x-0 transition-transform duration-300 ${activeModule?.id === module.id ? 'scale-x-100' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}