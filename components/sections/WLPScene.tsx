// WorldLinkScene.tsx – DEBUG VERSION 11: Modules WITH Html Labels

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// Html, Float imports needed. Text import no longer needed for ModuleBlock.
import { OrbitControls, Html, Stars, Float, Ring } from '@react-three/drei';
import * as THREE from 'three';
// No Leva

// --- GlowingBus Component (Unchanged - Known Stable) ---
function GlowingBus() { /* ... same as before ... */
  const busRef = useRef<THREE.Mesh>(null);
  const debugTimeRef = useRef(0);
  const htmlRef = useRef<HTMLDivElement>(null);
  useFrame(({ clock }) => { const elapsedTime = clock.getElapsedTime(); debugTimeRef.current = elapsedTime; if (htmlRef.current) { htmlRef.current.textContent = `useFrame Time: ${elapsedTime.toFixed(2)}`; } if (busRef.current) { busRef.current.rotation.y = elapsedTime * 0.1; busRef.current.scale.setScalar(1 + Math.sin(elapsedTime * 1.5) * 0.05); } });
  return ( <group> <mesh ref={busRef} position={[0, 0, 0]}> <torusGeometry args={[2, 0.1, 16, 100]} /> <meshStandardMaterial color="#6C5CE7" emissive="#6C5CE7" emissiveIntensity={2} toneMapped={false} /> </mesh> <Html position={[0, 0.5, 0]} center> <div ref={htmlRef} style={{ color: 'white', background: 'rgba(0,0,0,0.7)', padding: '2px 5px', fontSize: '10px', border: '1px solid white' }}> useFrame Time: 0.00 </div> </Html> </group> );
}


// --- ModuleBlock Component (MODIFIED: Using Html Label) ---
function ModuleBlock({ position = [0,0,0], color, label }) {
  return (
    <group position={position}>
      <Float speed={4} floatIntensity={0.5} rotationIntensity={0.5}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color={color} roughness={0.6} />
        </mesh>
        {/* --- Use Html for the label --- */}
        <Html position={[0, -0.5, 0]} center transform occlude distanceFactor={10}>
             {/* Adjusted y-position slightly for spacing */}
             <div style={{
                 color: 'white',
                 background: 'rgba(0,0,0,0.6)',
                 padding: '1px 3px',
                 fontSize: '10px', // Smaller font size for labels
                 borderRadius: '3px',
                 whiteSpace: 'nowrap',
                 userSelect: 'none'
             }}>
                {label}
             </div>
        </Html>
         {/* --- End Html Label --- */}
      </Float>
    </group>
  );
};
// --- End ModuleBlock Modification ---

// --- AgentNode Component (Definition present but not rendered yet) ---
function AgentNode({ agentId, agentType = "Agent", initialAngle, radius }) { /* ... same as before ... */
  const nodeRef = useRef<THREE.Group>(null); useFrame(({ clock }) => { if (nodeRef.current) { const time = clock.getElapsedTime() * 0.3; const angle = initialAngle + time; const x = radius * Math.cos(angle); const z = radius * Math.sin(angle); const y = Math.sin(time * 2 + initialAngle) * 0.2; nodeRef.current.position.set(x, y, z); nodeRef.current.lookAt(0, 0, 0); } });
   return ( <group ref={nodeRef}> <mesh> <sphereGeometry args={[0.2, 32, 32]} /> <meshStandardMaterial color={"white"} roughness={0.4}/> </mesh> <Ring args={[0.25, 0.3, 32]} rotation={[-Math.PI / 2, 0, 0]}> <meshBasicMaterial color="white" side={THREE.DoubleSide} transparent opacity={0.5} /> </Ring> </group> );
};

// --- DataArc Component (Placeholder) ---
function DataArc() { return null; };

// --- WorldLinkScene Component (Rendering Modules with Html Labels) ---
function WorldLinkScene() {

  const moduleData = useMemo(() => [
    { label: 'WLP-Core', color: '#00CEC9' }, { label: 'WLP-Sec', color: '#D63031' },
    { label: 'WLP-Async', color: '#FDCB6E' }, { label: 'WLP-Mon', color: '#0984E3' },
    { label: 'WLP-Trust', color: '#6AB04C' }, { label: 'WLP-Lite', color: '#E84393' }
  ], []);

  const moduleRadius = 2.5;

  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 70 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[8, 8, 8]} intensity={1.2} castShadow />
      <pointLight position={[-8, -4, -10]} intensity={0.6} color="#6C5CE7"/>

      {/* OrbitControls (Enabled - Known Stable) */}
      <OrbitControls makeDefault enableZoom={true} enablePan={true} enableRotate={true} enableDamping={true} dampingFactor={0.05} rotateSpeed={0.3} touchZoom={true} touchRotate={true} />

      {/* Stars (Known Stable) */}
      <Stars radius={100} depth={50} count={3000} factor={4} fade />

      {/* Bus + Timer (Known Stable) */}
      <GlowingBus />

      {/* Html Title (Known Stable) */}
      <Html position={[0, 2.5, 0]} center wrapperClass="title-label">
        <h1 style={{ color: 'white', fontSize: '2.5em', whiteSpace: 'nowrap', userSelect: 'none' }}>
           WorldLink Protocol
        </h1>
      </Html>

      {/* Render Module Blocks (Now with internal Html Labels) */}
      <group>
          {moduleData.map((mod, index) => {
              const angle = (index / moduleData.length) * Math.PI * 2;
              const x = moduleRadius * Math.cos(angle);
              const z = moduleRadius * Math.sin(angle);
              const position: [number, number, number] = [x, -0.5, z];
              return (
                  <ModuleBlock
                      key={mod.label}
                      position={position}
                      color={mod.color}
                      label={mod.label}
                  />
              );
          })}
      </group>

      {/* NO Leva */}
      {/* NO Agents Added Yet */}
      {/* NO Data Arcs */}

    </Canvas>
  );
}

export default WorldLinkScene;