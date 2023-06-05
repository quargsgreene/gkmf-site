import Head from 'next/head'
import dynamic from 'next/dynamic'
import artistInfo from '../public/artists.json'
import Artists from '../artists'
import Alert from '@mui/material/Alert'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const DynamicBox = dynamic(() => import('../components/box'));

export default function Lineup () {
  const artistData : Artists  = artistInfo;
    return(
      <>
        <Head>
          <title>Lineup</title>
          <meta name='description' content='Lineup for the Good Karma Music and Arts Festival' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.png' />
        </Head>
        <Alert severity="warning">
          Hover over or click on text to scroll.
        </Alert>
        <h1>Lineup</h1>
          {Object.keys(artistData['artists']).map((item:string='0', index:number) => {
            let image = artistData['artists'][index]['details']['images'];
            let name = artistData['artists'][index]['name'];
            let description = artistData['artists'][index]['details']['description'];
            let url = artistData['artists'][index]['details']['url'];

            return (
            <div key={index}>
              <Canvas aria-label={name}>
                <OrbitControls />
                <DynamicBox
                  images={[
                    image[0],
                    image[1],
                    image[2],
                    image[3],
                    image[4],
                    image[5]
                  ]}
                  dimensions={[15, 15, 15]}
                  scale={80}
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
    <h4>More will be announced soon!</h4>
  </>
    );
}