import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Head from "next/head";
import Blog_Post from "@/component/card/Blog_Post";
import post from '@/img/blog-post.png'

export default function Blog() {

    let items = [
        {
            id: 1,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 1,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg-white'
        },
    ]

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Blog - SynchroTheme</title>
            </Head>
            <Header />

            <Page_Banner title="Latest Blog Posts" />

            <section class="blog_posts_wrap bg-light  section_padding">
                <div class="container">
                    <div class="row">
                        {items && items.map(item => (
                            <div className="col-md-4" key={item.id}>
                                <Blog_Post
                                    img={item.img}
                                    title={item.title}
                                    shortDesc={item.shortDesc}
                                    link={item.link}
                                    bgColor={item.bgColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
