import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import Page_Banner from "@/component/page/page-banner";
import Head from "next/head";

// Plugins
import SWPC from "@/img/SYNO WooCommerce Product Carousel.jpg";
import SEIG from "@/img/Syno Elementor Image Gallery.jpg";
import SEPC from "@/img/Syno Elementor Product Carousel.jpg";
import SETW from "@/img/Syno Elementor Timeline Widget.jpeg";
import SEBA from "@/img/SYNO Before After Image Comparison Plugin.jpg";
import SEPG from "@/img/SYNO ELEMENTOR POST GRID ADDON.jpeg";

// Scripts
import SML from "@/img/Shipping Master-Shipping & Logistic Management System.jpg"

// Theme
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


import Item from "@/component/item/item";

export default function Slug({ items, slug }) {
    let title, image, demo, buy, attr,price, desc;

    let item = items.map( (item, key, arr) => {
        let pageSlug = item.title.toLowerCase().replace(/ /g, '-');
        if (pageSlug == slug) {
            title = item.title;
            image = item.image;
            demo = item.demo;
            buy = item.buy;
            attr = item.attr;
            desc = item.desc;
            price = item.price;
        }
    });
    console.log(title);
    console.log(image);
    console.log(demo);
    console.log(buy);
    console.log(attr);
    console.log(desc);
    console.log(price);
    console.log(item.title);
    // const title = plugins.
    
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>{title} - SynchroTheme</title>
            </Head>
            <Header />
            <Page_Banner title={title}/>
            
            <Item image={image} title={title} demo={demo} buy={buy} attr={attr} price={price} desc={desc} />

            <Footer />
        </>
    );
}


