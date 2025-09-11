import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Float, Octahedron, Icosahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, color, shape, scale = 1 }: { position: [number, number, number], color: string, shape: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  const geometry = shape === 'sphere' ? <sphereGeometry args={[0.5 * scale, 16, 16]} /> :
                  shape === 'box' ? <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} /> :
                  shape === 'torus' ? <torusGeometry args={[0.5 * scale, 0.2 * scale, 16, 100]} /> :
                  shape === 'octahedron' ? <octahedronGeometry args={[0.5 * scale]} /> :
                  shape === 'icosahedron' ? <icosahedronGeometry args={[0.5 * scale]} /> :
                  <dodecahedronGeometry args={[0.5 * scale]} />;

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const HomePageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  // Robotics theme - gears, circuits, robot parts
  const geometries = useMemo(() => [
    // Robot head (sphere) - moved closer
    { id: 1, position: [-4, 3, 2] as [number, number, number], color: '#FF6B35', shape: 'sphere', scale: 1.5 },
    // Robot arms (cylinders represented as boxes) - moved closer
    { id: 2, position: [3, -2, 3] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.2 },
    { id: 3, position: [-3, -2, 3] as [number, number, number], color: '#FF8A65', shape: 'box', scale: 1.2 },
    // Gears (toruses) - moved closer
    { id: 4, position: [-2, -3, 1] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 2.0 },
    { id: 5, position: [2, -3, 1] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 1.8 },
    // Circuit patterns (octahedrons) - moved closer
    { id: 6, position: [4, 2, 4] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 1.5 },
    { id: 7, position: [-4, 2, 4] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 1.3 },
    // Robot body (larger box) - moved closer
    { id: 8, position: [0, 4, 2] as [number, number, number], color: '#E65100', shape: 'box', scale: 2.5 },
    // Additional robotic elements - moved closer
    { id: 9, position: [-3, 1, 5] as [number, number, number], color: '#FF9800', shape: 'icosahedron', scale: 1.8 },
    { id: 10, position: [3, -4, 2] as [number, number, number], color: '#FF6B35', shape: 'dodecahedron', scale: 1.2 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#FF6B35" />
      <pointLight position={[-10, -10, -10]} color="#FFA726" />
      <pointLight position={[0, 0, 10]} color="#FF5722" />
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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
      {!reduceMotion && geometries.map((geo) => (
        <FloatingGeometry
          key={geo.id}
          position={geo.position}
          color={geo.color}
          shape={geo.shape}
          scale={geo.scale}
        />
      ))}
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