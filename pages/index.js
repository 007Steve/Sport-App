import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sport App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas>
        <Suspense fallback={null}>

        </Suspense>
      </Canvas>

    </div>
  )
}
