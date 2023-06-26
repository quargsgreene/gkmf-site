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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <nav className={css.nav}>
          <ul>
            {pageNames.map((item:any, index:number) => {
              return (
                <li key={index}>
                  <a
                    href={item === 'Shop'? 'https://www.bonfire.com/store/2023-good-karma-music--arts-festival/': '/' + item.toLowerCase()}
                    className={css.link}
                    target='_self'
                    rel='noopener noreferrer'
                  >
                  {item}
              </a>
            </li>
              );
            })}
          </ul>
        </nav>
        <time>
          November 4, 2023 • <span> Santa Clarita Skatepark & Field </span>
        </time>
        <p className={css.intro}>
         Produced by Yes I Can, The Good Karma Music & Arts Festival empowers people with disabilities who want to work in the entertainment industry. Join us this November with a top-tier entertainment lineup, fantastic venue, and a one-of-a-kind cause!
        </p>
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
      </div>
    </>
  )
}
