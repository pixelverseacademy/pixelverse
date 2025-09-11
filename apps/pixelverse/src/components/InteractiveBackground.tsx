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
  const geometries = useMemo(() => [
    { id: 1, position: [-8, 5, -2] as [number, number, number], color: '#FF6B35', shape: 'sphere', scale: 1.2 },
    { id: 2, position: [6, -4, 1] as [number, number, number], color: '#FF8A65', shape: 'octahedron', scale: 0.8 },
    { id: 3, position: [-4, -6, -3] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 1.5 },
    { id: 4, position: [7, 3, 2] as [number, number, number], color: '#FF5722', shape: 'icosahedron', scale: 1 },
    { id: 5, position: [0, 8, -1] as [number, number, number], color: '#E65100', shape: 'dodecahedron', scale: 0.9 },
    { id: 6, position: [-6, 2, 3] as [number, number, number], color: '#FF9800', shape: 'box', scale: 1.1 },
    { id: 7, position: [4, -8, -2] as [number, number, number], color: '#FF6B35', shape: 'torus', scale: 0.7 },
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
  const geometries = useMemo(() => [
    { id: 1, position: [-6, 4, 0] as [number, number, number], color: '#FF8A65', shape: 'torus', scale: 1.3 },
    { id: 2, position: [5, -3, -2] as [number, number, number], color: '#FFA726', shape: 'octahedron', scale: 1.1 },
    { id: 3, position: [-7, -5, 1] as [number, number, number], color: '#FF5722', shape: 'icosahedron', scale: 0.9 },
    { id: 4, position: [3, 6, -1] as [number, number, number], color: '#E65100', shape: 'dodecahedron', scale: 1.2 },
    { id: 5, position: [8, -2, 2] as [number, number, number], color: '#FF6B35', shape: 'sphere', scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 8]} color="#FFA726" />
      <pointLight position={[-8, -8, -8]} color="#FF5722" />
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
  const geometries = useMemo(() => [
    { id: 1, position: [-5, 3, 1] as [number, number, number], color: '#FFA726', shape: 'box', scale: 1.4 },
    { id: 2, position: [4, -5, -1] as [number, number, number], color: '#FF5722', shape: 'octahedron', scale: 1 },
    { id: 3, position: [-8, -2, 0] as [number, number, number], color: '#E65100', shape: 'torus', scale: 1.1 },
    { id: 4, position: [6, 4, -2] as [number, number, number], color: '#FF6B35', shape: 'icosahedron', scale: 0.9 },
    { id: 5, position: [0, 7, 1] as [number, number, number], color: '#FF8A65', shape: 'dodecahedron', scale: 1.3 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 6]} color="#FF5722" />
      <pointLight position={[-6, -6, -6]} color="#E65100" />
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
  const geometries = useMemo(() => [
    { id: 1, position: [-7, 2, -1] as [number, number, number], color: '#FF5722', shape: 'sphere', scale: 1.1 },
    { id: 2, position: [5, -6, 0] as [number, number, number], color: '#E65100', shape: 'torus', scale: 1.4 },
    { id: 3, position: [-3, -4, 2] as [number, number, number], color: '#FF6B35', shape: 'octahedron', scale: 0.8 },
    { id: 4, position: [8, 5, -1] as [number, number, number], color: '#FF8A65', shape: 'icosahedron', scale: 1.2 },
    { id: 5, position: [1, 8, 1] as [number, number, number], color: '#FFA726', shape: 'dodecahedron', scale: 1 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[9, 9, 9]} color="#E65100" />
      <pointLight position={[-9, -9, -9]} color="#FF6B35" />
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
  const geometries = useMemo(() => [
    { id: 1, position: [-6, 4, 0] as [number, number, number], color: '#E65100', shape: 'icosahedron', scale: 1.3 },
    { id: 2, position: [4, -3, -2] as [number, number, number], color: '#FF6B35', shape: 'dodecahedron', scale: 1.1 },
    { id: 3, position: [-8, -5, 1] as [number, number, number], color: '#FF8A65', shape: 'octahedron', scale: 0.9 },
    { id: 4, position: [7, 6, -1] as [number, number, number], color: '#FFA726', shape: 'torus', scale: 1.2 },
    { id: 5, position: [2, -7, 2] as [number, number, number], color: '#FF5722', shape: 'sphere', scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[7, 7, 7]} color="#FF8A65" />
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

const LocationsPageScene = ({ reduceMotion }: { reduceMotion: boolean }) => {
  const geometries = useMemo(() => [
    { id: 1, position: [-5, 3, 1] as [number, number, number], color: '#FF8A65', shape: 'dodecahedron', scale: 1.4 },
    { id: 2, position: [6, -4, -1] as [number, number, number], color: '#FFA726', shape: 'octahedron', scale: 1 },
    { id: 3, position: [-7, -2, 0] as [number, number, number], color: '#FF5722', shape: 'icosahedron', scale: 1.1 },
    { id: 4, position: [4, 5, -2] as [number, number, number], color: '#E65100', shape: 'torus', scale: 0.9 },
    { id: 5, position: [1, 7, 1] as [number, number, number], color: '#FF6B35', shape: 'box', scale: 1.3 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[8, 8, 8]} color="#FF5722" />
      <pointLight position={[-8, -8, -8]} color="#E65100" />
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
  const geometries = useMemo(() => [
    { id: 1, position: [-7, 2, -1] as [number, number, number], color: '#FFA726', shape: 'octahedron', scale: 1.1 },
    { id: 2, position: [5, -6, 0] as [number, number, number], color: '#FF5722', shape: 'icosahedron', scale: 1.4 },
    { id: 3, position: [-4, -4, 2] as [number, number, number], color: '#E65100', shape: 'dodecahedron', scale: 0.8 },
    { id: 4, position: [8, 5, -1] as [number, number, number], color: '#FF6B35', shape: 'torus', scale: 1.2 },
    { id: 5, position: [0, 8, 1] as [number, number, number], color: '#FF8A65', shape: 'sphere', scale: 1 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[9, 9, 9]} color="#FF5722" />
      <pointLight position={[-9, -9, -9]} color="#E65100" />
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
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          {renderScene()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;