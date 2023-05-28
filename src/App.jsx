import { Canvas } from '@react-three/fiber'


import { OrbitControls } from '@react-three/drei'
import Game_world from './pages/Game_world'


function App() {
  return (
    <Canvas className='canvas' camera={{fov: 75, position: [0, 3, 10]}} >
      <OrbitControls />
      <Game_world />
      
        
    </Canvas>
  )
}

export default App
