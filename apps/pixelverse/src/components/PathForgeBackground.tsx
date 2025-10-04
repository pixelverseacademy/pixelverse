import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Float, Sphere, Box, Line, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Digital Code Flow visualization for educational platform
const DigitalCodeFlow = () => {
  const codeFlowRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (codeFlowRef.current) {
      codeFlowRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      codeFlowRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={codeFlowRef}>
      {/* Binary/Code streams */}
      {Array.from({ length: 15 }, (_, i) => (
        <Float key={`binary-${i}`} speed={0.8 + i * 0.1} rotationIntensity={0} floatIntensity={2.5}>
          <Box args={[0.02, 0.8 + Math.random() * 0.4, 0.02]} position={[
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6 - 3
          ]}>
            <meshStandardMaterial
              color={Math.random() > 0.5 ? '#4a90e2' : '#7b68ee'}
              emissive={Math.random() > 0.5 ? '#4a90e2' : '#7b68ee'}
              emissiveIntensity={0.2}
              transparent
              opacity={0.7}
            />
          </Box>
        </Float>
      ))}

      {/* Data cubes (representing databases/APIs) */}
      {Array.from({ length: 8 }, (_, i) => (
        <Float key={`cube-${i}`} speed={1.5 + i * 0.2} rotationIntensity={1.5} floatIntensity={1}>
          <Box args={[0.4, 0.4, 0.4]} position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 - 2
          ]}>
            <MeshDistortMaterial
              color={['#4a90e2', '#7b68ee', '#5ba0f2', '#89c4e8', '#b8d8f0'][i % 5]}
              attach="material"
              distort={0.05}
              speed={0.5}
              roughness={0.2}
              metalness={0.7}
              emissive={['#4a90e2', '#7b68ee', '#5ba0f2', '#89c4e8', '#b8d8f0'][i % 5]}
              emissiveIntensity={0.1}
            />
          </Box>
        </Float>
      ))}

      {/* Flowing connection lines */}
      {Array.from({ length: 12 }, (_, i) => {
        const startX = (Math.random() - 0.5) * 8;
        const startY = (Math.random() - 0.5) * 6;
        const endX = startX + (Math.random() - 0.5) * 4;
        const endY = startY + (Math.random() - 0.5) * 4;
        const points = [
          new THREE.Vector3(startX, startY, -3),
          new THREE.Vector3(endX, endY, -3)
        ];

        return (
          <Line
            key={`flow-${i}`}
            points={points}
            color="#00aaff"
            lineWidth={1}
            transparent
            opacity={0.4}
          />
        );
      })}

      {/* Central server/core */}
      <Float speed={1} rotationIntensity={1} floatIntensity={0.8}>
        <Box args={[1.2, 1.2, 1.2]} position={[0, 0, -4]}>
          <MeshDistortMaterial
            color="#4a90e2"
            attach="material"
            distort={0.02}
            speed={0.5}
            roughness={0.1}
            metalness={0.9}
            emissive="#4a90e2"
            emissiveIntensity={0.15}
          />
        </Box>
      </Float>

      {/* API endpoints (small spheres) */}
      {Array.from({ length: 25 }, (_, i) => (
        <Float key={`api-${i}`} speed={0.5 + i * 0.05} rotationIntensity={0} floatIntensity={2}>
          <Sphere args={[0.03, 8, 8]} position={[
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8 - 4
          ]}>
            <meshBasicMaterial
              color={['#4a90e2', '#7b68ee', '#5ba0f2', '#89c4e8', '#b8d8f0'][i % 5]}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

// Particle system component
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      colors[i * 3] = Math.random() * 0.5 + 0.5; // R
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5; // G
      colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const PathForgeBackground = ({ page }: { page?: string }) => {
  return (
    <>
      {/* Light background base */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        background: '#F4F4F4',
        pointerEvents: 'none'
      }} />
      
      {/* Three.js overlay with reduced opacity */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -9,
        opacity: 0.15,
        pointerEvents: 'none'
      }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting for better visibility */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a90e2" />

          {/* Environment for reflections */}
          <Environment preset="night" />

          {/* Subtle star field for depth */}
          <Stars
            radius={300}
            depth={50}
            count={500}
            factor={4}
            saturation={0}
            fade={true}
            speed={0.2}
          />

          {/* Digital code flow visualization */}
          <DigitalCodeFlow />

          {/* Particle field */}
          <ParticleField />

          {/* Colorful data particles */}
          <Sparkles
            count={30}
            scale={[10, 10, 10]}
            size={2}
            speed={0.3}
            opacity={0.8}
            color="#ffffff"
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.1}
          />
        </Suspense>
      </Canvas>
      </div>
    </>
  );
};

// Export theme colors for use in pages
export const getThemeColors = (pageName?: string) => {
  switch (pageName) {
    case 'curriculum':
      return {
        background: 'linear-gradient(135deg, #e8f5e8 0%, #f1f8e9 50%, #e8f5e8 100%)',
        text: '#2e7d32',
        secondaryText: '#388e3c'
      };
    case 'locations':
      return {
        background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 50%, #ffb74d 100%)',
        text: '#e65100',
        secondaryText: '#f57c00'
      };
    case 'partnerships':
      return {
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 50%, #e91e63 100%)',
        text: '#c2185b',
        secondaryText: '#e91e63'
      };
    case 'contact':
      return {
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #2196f3 100%)',
        text: '#1565c0',
        secondaryText: '#1976d2'
      };
    case 'why-us':
      return {
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e0f2fe 50%, #b3e5fc 100%)',
        text: '#0277bd',
        secondaryText: '#0288d1'
      };
    case 'coaches':
      return {
        background: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 50%, #ba68c8 100%)',
        text: '#7b1fa2',
        secondaryText: '#8e24aa'
      };
    case 'careers':
      return {
        background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 50%, #ffe082 100%)',
        text: '#f57f17',
        secondaryText: '#ff8f00'
      };
    default:
      return {
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        text: '#ffffff',
        secondaryText: '#b0b0b0'
      };
  }
};

export default PathForgeBackground;