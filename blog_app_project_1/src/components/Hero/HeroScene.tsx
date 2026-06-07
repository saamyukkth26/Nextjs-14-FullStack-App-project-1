"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
  { ssr: false }
);

const ParticleFieldLazy = dynamic(
  () => import("./ParticleField").then((mod) => ({ default: mod.ParticleField })),
  { ssr: false }
);

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleFieldLazy />
        </Suspense>
      </Canvas>
    </div>
  );
}
