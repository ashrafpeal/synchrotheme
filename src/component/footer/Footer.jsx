import logo from '@/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="footer_top_wrap bg_blue_light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Image src={logo} style={{width: "200px", height: "25px"}} alt="SynchroTheme" />
                            <p className="mt-3">We create professional WordPress Themes, WordPress Plugins and Android & iOS Mobile Application.</p>
                            <ul className="footer_social p-0 m-0 list-unstyled d-flex">
                                <li><Link href="#" className="text-white d-inline-flex justify-content-center align-items-center me-2 rounded-pill"><FontAwesomeIcon icon={faFacebookF} style={{transform: "scale(.7)"}} /></Link></li>
                                <li><Link href="#" className="text-white d-inline-flex justify-content-center align-items-center me-2 rounded-pill"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                <li><Link href="#" className="text-white d-inline-flex justify-content-center align-items-center me-2 rounded-pill"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                <li><Link href="#" className="text-white d-inline-flex justify-content-center align-items-center me-2 rounded-pill"><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                <li><Link href="#" className="text-white d-inline-flex justify-content-center align-items-center me-2 rounded-pill"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Company Policy</h6>
                            <ul className="footer_menu p-0 m-0">
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Cookie Policy</a></li>
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Privacy Policy</a></li>
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Our WordPress Plugins</h6>
                            <ul className="footer_menu p-0 m-0">
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Cookie Policy</a></li>
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Privacy Policy</a></li>
                                <li><a className="m-0 text-decoration-underline d-inline-block mb-2" href=""><i className="fa-solid fa-angles-right me-2"></i>Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>

            <div className="footer_bottom py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="mb-0">&copy; {year} | SynchroTheme All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}