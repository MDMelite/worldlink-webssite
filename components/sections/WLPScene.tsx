// components/3d/WLPScene.tsx
'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Text, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { DirectionalLightHelper } from 'three';

// Types for our components
interface ModuleProps {
  id: string;
  position: [number, number, number];
  color: string;
  name: string;
  description?: string;
}

interface AgentProps {
  id: string;
  position: [number, number, number];
  moduleId: string;
  name: string;
  type?: string;
}

interface ArcProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color?: string;
}

// Placeholder data
const PLACEHOLDER_MODULES: ModuleProps[] = [
  { id: 'wlp-core', position: [0, 0, 0], color: '#5546a3', name: 'WLP-Core', description: 'Foundational messaging protocol' },
  { id: 'wlp-sec', position: [3, 1, 2], color: '#2c8054', name: 'WLP-Sec', description: 'Security and trust layer' },
  { id: 'wlp-async', position: [-3, 0.5, -1], color: '#8A2BE2', name: 'WLP-Async', description: 'Asynchronous messaging extensions' },
  { id: 'wlp-mon', position: [0, -2, 3], color: '#FFD700', name: 'WLP-Mon', description: 'Monitoring and observability' },
];

const PLACEHOLDER_AGENTS: AgentProps[] = [
  { id: 'agent-a', position: [1.5, 1, 1], moduleId: 'wlp-core', name: 'Agent A', type: 'Python' },
  { id: 'agent-b', position: [4, 0.5, 1], moduleId: 'wlp-sec', name: 'Agent B', type: 'JavaScript' },
  { id: 'agent-c', position: [-2, 1.5, -0.5], moduleId: 'wlp-async', name: 'Agent C', type: 'Autonomous AI' },
];

// Scene lighting and environment setup
function SceneSetup() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight 
        ref={directionalLightRef}
        position={[10, 10, 5]} 
        intensity={0.8} 
        castShadow 
      />
      <Environment preset="night" background blur={0.6} />
      
      {/* Create a grid helper for reference */}
      <gridHelper args={[20, 20, '#304050', '#304050']} position={[0, -3, 0]} />
    </>
  );
}

// Module component with improved visuals
function Module({ position, color, name, id, description }: ModuleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Base color and emissive color based on the provided color
  const baseColor = useMemo(() => new THREE.Color(color), [color]);
  const emissiveColor = useMemo(() => new THREE.Color(color).multiplyScalar(0.5), [color]);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Subtle rotation
      groupRef.current.rotation.y += 0.002;
    }
    
    if (meshRef.current) {
      // Glow effect when hovered
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        hovered ? 0.8 : 0.3,
        0.1
      );
    }
  });
  
  return (
    <group
      ref={groupRef}
      position={position}
      onClick={() => setClicked(!clicked)}
    >
      {/* Main module body */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.2, 0.6, 1.2]} />
        <meshStandardMaterial 
          color={baseColor} 
          emissive={emissiveColor}
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Connection ports */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={`port-${i}`}
          position={[
            (i === 0 || i === 3) ? 0.65 : -0.65,
            0,
            (i === 0 || i === 1) ? 0.65 : -0.65
          ]}
          scale={0.1}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {/* Module name label */}
      <Text
        position={[0, 0.5, 0]}
        color="white"
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      
      {/* Display more info when clicked */}
      {clicked && (
        <group position={[0, 1, 0]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[2, 0.6]} />
            <meshBasicMaterial 
              color="#111122" 
              transparent 
              opacity={0.8} 
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            color="white"
            fontSize={0.15}
            maxWidth={1.8}
            anchorX="center"
            anchorY="middle"
          >
            {description || name}
          </Text>
        </group>
      )}
    </group>
  );
}

