import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-black mt-8 mb-10 ">
                <br />
                <div className="container mt-3 pb-3 ">
                    <div className="text-center text-white s30 lh200">
                        HEROIC MINDS<sup>TM</sup>
                    </div>
                    <br />
                    <div className="text-uppercase text-center fw100 s18 lh150 justify-content-center mt-3 row">
                        <div className="link-text p-4">
                            <Link
                                to="/press"
                                className="footer-link-text "
                                activeClassName='active'
                                activeStyle={
                                    { color: "#F57C00", fontWeight: "bold" }
                                }
                            >
                                work with the creator
                            </Link>
                        </div>

                        <div className="p-4"><Link
                            to="/press"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            privacy policy
                        </Link></div>
                        <div className="p-4"><Link
                            to="/press"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            terms of use
                        </Link></div>
                        <div className="link-text p-4">
                            <Link
                                to="/press"
                                className="footer-link-text "
                                activeClassName='active'
                                activeStyle={
                                    { color: "#F57C00", fontWeight: "bold" }
                                }
                            >
                                press
                            </Link>
                        </div>
                        <div className="p-4"><Link
                            to="/press"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            contact
                        </Link>
                        </div>
                    </div>
                    <br />
                    <div className="text-white s16 lh200 text-center">
                        &copy; 2021 Heroic Minds All Rights Reserved
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
