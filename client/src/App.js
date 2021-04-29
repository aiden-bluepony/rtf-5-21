import './App.css';
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import Box from './components/box'
import BottomPlane from './components/bottomPlane'

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.lookAt(0,0,0)
    camera.position.x = 10 * Math.sin(100 + clock.getElapsedTime())
  })
  return null
}

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{position: [0,0,10]}}
      >
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <Box position={[0,-4,0]}/>
        <BottomPlane position={[0,-5,0]}/>
        {/* <OrbitControls/> */}
        <Dolly />
      </Canvas>
    </div>
  );
}

export default App;
