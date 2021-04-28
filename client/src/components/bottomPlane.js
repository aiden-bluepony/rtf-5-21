import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber'
import {DoubleSide} from 'three' 

export default function BottomPlane(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += 0.01
  //   mesh.current.rotation.y += 0.01
  // })

  return(
    <mesh
      {...props}
      ref={mesh}
      scale="10"
      rotation={[-1.5,0,0]}
    >
      <planeGeometry args={[1,1,1]} />
      <meshStandardMaterial 
        color='green' 
        side={DoubleSide}

      />
    </mesh>
  )
}