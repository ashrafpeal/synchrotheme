import Image from "next/image";
import BBC from "@/img/Bizzo-Business and Corporate Multipurpose HTML Template.jpg"
import GSD from "@/img/Goseo - SEO & Digital Marketing Agency Template.jpg"
import KAC from "@/img/Konstra - Template for Architect and Construction.jpg"
import Card from "../card/Card";
import Link from "next/link";

export default function Theme() {
    let items = [
        {
            id: 1,
            image: BBC,
            title: 'Bizzo-Business and Corporate Multipurpose HTML Template',
            shortDesc: 'Bizzo – Corporate and Business Bootstrap4 Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            image: GSD,
            title: 'Goseo-SEO & Digital Marketing Agency Template',
            shortDesc: 'GoSEO – is a powerful Digital Marketing Agency, Social Media, SEO HTML Template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            image: KAC,
            title: 'Konstra-Template for Architect and Construction',
            shortDesc: 'Konstra – is the most creative, and modern Construction HTML5 template',
            price: '10',
            link: '#',
            bgColor: 'bg-white'
        }
    ]

    return (
        <section className="items_one_wrap section_padding bg_blue_light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="section_title text-center pb-4">
                            <h4>Themeforest Latest Themes</h4>
                            <p>We are Power Elite author at Envato Market have 34 themes in different categories also has 10+ theme in our site.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {items && items.map(item => {
                        let link = item.title.toLowerCase().replace(/ /g, '-');

                        return (
                            <div className="col-md-4" key={item.key}>
                                <Card
                                    image={item.image}
                                    title={item.title}
                                    shortDesc={item.shortDesc}
                                    price={item.price}
                                    link={link}
                                    bgColor={item.bgColor}
                                />
                            </div>
                        )
                    }) }


                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link href="/theme" className="btn btn-primary mt-4 text-capitalize cbtn_blue rounded-pill py-3 px-4">See All Themes <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}