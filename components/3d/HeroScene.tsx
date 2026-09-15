"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Core from "./Core";
import DataNetwork from "./DataNetwork";
import { useScroll } from "framer-motion";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particles = new Float32Array(3000);

  for (let i = 0; i < particles.length; i += 3) {
    const radius = 3 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    particles[i] =
      radius * Math.sin(phi) * Math.cos(theta);

    particles[i + 1] =
      radius * Math.sin(phi) * Math.sin(theta);

    particles[i + 2] =
      radius * Math.cos(phi);
  }

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#00a8ff"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function ParticleWorld() {
  const group = useRef<THREE.Group>(null);

  const { scrollYProgress } = useScroll();

  useFrame(({ mouse, camera }, delta) => {
    if (!group.current) return;

    /*
     * ==============================
     * MOUSE INTERACTION
     * ==============================
     */

    const mouseTargetX = mouse.y * 0.8;
    const mouseTargetY = mouse.x * 1.2;

    group.current.rotation.x +=
      (mouseTargetX - group.current.rotation.x) *
      delta *
      2;

    group.current.rotation.y +=
      (mouseTargetY - group.current.rotation.y) *
      delta *
      2;


    /*
     * ==============================
     * SCROLL
     * ==============================
     */

    const scroll = scrollYProgress.get();

    /*
     * Camera movement
     */

    const targetCameraX =
      Math.sin(scroll * Math.PI) * 0.7;

    const targetCameraY =
      scroll * 0.6;

    const targetCameraZ =
      5 - scroll * 1.2;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      targetCameraX,
      0.05
    );

    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetCameraY,
      0.05
    );

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetCameraZ,
      0.05
    );

    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <ParticleField />
      <Core />
      <DataNetwork />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 60,
      }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ambientLight intensity={0.5} />

      <pointLight
        position={[0, 0, 2]}
        intensity={10}
        distance={8}
      />

      <pointLight
        position={[-3, 2, -2]}
        intensity={5}
        distance={6}
      />

      <ParticleWorld />
    </Canvas>
  );
}