import Head from 'next/head'
import css from '/styles/Home.module.css'
import dynamic from 'next/dynamic'
import Faq from 'react-faq-component'
import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
const DynamicCapsule = dynamic(() => import('../components/capsule'), { ssr: false })

const data = {
  title: 'Frequently Asked Questions (FAQ)',
  rows: [
      {
          title: 'Q. What accessibility provisions are in place at the venue?',
          content: `A. There will be ramps, ADA toilets, and a quiet space.`,
      },
      {
          title: 'Q. Are the shows 21+?',
          content:
              'A. No. GKMAF is all-ages.',
      },
      {
          title: 'Q. Will there be food?',
          content: `A. Yes. There will be several food trucks on-site. `,
      },
      {
          title: 'Q. Where can I park?',
          content: `A. There will be limited parking next to the venue, as well as street parking.`,
      },
      {
        title: 'Q. Will the skatepark be open?',
        content: `A. Yes.`,
    },
  ],

}

const styles = {
  bgColor: 'rgba(50, 192, 251, 0.5)',
  titleTextColor: 'white',
  titleTextSize: '4vw',
  rowTitleColor: 'rgba(251, 83, 69, 1)',
  rowTitleTextSize: '3vw',
  rowContentColor: 'black',
  rowContentTextSize: '3vw',
  rowContentPaddingTop: '1wv',
  rowContentPaddingBottom: '1vw',
  rowContentPaddingLeft: '1vw',
  rowContentPaddingRight: '1vw',
  arrowColor: 'rgba(251, 83, 69, 1)',
  transitionDuration: '0.5s',
  timingFunc: 'ease-in-out'
}

const config = {
  animate: true,
  arrowIcon: 'V',
  openOnload: 0,
  expandIcon: '+',
  collapseIcon: '-',
}

export default function faqSection (props: any) {
  return (
  <>
    <Head>
      <title>FAQ</title>
      <meta name='description' content='Frequently Asked Questions about the Good Karma Music and Arts Festival' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <Canvas className={css.canvas} aria-label={'crowd projected onto a capsule'}>
      <DynamicCapsule args={[1.5, 2, 10, 32, 64]} image={'/backs.jpg'} position={[0, 0, -10]} />
      <TrackballControls />
    </Canvas>
    <Faq
        {...props}
        id='faq'
        data={data}
        styles={styles}
        config={config}
      />
  </>
  )
}