/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Tennis_animation_compressed.glb
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Tennis_animation_compressed(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../../../public/models/Tennis_animation_compressed.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  console.log(names);

  // useEffect(() => {
  //   actions[names[0]].play();
  // }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, -10, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={3}
          // castShadow
          // receiveShadow
        >
          <group name="Tennis_CourtFBX" rotation={[Math.PI / 2, 0, 0]} >
            <group name="Object_2">
              <group name="RootNode">
                <RigidBody colliders='ball' restitution={2}>
                  <group
                    name="Tennis_Ball"
                    position={[-86.89, 300, 20.18]}
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

                <RigidBody>
                  <group
                    name="Tennis_Racketzz"
                    position={[-218.05, 66.72, 19.29]}
                    rotation={[0, -1.57, 0]}
                    scale={[0.03, 0.05, 0.02]}
                    // castShadow
                    // receiveShadow
                  >
                    <mesh
                      name="Tennis_Racketzz_02_-_Default_0"
                      geometry={nodes["Tennis_Racketzz_02_-_Default_0"].geometry}
                      material={materials["02_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz_03_-_Default_0"
                      geometry={nodes["Tennis_Racketzz_03_-_Default_0"].geometry}
                      material={materials["03_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Tennis_Racketzz_07_-_Default_0"
                      geometry={nodes["Tennis_Racketzz_07_-_Default_0"].geometry}
                      material={materials["07_-_Default_0"]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </RigidBody>

                <RigidBody>
                  <group
                    name="Tennis_Racketzz001"
                    position={[228.03, 66.72, -44.56]}
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
                  <CuboidCollider args={[285, 140, 5]} position={[0, 5, 9.5]} />
                </group>
                  {/* <RigidBody type='fixed'> */}
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
                  <CuboidCollider args={[2, 15, 123]} position={[0, 10, 2]} />
                  {/* </RigidBody> */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../../../public/models/Tennis_animation_compressed.glb");
