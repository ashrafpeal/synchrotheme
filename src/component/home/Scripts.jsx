import Image from "next/image";
import SM from "@/img/Shipping Master-Shipping & Logistic Management System.jpg"
import Card from "../card/Card";
import Link from "next/link";

export default function Scripts() {
    let items = [
        {
            id: 1,
            image: SM,
            title: 'Shipping Master-Shipping & Logistic Management System',
            shortDesc: 'Shipping Master-Shipping & Logistic Management System is a complete system to run your shipping or logistic business.',
            price: '25',
            link: '#',
            bgColor: 'bg-white'
        }
    ];
    return (
        <section className="items_one_wrap section_padding bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="section_title text-center pb-4">
                            <h4>Codecanyon Scripts</h4>
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
                    })}


                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <Link href="/script" className="btn btn-primary mt-4 text-capitalize cbtn_blue rounded-pill py-3 px-4">See All Scripts <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
