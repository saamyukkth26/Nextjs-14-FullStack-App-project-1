"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function ParticleField() {
  const meshRef = useRef<Group>(null);

  const { positions, connections } = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const connections: [number, number][] = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 3.5) connections.push([i, j]);
      }
    }

    return { positions, connections };
  }, []);

  const linePositions = useMemo(() => {
    const pos = new Float32Array(connections.length * 6);
    connections.forEach(([i, j], idx) => {
      pos[idx * 6] = positions[i * 3];
      pos[idx * 6 + 1] = positions[i * 3 + 1];
      pos[idx * 6 + 2] = positions[i * 3 + 2];
      pos[idx * 6 + 3] = positions[j * 3];
      pos[idx * 6 + 4] = positions[j * 3 + 1];
      pos[idx * 6 + 5] = positions[j * 3 + 2];
    });
    return pos;
  }, [connections, positions]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <group ref={meshRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#2997ff"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0071e3" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
