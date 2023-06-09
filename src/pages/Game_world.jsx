import React from "react";
import { Suspense, useState, useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

import { extend } from "@react-three/fiber";
import { Environment, useHelper } from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

import Tennis_animation_compressed from "../components/models_components/Tennis_animation_compressed";


const Game_world = () => {

  // const dirLight = useRef<DirectionalLight>(null);
  // useHelper(dirLight, DirectionalLightHelper, 1, "red");

  return (
    <>
      <Environment files="environment/purple_sky.hdr" background blur={0} />
      <directionalLight
        color="purple"
        intensity={10}
        position={[0, 7, 10]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        // ref={dirLight}
      />

      {/* <axesHelper args={[2000]} />
      <gridHelper args={[5000]} /> */}

      <Suspense>
        <Physics 
          gravity={[0, -70, 0]} 
          debug 
        >

          {/* <RigidBody colliders='ball' restitution={2}>
            <mesh scale={[50, 50, 50]} position={[-130, 700, 30]} >
              <sphereBufferGeometry />
              <meshStandardMaterial />
            </mesh>
          </RigidBody> */}

          <Tennis_animation_compressed />          
         
        </Physics>
      </Suspense>
      
      <hemisphereLight color="yellow" groundColor="blue" />
    </>
  );
};

export default Game_world;
