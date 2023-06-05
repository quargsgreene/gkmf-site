import React from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three'

interface Props {
  images: string[],
  dimensions: number[],
  scale: number
}

export default function Box({ images, dimensions, scale } : Props){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const textures =  useLoader(TextureLoader, images)

  useFrame(({ clock }) => {
    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }
  });

  return (
    <mesh ref={ meshRef } scale={(viewport.width / scale)}>
      <boxGeometry args={[dimensions[0], dimensions[1], dimensions[2]]} />
      { textures.map((item:any, index:number)=>{
        return <meshBasicMaterial key={index} attach={`material-${index}`} map={item} /> }
      ) }
    </mesh>
  )


}