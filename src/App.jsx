import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Environment } from '@react-three/drei'

function App() {
  return (
    <Canvas className='canvas' camera={{position: [0, 0, 5]}} >
      
      <OrbitControls />
      <Environment files='environment/shanghai_bund_4k.hdr' background blur={0} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      {/* <ambientLight /> */}
      <hemisphereLight color='yellow' groundColor='blue' />
        
    </Canvas>
  )
}

export default App
