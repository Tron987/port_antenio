"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Core() {
  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
   const group = useRef<THREE.Group>(null);

useFrame(({ mouse }, delta) => {
  if (!group.current) return;

  const targetX = mouse.y * 0.25;
  const targetY = mouse.x * 0.35;

  group.current.rotation.x +=
    (targetX - group.current.rotation.x) * delta * 2;

  group.current.rotation.y +=
    (targetY - group.current.rotation.y) * delta * 2;

  if (core.current) {
    core.current.rotation.x += delta * 0.2;
    core.current.rotation.y += delta * 0.3;
  }

  if (ring1.current) {
    ring1.current.rotation.x += delta * 0.25;
    ring1.current.rotation.y += delta * 0.15;
  }

  if (ring2.current) {
    ring2.current.rotation.x -= delta * 0.15;
    ring2.current.rotation.z += delta * 0.2;
  }
});

  return (
     <group ref={group}>
      {/* Core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.75, 2]} />
        <meshStandardMaterial
          color="#00a8ff"
          emissive="#0066ff"
          emissiveIntensity={2}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner energy */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Ring 1 */}
      <mesh ref={ring1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.05, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00a8ff" />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.3, 0.008, 16, 100]} />
        <meshBasicMaterial color="#00e5ff" />
      </mesh>
    </group>
  );
}