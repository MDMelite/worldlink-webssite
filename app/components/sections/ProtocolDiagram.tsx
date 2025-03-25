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

export default function ProtocolDiagram() {
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
        
        {/* Simple diagram */}
        <div className="w-full max-w-4xl mx-auto mb-16 bg-gray-950 rounded-lg p-6">
          <div className="w-full h-96 flex items-center justify-center relative">
            {/* Central Bus */}
            <div className="absolute w-60 h-28 rounded-lg bg-purple-800 border-2 border-purple-500 text-center flex flex-col justify-center">
              <p className="text-white font-bold text-lg">WorldLink Bus</p>
              <p className="text-purple-200 text-sm">Secure Messaging Layer</p>
            </div>
            
            {/* Agent A */}
            <div className="absolute top-8 left-24 w-32 h-32 rounded-full bg-blue-800 border-2 border-blue-500 flex flex-col justify-center items-center">
              <p className="text-white font-bold">Agent A</p>
              <p className="text-blue-200 text-sm">(Python)</p>
            </div>
            
            {/* Agent B */}
            <div className="absolute top-8 right-24 w-32 h-32 rounded-full bg-blue-800 border-2 border-blue-500 flex flex-col justify-center items-center">
              <p className="text-white font-bold">Agent B</p>
              <p className="text-blue-200 text-sm">(JavaScript)</p>
            </div>
            
            {/* Agent C */}
            <div className="absolute bottom-8 left-24 w-32 h-32 rounded-full bg-blue-800 border-2 border-blue-500 flex flex-col justify-center items-center">
              <p className="text-white font-bold">Agent C</p>
              <p className="text-blue-200 text-sm">(Autonomous AI)</p>
            </div>
            
            {/* Agent D */}
            <div className="absolute bottom-8 right-24 w-32 h-32 rounded-full bg-blue-800 border-2 border-blue-500 flex flex-col justify-center items-center">
              <p className="text-white font-bold">Agent D</p>
              <p className="text-blue-200 text-sm">(Custom Runtime)</p>
            </div>
            
            {/* Topic 1 */}
            <div className="absolute top-32 w-36 h-16 rounded-3xl bg-green-800 border-2 border-green-500 flex items-center justify-center">
              <p className="text-white">greeting</p>
            </div>
            
            {/* Topic 2 */}
            <div className="absolute right-40 top-1/2 transform -translate-y-1/2 w-36 h-16 rounded-3xl bg-green-800 border-2 border-green-500 flex items-center justify-center">
              <p className="text-white">data/sensor</p>
            </div>
            
            {/* Topic 3 */}
            <div className="absolute left-40 top-1/2 transform -translate-y-1/2 w-48 h-16 rounded-3xl bg-green-800 border-2 border-green-500 flex items-center justify-center">
              <p className="text-white">command/execute</p>
            </div>
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