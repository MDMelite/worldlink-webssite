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
        
        {/* Architecture diagram placeholder */}
        <div className="w-full max-w-4xl mx-auto h-64 mb-16 p-4 border border-gray-800 rounded-lg flex items-center justify-center bg-gray-950">
          <p className="text-gray-500">Architecture Diagram</p>
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