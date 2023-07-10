import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import canvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  console.log(earth);
  return <primitive object={earth.scene} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<canvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <Earth /> */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
