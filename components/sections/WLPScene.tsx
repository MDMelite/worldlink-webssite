import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text, Html } from '@react-three/drei';
import { useControls } from 'leva';
import * as THREE from 'three';

const GlowingBus = () => {
  const busRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (busRef.current) {
      busRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      busRef.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1);
    }
  });

  return (
    <mesh ref={busRef}>
      <torusGeometry args={[2, 0.1, 16, 100]} />
      <meshStandardMaterial emissive="#6C5CE7" emissiveIntensity={1} />
    </mesh>
  );
};

const ModuleBlock = ({ color, label }) => {
  return (
    <Float>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Html>
        <div className="label">{label}</div>
      </Html>
    </Float>
  );
};

const AgentNode = ({ radius, angle, time }) => {
  const x = radius * Math.cos(angle + time);
  const z = radius * Math.sin(angle + time);

  return (
    <mesh position={[x, 0, z]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const DataArc = () => {
  // WIP: Placeholder for connecting points
  return (
    <mesh>
      <lineSegments>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={new Float32Array([0, 0, 0, 1, 1, 1])}
            count={2}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#ffffff" />
      </lineSegments>
    </mesh>
  );
};

const WorldLinkScene = () => {
  const { autoRotate, moduleScale, agentCount, showAgents, showArcs } = useControls({
    autoRotate: true,
    moduleScale: 1,
    agentCount: 5,
    showAgents: true,
    showArcs: true,
  });

  const moduleColors = {
    core: '#00CEC9',
    sec: '#D63031',
    async: '#FDCB6E',
    mon: '#0984E3',
    trust: '#6AB04C',
    lite: '#E84393',
  };

  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <OrbitControls autoRotate={autoRotate} />
      <ambientLight color="#A29BFE" intensity={0.5} />
      <pointLight color="#74B9FF" position={[10, 10, 10]} />
      <Stars />

      <Float>
        <GlowingBus />
      </Float>

      <group scale={moduleScale}>
        <ModuleBlock color={moduleColors.core} label="WLP-Core" />
        <ModuleBlock color={moduleColors.sec} label="WLP-Sec" />
        <ModuleBlock color={moduleColors.async} label="WLP-Async" />
        <ModuleBlock color={moduleColors.mon} label="WLP-Mon" />
        <ModuleBlock color={moduleColors.trust} label="WLP-Trust" />
        <ModuleBlock color={moduleColors.lite} label="WLP-Lite" />
      </group>

      {showAgents && (
        <group>
          {[...Array(agentCount)].map((_, i) => (
            <AgentNode
              key={i}
              radius={4}
              angle={(i / agentCount) * Math.PI * 2}
              time={useFrame().clock.elapsedTime * 0.2}
            />
          ))}
        </group>
      )}

      {showArcs && (
        <group>
          <DataArc />
        </group>
      )}

      <Text position={[0, 3, 0]} fontSize={1} color="white" anchorX="center" anchorY="middle">
        WorldLink Protocol
      </Text>
    </Canvas>
  );
};

export default WorldLinkScene;