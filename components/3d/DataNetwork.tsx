"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


type Node = {
  id: string;
  label: string;
  position: [number, number, number];
};

const nodes: Node[] = [
  {
    id: "powerbi",
    label: "POWER BI",
    position: [-2.4, 1.4, 0],
  },
  {
    id: "sql",
    label: "SQL",
    position: [-2.8, -0.8, 0.5],
  },
  {
    id: "python",
    label: "PYTHON",
    position: [-1.1, -2, -0.5],
  },
  {
    id: "cybersecurity",
    label: "CYBERSECURITY",
    position: [2.4, 1.5, -0.2],
  },
  {
    id: "ai",
    label: "AI",
    position: [2.9, -0.3, 0.8],
  },
  {
    id: "software",
    label: "SOFTWARE",
    position: [1.2, -1.9, -0.4],
  },
];

const connections = [
  ["powerbi", "sql"],
  ["powerbi", "cybersecurity"],
  ["powerbi", "python"],
  ["sql", "python"],
  ["sql", "software"],
  ["python", "software"],
  ["python", "ai"],
  ["cybersecurity", "ai"],
  ["cybersecurity", "software"],
  ["ai", "software"],
];

function NodePoint({
  position,
}: {
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const pulse =
      1 +
      Math.sin(clock.elapsedTime * 2) *
        0.15;

    const targetScale = hovered
      ? 2
      : pulse;

    ref.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.1
    );
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.07, 16, 16]} />

      <meshBasicMaterial
        color={hovered ? "#ffffff" : "#00e5ff"}
      />
    </mesh>
  );
}

function ConnectionLine({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const points = useMemo(
    () => [new THREE.Vector3(...start), new THREE.Vector3(...end)],
    [start, end]
  );

  const positions = useMemo(
    () => new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
    [points]
  );

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#0088ff" transparent opacity={0.35} />
    </line>
  );
}

function DataPulse({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = (clock.elapsedTime * 0.35) % 1;

    ref.current.position.lerpVectors(
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
      t
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.035, 12, 12]} />

      <meshBasicMaterial
        color="#ffffff"
      />
    </mesh>
  );
}

export default function DataNetwork() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ mouse }, delta) => {
    if (!group.current) return;

    const targetX = mouse.y * 0.12;
    const targetY = mouse.x * 0.18;

    group.current.rotation.x +=
      (targetX - group.current.rotation.x) *
      delta *
      2;

    group.current.rotation.y +=
      (targetY - group.current.rotation.y) *
      delta *
      2;
  });

  return (
    <group ref={group}>
      {nodes.map((node) => (
        <NodePoint
          key={node.id}
          position={node.position}
        />
      ))}

{connections.map(([from, to]) => {
  const start = nodes.find(
    (node) => node.id === from
  )!.position;

  const end = nodes.find(
    (node) => node.id === to
  )!.position;

  return (
    <group key={`${from}-${to}`}>
      <ConnectionLine
        start={start}
        end={end}
      />

      <DataPulse
        start={start}
        end={end}
      />
    </group>
  );
})}
    </group>
  );
}