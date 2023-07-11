import Head from "next/head";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Card from "@/component/card/Card";
import Footer from "@/component/footer/Footer";

import kac from "@/img/Konstra - Template for Architect and Construction.jpg"
import gsd from "@/img/Goseo - SEO & Digital Marketing Agency Template.jpg"
import bbc from "@/img/Bizzo-Business and Corporate Multipurpose HTML Template.jpg"
import ns from "@/img/Natamok - Software Landing Template.jpg"
import ca from "@/img/Cinja-HTML5 App Landing Template.jpg"
import ta from "@/img/Tasoapp-App Landing Page.jpg"
import bjp from "@/img/B-Jonni-Personal Portfolio Template.jpg"
import tpp from "@/img/Taso - Personal Portfolio Template.jpg"
import vc from "@/img/VIP - Creative Landing Page HTML5 Template.jpg"
import lm from "@/img/LOGAN-Multipurpose HTML5 Business Template.jpg"
import sap from "@/img/SynchroAgency-One Page Agency & Portfolio Template.jpg"
import cpp from "@/img/Creative-Personal Portfolio Template.jpg"
import app from "@/img/ALEX-Personal Portfolio Template.jpg"
import sypp from "@/img/Synchro-Personal Portfolio Template.jpg"
import spp from "@/img/solo.jpg"

export default function Theme({ themes }) {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Theme - SynchroTheme</title>
            </Head>
            <Header />
            <Page_Banner title="Themeforest Themes" />
            <section class="blog_posts_wrap bg-light  section_padding">
                <div class="container">
                    <div class="row">
                        {themes && themes.map(theme => {
                            let link = theme.title.toLowerCase().replace(/ /g, '-');
                            return (
                                <div className="col-md-4" key={theme.id}>
                                    <Card
                                        image={theme.image}
                                        title={theme.title}
                                        shortDesc={theme.shortDesc}
                                        price={theme.price}
                                        link={link}
                                        bgColor={theme.bgColor} />
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
    let themes = [
        {
            id: 1,
            image: kac,
            title: 'Konstra-Template for Architect and Construction',
            shortDesc: 'Konstra - Template for Architect and Construction',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            image: gsd,
            title: 'Goseo-SEO & Digital Marketing Agency Template',
            shortDesc: 'GoSEO – is a powerful Digital Marketing Agency, Social Media, SEO HTML Template',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            image: bbc,
            title: 'Bizzo-Business and Corporate Multipurpose HTML Template',
            shortDesc: 'Bizzo – Corporate and Business Bootstrap4 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 4,
            image: ns,
            title: 'Natamok-Software Landing Template',
            shortDesc: 'Natamok is a pixel-perfect HTML5 Software Landing Template',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 5,
            image: ca,
            title: 'Cinja-HTML5 App Landing Template',
            shortDesc: 'Cinja is a pixel perfect Mobile App Landing Pages',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 6,
            image: ta,
            title: 'Tasoapp-App Landing Page',
            shortDesc: 'TasoAPP is a pixel perfect Mobile App Landing Pages',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 7,
            image: bjp,
            title: 'B-Jonni-Personal Portfolio Template',
            shortDesc: 'B-Jonni-Personal Portfolio HTML5 Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 8,
            image: tpp,
            title: 'Taso-Personal Portfolio Template',
            shortDesc: 'Taso - Personal Portfolio HTML5 Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 9,
            image: vc,
            title: 'VIP-Creative Landing Page HTML5 Template',
            shortDesc: 'VIP - Creative Landing Page HTML5 Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 10,
            image: lm,
            title: 'LOGAN-Multipurpose HTML5 Business Template',
            shortDesc: 'LOGAN-Multipurpose HTML5 Business Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 11,
            image: sap,
            title: 'SynchroAgency-One Page Agency & Portfolio Template',
            shortDesc: 'SynchroAgency-One Page Agency & Portfolio Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '8',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 12,
            image: cpp,
            title: 'Creative-Personal Portfolio Template',
            shortDesc: 'Creative-Personal Portfolio Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '8',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 13,
            image: app,
            title: 'ALEX-Personal Portfolio Template',
            shortDesc: 'ALEX-Personal Portfolio Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '8',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 14,
            image: sypp,
            title: 'Synchro-Personal Portfolio Template',
            shortDesc: 'Synchro-Personal Portfolio Template is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '8',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 15,
            image: spp,
            title: 'Solo-Personal Portfolio Template',
            shortDesc: 'SOLO is a Modern Responsive Personal and Portfolio Resume HTML5 Template',
            price: '8',
            link: '#',
            bgColor: 'bg-white'
        },
    ];

    return {
        props: {
            themes
        }
    }
}