// Agent component with improved visuals
function Agent({ position, moduleId, name, id, type }: AgentProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      // More active floating animation for agents
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.15;
      groupRef.current.rotation.y += 0.01;
    }
    
    if (meshRef.current) {
      // Glow effect when hovered
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        hovered ? 1.0 : 0.4,
        0.1
      );
    }
  });
  
  return (
    <group
      ref={groupRef}
      position={position}
      onClick={() => setClicked(!clicked)}
    >
      {/* Main agent body */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
      >
        <capsuleGeometry args={[0.2, 0.5, 8, 16]} />
        <meshStandardMaterial 
          color={hovered ? '#ffffff' : '#4f78cc'} 
          emissive={hovered ? '#4f78cc' : '#2c4380'} 
          emissiveIntensity={0.4}
          roughness={0.2}
        />
      </mesh>
      
      {/* Agent identifier */}
      <Text
        position={[0, 0.5, 0]}
        color="white"
        fontSize={0.15}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      
      {/* Display more info when clicked */}
      {clicked && (
        <group position={[0, 1, 0]}>
          <mesh position={[0, 0, 0]}>
            <planeGeometry args={[1.5, 0.6]} />
            <meshBasicMaterial 
              color="#112244" 
              transparent 
              opacity={0.8} 
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            color="white"
            fontSize={0.12}
            maxWidth={1.4}
            anchorX="center"
            anchorY="middle"
          >
            {`${name} (${type || 'Agent'})`}
          </Text>
        </group>
      )}
    </group>
  );
}

// Arc connection between modules and agents
function Arc({ start, end, color = '#8A74E8' }: ArcProps) {
  const points = useMemo(() => {
    // Create a Catmull-Rom curve for smooth arcs
    const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    midPoint.y += 1; // Add some height to make it arch
    
    const curve = new THREE.CatmullRomCurve3([
      start,
      new THREE.Vector3().lerpVectors(start, midPoint, 0.25),
      midPoint,
      new THREE.Vector3().lerpVectors(midPoint, end, 0.75),
      end
    ]);
    
    return curve.getPoints(50);
  }, [start, end]);
  
  const lineRef = useRef<THREE.Line>(null);
  
  useFrame(({ clock }) => {
    if (lineRef.current) {
      // Pulse animation for the arc
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = (Math.sin(clock.elapsedTime * 2) * 0.3) + 0.7;
    }
  });
  
  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial 
        color={color} 
        transparent 
        linewidth={1}
        opacity={0.7}
      />
    </line>
  );
}

// Camera flythrough animation
function CameraFlythrough() {
  const { camera } = useThree();
  const [flythroughActive, setFlythroughActive] = useState(true);
  
  useEffect(() => {
    // Set initial camera position
    camera.position.set(10, 5, 10);
    camera.lookAt(0, 0, 0);
    
    // Disable flythrough after 10 seconds
    const timer = setTimeout(() => {
      setFlythroughActive(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [camera]);
  
  useFrame(({ clock }) => {
    if (flythroughActive) {
      const t = Math.min(clock.elapsedTime * 0.1, 1);
      
      // Smoothly move camera in an arc around the scene
      const radius = 10 - t * 5; // Get closer over time
      const angle = Math.PI * 2 * t;
      
      camera.position.x = Math.cos(angle) * radius;
      camera.position.z = Math.sin(angle) * radius;
      camera.position.y = 5 - t * 2;
      
      camera.lookAt(0, 0, 0);
    }
  });
  
  return null;
}

// Main WLP Scene component
export default function WLPScene() {
  return (
    <div className="w-full h-[600px] md:h-[800px] bg-gray-950 rounded-lg overflow-hidden">
      <Canvas shadows>
        <SceneSetup />
        <CameraFlythrough />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={20}
          makeDefault
        />
        
        {/* Render modules */}
        {PLACEHOLDER_MODULES.map((module) => (
          <Module key={module.id} {...module} />
        ))}
        
        {/* Render agents */}
        {PLACEHOLDER_AGENTS.map((agent) => (
          <Agent key={agent.id} {...agent} />
        ))}
        
        {/* Render arcs between connected agents and modules */}
        {PLACEHOLDER_AGENTS.map((agent) => {
          const connectedModule = PLACEHOLDER_MODULES.find(m => m.id === agent.moduleId);
          if (connectedModule) {
            return (
              <Arc 
                key={`${agent.id}-${connectedModule.id}`}
                start={new THREE.Vector3(...agent.position)}
                end={new THREE.Vector3(...connectedModule.position)}
              />
            );
          }
          return null;
        })}
      </Canvas>
    </div>
  );
}