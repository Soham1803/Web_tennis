/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Tennis_animation_compressed.glb
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { CuboidCollider, RigidBody, RapierRigidBody, vec3 } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from 'three';
import { Controls } from "../../App";

export default function Tennis_game_single_player(props) {

  // KeyBoard Control checks
  const upPressed = useKeyboardControls((state) => state[Controls.up]);
  const downPressed = useKeyboardControls((state) => state[Controls.down]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  const group = useRef();
  const rac1Ref = useRef();
  const rac2Ref = useRef();
  const ballRef = useRef();
  const netRef = useRef();

  const { nodes, materials, animations } = useGLTF(
    "/models/Tennis_animation_compressed.glb"
  );

  const { actions, names } = useAnimations(animations, group);

  const { camera, mouse } = useThree();

  const [mousePos, setMousePos] = useState([200, 1000]);

  const [racket2Pos, setRacket2Pos] = useState([200, 0, 0]);


  const [ballVelocity, setBallVelocity] = useState(new THREE.Vector3(0, 0, 0));

  const  ballInit = () => {
    setTimeout(() => {
      console.log("Wait for 3 secs!")
    }, 3000);
    ballRef.current.setTranslation({x: 0, y: 200, z: 0});
    ballRef.current.setLinvel({x:-500, y:50, z:0});
  }



  useFrame(({ mouse, viewport }) => {
    // const racLoc = rac1Ref.current.translation();
    // console.log(`racket location: ${racLoc.x}, ${racLoc.y}, ${racLoc.z}`);
    // console.log(mouse.x, mouse.y)

    // For Rotated Axes:
      // const Z = (ballLoc.z)*Math.cos(Math.PI/4) + (ballLoc.x)*Math.cos(Math.PI/4);
      // const X = (ballLoc.z)*Math.cos(Math.PI/4) - (ballLoc.x)*Math.cos(Math.PI/4);

    // Initial racket rotations in quaternions  
    const rac1Rotation = {w: Math.PI/2, x: 0, y: 0, z: 0};
    const rac2Rotation = {w: Math.PI, x: 0, y: 0, z: 0};
    
    // Right racket motion
    if(ballRef.current && rac2Ref.current){
      const ballLoc = vec3(ballRef.current.translation());
      console.log(`ball location  ${ballLoc.x} ${ballLoc.y} ${ballLoc.z}`);

      if(ballLoc.y > 80){
        rac2Ref.current.setTranslation({x: 700, y: ballLoc.y, z: ballLoc.z}, true);
      }
      
      if(Math.abs(ballLoc.x) > 800 || Math.abs(ballLoc.z) > 300 ){
        ballInit();
      }
    }
    const racket2Loc = vec3(rac2Ref.current.translation());
    console.log(`racket location: ${racket2Loc.x} ${racket2Loc.y} ${racket2Loc.z}`);

    // Left Racket motion:
    setMousePos([mouse.x * viewport.width, mouse.y * viewport.height]);
    if((mouse.y * viewport.height)/10 + 200 > 80){
      let leftRacketPos = {x: -700, y:(mouse.y * viewport.height)/10 + 200, z:(mouse.x * viewport.width)/10};
      // let rightRacketPos = {x: 700, y:(mouse.y * viewport.height)/10 + 200, z:(mouse.x * viewport.width)/10};

      rac1Ref.current.setTranslation(leftRacketPos);
      // rac2Ref.current.setTranslation(rightRacketPos);
    }

    // Left Racket rotations:
    if(upPressed){
      rac1Rotation.z += Math.PI/12;
    }
    if(downPressed){
      rac1Rotation.z += -Math.PI/12;
    }
    if(leftPressed){
      rac1Rotation.y += Math.PI/15;
    }
    if(rightPressed){
      rac1Rotation.y += -Math.PI/15;
    }
    console.log(rac1Rotation)

    rac1Ref.current.setRotation(rac1Rotation, true);

    // Right racket rotations:
    if(racket2Loc.y < 120){
      rac2Rotation.z = -Math.PI/15;
    }
    if(racket2Loc.y > 250){
      rac2Rotation.z = Math.PI/12;
    }
    if(racket2Loc.z > 120){
      rac2Rotation.y = -Math.PI/15;
    }
    if(racket2Loc.z < -120 ){
      rac2Rotation.y = Math.PI/15;
    }

    rac2Ref.current.setRotation(rac2Rotation, true);

  });

  // For pre built animation
  /** useEffect(() => {
     actions[names[0]].play();
   }, []); **/

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, -10, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3}
          // castShadow
          // receiveShadow
        >
          <group
            name="Tennis_CourtFBX"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">

                // Helpers (Court Scope)
                {/* <axesHelper args={[1000]} />
                <gridHelper args={[1000]} /> */}

                // Tennis ball
                <RigidBody 
                  ref = {ballRef}
                  colliders="ball" 
                  restitution={0.8} 
                  position={[-40, 100, 0]}
                  linearVelocity= {[-500, 50, 0]}
                  ccd
                  onIntersectionEnter={ballInit}
                  linearDamping={0}
                  mass={10}
                  // onCollisionExit={() => {
                  //   setBallVelocity = new THREE.Vector3(-200, 100, 0);
                  // }} 
                >
                  <group
                    name="Tennis_Ball"
                    rotation={[0.7, 0, 0]}
                    scale={[0.04, 0.04, 0.04]}
                    // castShadow
                    // receiveShadow
                  >
                    <mesh
                      name="Tennis_Ball_09_-_Default_0"
                      geometry={nodes["Tennis_Ball_09_-_Default_0"].geometry}
                      material={materials["09_-_Default"]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </RigidBody>

            // Left racket mesh
                <RigidBody
                  ref={rac1Ref}
                  type="kinematicPosition"
                  position={[ -200, 300, 0]}
                  rotation={[0, 0, 0]}
                  restitution={1}
                  ccd
                >

                // Helpers (left-racket Scope)
                {/* <axesHelper args={[1000]} />
                <gridHelper args={[1000]} /> */}

                  <group
                    name="Tennis_Racketzz"
                    rotation={[0, Math.PI/2, 0]}
                    scale={[0.03, 0.05, 0.02]}
                    // castShadow
                    // receiveShadow
                  >
                    {console.log(...mousePos)};
                    <mesh
                      name="Tennis_Racketzz_02_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz_02_-_Default_0"].geometry
                      }
                      material={materials["02_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz_03_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz_03_-_Default_0"].geometry
                      }
                      material={materials["03_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz_07_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz_07_-_Default_0"].geometry
                      }
                      material={materials["07_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </RigidBody>

            // Right racket mesh
                <RigidBody
                  type='kinematicPosition'
                  ref={rac2Ref}
                  position = {[200, 100, 0]}
                  rotation={[0, 0, 0]}
                  restitution={1}
                  ccd
                >

                // Helpers (right-racket Scope)
                {/* <axesHelper args={[1000]} />
                <gridHelper args={[1000]} /> */}

                  <group
                    name="Tennis_Racketzz001"
                    rotation={[0, -1.57, 0]}
                    scale={[0.03, 0.05, 0.02]}
                    // castShadow
                    // receiveShadow
                  >
                    <mesh
                      name="Tennis_Racketzz001_02_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz001_02_-_Default_0"].geometry
                      }
                      material={materials["02_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz001_03_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz001_03_-_Default_0"].geometry
                      }
                      material={materials["03_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz001_07_-_Default_0"
                      geometry={
                        nodes["Tennis_Racketzz001_07_-_Default_0"].geometry
                      }
                      material={materials["07_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </RigidBody>

                <group
                  name="Court"
                  position={[0, -6.62, 6.62]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  // receiveShadow
                >
                  <mesh
                    name="Court_01_-_Default_0"
                    geometry={nodes["Court_01_-_Default_0"].geometry}
                    material={materials["01_-_Default"]}
                    receiveShadow
                  />
                  <mesh
                    name="Court_08_-_Default_0"
                    geometry={nodes["Court_08_-_Default_0"].geometry}
                    material={materials["08_-_Default"]}
                    receiveShadow
                  />
                  <CuboidCollider args={[285, 140, 5]} position={[0, 5, 9.5]} restitution={1} />
                </group>
                
                <group
                  name="Net"
                  position={[0.18, -35, 6.86]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.08, 1, 0.85]}
                  // receiveShadow
                  // castShadow
                >
                  <mesh
                    name="Net_02_-_Default_0"
                    geometry={nodes["Net_02_-_Default_0"].geometry}
                    material={materials["02_-_Default"]}
                    castShadow
                    receiveShadow
                  />
                  <mesh
                    name="Net_03_-_Default_0"
                    geometry={nodes["Net_03_-_Default_0"].geometry}
                    material={materials["03_-_Default"]}
                    castShadow
                    receiveShadow
                  />
                  <mesh
                    name="Net_07_-_Default_0"
                    geometry={nodes["Net_07_-_Default_0"].geometry}
                    material={materials["07_-_Default"]}
                    castShadow
                    receiveShadow
                  />
                </group>
                <CuboidCollider args={[2, 15, 123]} position={[0, 10, 2]} sensor ref={netRef} />

              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Tennis_animation_compressed.glb");
