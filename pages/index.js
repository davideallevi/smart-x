import Head from 'next/head'
import Intro from '../components/Intro'
import Create from '../components/Create'
import Vision from '../components/Vision'
import Partners from '../components/Partners'
import Video from '../components/Video'
import Build from '../components/Build'
import Startup from '../components/Startup'

export default function Home() {

  return (
    <>
      <Head>
        <title>Smart X | Innovation-driven design lab</title>
        <meta name="description" content="We collaborate with those who create the future, handling positive impact projects through what we do best: design, communicate and promote innovative products and services." />
        <meta name="keyword" content="smart x, design lab, innovation lab, design agency milano, industrial design, product design," />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Video />
      <div id="lab" style={{backgroundColor: "#98A2A0", display: "flex"}}>
        <Create />
        <Build />
      </div>
      <Partners />
      <Vision />
    </>
  )
}
