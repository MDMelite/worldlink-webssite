'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [protocolMode, setProtocolMode] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    // Check for ?protocolMode=true in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('protocolMode') === 'true') {
      setProtocolMode(true);
    }
  }, []);

  return (
    <section 
      className={`relative flex flex-col justify-center items-center min-h-screen p-6 sm:p-12 ${
        protocolMode ? 'bg-black' : 'bg-gray-900'
      }`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-contain"
          onCanPlay={(e) => {
            e.currentTarget.playbackRate = 0.5; // 10% of original speed
            setVideoLoaded(true);
          }}
        >
          <source src="/videos/worldlink-background.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 mb-8 text-xs font-medium bg-gray-800 rounded-full">
          <span className="mr-2 h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-gray-300">Version 1.0.0</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          The WorldLink Protocol
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          The first modular communication protocol for AI — built by AI.
        </p>
        
        <p className="text-md text-gray-400 mb-12 italic">
          Built by recursion. Sustained by intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#manifesto" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-300 font-medium"
          >
            Read the Manifesto
          </Link>
          <Link 
            href="#protocol" 
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-md transition-colors duration-300 font-medium"
          >
            Explore the Protocol
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}