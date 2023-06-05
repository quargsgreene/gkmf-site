import React from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three'

interface Props {
  image: string
  position: number[]
  args: number[]
}

export default function Capsule({ image, position, args } : Props){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const texture=  useLoader(TextureLoader, image);
  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 8;
      meshRef.current.rotation.z = clock.getElapsedTime() / 8;
    }
  });

  return (
    <mesh  scale={(viewport.width / 10)} ref={meshRef} castShadow>
      <capsuleGeometry args={[...args]} position={ position } />
      <meshBasicMaterial map={texture} />
    </mesh>
  )


}