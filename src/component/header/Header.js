import Logo from "@/img/logo.png"
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
      <header className="bg-white main_menu_wrap">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg bg-white main_menu">
                        <div className="container-fluid">
                            <Link className="navbar-brand logo" href="/">
                                <Image src={Logo} alt="WP Dev Masters" width={200} height={25}/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/plugin">Plugins</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/scripts">Scripts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/themes">Themes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
