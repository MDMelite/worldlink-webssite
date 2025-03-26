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
      {/* Border */}
      <div className="absolute inset-0 border-2 border-gray-700 rounded-lg pointer-events-none"></div>

      {/* Left scroll margin */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800 via-gray-700 to-transparent z-10"></div>

      {/* 3D Canvas */}
      <div className="bg-gray-950 rounded-lg overflow-hidden h-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Right scroll margin */}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-gray-800 via-gray-700 to-transparent z-10"></div>
    </div>
  );
}