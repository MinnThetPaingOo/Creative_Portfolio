"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const count = 1200;

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const palette = [
      new THREE.Color("#a855f7"),
      new THREE.Color("#3b82f6"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#ec4899"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.04 + 0.01;
    }

    return [positions, colors, sizes];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime;

    ref.current.rotation.y = time * 0.018 + mouse.x * 0.12;
    ref.current.rotation.x = time * 0.008 + mouse.y * 0.06;

    const posArray = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArray[i3 + 1] += Math.sin(time * 0.25 + i * 0.08) * 0.0015;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.025 + mouse.x * 0.18;
    groupRef.current.rotation.x = mouse.y * 0.09;
  });

  const shapes = useMemo(() => {
    const types: Array<"octahedron" | "tetrahedron" | "icosahedron"> = [
      "octahedron",
      "tetrahedron",
      "icosahedron",
    ];
    return Array.from({ length: 9 }, (_, i) => {
      const angle  = (i / 9) * Math.PI * 2;
      const radius = 5 + (i % 3);
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 7,
          Math.sin(angle) * radius - 4,
        ] as [number, number, number],
        type: types[i % 3],
        size: 0.12 + (i % 4) * 0.06,
        color: ["#a855f7", "#3b82f6", "#06b6d4", "#ec4899"][i % 4],
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <mesh key={i} position={s.position}>
          {s.type === "octahedron"  && <octahedronGeometry  args={[s.size, 0]} />}
          {s.type === "tetrahedron" && <tetrahedronGeometry args={[s.size, 0]} />}
          {s.type === "icosahedron" && <icosahedronGeometry args={[s.size, 0]} />}
          <meshBasicMaterial
            color={s.color}
            transparent
            opacity={0.25}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function NebulaGlow() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    meshRef.current.scale.setScalar(s);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <sphereGeometry args={[7, 32, 32]} />
      <meshBasicMaterial
        color="#7c3aed"
        transparent
        opacity={0.025}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ background: "transparent" }}
      >
        <NebulaGlow />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
