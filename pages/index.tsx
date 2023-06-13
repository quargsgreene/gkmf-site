import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import css from '/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const DynamicBox = dynamic(() => import('../components/box'), { ssr: false })

export default function Home() {
  const pageNames = ['About', 'Lineup', 'FAQ', 'Multimedia', 'Contact', 'Shop', 'Sponsorship']

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Landing page for information about the Good Karma Music and Arts Festival' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        <nav className={css.nav}>
          <ul>
            {pageNames.map((item:any, index:number) => {
              return (
                <li key={index}>
                  <a
                    href={'/' + item.toLowerCase()}
                    className={css.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                  {item}
              </a>
            </li>
              );
            })}
          </ul>
        </nav>
        <Canvas aria-label={'Good Karma Music and Arts Festival'} >
          <OrbitControls />
          <DynamicBox images={[
            '/YIC_LOGO.png',
            '/GKMAF_BTM.jpg',
            '/YIC_LOGO.png',
            '/Good Karma Logo_bluecircle.jpg',
            '/GKMAF_TOP.jpg',
            '/Good Karma Logo_bluecircle.jpg'
          ]}
          dimensions={[2.5, 2.5, 2.5]}
          scale={15}/>
        </Canvas >
        <time>
          November 4th 2023 • <span> Santa Clarita Skatepark </span>
        </time>
      </div>
    </>
  )
}
