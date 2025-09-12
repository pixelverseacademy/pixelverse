import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Float, Octahedron, Icosahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = ({ count = 100, colors }: { count?: number, colors: string[] }) => {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const velocities = useMemo(() => new Float32Array(count * 3), [count]);
  const colorsArray = useMemo(() => new Float32Array(count * 3), [count]);

  // Initialize particles
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random positions in a sphere
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Random colors
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      colorsArray[i3] = color.r;
      colorsArray[i3 + 1] = color.g;
      colorsArray[i3 + 2] = color.b;
    }
  }, [count, positions, velocities, colorsArray, colors]);

  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry.attributes.position) {
      const time = state.clock.elapsedTime;
      const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Update positions with velocities
        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];

        // Add some wave motion
        posArray[i3 + 1] += Math.sin(time + i * 0.1) * 0.01;

        // Boundary check - wrap around
        if (Math.abs(posArray[i3]) > 20) velocities[i3] *= -1;
        if (Math.abs(posArray[i3 + 1]) > 20) velocities[i3 + 1] *= -1;
        if (Math.abs(posArray[i3 + 2]) > 20) velocities[i3 + 2] *= -1;
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true;

      // Rotate the entire system
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colorsArray, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const FloatingShapes = ({ colors }: { colors: string[] }) => {
  const shapes = useMemo(() => [
    { type: 'box', position: [-6, 4, 0] as [number, number, number], scale: 1.5, color: colors[0] },
    { type: 'sphere', position: [6, -3, 2] as [number, number, number], scale: 1.2, color: colors[1] },
    { type: 'torus', position: [0, 6, -1] as [number, number, number], scale: 2, color: colors[2] },
    { type: 'octahedron', position: [-4, -5, 1] as [number, number, number], scale: 1.8, color: colors[3] },
    { type: 'icosahedron', position: [4, 2, -2] as [number, number, number], scale: 1.3, color: colors[4] },
  ], [colors]);

  return (
    <>
      {shapes.map((shape, index) => (
        <Float key={index} speed={0.8} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={shape.position}>
            {shape.type === 'box' && <boxGeometry args={[shape.scale, shape.scale, shape.scale]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[shape.scale * 0.5, 16, 16]} />}
            {shape.type === 'torus' && <torusGeometry args={[shape.scale * 0.5, shape.scale * 0.2, 16, 100]} />}
            {shape.type === 'octahedron' && <octahedronGeometry args={[shape.scale * 0.5]} />}
            {shape.type === 'icosahedron' && <icosahedronGeometry args={[shape.scale * 0.5]} />}
            <meshStandardMaterial
              color={shape.color}
              transparent
              opacity={0.6}
              emissive={shape.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const HomePageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Robotics theme - gears, circuits, robot parts
  const geometries = useMemo(() => [
    // Robot head (sphere) - walking robot
    { id: 1, position: [-4, 3, 2] as [number, number, number], color: '#FF6B35', shape: 'sphere', scale: 1.5, animation: 'robot' },
    // Robot arms (cylinders represented as boxes) - moving
    { id: 2, position: [3, -2, 3] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.2, animation: 'robot' },
    { id: 3, position: [-3, -2, 3] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.2, animation: 'robot' },
    // Gears (toruses) - rotating gears
    { id: 4, position: [-2, -3, 1] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 2.0, animation: 'gear' },
    { id: 5, position: [2, -3, 1] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 1.8, animation: 'gear' },
    // Circuit patterns (octahedrons) - falling circuits
    { id: 6, position: [4, 2, 4] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 1.5, animation: 'fall' },
    { id: 7, position: [-4, 2, 4] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 1.3, animation: 'fall' },
    // Robot body (larger box) - walking robot body
    { id: 8, position: [0, 4, 2] as [number, number, number], color: '#E65100', shape: 'box', scale: 2.5, animation: 'robot' },
    // Additional robotic elements - floating
    { id: 9, position: [-3, 1, 5] as [number, number, number], color: '#FF9800', shape: 'icosahedron', scale: 1.8, animation: 'float' },
    { id: 10, position: [3, -4, 2] as [number, number, number], color: '#FF6B35', shape: 'dodecahedron', scale: 1.2, animation: 'float' },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#FF6B35" />
      <pointLight position={[-10, -10, -10]} color="#FFA726" />
      <pointLight position={[0, 0, 10]} color="#FF5722" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const WhyUsPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Award/Robotics theme - trophies, medals, robot achievements
  const geometries = useMemo(() => [
    // Trophy base (larger box)
    { id: 1, position: [-6, 4, 0] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.3 },
    // Trophy stem (cylinder represented as box)
    { id: 2, position: [-6, 6, 0] as [number, number, number], color: '#FFA726', shape: 'box', scale: 0.3 },
    // Trophy cup (sphere)
    { id: 3, position: [-6, 8, 0] as [number, number, number], color: '#FFD54F', shape: 'sphere', scale: 0.8 },
    // Medal (torus)
    { id: 4, position: [5, -3, -2] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 1.1 },
    // Robot achievement badge (octahedron)
    { id: 5, position: [-7, -5, 1] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 0.9 },
    // Star award (icosahedron)
    { id: 6, position: [3, 6, -1] as [number, number, number], color: '#FFD54F', shape: 'icosahedron', scale: 1.2 },
    // Certificate scroll (flat box)
    { id: 7, position: [8, -2, 2] as [number, number, number], color: '#FF6B35', shape: 'box', scale: 0.8 },
    // Robot gear achievement (dodecahedron)
    { id: 8, position: [0, 2, -3] as [number, number, number], color: '#E65100', shape: 'dodecahedron', scale: 1.0 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[7, 7, 7]} color="#FFD54F" />
      <pointLight position={[-7, -7, -7]} color="#FFA726" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const CurriculumPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Educational/Robotics theme - books, graduation caps, robot learning
  const geometries = useMemo(() => [
    // Open book (two flat boxes)
    { id: 1, position: [-5, 3, 1] as [number, number, number], color: '#FFA726', shape: 'box', scale: 1.4 },
    { id: 2, position: [-5, 3, 0.5] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.2 },
    // Graduation cap (box with torus)
    { id: 3, position: [4, -5, -1] as [number, number, number], color: '#FF5722', shape: 'box', scale: 1 },
    { id: 4, position: [4, -3, -1] as [number, number, number], color: '#FFD54F', shape: 'torus', scale: 0.8 },
    // Lightbulb (sphere with stem)
    { id: 5, position: [-8, -2, 0] as [number, number, number], color: '#FFD54F', shape: 'sphere', scale: 1.1 },
    { id: 6, position: [-8, -4, 0] as [number, number, number], color: '#E65100', shape: 'box', scale: 0.3 },
    // Robot teacher (octahedron head, box body)
    { id: 7, position: [6, 4, -2] as [number, number, number], color: '#FF6B35', shape: 'octahedron', scale: 0.9 },
    { id: 8, position: [6, 2, -2] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.0 },
    // Knowledge tree (icosahedron)
    { id: 9, position: [0, 7, 1] as [number, number, number], color: '#4CAF50', shape: 'icosahedron', scale: 1.3 },
    // Circuit board learning (dodecahedron)
    { id: 10, position: [-2, -6, 2] as [number, number, number], color: '#2196F3', shape: 'dodecahedron', scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} color="#FFD54F" />
      <pointLight position={[-6, -6, -6]} color="#4CAF50" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const ContactPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Communication/Robotics theme - phones, envelopes, speech bubbles, robot messengers
  const geometries = useMemo(() => [
    // Phone (rectangular box)
    { id: 1, position: [-7, 2, -1] as [number, number, number], color: '#FF5722', shape: 'box', scale: 1.1 },
    // Envelope (flat box with triangle)
    { id: 2, position: [5, -6, 0] as [number, number, number], color: '#E65100', shape: 'box', scale: 1.4 },
    { id: 3, position: [5, -4, 0] as [number, number, number], color: '#FF8A65', shape: 'octahedron', scale: 0.6 },
    // Speech bubble (sphere with tail)
    { id: 4, position: [-3, -4, 2] as [number, number, number], color: '#FF6B35', shape: 'sphere', scale: 0.8 },
    { id: 5, position: [-3, -6, 2] as [number, number, number], color: '#FFA726', shape: 'box', scale: 0.4 },
    // Robot messenger (octahedron head, box body)
    { id: 6, position: [8, 5, -1] as [number, number, number], color: '#FF8A65', shape: 'octahedron', scale: 1.2 },
    { id: 7, position: [8, 3, -1] as [number, number, number], color: '#FF5722', shape: 'box', scale: 0.9 },
    // Antenna/signal waves (icosahedrons)
    { id: 8, position: [1, 8, 1] as [number, number, number], color: '#2196F3', shape: 'icosahedron', scale: 1 },
    { id: 9, position: [1, 6, 1] as [number, number, number], color: '#2196F3', shape: 'icosahedron', scale: 0.7 },
    // Message robot (dodecahedron)
    { id: 10, position: [-5, 7, -2] as [number, number, number], color: '#4CAF50', shape: 'dodecahedron', scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[9, 9, 9]} color="#2196F3" />
      <pointLight position={[-9, -9, -9]} color="#4CAF50" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const CoachesPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Teaching/Robotics theme - chalkboards, books, mortarboards, robot instructors
  const geometries = useMemo(() => [
    // Chalkboard (large flat box)
    { id: 1, position: [-6, 4, 0] as [number, number, number], color: '#2E2E2E', shape: 'box', scale: 1.3 },
    // Mortarboard (square with torus)
    { id: 2, position: [4, -3, -2] as [number, number, number], color: '#FF5722', shape: 'box', scale: 1.1 },
    { id: 3, position: [4, -1, -2] as [number, number, number], color: '#FFD54F', shape: 'torus', scale: 0.8 },
    // Robot teacher (octahedron head, box body)
    { id: 4, position: [-8, -5, 1] as [number, number, number], color: '#FF8A65', shape: 'octahedron', scale: 0.9 },
    { id: 5, position: [-8, -7, 1] as [number, number, number], color: '#FFA726', shape: 'box', scale: 1.0 },
    // Pointer stick (long thin box)
    { id: 6, position: [7, 6, -1] as [number, number, number], color: '#8D6E63', shape: 'box', scale: 1.2 },
    // Apple (sphere)
    { id: 7, position: [2, -7, 2] as [number, number, number], color: '#FF5722', shape: 'sphere', scale: 0.8 },
    // Graduation scroll (flat box)
    { id: 8, position: [-3, 7, -1] as [number, number, number], color: '#4CAF50', shape: 'box', scale: 0.9 },
    // Knowledge lightbulb (icosahedron)
    { id: 9, position: [6, 2, 1] as [number, number, number], color: '#FFD54F', shape: 'icosahedron', scale: 1.0 },
    // Teaching robot arm (dodecahedron)
    { id: 10, position: [0, -2, -2] as [number, number, number], color: '#2196F3', shape: 'dodecahedron', scale: 0.7 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[7, 7, 7]} color="#FFD54F" />
      <pointLight position={[-7, -7, -7]} color="#4CAF50" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const LocationsPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Location/Robotics theme - maps, pins, globes, robot explorers
  const geometries = useMemo(() => [
    // Globe (sphere)
    { id: 1, position: [-5, 3, 1] as [number, number, number], color: '#2196F3', shape: 'sphere', scale: 1.4 },
    // Map pin (box with sphere on top)
    { id: 2, position: [6, -4, -1] as [number, number, number], color: '#FF5722', shape: 'box', scale: 1 },
    { id: 3, position: [6, -2, -1] as [number, number, number], color: '#E65100', shape: 'sphere', scale: 0.6 },
    // Compass (torus with box needle)
    { id: 4, position: [-7, -2, 0] as [number, number, number], color: '#FF8A65', shape: 'torus', scale: 1.1 },
    { id: 5, position: [-7, -2, 0.5] as [number, number, number], color: '#FF5722', shape: 'box', scale: 0.3 },
    // Robot explorer (octahedron head, box body)
    { id: 6, position: [4, 5, -2] as [number, number, number], color: '#FFA726', shape: 'octahedron', scale: 0.9 },
    { id: 7, position: [4, 3, -2] as [number, number, number], color: '#FF6B35', shape: 'box', scale: 0.8 },
    // Location marker (icosahedron)
    { id: 8, position: [1, 7, 1] as [number, number, number], color: '#4CAF50', shape: 'icosahedron', scale: 1.3 },
    // GPS satellite (dodecahedron)
    { id: 9, position: [-3, 6, -1] as [number, number, number], color: '#9C27B0', shape: 'dodecahedron', scale: 0.8 },
    // Road/path (long thin box)
    { id: 10, position: [0, -6, 0] as [number, number, number], color: '#8D6E63', shape: 'box', scale: 2.0 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[8, 8, 8]} color="#2196F3" />
      <pointLight position={[-8, -8, -8]} color="#4CAF50" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const PartnershipsPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Connection/Partnership/Robotics theme - handshakes, links, networks, robot collaborations
  const geometries = useMemo(() => [
    // Handshake (two connected boxes)
    { id: 1, position: [-7, 2, -1] as [number, number, number], color: '#FFA726', shape: 'box', scale: 1.1 },
    { id: 2, position: [-5, 2, -1] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.1 },
    // Link/chain (connected toruses)
    { id: 3, position: [5, -6, 0] as [number, number, number], color: '#FF5722', shape: 'torus', scale: 1.4 },
    { id: 4, position: [7, -6, 0] as [number, number, number], color: '#E65100', shape: 'torus', scale: 1.4 },
    // Network hub (icosahedron)
    { id: 5, position: [-4, -4, 2] as [number, number, number], color: '#2196F3', shape: 'icosahedron', scale: 0.8 },
    // Robot collaboration (two robots)
    { id: 6, position: [8, 5, -1] as [number, number, number], color: '#FF6B35', shape: 'octahedron', scale: 1.2 },
    { id: 7, position: [8, 3, -1] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 0.9 },
    { id: 8, position: [10, 5, -1] as [number, number, number], color: '#4CAF50', shape: 'octahedron', scale: 1.0 },
    { id: 9, position: [10, 3, -1] as [number, number, number], color: '#4CAF50', shape: 'box', scale: 0.8 },
    // Partnership bridge (long connecting box)
    { id: 10, position: [0, 8, 1] as [number, number, number], color: '#9C27B0', shape: 'box', scale: 1 },
    // Connection node (dodecahedron)
    { id: 11, position: [-2, 6, -2] as [number, number, number], color: '#FF9800', shape: 'dodecahedron', scale: 0.7 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[9, 9, 9]} color="#2196F3" />
      <pointLight position={[-9, -9, -9]} color="#9C27B0" />
      {!reduceMotion && (
        <>
          <ParticleSystem count={150} colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
          <FloatingShapes colors={['#FF6B35', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800']} />
        </>
      )}
    </>
  );
};

const ThreeBackground = ({ page }: { page?: string }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const renderScene = () => {
    switch (page) {
      case 'home':
        return <HomePageScene reduceMotion={reduceMotion} />;
      case 'why-us':
        return <WhyUsPageScene reduceMotion={reduceMotion} />;
      case 'curriculum':
        return <CurriculumPageScene reduceMotion={reduceMotion} />;
      case 'contact':
        return <ContactPageScene reduceMotion={reduceMotion} />;
      case 'coaches':
        return <CoachesPageScene reduceMotion={reduceMotion} />;
      case 'locations':
        return <LocationsPageScene reduceMotion={reduceMotion} />;
      case 'partnerships':
        return <PartnershipsPageScene reduceMotion={reduceMotion} />;
      default:
        return <HomePageScene reduceMotion={reduceMotion} />;
    }
  };

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#FF6B35" />
          </mesh>
        }>
          {renderScene()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;