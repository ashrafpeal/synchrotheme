import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Head from "next/head";
import Blog_Post from "@/component/card/Blog_Post";
import UTPW from "@/img/Unlocking-the-Power-of-WordPress-with-HTML-to-WordPress-Conversion.jpeg";

export default function Blog() {

    let blogs = [
        {
            id: 1,
            img: UTPW,
            title: 'Unlocking the Power of WordPress with HTML to WordPress Conversion',
            shortDesc: `<p>In today's digital landscape, having a dynamic and easily manageable website is crucial for businesses and individuals alike.</p>`,
            bgColor: 'bg-white'
        }
    ];

    return <>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <title>Blog - SynchroTheme</title>
            <meta name="description" content="Synchrotheme is a talented web application and WordPress development agency based in Chittagong, Bangladesh.Synchrotheme is a team of tech lover and web enthusiasts with the mission to provide web application, wordpress theme and plugin with affordable price. Our mission is to deliver perfect products that is easy to use, highly customizable and offering innovative features you have never seen before. Our qualified support team is alert to support you 24×7." />
            <meta name="keywords" content="HTML, CSS, JavaScript,PHP, WordPress" />
        </Head>
        <Header />

        <Page_Banner title="Latest Blog Posts" />
``
        <section className="blog_posts_wrap bg-light  section_padding">
            <div className="container">
                <div className="row">
                    {blogs && blogs.map(item => {
                        let link = item.title.toLowerCase().replace(/ /g, '-');
                        return (
                            <div className="col-md-4" key={item.id}>
                                <Blog_Post
                                    img={item.img}
                                    title={item.title}
                                    shortDesc={item.shortDesc}
                                    link={link}
                                    bgColor={item.bgColor}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <Footer />
    </>;
}
