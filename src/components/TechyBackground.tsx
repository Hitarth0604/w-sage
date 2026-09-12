import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleCloud = () => {
  const pointsRef = useRef<THREE.Points>(null!);

  const particlesCount = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 12; // Spread across a large area
    }
    return pos;
  }, [particlesCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D7F000"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

export const TechyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ mixBlendMode: 'screen' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
};
