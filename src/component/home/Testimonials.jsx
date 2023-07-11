import Image from "next/image";
import OBG from "@/img/org-1.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export default function Testimonials() {
    return (
        <section className="home_testimonial_wrap section_padding bg_blue_light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="section_title text-center mb-5 pb-4">
                            <h4>See Who Is Talking About Us!</h4>
                            <p>Our popular plugins are The Post Grid, Team, WooCommerce Variation Swatches and classNameified Listing</p>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="home_testimonial pb-5 mb-5">
                            <div id="carouselExampleCaptions" className="carousel slide position-relative">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-6 mb-sm-3">
                                                <div className="home_testmonial_item bg-white py-5 px-5 rounded border-start border-4 border-danger">
                                                    <h6>Startup Institute WP Backing!</h6>
                                                    <p>Startup Institute is a career accelerator that allows professionals to
                                                        learn
                                                        new skills, take their careers in a different direction, and pursue a
                                                        career
                                                        they are passionate about. Naturally they receive praise the program.
                                                    </p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="author">
                                                            <h6 className="lh-2 m-0 fs-">DeepBlue (classNameified Listing Plugin)</h6>
                                                            <small className="d-block">wordpress.org</small>
                                                        </div>
                                                        <div className="img rounded-pill shadow-sm p-1">
                                                            <Image src={OBG} alt="Testimonials" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="home_testmonial_item bg-white py-5 px-5 rounded border-start border-4 border-danger">
                                                    <h6>Startup Institute WP Backing!</h6>
                                                    <p>Startup Institute is a career accelerator that allows professionals to
                                                        learn
                                                        new skills, take their careers in a different direction, and pursue a
                                                        career
                                                        they are passionate about. Naturally they receive praise the program.
                                                    </p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="author">
                                                            <h6 className="lh-2 m-0 fs-">DeepBlue (classNameified Listing Plugin)</h6>
                                                            <small className="d-block">wordpress.org</small>
                                                        </div>
                                                        <div className="img rounded-pill shadow-sm p-1">
                                                            <Image src={ OBG } alt="Testimonials" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-6 mb-sm-3">
                                                <div className="home_testmonial_item bg-white py-5 px-5 rounded border-start border-4 border-danger">
                                                    <h6>Startup Institute WP Backing!</h6>
                                                    <p>Startup Institute is a career accelerator that allows professionals to
                                                        learn
                                                        new skills, take their careers in a different direction, and pursue a
                                                        career
                                                        they are passionate about. Naturally they receive praise the program.
                                                    </p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="author">
                                                            <h6 className="lh-2 m-0 fs-">DeepBlue (classNameified Listing Plugin)</h6>
                                                            <small className="d-block">wordpress.org</small>
                                                        </div>
                                                        <div className="img rounded-pill shadow-sm p-1">
                                                            <Image src={ OBG } alt="Testimonials" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="home_testmonial_item bg-white py-5 px-5 rounded border-start border-4 border-danger">
                                                    <h6>Startup Institute WP Backing!</h6>
                                                    <p>Startup Institute is a career accelerator that allows professionals to
                                                        learn
                                                        new skills, take their careers in a different direction, and pursue a
                                                        career
                                                        they are passionate about. Naturally they receive praise the program.
                                                    </p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="author">
                                                            <h6 className="lh-2 m-0 fs-">DeepBlue (classNameified Listing Plugin)</h6>
                                                            <small className="d-block">wordpress.org</small>
                                                        </div>
                                                        <div className="img rounded-pill shadow-sm p-1">
                                                            <Image src={ OBG }alt="Testimonials" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute w-100 h-25 text-center d-flex justify-content-center mt-5">
                                    <button className="carousel-control-prev position-static border border-danger rounded-circle me-3" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center previous text-danger" aria-hidden="true">
                                            <FontAwesomeIcon
                                                icon={faChevronLeft}
                                                style={{ transform: 'scale(.7)' }}
                                            />
                                        </span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next position-static border border-danger rounded-circle" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center next text-danger" aria-hidden="true">
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                style={{ transform: 'scale(.7)' }}
                                            />
                                        </span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}