"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField({
  count = 1800,
  pointerRef,
}: {
  count?: number;
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const points = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const pink = new THREE.Color("#FF00AA");
    const cyan = new THREE.Color("#58CFFF");
    const rand = (n: number) => {
      const x = Math.sin(n * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const rx = rand(i * 3 + 1);
      const ry = rand(i * 3 + 2);
      const rz = rand(i * 3 + 3);
      const rc = rand(i * 3 + 4);
      positions[i3 + 0] = (rx - 0.5) * 14;
      positions[i3 + 1] = (ry - 0.5) * 8;
      positions[i3 + 2] = (rz - 0.5) * 8;

      const c = rc < 0.22 ? cyan : pink;
      colors[i3 + 0] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    const mx = pointerRef.current.x;
    const my = pointerRef.current.y;

    const targetRotY = Math.sin(t * 0.12) * 0.14 + mx * 0.28;
    const targetRotX = Math.sin(t * 0.1) * 0.08 + my * 0.2;

    points.current.rotation.y += (targetRotY - points.current.rotation.y) * 0.06;
    points.current.rotation.x += (targetRotX - points.current.rotation.x) * 0.06;

    points.current.position.x = Math.sin(t * 0.05) * 0.12 + mx * 0.2;
    points.current.position.y = Math.cos(t * 0.05) * 0.1 + my * 0.16;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function LightSweep({
  pointerRef,
}: {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const lightA = useRef<THREE.PointLight>(null!);
  const lightB = useRef<THREE.PointLight>(null!);
  const lightC = useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = pointerRef.current.x;
    const my = pointerRef.current.y;

    if (lightA.current) {
      lightA.current.position.x = Math.sin(t * 0.4) * 6 + mx * 2.5;
      lightA.current.position.z = Math.cos(t * 0.4) * 4;
    }
    if (lightB.current) {
      lightB.current.position.x = Math.cos(t * 0.3) * -5 + mx * 2;
      lightB.current.position.y = Math.sin(t * 0.3) * 3 + my * 2;
    }
    if (lightC.current) {
      lightC.current.position.y = Math.cos(t * 0.25) * 3.5 + my * 1.6;
      lightC.current.position.z = Math.sin(t * 0.25) * -4;
    }
  });

  return (
    <>
      <pointLight ref={lightA} color="#FF00AA" intensity={1.15} distance={20} />
      <pointLight ref={lightB} color="#58CFFF" intensity={0.95} distance={18} />
      <pointLight ref={lightC} color="#D17CFF" intensity={0.75} distance={16} />
    </>
  );
}

export default function HeroCanvas() {
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -((event.clientY / window.innerHeight) * 2 - 1);
      pointerRef.current = { x, y };
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <LightSweep pointerRef={pointerRef} />
        <ParticleField pointerRef={pointerRef} />
      </Canvas>
    </div>
  );
}
