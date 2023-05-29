import React from 'react'
import { Suspense, useState } from 'react'
import { Environment } from '@react-three/drei'

import Tennis_animation_compressed from '../components/models_components/Tennis_animation_compressed'

const Game_world = () => {
  return (
    <>
        <Environment files='environment/purple_sky.hdr' background blur={0} />

        <Suspense >
          <Tennis_animation_compressed />
        </Suspense>
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        {/* <ambientLight /> */}
        <hemisphereLight color='yellow' groundColor='blue' />
    </>
  )
}

export default Game_world
