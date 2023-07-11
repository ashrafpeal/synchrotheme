import Image from "next/image";
import Link from "next/link";

export default function Card({image, title, shortDesc, price, link, bgColor = 'bg-white'}) {
    return (
        <div className={`item_one shadow-sm position-relative rounded mb-4 overflow-hidden ${bgColor}`}>
            <div className="img">
                <Image src={image} alt={title} />
            </div>
            <div className="content py-4 px-4">
                <h5 className="mb-2"><Link href={link}
                    className="text-dark lh-base">{ title }</Link></h5>
                <div className="my-3" dangerouslySetInnerHTML={{__html: shortDesc}}></div>
                <div className="box d-flex align-items-center justify-content-between">
                    <div className="price fw-bold fs-5">${ price }</div>
                    <Link href={link}
                        className="btn btn-primary cbtn_outline_blue">More Details</Link>
                </div>
            </div>
        </div>
    );
}