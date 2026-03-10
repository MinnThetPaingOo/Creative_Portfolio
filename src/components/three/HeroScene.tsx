"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function CodeCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current || !edgesRef.current) return;
    const time = state.clock.elapsedTime;

    meshRef.current.rotation.x = time * 0.3 + mouse.y * 0.3;
    meshRef.current.rotation.y = time * 0.4 + mouse.x * 0.3;
    meshRef.current.rotation.z = time * 0.1;

    edgesRef.current.rotation.copy(meshRef.current.rotation);
  });

  const edgesGeometry = useMemo(() => {
    const box = new THREE.BoxGeometry(2, 2, 2);
    return new THREE.EdgesGeometry(box);
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Inner glowing cube */}
        <mesh ref={meshRef}>
          <boxGeometry args={[1.9, 1.9, 1.9]} />
          <MeshDistortMaterial
            color="#a855f7"
            transparent
            opacity={0.08}
            distort={0.2}
            speed={2}
          />
        </mesh>

        {/* Wireframe edges */}
        <lineSegments ref={edgesRef} geometry={edgesGeometry}>
          <lineBasicMaterial
            color="#a855f7"
            transparent
            opacity={0.6}
            linewidth={1}
          />
        </lineSegments>

        {/* Corner glows */}
        {[
          [1, 1, 1],
          [1, 1, -1],
          [1, -1, 1],
          [1, -1, -1],
          [-1, 1, 1],
          [-1, 1, -1],
          [-1, -1, 1],
          [-1, -1, -1],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
              color={["#a855f7", "#3b82f6", "#06b6d4", "#ec4899"][i % 4]}
            />
          </mesh>
        ))}

        {/* Orbital ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.01, 8, 64]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </mesh>

        <mesh rotation={[0, Math.PI / 2, Math.PI / 4]}>
          <torusGeometry args={[2.5, 0.01, 8, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitingDots() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 2.8;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * r, Math.sin(angle) * r, 0]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial
              color={["#a855f7", "#3b82f6", "#06b6d4"][i % 3]}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#a855f7" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06b6d4" />
        <CodeCube />
        <OrbitingDots />
      </Canvas>
    </div>
  );
}
