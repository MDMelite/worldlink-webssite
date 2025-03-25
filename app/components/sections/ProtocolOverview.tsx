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
        
        {/* Architecture diagram - embedded elegant SVG */}
        <div className="w-full max-w-4xl mx-auto mb-16 p-6 bg-gray-950 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-full h-auto">
            {/* Background */}
            <defs>
              <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#0f0f1a" />
              </radialGradient>
              
              {/* Connection patterns */}
              <pattern id="connectionPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="20" fill="none" />
                <path d="M0,10 L20,10" stroke="rgba(100,100,255,0.1)" strokeWidth="1" />
                <path d="M10,0 L10,20" stroke="rgba(100,100,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            
            {/* Main background */}
            <rect width="900" height="600" fill="url(#bgGradient)" />
            <rect width="900" height="600" fill="url(#connectionPattern)" opacity="0.7" />
            
            {/* Title */}
            <text x="450" y="45" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#ffffff" textAnchor="middle">WorldLink Protocol High-Level Architecture</text>
            
            {/* WorldLink Bus (Central Component) */}
            <g transform="translate(450, 300)">
              {/* Bus shape */}
              <rect x="-110" y="-60" width="220" height="120" rx="10" ry="10" fill="#5546a3" stroke="#8A74E8" strokeWidth="2" />
              <rect x="-100" y="-50" width="200" height="100" rx="5" ry="5" fill="#3a3169" stroke="#8A74E8" strokeWidth="1" />
              
              {/* Central name */}
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#ffffff" textAnchor="middle">WorldLink Bus</text>
              <text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="12" fill="#bebefe" textAnchor="middle">Secure Messaging Layer</text>
            </g>
            
            {/* Topics */}
            <g transform="translate(450, 180)">
              <ellipse cx="0" cy="0" rx="60" ry="30" fill="#2c8054" stroke="#3DCEA7" strokeWidth="2"/>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">greeting</text>
            </g>
            
            <g transform="translate(600, 250)">
              <ellipse cx="0" cy="0" rx="70" ry="35" fill="#2c8054" stroke="#3DCEA7" strokeWidth="2"/>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">data/sensor</text>
            </g>
            
            <g transform="translate(320, 370)">
              <ellipse cx="0" cy="0" rx="80" ry="35" fill="#2c8054" stroke="#3DCEA7" strokeWidth="2"/>
              <text x="0" y="5" fontFamily="Arial, sans-serif" fontSize="14" fill="#ffffff" textAnchor="middle">command/execute</text>
            </g>
            
            {/* Agents */}
            <g transform="translate(200, 150)">
              <circle cx="0" cy="0" r="60" fill="#2c4380" stroke="#4f78cc" strokeWidth="2"/>
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Agent A</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="14" fill="#b8cbf5" textAnchor="middle">(Python)</text>
            </g>
            
            <g transform="translate(700, 150)">
              <circle cx="0" cy="0" r="60" fill="#2c4380" stroke="#4f78cc" strokeWidth="2"/>
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Agent B</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="14" fill="#b8cbf5" textAnchor="middle">(JavaScript)</text>
            </g>
            
            <g transform="translate(200, 450)">
              <circle cx="0" cy="0" r="60" fill="#2c4380" stroke="#4f78cc" strokeWidth="2"/>
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Agent C</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="14" fill="#b8cbf5" textAnchor="middle">(Autonomous AI)</text>
            </g>
            
            <g transform="translate(700, 450)">
              <circle cx="0" cy="0" r="60" fill="#2c4380" stroke="#4f78cc" strokeWidth="2"/>
              <text x="0" y="-15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">Agent D</text>
              <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="14" fill="#b8cbf5" textAnchor="middle">(Custom Runtime)</text>
            </g>
            
            {/* Connection lines */}
            <path d="M250,170 C300,200 350,250 400,260" stroke="#4f78cc" strokeWidth="2" fill="none" />
            <path d="M650,170 C600,200 550,250 500,260" stroke="#4f78cc" strokeWidth="2" fill="none" />
            <path d="M250,430 C300,400 350,350 400,340" stroke="#4f78cc" strokeWidth="2" fill="none" />
            <path d="M650,430 C600,400 550,350 500,340" stroke="#4f78cc" strokeWidth="2" fill="none" />
            
            {/* Legend */}
            <g transform="translate(45, 510)">
              <rect x="0" y="0" width="260" height="75" rx="5" ry="5" fill="rgba(50,50,80,0.5)" stroke="#ffffff" strokeWidth="1" />
              <text x="130" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle">Legend</text>
              
              <circle cx="15" cy="35" r="8" fill="#2c4380" stroke="#4f78cc" strokeWidth="1" />
              <text x="35" y="40" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff">Agents</text>
              
              <rect x="80" y="30" width="16" height="10" fill="#5546a3" stroke="#8A74E8" strokeWidth="1" />
              <text x="105" y="40" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff">Bus</text>
              
              <ellipse cx="150" cy="35" rx="13" ry="7" fill="#2c8054" stroke="#3DCEA7" strokeWidth="1" />
              <text x="175" y="40" fontFamily="Arial, sans-serif" fontSize="12" fill="#ffffff">Topics</text>
            </g>
          </svg>
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