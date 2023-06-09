import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Game_world from "./pages/Game_world";

const CustomCamera = () => {
  const { camera, mouse } = useThree();

    return useFrame(() => {
    // camera.position.set(0, 700, 1000);  //Free position
    camera.position.set(-720, 300, 720); // left side
    // camera.position.set(720, 300, -720); //right side

    camera.lookAt(0, 0, 0);
  });
};

function App() {
  return (
    <Canvas
      className="canvas"
      camera={{ 
        fov: 75, 
        near: 0.1, 
        far: 5000, 
        position: [-1000, 200, 0] //left side
        // position: [720, 300, -720] //right side
      }}
      shadows
      colorManagement
    >
      {/* <CustomCamera /> */}
      <OrbitControls />
      <Game_world />
    </Canvas>
  );
}

export default App;
