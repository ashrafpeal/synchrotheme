import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faCalendarAlt, faDownload, faChartLine, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faWordpressSimple } from "@fortawesome/free-brands-svg-icons";

export default function Item({ image, title, demo, buy, attr, price, desc }) {
    let version = (attr.version) ? attr.version : '';
    let last_update = (attr.last_update) ? attr.last_update : '';
    let downloads = (attr.downloads) ? attr.downloads : '';
    let activeInstall = (attr.activeInstall) ? attr.activeInstall : '';
    let wpVersion = (attr.wpVersion) ? attr.wpVersion : '';
    let tested = (attr.tested) ? attr.tested : '';
    return (

        <section className="single_product_wrap bg-light  section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Image alt={title}
                                className="rounded w-100" src={image} />
                            <div className="d-flex justify-content-center align-content-center mt-4">
                                <Link href={demo}
                                    className="btn btn-warning rounded-pill py-2 px-4 text-white" target="_blank">Live Demo</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="purchase_box bg_blue_light p-4 rounded">
                                <h4>Purchase a Licence</h4>
                            <h6 className="my-3">${ price }</h6>
                                <Link href={buy}
                                    className="btn btn-primary cbtn_blue py-3 mx-auto w-100 rounded-pill fs-5 mb-4">Buy From
                                    Themeforest</Link>
                                <small className="d-block">All prices are given in USD exclusive TAX/ VAT. TAX/ VAT will be charged
                                    depending on the destination country.</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bg-white rounded-3 p-5 my-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center mb-5">
                                            <div
                                                className="c_icon icon_red me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faRotate} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5>Version:</h5>
                                                <p className="m-0">{ version }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center mb-5">
                                            <div
                                                className="c_icon icon_yellow me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faCalendarAlt} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5 className="lh-1 mb-1">Last updated:</h5>
                                                <p className="m-0">{ last_update }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center mb-5">
                                            <div
                                                className="c_icon icon_blue me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faDownload} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5 className="lh-1 mb-1">Downloads:</h5>
                                                <p className="m-0">{ downloads }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="c_icon icon_green me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faChartLine} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5 className="lh-1 mb-1">Active Installations:</h5>
                                                <p className="m-0">{ activeInstall }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="c_icon icon_blue_dark me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                            <i className="fa-brands fa-wordpress-simple fs-2"></i>
                                                <FontAwesomeIcon icon={faWordpressSimple} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5 className="lh-1 mb-1">WordPress Version:</h5>
                                                <p className="m-0">{ wpVersion }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="c_icon icon_violet me-3 rounded-pill d-inline-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faClipboardCheck} style={{
                                                    transform: "scale(1.9)"
                                                }} />
                                            </div>
                                            <div>
                                                <h5 className="lh-1 mb-1">Tested up to:</h5>
                                                <p className="m-0">{ tested }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div dangerouslySetInnerHTML={{ __html: desc }}></div>
                        </div>
                    </div>
                </div>
            </section>

    );
}