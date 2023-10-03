"use client";
import React from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Earth() {
  const earth = useLoader(GLTFLoader, "../../planet/scene.gltf");
  return <primitive object={earth.scene} scale={1.4} position-y={0} />;
}

const EarthModel = () => {
  return (
    <Canvas
      shadows
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
      className="h-24"
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthModel;
