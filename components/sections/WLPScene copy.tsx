'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}

export default function WLPScene() {
  return (
    <div className="relative w-full md:w-[90%] lg:w-[80%] mx-auto h-[600px] md:h-[800px]">
      {/* Left scroll indicator */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-blue-100/30 to-transparent z-10 flex items-center">
        <svg className="w-6 h-6 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
        </svg>
      </div>
      
      {/* 3D Canvas */}
      <div className="bg-gray-950 rounded-lg overflow-hidden h-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
          <OrbitControls />
        </Canvas>
      </div>
      
      {/* Right scroll indicator */}
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-blue-100/30 to-transparent z-10 flex items-center justify-end">
        <svg className="w-6 h-6 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </div>
    </div>
  );
}