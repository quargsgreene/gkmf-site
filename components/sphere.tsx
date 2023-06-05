import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

interface Props{
  image: string
  args: number[]
}

export default function Sphere({ image, args } : Props){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const texture =  useLoader(TextureLoader, image);

  const { viewport } = useThree();

  useFrame(({ clock }) => {
    if(meshRef.current !== null){
      meshRef.current.rotation.x = clock.getElapsedTime() / 4;
    }
  });

  return (
    <mesh  scale = {viewport.width / 120} ref={meshRef} castShadow>
      <sphereGeometry
      args={[args[0], args[1], args[2]]}
      />
      <meshBasicMaterial map={texture} />
    </mesh>
  )


}