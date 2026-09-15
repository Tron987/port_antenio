"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Core() {
  const group = useRef<THREE.Group>(null);

  const core = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }, delta) => {
    if (!group.current) return;

    /*
     * Base rotation
     */

    if (core.current) {
      core.current.rotation.x += delta * 0.15;
      core.current.rotation.y += delta * 0.25;
    }

    /*
     * Inner energy
     */

    if (inner.current) {
      inner.current.rotation.y -= delta * 0.35;
    }

    /*
     * Orbital rings
     */

    if (ring1.current) {
      ring1.current.rotation.x += delta * 0.25;
      ring1.current.rotation.z += delta * 0.15;
    }

    if (ring2.current) {
      ring2.current.rotation.y += delta * 0.2;
      ring2.current.rotation.z -= delta * 0.1;
    }

    if (ring3.current) {
      ring3.current.rotation.x -= delta * 0.18;
      ring3.current.rotation.y += delta * 0.12;
    }

    /*
     * Mouse response
     */

    const targetX = mouse.y * 0.2;
    const targetY = mouse.x * 0.3;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.03
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.03
    );
  });

  return (
    <group ref={group}>

      {/* Main geometric core */}

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

      <mesh ref={inner}>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Ring 1 */}

      <mesh
        ref={ring1}
        rotation={[0.8, 0.2, 0]}
      >
        <torusGeometry
          args={[1.15, 0.012, 16, 100]}
        />

        <meshBasicMaterial
          color="#00a8ff"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ring 2 */}

      <mesh
        ref={ring2}
        rotation={[1.4, 0.4, 0.5]}
      >
        <torusGeometry
          args={[1.4, 0.008, 16, 100]}
        />

        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Ring 3 */}

      <mesh
        ref={ring3}
        rotation={[0.3, 1.2, 0.8]}
      >
        <torusGeometry
          args={[1.65, 0.006, 16, 100]}
        />

        <meshBasicMaterial
          color="#0088ff"
          transparent
          opacity={0.35}
        />
      </mesh>

    </group>
  );
}