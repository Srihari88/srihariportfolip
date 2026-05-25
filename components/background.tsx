"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

function ParticleField() {
  const ref = useRef<ThreePoints>(null);
  const positions = useMemo(() => {
    const points = new Float32Array(1600 * 3);
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 11;
      points[i + 1] = (Math.random() - 0.5) * 7;
      points[i + 2] = (Math.random() - 0.5) * 5;
    }
    return points;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.035;
    ref.current.rotation.x += delta * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#31f8ff" size={0.032} sizeAttenuation depthWrite={false} opacity={0.82} />
    </Points>
  );
}

export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-mask absolute inset-0 bg-[linear-gradient(rgba(49,248,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(49,248,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,6,7,0.9)_72%)]" />
      <Canvas camera={{ position: [0, 0, 3.8], fov: 62 }} dpr={[1, 1.6]} gl={{ preserveDrawingBuffer: true, alpha: true }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
