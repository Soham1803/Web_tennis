import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import Game_world from "./pages/Game_world";

const CustomCamera = () => {
  const {camera, mouse } = useThree();

  return useFrame(() => {
    
    camera.position.set(0, 700, 1000);
    camera.lookAt(0,0,0);
  })
}

function App() {

  
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 75, near: 0.1, far: 5000, position: [0, 700, 1000] }}
      
      shadows
      colorManagement
    >
      <CustomCamera />
      <OrbitControls />
      <Game_world />
    </Canvas>
  );
}

export default App;
