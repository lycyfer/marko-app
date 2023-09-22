import Image from 'next/image'
import Header from '@/components/screens/header/header'
import Offer from '@/components/screens/offer/offer'
import Head from 'next/head'
import Best from '@/components/screens/best/best'
import Link from '@/components/screens/link/link'
import Footer from '@/components/screens/footer/footer'
import Appp from '@/components/appp/appp'
// import Appp from '@/components/appp/appp'



export default function Home({ data }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <Appp />

    </main>
  )
}
