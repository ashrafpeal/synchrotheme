import Image from "next/image";
import SWPC from "@/img/SYNO WooCommerce Product Carousel.jpg"
import SEIG from "@/img/Syno Elementor Image Gallery.jpg"
import SEPC from "@/img/Syno Elementor Product Carousel.jpg"
import Card from "../card/Card";
import Link from "next/link";
export default function Plugins() {
    let items = [
        {
            id: 1,
            image: SWPC,
            title: 'SYNO WooCommerce Product Carousel',
            shortDesc: 'SYNO WooCommerce product carousel is a beautiful product slider for  WooCommerce',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 2,
            image: SEIG,
            title: 'Syno Elementor Image Gallery',
            shortDesc: 'Syno Elementor Image Gallery allows you to display a post, page, woocommerce product & woocommerce product category gallery on any page',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        },
        {
            id: 3,
            image: SEPC,
            title: 'Syno Elementor Product Carousel',
            shortDesc: 'SYNO WooCommerce product carousel is a beautiful product slider for  WooCommerce',
            price: '12',
            link: '#',
            bgColor: 'bg-white'
        }
    ]
    return (
        <section className="items_one_wrap section_padding bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="section_title text-center mb-5 pb-4">
                            <h4>Our Popular Plugins</h4>
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
                        <Link href="/plugin" className="btn btn-primary mt-4 text-capitalize cbtn_blue rounded-pill py-3 px-4">See All Plugins <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
