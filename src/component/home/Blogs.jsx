import UTPW from "@/img/Unlocking-the-Power-of-WordPress-with-HTML-to-WordPress-Conversion.jpeg";
import Blog_Post from '../card/Blog_Post';

export default function Blogs() {

    let items = [
        {
            id: 1,
            img: UTPW,
            title: 'Unlocking the Power of WordPress with HTML to WordPress Conversion',
            shortDesc: `<p>In today's digital landscape, having a dynamic and easily manageable website is crucial for businesses and individuals alike.</p>`,
            bgColor: 'bg-white'
        }
    ]

    return (
        <section className="home_blog_wrap section_padding bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="section_title text-center mb-5 pb-4">
                            <h4>Latest Blog Posts</h4>
                            <p>Ready to Improve Your WordPress Knowledge ?</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {items && items.map(item => (
                                <div className="col-md-4" key={item.id}>
                                    <Blog_Post
                                        img={item.img}
                                        title={item.title}
                                        shortDesc={item.shortDesc}
                                        link={item.link}
                                        bgColor={item.bgColor}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}