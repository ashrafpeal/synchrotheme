import Head from 'next/head'
import Image from 'next/image'
import Header from '@/component/header/Header'
import Banner from '@/component/home/Banner'
import Plugins from '@/component/home/Plugins'
import Theme from '@/component/home/Theme'
import Scripts from '@/component/home/Scripts'
import Testimonials from '@/component/home/Testimonials'
import Blogs from '@/component/home/Blogs'
import Footer from '@/component/footer/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Home - SynchroTheme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Plugins />

      <Theme />

      <Scripts />

      <Testimonials />

      <Blogs />

      <Footer />
      
    </>
  )
}
