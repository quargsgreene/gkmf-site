import Head from 'next/head'
import dynamic from 'next/dynamic'
import css from '/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
const DynamicCapsule = dynamic(() => import('../components/capsule'), { ssr: false })

export default function Shop () {
  return(
  <>
    <Head>
      <title>Shop</title>
      <meta name='description' content='Buy Your Good Karma Music and Arts Festival Merch here!' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
  </Head>
  <div className={css.info}>
    <h1>Shop</h1>
      <a href='https://www.bonfire.com/good-karma-music-amp-arts-festival-yic-logo/' className={css.link}>
        Buy Merch
      </a>
  </div>
  <Canvas aria-label={'a person singing and playing guitar'}>
    <DynamicCapsule position={[0, 0, 0]} args={[0.75, 1, 5, 32, 64]} image={'/singing.jpg'}/>
  </Canvas>
</>
  )
}