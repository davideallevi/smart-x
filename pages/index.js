import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Vision from '../components/Vision'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart X | Innovation-driven design lab</title>
        <meta name="description" content="We collaborate with those who create the future, handling positive impact projects through what we do best: design, communicate and promote innovative products and services." />
        <meta name="keyword" content="smart x, design lab, innovation lab, design agency milano, industrial design, product design," />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <Services />
        <Vision />
        <Footer />
      </main>
    </div>
  )
}
