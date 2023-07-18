import Card from "@/component/card/Card";
import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import Banner from "@/component/home/Banner";
import Page_Banner from "@/component/page/page-banner";
import Head from "next/head";

import SWPC from "@/img/SYNO WooCommerce Product Carousel.jpg";
import SEIG from "@/img/Syno Elementor Image Gallery.jpg";
import SEPC from "@/img/Syno Elementor Product Carousel.jpg";
import SETW from "@/img/Syno Elementor Timeline Widget.jpeg";
import SEBA from "@/img/SYNO Before After Image Comparison Plugin.jpg";
import SEPG from "@/img/SYNO ELEMENTOR POST GRID ADDON.jpeg";

export default function Plugin({ plugins }) {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Plugin - SynchroTheme</title>
                <meta name="description" content="Synchrotheme is a talented web application and WordPress development agency based in Chittagong, Bangladesh.Synchrotheme is a team of tech lover and web enthusiasts with the mission to provide web application, wordpress theme and plugin with affordable price. Our mission is to deliver perfect products that is easy to use, highly customizable and offering innovative features you have never seen before. Our qualified support team is alert to support you 24×7." />
                <meta name="keywords" content="HTML, CSS, JavaScript,PHP, WordPress" />
            </Head>
            <Header />

            <Page_Banner title="Codecanyon Plugins" />

            <section class="blog_posts_wrap bg-light  section_padding">
                <div class="container">
                    <div class="row">
                        {plugins &&
                            plugins.map((plugin) => {
                                let link = plugin.title.toLowerCase().replace(/ /g, '-');
                                return (
                                    <div className="col-md-4" key={plugin.id}>
                                        <Card image={plugin.image} title={plugin.title} shortDesc={plugin.shortDesc} price={plugin.price} link={link} bgColor={plugin.bgColor} />
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}


export function getStaticProps() {
    let plugins = [
        {
            id: 1,
            image: SWPC,
            title: "SYNO WooCommerce Product Carousel",
            shortDesc: "<p>SYNO WooCommerce product carousel is a beautiful product slider for WooCommerce</p>",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
        {
            id: 2,
            image: SEIG,
            title: "Syno Elementor Image Gallery",
            shortDesc: "Syno Elementor Image Gallery allows you to display a post, page, woocommerce product & woocommerce product category gallery on any page",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
        {
            id: 3,
            image: SEPC,
            title: "Syno Elementor Product Carousel",
            shortDesc: "SYNO WooCommerce product carousel is a beautiful product slider for WooCommerce",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
        {
            id: 4,
            image: SETW,
            title: "Syno Elementor Timeline Widget",
            shortDesc: "Syno Elementor Timeline widget to display timeline of blog post, woocommerce product and custom.",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
        {
            id: 5,
            image: SEBA,
            title: "SYNO Before After Image Comparison Plugin",
            shortDesc: "SYNO before after image comparison plugin is a simple plugin that give you flexibility to showcase your products and services.",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
        {
            id: 6,
            image: SEPG,
            title: "SYNO ELEMENTOR POST GRID ADDON",
            shortDesc: "Syno Elementor Page Grid Addon to display blog posts and pages in a grid as per categories and tags.",
            price: "12",
            link: "#",
            bgColor: "bg-white",
        },
    ];

    return {
        props: {
            plugins
        }
    }
}