export function getStaticProps({params}) {
    let items = [
        {
            id: 1,
            image: SWPC,
            title: "SYNO WooCommerce Product Carousel",
            demo: "https://codecanyon.net/item/syno-elementor-image-gallery/full_screen_preview/28281849",
            buy: "https://codecanyon.net/item/syno-woocommerce-product-carousel/30666492?s_rank=1",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>
                SYNO WooCommerce Product Carousel - CodeCanyon Item for Sale
                Live Preview Screenshots
                SYNO WooCommerce product carousel is a beautiful product slider for  WooCommerce powered websites. This plugin will help shop owners to boost and increasing sales by appeal to customers to buy the product in a style.</p>
            <h6>It’s super easy to create one from preset loops:</h6>
            <hr>
            <ul>
                <li>   Recent Products,&nbsp;   </li>
                <li>   Featured Products,&nbsp;   </li>
                <li>   Products by ID,&nbsp;   </li>
                <li>   Products from a single category,   </li>
                <li>   &nbsp;Products on sale,&nbsp;   </li>
                <li>   Bestsellers,&nbsp;   </li>
                <li>   Top rated and Products with attribute and filter.<br>   </li>
            </ul>
            <p>You can style and set up each of your carousels individually. And also can setup by shortcode anywhere you wan</p>
            <p><b>Demo</b>: <a href="https://synchrotheme.com/script/plugins/swpc/home/">Link</a></p>
            <h6>Key Features:</h6>
            <hr>
            <ul>
                <li>  Simple Configuration.  </li>
                <li>  Shortcode  </li>
                <li>   Super easy to setup with&nbsp; WooCommerce   </li>
                <li>   Insert &nbsp;via shortcode anywhere to content (Page, Post, Custom Post, Widget)   </li>
                <li>   Settings are applied individually – per carousel   </li>
                <li>   Product Carousels inherit theme styles   </li>
                <li>   Fully responsive   </li>
                <li>   Clean, Modern and Mobile Friendly:&nbsp;   </li>
                <li>   Documentation and prompt support <br>  </li>
                <li>   &nbsp;And many more…   </li>
            </ul>`
        },
        {
            id: 2,
            image: SEIG,
            title: "Syno Elementor Image Gallery",
            demo: "https://synchrotheme.com/script/plugins/swpc/home/",
            buy: "https://themeforest.net/item/konstra-construction-template-for-architect-and-construction/23635565?s_rank=1",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Syno Elementor Image Gallery</b></p>

                    <p>It allows you to display a post, page, woocommerce product & woocommerce product category gallery
                        on any page. If you have large number of image then the plugin convert your images to the
                        awesome gallery, so user will get an organize view your product images. Its highly essential to
                        sell your product.</p>
                    <h6>Widgets List:</h6>
                    <hr>
                    <ul>
                        <li>Post Gallery</li>
                        <li>Page Gallery</li>
                        <li>Woocommerce Product Gallery</li>
                        <li>Woocommerce Product Category Gallery</li>
                    </ul>
                    <h6>Syno Elementor Image Gallery:</h6>
                    <hr>
                    <ul>
                        <li>Easy to use and setup.</li>
                        <li>Display gallery image with title, caption and description.</li>
                        <li>Display gallery image in your desired order with easy Drag &amp; Drop functionality.</li>
                        <li>Masonry layout with image gallery.</li>
                        <li>Fully Responsive.</li>
                        <li>100% Multilingual at both front end and back end.</li>
                        <li>Detailed documentation included.</li>
                        <li>Unlimited image to display with gallery</li>
                        <li>Very Lightweight</li>
                        <li>Thumbnails display options (number of the thumbnail to visible)</li>
                        <li>Image Auto height support</li>
                        <li>&nbsp;Color options for&nbsp;Elements</li>
                        <li>Support all the Standard Free/Premium WordPress Themes</li>
                        <li>And more…</li>
                        </ul>
                    
                    <p><b>Demo</b>: <a href="https://synchrotheme.com/script/plugins/imagegallery/demo/">Link</a></p>`
        },
        {
            id: 3,
            image: SEPC,
            title: "Syno Elementor Product Carousel",
            demo: "https://codecanyon.net/item/syno-elementor-product-carousel/full_screen_preview/28180527",
            buy: "https://codecanyon.net/item/syno-elementor-product-carousel/28180527?s_rank=3",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Syno Product Gallery Carousel</b> It allows you to display a product gallery on any page. If you have large number of image then the plugin convert your images to the awesome gallery, so user will get an organize view your product images. Its highly essential to sell your product.</p>
            <h6>Widgets List:</h6>
            <hr>
            <ul>
                <li>Product Slider</li>
            </ul>
            <h6>Key Features:</h6>
            <hr>
            <ul>
                <li>Horizontal &amp; Vertical Layout</li>
                <li>Global layout settings</li>
                <li>Unlimited image to display with gallery</li>
                <li>Responsive Layout</li>
                <li>Very Lightweight</li>
                <li>Thumbnails display options (number of the thumbnail to visible)</li>
                <li>Navigation support</li>
                <li>AutoPlay support</li>
                <li>AutoPlay speed option</li>
                <li>Image Auto height support</li>
                <li>Touch and Swipe support for thumbnails</li>
                <li>&nbsp;Color options for&nbsp;Elements</li>
                <li>Support all the Standard Free/Premium WordPress Themes</li>
                <li>And more…</li>
                </ul>
            
            <p><b>Demo</b>: <a href="https://synchrotheme.com/script/plugins/productcarousel/product-slider/">Link</a></p>
            </p>`,
        },
        {
            id: 4,
            image: SETW,
            title: "Syno Elementor Timeline Widget",
            demo: "https://codecanyon.net/item/syno-elementor-timeline-widget/full_screen_preview/27881501",
            buy: "https://codecanyon.net/item/syno-elementor-timeline-widget/full_screen_preview/27881501",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Syno Elementor Timeline Widget For WordPress</b></p>

            <p>Timelines are a great way to show the content of your website. Syno Elementor Timeline widget
                allows you to add interactive timelines on your website pages without having to wrangle with the
                code. Syno Elementor Timeline widget to display timeline of blog post, woocommerce product and
                custom.</p>
            <h6>Widgets List:</h6>
            <hr>
            <ul>
                <li>Post Timeline</li>
                <li>Wocommerce Product Timeline</li>
                <li>Custom Timeline</li>
            </ul>
            <h6>Syno Elementor Timeline Widget plugin is used to create:</h6>
            <hr>
            <ul>
                <li>Awesome&nbsp;<strong>Company Timeline</strong>
                </li>
                <li>Blog Posts Timeline</li>
                <li>Woocommerce Products Timeline</li>
                <li>Step by Step Tutorial Timeline</li>
                <li>Program History</li>
                <li>Your Company Storyline</li>
                <li>Events Timeline</li>
                <li>Life Stories/Timeline</li>
                <li>Life Achievements</li>
                <li>Personal Timeline</li>
                <li>Author Biography Timeline</li>
                <li>Product updates Timeline</li>
                <li>Company History Timeline</li>
                <li>Content Timeline</li>
                <li>Startup Storyline</li>
            </ul>

            <h6>KEY FEATURES</h6>
            <hr>
            <ul>
                <li>Multiple customization options and easy to use.</li>
                <li>Fully responsive layout for all devices.</li>
                <li>Create any kind of design without coding.</li>
                <li>Compatible with all themes.</li>
                <li>
                    <strong>Easy installation</strong>? purchase, download the zip, read the docs
                </li>
                <li>
                    <strong>Compatible with all major browsers, including IE</strong>? compatible from IE9 to
                    IE11, Chrome, Safari and Firefox
                </li>
                <li>And many more.</li>
            </ul>`
        },
        {
            id: 5,
            image: SEBA,
            title: "SYNO Before After Image Comparison Plugin",
            demo: "https://codecanyon.net/item/syno-before-after-image-comparison-plugin/full_screen_preview/27563556",
            buy: "https://codecanyon.net/item/syno-before-after-image-comparison-plugin/27563556?s_rank=5",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>SYNO before after image comparison plugin is a simple plugin that give you flexibility to
            showcase your products and services like beauty products,dental service,fashion,Wellness, hair
            treatment etc. You can make horizontal and vertical before after comparison with our plugin.</p>
        <h6>Features List:</h6>
        <hr>
        <ul>
            <li>
                <strong>Responsive&nbsp;</strong>– fully responsive layout
            </li>
            <li>
                <strong>Mobile Friendly</strong>&nbsp;– support for touch devices like phones and tablets
            </li>
            <li>
                <strong>Different Interactions</strong>&nbsp;– choose drag or hover interaction
            </li>
            <li>
                <strong>Different Orientations</strong>&nbsp;– use horizontal and vertical orientations
            </li>
            <li>
                <strong>Multiple Views</strong>&nbsp;– create unlimited views on on one page
            </li>
            <li>
                <strong>Template Tag</strong>&nbsp;– use in your theme template files
            </li>
            <li>
                <strong>Documentation</strong>&nbsp;– detailed documentation included
            </li>
            <li>
                <strong>Support</strong>&nbsp;– efficient customer support
            </li>
        </ul>

        <p><b>Demo</b>: <a href="https://synchrotheme.com/script/plugins/imagecomparison/demo/">Link</a></p>`
        },
        {
            id: 6,
            image: SEPG,
            title: "SYNO ELEMENTOR POST GRID ADDON",
            demo: "https://codecanyon.net/item/syno-elementor-post-grid-addon/full_screen_preview/27333276",
            buy: "https://codecanyon.net/item/syno-elementor-post-grid-addon/27333276?s_rank=6",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '6.1',
                tested: '6.1',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Syno Elementor Page Grid Addon to display blog posts and pages in a grid as per categories and
            tags. Useful for generating post grid from your blog posts and pages with multiple options.</p>
        <h6>Widgets List:</h6>
        <hr>
        <ul>
            <li>Page Category</li>
            <li>Post Category</li>
            <li>Post Tag</li>
        </ul>
        <h6>KEY FEATURES:</h6>
        <hr>
        <ul>
            <li>Multiple customization options and easy to use</li>
            <li>Can make grid with category, Tags etc at post and pages</li>
            <li>Fully responsive layout for all devices.</li>
            <li>Multiple features for blog and page grid block.</li>
            <li>Compatible with all themes.</li>
            <li>And more…</li>
        </ul>

        <p><b>Demo</b>: <a href="https://synchrotheme.com/script/plugin/">Link</a></p>
        </p>
        <p>Admin Demo:</p>
        <p>https://synchrotheme.com/script/plugin/wp-login.php</p>
        <p>Username: user</p>
        <p>password: user123</p>`
        },
        {
            id: 7,
            image: SML,
            title: "Shipping Master-Shipping & Logistic Management System",
            demo: "https://codecanyon.net/item/shipping-mastershipping-logistic-management-system/full_screen_preview/25634423",
            buy: "https://codecanyon.net/item/shipping-mastershipping-logistic-management-system/25634423?s_rank=7",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "25",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Shipping Master is a shipping,cargo,dispatch and logistic management system with Google MAP API integrate so you can easily check the distance of cargo pickup and dispatch. Moreover it’s a complete system to run your shipping or logistic business.</p>
            <h6>Key Features:</h6>
            <hr>
            <ul>
                <li>Load Management with complete details&nbsp;</li>
                <li>Shipper and consignee Management&nbsp;</li>
                <li>Driver and Equipment Management&nbsp;</li>
                <li>Account Holder Management&nbsp;</li>
                <li>Fully Responsive and can be access from any device&nbsp;</li>
                <li>Developed with PHP Codeigniter Framework&nbsp;</li>
                <li>
                  <b>Easy to extend and&nbsp;</b>
                   <strong>maintainable</strong> 
                  <b>&nbsp;code&nbsp;</b>
                </li>
              </ul>

            <p><b>Demo</b>: <a href="http://roommatebd.com/amit/delivery/">Link</a></p>
            </p>
            <p><b>User: admin password: admin</b></p>
            <h6>TECHNOLOGIES USED:</h6>
            <hr>
            <ul>
                <li>
                  <a href="https://adminlte.io/themes/AdminLTE/index2.html" rel="nofollow">Admin LTE admin Template&nbsp;</a>
                </li>
                <li>
                  <a href="https://codeigniter.com" rel="nofollow">PHP Codeigniter</a>
                </li>
                <li>
                  <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>&nbsp;
                </li>
              </ul>

            <h6>DEFAULT CREDENTIALS:</h6>
            <hr>
            <p>A Default user with the below credentials will be created after migrating database.</p>
            <p>Username: admin</p>
            <p>Password: admin</p>`
        },
        {
            id: 8,
            image: kac,
            title: "Konstra Template for Architect and Construction",
            demo: "https://themeforest.net/item/konstra-construction-template-for-architect-and-construction/full_screen_preview/23635565",
            buy: "https://themeforest.net/item/konstra-construction-template-for-architect-and-construction/23635565?s_rank=1",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Konstra – is the most creative, and modern Construction HTML5 template suitable for any
            Construction websites.Easy to use & customize, design & code quality, responsive theme, creative
            sliders, flexibility,, shortcodes, Multiple portfolio options, Multiple blog options responsive
            and quick support – these are the outstanding features and quality to make us stand out from the
            crowd.</p>
        <h6>Main Features:</h6>
        <hr>
        <ul>
            <li>100% Responsive</li>
            <li>Bootstrap 5 Framework (V5.3)</li>
            <li>HTML5 and CSS3 Validation</li>
            <li>Scroll To Fixed Navbar</li>
            <li>Text Type Animation</li>
            <li>Cross Browser Compatible</li>
            <li>Clean &amp; Commented Code</li>
            <li>Easy to Customize</li>
            <li>Google fonts</li>
            <li>Font-Awesome fonts</li>
            <li>Well Documented</li>
            <li>Easy Customization</li>
            <li>W3C Validated</li>
            <li>24/7 Awesome Support</li>
            <li>and Many More…</li>
        </ul>
        <h6>Files included:</h6>
        <hr>
        <ul>
            <li>HTML Files</li>
            <li>Supporting CSS Files</li>
            <li>JS files</li>
            <li>Documentation in HTML</li>
        </ul>
        <h6>Credits:</h6>
        <hr>
        <p>
            1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
            3. Isotope – <a href="https://isotope.metafizzy.co/"
                rel="nofollow">https://isotope.metafizzy.co/</a><br>
            5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
            6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
            7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
            8. fontAwesome – <a href="https://fontawesome.com/"
                rel="nofollow">https://fontawesome.com/</a><br><br></p>
        <h6>Images:</h6>
        <hr>
        <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
        <h6>Support:</h6>
        <hr>
        <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or
            need special customizing please feel free to contact me via my Themeforest profile</p>

        <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b>
        </p>`
        },
        {
            id: 9,
            image: gsd,
            title: "Goseo SEO & Digital Marketing Agency Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>
            Goseo - SEO & Digital Marketing Agency Template - Marketing Corporate
            Live Preview
            GoSEO – is a powerful Digital Marketing Agency, Social Media, SEO HTML Template built on Bootstrap4, HTML5, CSS3, JavaScript, jQuery. This template is a highly suitable template for companies that offer SEO services as well as other internet marketing related services. . This is highly customizable – looks awesome on tablets and mobile devices. We have included a documentation folder to describe the code structures.</p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>100% Responsive</li>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Google fonts</li>
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>Easy Customization</li>
                <li>W3C Validated</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul><h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
            <h6>Support:</h6>
            <hr>
            <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or need special customizing please feel free to contact me via my Themeforest profile</p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 10,
            image: bbc,
            title: "Bizzo Business and Corporate Multipurpose HTML Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "10",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Bizzo – Corporate and Business Bootstrap4 Template is a Fully Responsive Corporate Template built on Bootstrap4, HTML5, CSS3, JavaScript, jQuery. It’s a modern crafted HTML5 template which can be used for Corporate website. This is highly customizable – looks awesome on tablets and mobile devices. We have included a documentation folder to describe the code structures.</p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>100% Responsive</li>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Google fonts</li>
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>Easy Customization</li>
                <li>W3C Validated</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul><h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
            <h6>Support:</h6>
            <hr>
            <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or need special customizing please feel free to contact me via my Themeforest profile</p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 11,
            image: ns,
            title: "Natamok Software Landing Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Natamok - Software Landing Template - Technology Site Templates
            Live Preview
            Natamok is a pixel-perfect HTML5 Software Landing Template powered with Bootstrap. It was designed to promote your software, services or business projects. Natamok also designed with different homepages which have also blog page, blog single page, login page, registration page, 404pages etc. And we documented it very well, you can easily change any code you want .</p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>100% Responsive</li>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Google fonts</li>
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>Easy Customization</li>
                <li>W3C Validated</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul><h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
            <h6>Support:</h6>
            <hr>
            <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or need special customizing please feel free to contact me via my Themeforest profile</p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 12,
            image: ca,
            title: "Cinja HTML5 App Landing Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Cinja is a pixel perfect Mobile App Landing Pages which crafted with terrific attention to details. It was designed to promote your mobile App, services or business projects. 21+ Different homepages has also blog page, blog single page with well documentation .
            </p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>100% Responsive</li>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Google fonts</li>
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>Easy Customization</li>
                <li>W3C Validated</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul><h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
            <h6>Support:</h6>
            <hr>
            <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or need special customizing please feel free to contact me via my Themeforest profile</p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 13,
            image: ta,
            title: "Tasoapp App Landing Page",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "12",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>TasoAPP is a pixel perfect Mobile App Landing Pages which crafted with terrific attention to details. It was designed to promote your mobile App, services or business projects. 25+ Different homepages has also blog page, blog single page with well documentation .
            </p>
            <p><b>For WordPress Version please visit: <a href="http://shtheme.com/?download=tasoapp-app-landing-wordpress">Taso App WordPress</a></b></p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>100% Responsive</li>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Google fonts</li>
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>Easy Customization</li>
                <li>W3C Validated</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul><h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>
            <h6>Support:</h6>
            <hr>
            <p>If you like this item, please rate , I’ll appreciate it, if you need any help using the file or need special customizing please feel free to contact me via my Themeforest profile</p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 14,
            image: bjp,
            title: "B-Jonni Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "10",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>B-Jonni is a Professional Online vCard, template which mainly focused on developers, freelancers, digital professionals, musicians and photographers. It is fully responsive and easy for you to edit. PHP contact form included. 16+ Different homepages has also blog page, blog single page and project single page with well documentation .
            </p>
            <h6>Main Features:</h6>
            <hr>
            <ul>
                <li>Bootstrap 5 Framework (V5.3)</li>
                <li>HTML5 and CSS3 Validation</li>
                <li>Scroll To Fixed Navbar</li>
                <li>Text Type Animation</li>
                <li>Cross Browser Compatible</li>
                <li>Clean &amp; Commented Code</li>
                <li>Easy to Customize</li>
                <li>Isotope Filtering</li>
                <li>Google fonts</li>
                <li>Google maps</li>    
                <li>Font-Awesome fonts</li>
                <li>Well Documented</li>
                <li>24/7 Awesome Support</li>
                <li>and Many More…</li>
            </ul>
            <h6>Files included:</h6>
            <hr>
            <ul>
                <li>HTML Files</li>
                <li>Supporting CSS Files</li>
                <li>JS files</li>
                <li>Documentation in HTML</li>
            </ul>
            <h6>Credits:</h6>
            <hr>
            <p>
                1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
                3. Isotope – <a href="https://isotope.metafizzy.co/"
                    rel="nofollow">https://isotope.metafizzy.co/</a><br>
                5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                    rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
                6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                    rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
                7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                    rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
                8. fontAwesome – <a href="https://fontawesome.com/"
                    rel="nofollow">https://fontawesome.com/</a><br><br></p>
            <h6>Images:</h6>
            <hr>
            <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>

            <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 15,
            image: tpp,
            title: "Taso Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "10",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>Taso is a Professional Online vCard, template which mainly focused on developers, freelancers,
            digital professionals, musicians and photographers. It is fully responsive and easy for you to
            edit. PHP contact form included. 9+ Different homepages has also blog page, blog single page and
            project single page with well documentation .
        </p>
        <h6>Main Features:</h6>
        <hr>
        <ul>
            <li>Bootstrap 5 Framework (V5.3)</li>
            <li>HTML5 and CSS3 Validation</li>
            <li>Scroll To Fixed Navbar</li>
            <li>Text Type Animation</li>
            <li>Cross Browser Compatible</li>
            <li>Clean &amp; Commented Code</li>
            <li>Easy to Customize</li>
            <li>Isotope Filtering</li>
            <li>Google fonts</li>
            <li>Google maps</li>
            <li>Font-Awesome fonts</li>
            <li>Well Documented</li>
            <li>24/7 Awesome Support</li>
            <li>and Many More…</li>
        </ul>
        <h6>Files included:</h6>
        <hr>
        <ul>
            <li>HTML Files</li>
            <li>Supporting CSS Files</li>
            <li>JS files</li>
            <li>Documentation in HTML</li>
        </ul>
        <h6>Credits:</h6>
        <hr>
        <p>
            1. Jquery – <a href="https://jquery.com/" rel="nofollow">https://jquery.com/</a><br>
            3. Isotope – <a href="https://isotope.metafizzy.co/"
                rel="nofollow">https://isotope.metafizzy.co/</a><br>
            5. Owl Carousel 2 – <a href="https://owlcarousel2.github.io/OwlCarousel2/"
                rel="nofollow">https://owlcarousel2.github.io/OwlCarousel2/</a><br>
            6. scrollIt js – <a href="https://github.com/cmpolis/scrollIt.js/"
                rel="nofollow">https://github.com/cmpolis/scrollIt.js/</a><br>
            7. Headline js – <a href="https://codyhouse.co/demo/animated-headlines/index.html"
                rel="nofollow">https://codyhouse.co/demo/animated-headlines/</a><br>
            8. fontAwesome – <a href="https://fontawesome.com/"
                rel="nofollow">https://fontawesome.com/</a><br><br></p>
        <h6>Images:</h6>
        <hr>
        <p><a href="https://www.pexels.com/" rel="nofollow">www.pexels.com</a></p>

        <p><b>Note: All images are used for preview only and not included in the final purchase pack.</b></p>`
        },
        {
            id: 16,
            image: vc,
            title: "VIP Creative Landing Page HTML5 Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "10",
            link: "#",
            bgColor: "bg-white",
            desc: `<p>VIP-THEME Personal Portfolio Template is a Simple, Modern, Creative and Responsive HTML5 One page
            Template. This theme gives you a personal space to share what you are all about as a creative
            designer, photographer, developer, or any profession! It’s fully customisation, you can change
            the background easily and set any color to elements such as links, buttons, etc. This is built
            with modern technologies like HTML5, CSS3, jQuery, BootStrap 4. It is 100% responsive with clean
            modern design If you like this template, please rate it
        </p>
        <h6>Main Features</h6>
        <hr>
        <ul>
            <li>8+ Creative Layouts</li>
            <li>Clean And Modern Design</li>
            <li>Bootstrap 5 Based</li>
            <li>HTML5, CSS3, jQuery</li>
            <li>Full responsive and Mobile friendly</li>
            <li>Well commented and w3c validated codes</li>
            <li>Dynamic contact form with PHP,</li>
            <li>W3C Validate HTML code</li>
            <li>All files are well commented</li>
            <li>24/7 Friendly customer support</li>
            <li>Google Fonts</li>
            <li>PHP Contact Forms</li>
            <li>Documentation</li>
        </ul>
        <h6>What do you get?</h6>
        <hr>
        <ul>
            <li>HTML Contents</li>
            <li>Documentation</li>
        </ul>
        <h6>Sources and Credits:</h6>
        <hr>
        <ul>
            <li>HTML Contents</li>
            <li>Documentation</li>
            <li>HTML Files</li>
            <li>Css Files</li>
            <li>JS Files</li>
        </ul>
        <h6>Images:</h6>
        <hr>
        <ul>
            <li>Pexels.com</li>
        </ul>

        <h6>Note</h6>
        <hr>
        <p>Images used in demo, even they are sample, are not included in downloadable file.

            This is purely an HTML/CSS template and not a WordPress or any other CMS theme.</p>`
        },
        {
            id: 17,
            image: lm,
            title: "LOGAN Multipurpose HTML5 Business Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "10",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>LOGAN </b> is a flat and responsive site template with a clean and professional design, built
            with twitter bootstrap. It will be a great solution for your business, portfolio, blog or any
            other purpose. It has multiple options for homepage and blog. Since the template is responsive,
            the layout will adapt to different screen sizes which will make your website compatible with any
            device such as smart phones, tablets and desktop computers.
        </p>
        <h6>LOGAN Features:</h6>
        <hr>
        <ul>
            <li>Clean and&nbsp;<strong>professional</strong>&nbsp;design</li>
            <li>Various Home and blog layouts</li>
            <li>Multiple homepage layout&nbsp;<strong>combinations</strong>
            </li>
            <li>Fully responsive</li>
            <li>Twitter&nbsp;<strong>Bootstrap</strong>&nbsp;5.3</li>
            <li>SEO-friendly</li>
            <li>Pricing tables</li>
            <li>Rich styling options</li>
            <li>Help documentation</li>
            <li>jQuery enhanced</li>
            <li>Cross browser&nbsp;<strong>compatibility</strong>
            </li>
            <li>
                <strong>Valid</strong>&nbsp;HTML5 &amp; CSS3
            </li>
        </ul>
        <h6>Credits</h6>
        <hr>
        <ul>
            <li><a href="https://unsplash.com/" rel="nofollow">https://unsplash.com/</a></li>
            <li><a href="http://picjumbo.com/" rel="nofollow">http://pixabay.com/</a></li>
            <li><a href="http://www.pixeden.com/" rel="nofollow">http://www.pexels.com/</a></li>
            <li><a href="https://owlcarousel2.github.io/OwlCarousel2/" rel="nofollow">Own Carousel</a></li>
            <li><a href="https://isotope.metafizzy.co/" rel="nofollow">Isotope Jquery Plugin</a></li>
            <li><a href="https://daneden.github.io/animate.css/" rel="nofollow">Animate CSS</a></li>
        </ul>
        <h6>This is an HTML template, and includes the following files:</h6>
        <hr>
        <ul>
            <li>HTML files</li>
            <li>CSS files</li>
            <li>JS files</li>
            <li>Documentation</li>
        </ul>

        <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
        {
            id: 18,
            image: sap,
            title: "SynchroAgency One Page Agency & Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "8",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Synchro Agency</b> is a creative agency template suitable for modern businesses. It is 100%
            responsive and looks stunning on all types of screens and devices. Well organized and very easy
            to customize, Synchro Agency is better way to present your modern business.</p>
        <p>IF YOU LIKE THIS WORK, DON’T FORGET TO RATE US 5 STAR AND GIVE YOUR FEEDBACK FOR BETTER UPDATE.
        </p>
        <h6>Synchro Agency Features:</h6>
        <hr>
        <ul>
            <li>Valid HTML5 &amp; CSS3</li>
            <li>Clean and professional design</li>
            <li>Cross browser compatible</li>
            <li>A smart and unique approach to showcase your agency skills and work</li>
            <li>The code is clean and easy to modify</li>
            <li>Fully Responsive</li>
            <li>Well Documented</li>
        </ul>
        <h6>Source and credits: </h6>
        <hr>
        <ul>
            <li><a href="http://jquery.com/" rel="nofollow">jQuery</a></li>
            <li><a href="http://getbootstrap.com/" rel="nofollow">Bootstrap Framework</a></li>
            <li><a href="https://www.pexels.com/" rel="nofollow">Pexels</a></li>
        </ul>
        <h6>This is an HTML template, and includes the following files:</h6>
        <hr>
        <ul>
            <li>HTML files</li>
            <li>CSS files</li>
            <li>JS files</li>
            <li>Documentation</li>
        </ul>
        <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
        {
            id: 19,
            image: cpp,
            title: "Creative Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "8",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Creative </b> is a Modern Responsive Personal and Portfolio Resume HTML5 Template which has
            been built using Twitter Bootstrap framework. Showcase your Portfolio,Education, Qualification
            and many more things via this template.</p>
        <p>IF YOU LIKE THIS WORK, DON’T FORGET TO RATE US 5 STAR AND GIVE YOUR FEEDBACK FOR BETTER UPDATE.
        </p>
        <h6>Creative Features:</h6>
        <hr>
        <ol>
            <li>One Page Template</li>
            <li>Minimal Design</li>
            <li>Cross Browser Compatible</li>
            <li>Clean Code</li>
            <li>HTML5 Validation</li>
            <li>Working Ajax Contact Form</li>
            <li>Well Documented</li>
            <li>24/7 Support</li>
        </ol>
        
        <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
        {
            id: 20,
            image: app,
            title: "ALEX Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "8",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Alex  </b> iis a Modern Responsive Personal and Portfolio Resume HTML5 Template which has been built using Twitter Bootstrap framework. Showcase your Portfolio,Education, Qualification and many more things via this template.</p>
            <p>IF YOU LIKE THIS WORK, DON’T FORGET TO RATE US 5 STAR AND GIVE YOUR FEEDBACK FOR BETTER UPDATE.
            </p>
            <h6>Alex  Features:</h6>
            <hr>
            <ol>
                <li>One Page Template</li>
                <li>Minimal Design</li>
                <li>Cross Browser Compatible</li>
                <li>Clean Code</li>
                <li>HTML5 Validation</li>
                <li>Working Ajax Contact Form</li>
                <li>Well Documented</li>
                <li>24/7 Support</li>
            </ol>
            
            <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
        {
            id: 21,
            image: sypp,
            title: "Synchro Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "8",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>Synchro </b>is a Modern Responsive Personal and Portfolio Resume HTML5 Template which has been built using Twitter Bootstrap framework. Showcase your Portfolio,Education, Qualification and many more things via this template.</p>
            <p>IF YOU LIKE THIS WORK, DON’T FORGET TO RATE US 5 STAR AND GIVE YOUR FEEDBACK FOR BETTER UPDATE.
            </p>
            <h6>Synchro Features:</h6>
            <hr>
            <ol>
                <li>One Page Template</li>
                <li>Minimal Design</li>
                <li>Cross Browser Compatible</li>
                <li>Clean Code</li>
                <li>HTML5 Validation</li>
                <li>Working Ajax Contact Form</li>
                <li>Well Documented</li>
                <li>24/7 Support</li>
            </ol>
            
            <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
        {
            id: 22,
            image: spp,
            title: "Solo Personal Portfolio Template",
            demo: "",
            buy: "",
            attr: {
                version: '1.0',
                last_update: '',
                downloads: '',
                activeInstall: '',
                wpVersion: '',
                tested: '',
            },
            price: "8",
            link: "#",
            bgColor: "bg-white",
            desc: `<p><b>SOLO</b> is a Modern Responsive Personal and Portfolio Resume HTML5 Template which has been
            built using Twitter Bootstrap framework. Showcase your Portfolio,Education, Qualification and
            many more things via this template.</p>
        <p>IF YOU LIKE THIS WORK, DON’T FORGET TO RATE US 5 STAR AND GIVE YOUR FEEDBACK FOR BETTER UPDATE.
        </p>
        <h6>Solo Features:</h6>
        <hr>
        <ul>
            <li>One Page Template</li>
            <li>Minimal Design</li>
            <li>Cross Browser Compatible</li>
            <li>Clean Code</li>
            <li>HTML5 Validation</li>
            <li>Working Ajax Contact Form</li>
            <li>Well Documented</li>
            <li>24/7 Support</li>
        </ul>
        <p><b>Note: Images are only for demo purpose and not included with the download bundle.</b></p>`
        },
    ];

    return {
        props: {
            items: items,
            slug: params.slug
        }
    }

}   

export function getStaticPaths() {
    let plugins = [
        {
            title: "SYNO WooCommerce Product Carousel",
        },
        {
            title: "Syno Elementor Image Gallery",
        },
        {
            title: "Syno Elementor Product Carousel",
        },
        {
            title: "Syno Elementor Timeline Widget",
        },
        {
            title: "SYNO Before After Image Comparison Plugin",
        },
        {
            title: "SYNO ELEMENTOR POST GRID ADDON",
        },
        {
            title: 'Shipping Master Shipping & Logistic Management System',
        },
        {
            title: 'Konstra Template for Architect and Construction',
        },
        {
            title: 'Goseo SEO & Digital Marketing Agency Template',
        },
        {
            title: 'Bizzo Business and Corporate Multipurpose HTML Template',
        },
        {
            title: 'Natamok Software Landing Template',
        },
        {
            title: 'Cinja HTML5 App Landing Template',
        },
        {
            title: 'Tasoapp App Landing Page',
        },
        {
            title: 'B Jonni Personal Portfolio Template',
        },
        {
            title: 'Taso Personal Portfolio Template',
        },
        {
            title: 'VIP Creative Landing Page HTML5 Template',
        },
        {
            title: 'LOGAN Multipurpose HTML5 Business Template',
        },
        {
            title: 'SynchroAgency One Page Agency & Portfolio Template',
        },
        {
            title: 'Creative Personal Portfolio Template',
        },
        {
            title: 'ALEX Personal Portfolio Template',
        },
        {
            title: 'Synchro Personal Portfolio Template',
        },
        {
            title: 'Solo Personal Portfolio Template',
        },
    ];

    return {
        paths: plugins.map(plugin => {
            let slug = plugin.title.toLowerCase().replace(/ /g, '-');
            return {
                params: {
                    slug
                }
            }
        }),
        fallback: false
    }
}