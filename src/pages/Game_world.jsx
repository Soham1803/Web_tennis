import React from "react";
import { Suspense, useState, useRef } from "react";
import { extend } from "@react-three/fiber";
import { Environment, useHelper } from "@react-three/drei";

import Tennis_animation_compressed from "../components/models_components/Tennis_animation_compressed";

import { MeshRefractionMaterial } from "@react-three/drei";
extend ({ MeshRefractionMaterial });

import { DirectionalLight, DirectionalLightHelper } from "three";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

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

      {/* <axesHelper args={[1000]} />
      <gridHelper args={[1000]} /> */}

      <Suspense>
        <Physics 
          gravity={[0, -70, 0]} 
          debug 
        >

          <RigidBody colliders='ball' restitution={2}>
            <mesh scale={[50, 50, 50]} position={[-130, 700, 30]} >
              <sphereBufferGeometry />
              <meshStandardMaterial />
            </mesh>
          </RigidBody>

          {/* <RigidBody type="fixed" > */}
            <Tennis_animation_compressed />
            <CuboidCollider args={[]} />
          {/* </RigidBody> */}
         
        </Physics>
      </Suspense>
      {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
      {/* <ambientLight /> */}
      <hemisphereLight color="yellow" groundColor="blue" />
    </>
  );
};

export default Game_world;
