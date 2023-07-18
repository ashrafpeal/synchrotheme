import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Head from "next/head";

import UTPW from "@/img/Unlocking-the-Power-of-WordPress-with-HTML-to-WordPress-Conversion.jpeg";
import Image from "next/image";


export default function Single({blogs, link}) {
    let title, img, desc;

    blogs.map(blog => {
        let pageSlug = blog.title.toLowerCase().replace(/ /g, '-'); 
        if (pageSlug == link) {
            title = blog.title;
            img = blog.img;
            desc = blog.desc;
        }
    });

    console.log(title);
    console.log(img);
    console.log(desc);

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>{title} - SynchroTheme</title>
                <meta name="description" content="Synchrotheme is a talented web application and WordPress development agency based in Chittagong, Bangladesh.Synchrotheme is a team of tech lover and web enthusiasts with the mission to provide web application, wordpress theme and plugin with affordable price. Our mission is to deliver perfect products that is easy to use, highly customizable and offering innovative features you have never seen before. Our qualified support team is alert to support you 24×7." />
                <meta name="keywords" content="HTML, CSS, JavaScript,PHP, WordPress" />
            </Head>
            <Header />
            <Page_Banner title={title} />

            <section className="single_blog_post section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="blog_post_image mb-3">
                                <div className="blog_post_inner">
                                    <Image src={img} className="rounded mb-3" alt={ title } />
                                    <h3 className="lh-base">{ title }</h3>
                                </div>
                            </div>

                            <article className="blog_post_content">
                                <div dangerouslySetInnerHTML={{__html: desc}} className="fw-medium lh-lg"></div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export function getStaticProps({params}) {

    let blogs = [
        {
            id: 1,
            img: UTPW,
            title: 'Unlocking the Power of WordPress with HTML to WordPress Conversion',
            desc: `<p>In today's digital landscape, having a dynamic and easily manageable website is crucial for businesses and individuals alike. While static HTML websites served their purpose in the past, the power of WordPress has revolutionized the way we build and maintain websites. By <a href="https://www.fiverr.com/s/aBXqxg">converting your static HTML website to WordPress</a>, you unlock a whole new world of possibilities, offering enhanced functionality, scalability, and ease of use.</p>
            <ol>
                <li>The Shift from Static to Dynamic: Static HTML websites were the go-to solution in the early days of the web, offering simple pages without interactive elements or dynamic content. However, as the demands of online presence grew, businesses and individuals realized the limitations of static websites. WordPress emerged as a dynamic content management system, providing a robust framework for building feature-rich websites.</li>
                <li>Leveraging the Benefits of WordPress: Converting your HTML website to WordPress opens up a plethora of benefits. WordPress offers a user-friendly interface that simplifies content management, allowing you to update and modify your website effortlessly. You gain access to a vast library of themes and plugins that enable you to customize the appearance and functionality of your site. The extensive WordPress community also provides support, updates, and security enhancements, ensuring your website stays up to date.</li>
                <li>Easy Content Management: One of the key advantages of WordPress is its intuitive content management system. With a visual editor and a straightforward interface, even non-technical users can easily create, edit, and publish content. Adding new pages, blog posts, images, and multimedia becomes a breeze, empowering you to keep your website fresh and engaging.</li>
                <li>Dynamic Functionality: WordPress offers a wide range of plugins and themes that extend the functionality of your website. Whether you need e-commerce capabilities, contact forms, social media integration, or SEO optimization, there's a plugin for almost every requirement. By leveraging these dynamic features, you can enhance user experience, increase engagement, and achieve your website goals more effectively.</li>
                <li>Responsive Design: In the era of mobile devices, responsive design is crucial for a successful online presence. WordPress provides a plethora of mobile-friendly themes and frameworks that ensure your website looks great and functions seamlessly across various screen sizes. By converting to WordPress, you can easily embrace responsive design and cater to the growing mobile audience.</li>
                <li>Search Engine Optimization (SEO) Benefits: WordPress is inherently optimized for search engines. Its clean code, customizable permalinks, and built-in SEO features contribute to better search engine rankings. Additionally, numerous SEO plugins are available to fine-tune your website's SEO settings, meta tags, XML sitemaps, and more, helping you improve your online visibility and attract more organic traffic.</li>
            </ol>
            <p>The decision to convert your <a href="https://www.fiverr.com/s/aBXqxg">HTML website to WordPress</a> is an investment in the future success of your online presence. By embracing the power of WordPress, you unlock a host of benefits, including easy content management, dynamic functionality, responsive design, SEO optimization, and a supportive community. So, take the leap and unlock the full potential of your website with HTML to WordPress conversion. Experience the freedom, flexibility, and endless possibilities that come with a WordPress-powered website.</p>`
        }
    ];

    return {
        props: {
            blogs,
            link: params.single
        }
    }

}  

export function getStaticPaths() {
    let blogs = [
        {
            title: "Unlocking the Power of WordPress with HTML to WordPress Conversion"
        }
    ]
    
    return {
        paths: blogs.map(blog => {
            let single = blog.title.toLowerCase().replace(/ /g, '-');
            return {
                params: {
                    single
                }
            }
        }),
        fallback: false
    }
}