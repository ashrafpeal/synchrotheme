import Head from 'next/head'
import Header from '@/component/header/Header'
import Banner from '@/component/home/Banner'
import Plugins from '@/component/home/Plugins'
import Themes from '@/component/home/Theme'
import Scripts from '@/component/home/Scripts'
import Testimonials from '@/component/home/Testimonials'
import Blogs from '@/component/home/Blogs'
import Footer from '@/component/footer/Footer'



export default function Home() {
  return (
    <>
      <Head>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Home - SynchroTheme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Synchrotheme is a talented web application and WordPress development agency based in Chittagong, Bangladesh.Synchrotheme is a team of tech lover and web enthusiasts with the mission to provide web application, wordpress theme and plugin with affordable price. Our mission is to deliver perfect products that is easy to use, highly customizable and offering innovative features you have never seen before. Our qualified support team is alert to support you 24×7." />
        <meta name="keywords" content="HTML, CSS, JavaScript,PHP, WordPress" />
      </Head>

      <Header />

      <Banner />

      <Plugins />

      <Themes />

      <Scripts />

      {/* <Testimonials /> */}

      <Blogs />

      <Footer />

    </>
  )
}
