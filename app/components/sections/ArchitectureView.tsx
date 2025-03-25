'use client';

export default function ArchitectureView() {
  return (
    <section id="diagram" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Architecture Diagram
        </h2>
        
        {/* Simple embedded SVG */}
        <div className="w-full max-w-4xl mx-auto mb-16 p-6 bg-gray-950 rounded-lg">
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
      </div>
    </section>
  );
}