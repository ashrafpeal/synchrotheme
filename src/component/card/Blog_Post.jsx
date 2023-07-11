import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";


export default function Blog_Post({ img, title, shortDesc, link, bgColor = "bg_blue_light" }) {
    return (
        <div className={`home_blog overflow-hidden rounded shadow-sm mb-sm-3 ${bgColor}`}>
            <div className="img">
                <Image src={img} alt={title} className="w-100"/>
            </div>
            <div className="content py-4 px-3">
                <h5>{ title }</h5>
                <p>{ shortDesc }</p>
                <Link href={link} className="d-flex"><span>Read More</span> <FontAwesomeIcon icon={faArrowRight} style={{transform: "scale(0.5)", width: "40px", height: "30px", }} /></Link>
            </div>
        </div>
    );
}