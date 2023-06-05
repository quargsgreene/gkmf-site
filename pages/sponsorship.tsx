import Head from 'next/head'
import dynamic from 'next/dynamic'
import css from '/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
const DynamicSphere = dynamic(() => import('../components/sphere'), { ssr: false })

export default function Contact (event: Event) {

  return(
  <>
    <Head>
    <title>Become a Sponsor</title>
    <meta name='description' content='Become a sponsor of the Gook Karma Music and Arts Festival' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/favicon.png' />

  </Head>
    <div className={css.info}>
    <h1 > For Booking & Sponsorship: </h1>
        Andy Ryan
        <br /> aryan@yicunity.org
        <br /> 661-607-7367
    </div>
  <Canvas>
  <DynamicSphere image={'/vader.jpg'} args={[15, 64, 32]} />
  </Canvas>
</>
  )
}