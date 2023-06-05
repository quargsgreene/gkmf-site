import Head from 'next/head'
import dynamic from 'next/dynamic'
import multimediaInfo from '../public/multimedia.json'
import Multimedia from '../multimedia'
import Alert from '@mui/material/Alert'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const DynamicSphere = dynamic(() => import('../components/sphere'), { ssr: false })

export default function MultimediaInstallations () {
  const multimediaData : Multimedia = multimediaInfo;
  return(
    <>
      <Head>
        <title>Multimedia</title>
        <meta name='description' content='Multimedia installations produced by Yes I Can participants' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Alert severity="warning">
        Hover over or click on text to scroll.
      </Alert>
      <h1>Multimedia</h1>
      {Object.keys(multimediaData['multimediaInstallations']).map((item:string='0', index:number) => {
        let image = multimediaData['multimediaInstallations'][index]['details']['image'];
        let name = multimediaData['multimediaInstallations'][index]['name'];
        let description = multimediaData['multimediaInstallations'][index]['details']['description'];
        let url = multimediaData['multimediaInstallations'][index]['details']['url'];

        return (
          <div key={index}>
            <Canvas aria-label={name}>
              <OrbitControls />
              <DynamicSphere
                image={image}
                args={[15, 64, 32]}
              />
            </Canvas>
            <h2>
              <a href={url}>
                {name}
              </a>
            </h2>
            <p>{description}</p>
          </div>
        );
      })}
        <h4>More is coming soon!</h4>
</>
  )
}