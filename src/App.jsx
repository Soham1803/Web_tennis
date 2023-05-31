import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import Game_world from "./pages/Game_world";

function App() {
  return (
    <Canvas
      className="canvas"
      camera={{ fov: 75, near: 0.1, far: 5000, position: [0, 700, 1000] }}
      
      shadows
      colorManagement
    >
      <OrbitControls />
      <Game_world />
    </Canvas>
  );
}

export default App;
