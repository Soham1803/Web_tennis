import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo } from "react";

import Game_world_multiplayer from "../components/world_components/Game_world_multiplayer";

import io from "socket.io-client";

export const socket = io.connect("http://localhost:3000");

export let IS_REFEREE = false;

let myID;

socket.on('connect', ()=>{
  console.log("Player connected!");
  myID = socket.id;

})

socket.on('startGame', (refereeID) => {
  IS_REFEREE = refereeID === myID;
  console.log(`The referee is: ${refereeID}`);
})

const CustomCamera = () => {
  const { camera, mouse } = useThree();
  
  if(IS_REFEREE) console.log('I am a referee!');
  return useFrame(() => {
    // camera.position.set(0, 700, 1000);  //Free position
    if(!IS_REFEREE)
      camera.position.set(950, 250, 0); // left side
    else
      camera.position.set(-950, 250, 0); //right side

    camera.lookAt(0, 0, 0);
  });
};

export const Controls = {
  up : 'up',
  down : 'down',
  left : 'left',
  right : 'right',
}

const MultiPlayer_env = () => {
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
              position: IS_REFEREE ? [-950, 250, 0]: [950, 250, 0] //left side
              // position: [720, 300, -720] //right side
            }}
            shadows
            colorManagement
          >
            <CustomCamera />
            <OrbitControls />
            
              <Game_world_multiplayer />
            
          </Canvas>
          <Loader 
            containerStyles={{"background":"linear-gradient(134.33deg, #FF6CAB 1.14%, #7366FF 100%)"}}
            innerStyles={{"height":"10px", "width":"500px", "borderRadius":"12px"}}
            barStyles={{"height":"10px", "width":"500px", "borderRadius":"12px", "backgroundColor":"#dab3ff"}}
            dataStyles={{"fontSize":"20px", "fontWeight":"1000", "fontFamily":"monaco", "color":"#e6b3ff", "textDecoration":"underline"}}
            dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
          />
        </KeyboardControls>
      );
}

export default MultiPlayer_env;