import Head from "next/head";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Card from "@/component/card/Card";
import Footer from "@/component/footer/Footer";
import SML from "@/img/Shipping Master-Shipping & Logistic Management System.jpg"
export default function Scripts({scripts}) {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Scripts - SynchroTheme</title>
            </Head>
            <Header />
            <Page_Banner title="Codecanyon Scripts" />

            <section class="blog_posts_wrap bg-light  section_padding">
                <div class="container">
                    <div class="row">
                        {scripts && scripts.map(script => {
                            let link = script.title.toLowerCase().replace(/ /g, '-');
                            return (
                                <div className="col-md-4" key={script.id}>
                                    <Card
                                        image={script.image}
                                        title={script.title}
                                        shortDesc={script.shortDesc}
                                        price={script.price}
                                        link={link}
                                        bgColor={script.bgColor} />
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
    let scripts = [
        {
            id: 1,
            image: SML,
            title: 'Shipping Master-Shipping & Logistic Management System',
            shortDesc: 'Shipping Master-Shipping & Logistic Management System is a complete system to run your shipping or logistic business.',
            price: '25',
            link: '#',
            bgColor: 'bg-white'
        }
    ];

    return {
        props: {
            scripts
        }
    }
}
