import post from '@/img/blog-post.png'
import Blog from '../card/Blog_Post';
import Blog_Post from '../card/Blog_Post';

export default function Blogs() {

    let items = [
        {
            id: 1,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg_blue_light' 
        },
        {
            id: 2,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg_blue_light' 
        },
        {
            id: 3,
            img: post,
            title: '10 Common WordPress Myths and Facts',
            shortDesc: 'WordPress is the most popular content management system (CMS) in the world, with over 60 million websites using it.',
            link: '#',
            bgColor: 'bg_blue_light' 
        },
    ]

    return (
        <section class="home_blog_wrap section_padding bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="section_title text-center mb-5 pb-4">
                            <h4>Latest Blog Posts</h4>
                            <p>Ready to Improve Your WordPress Knowledge ?</p>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
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