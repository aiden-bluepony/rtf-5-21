import React,  {useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber'

export default function Box(props){
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return(
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 3 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
    </mesh>
  )
}