import Head from 'next/head'
import dynamic from 'next/dynamic'
import css from '/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
const DynamicSphere = dynamic(() => import('../components/sphere'), { ssr: false })

export default function Contact (event: Event) {

  return(
  <>
    <Head>
    <title>Contact</title>
    <meta name='description' content='Contact information for the Gook Karma Music and Arts Festival' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' href='/favicon.png' />

  </Head>
  <Canvas aria-label={'a crowd'}>
    <DynamicSphere image={'/crowd.jpg'} args={[15, 64, 32]} />
    <TrackballControls />
  </Canvas>
  <h1 > Contact </h1>
  <ul>
    <li>
      <i>For General Information & Inquiries: </i>
      info@goodkarmafest.com
    </li>
    <li>
      <i>For Booking & Sponsorship:</i> <br />Andy Ryan
      <br /> aryan@yicunity.org
      <br /> 661-607-7367
    </li>
    <li>
      <i>Social Media: </i>
      <br />
        <a href='https://www.instagram.com/goodkarmafest/'>
          <FaInstagram className={css.social} />
        </a>
        <a href='https://www.facebook.com/goodkarmafest'>
          <FaFacebook className={css.social} />
        </a>
        <a href='https://www.youtube.com/channel/UCuUn-Ww94kbU0a63BMbckCA'>
          <FaYoutube className={css.social} />
        </a>
    </li>
  </ul>
</>
  )
}