import Image from "next/image";
import BoxOne from '@/img/box-1.svg'
import BoxTwo from '@/img/box-2.svg'
import BoxThree from '@/img/box-3.svg'
import HomeBanner from '@/img/home-banner.png'
import TypewriterComponent from "typewriter-effect";
export default function Banner() {
    return (
        <section className="home_banner_wrap section_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 align-self-center">
                        <div className="home_banner">
                            <h2>
                                We Create Professional WordPress
                                <span>
                                    <TypewriterComponent
                                        options={{
                                            strings: ['Plugins', 'Scripts', 'Themes'],
                                            autoStart: true,
                                            loop: true
                                        }}
                                    />
                                </span>
                            </h2>
                            <p>Our Popular Plugins classNameified Listing, The Post Grid, Team member, Testimonial Slider, Woocommerce Variation Swatches & Gallery.</p>
                            <div className="home_boxs d-flex">
                                <div className="home_box d-flex align-items-center bg-white py-2 px-4 rounded-pill me-2">
                                    <div className="img me-2">
                                        <Image src={BoxOne} alt="SynchroTheme" />
                                    </div>
                                    <div className="content lh-sm">
                                        <b className="m-0 fw-semibold">80+</b>
                                        <small className="m-0 d-block">Premium Product</small>
                                    </div>
                                </div>
                                <div className="home_box d-flex align-items-center bg-white py-2 px-4 rounded-pill me-2">
                                    <div className="img me-2">
                                        <Image src={BoxTwo} alt="SynchroTheme" />
                                    </div>
                                    <div className="content lh-sm">
                                        <b className="m-0 fw-semibold">120,000+</b>
                                        <small className="m-0 d-block">Happy Clients</small>
                                    </div>
                                </div>
                                <div className="home_box d-flex align-items-center bg-white py-2 px-4 rounded-pill">
                                    <div className="img me-2">
                                        <Image src={BoxThree} alt="SynchroTheme" />
                                    </div>
                                    <div className="content lh-sm">
                                        <b className="m-0 fw-semibold">100,000+</b>
                                        <small className="m-0 d-block">Tickets Solved</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 align-self-center">
                        <div className="home_banner_img text-end">
                            <Image src={HomeBanner} alt="SynchroTheme" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}