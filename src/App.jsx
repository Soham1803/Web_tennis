import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import Game_world from "./pages/Game_world";

const CustomCamera = () => {
  const {camera, mouse } = useThree();

  camera.far = 5000;

  // console.log(camera.near);
  // console.log(camera.far);
  // console.log(camera.fov);

  return useFrame(() => {
    
    // camera.position.set(0, 700, 1000);
    camera.position.set(-720, 300, 720);
    camera.lookAt(0,0,0);
  })
}

function App() {

  
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 75, near: 0.1, far: 5000, position: [-720, 300, 720] }}
      
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
