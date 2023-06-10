import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

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

export const Controls = {
  up : 'up',
  down : 'down',
  left : 'left',
  right : 'right',
}

function App() {

  const map = useMemo(()=>[
    { name: Controls.up, keys: ['ArrowUp', 'KeyW'] },
    { name: Controls.down, keys: ['ArrowDown', 'KeyS']},
    { name: Controls.left, keys: ['ArrowLeft', 'KeyA']},
    { name: Controls.right, keys: ['ArrowRight', 'KeyD']},
  ], 
  []);

  return (
    <KeyboardControls map={map}>
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
    </KeyboardControls>
  );
}

export default App;
