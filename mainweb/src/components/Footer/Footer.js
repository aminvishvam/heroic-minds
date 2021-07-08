import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-black mt-8 mb-0 vertical-align-bottom">
                <br />
                <div className="container mt-3 pb-3 ">
                    <div className="text-center text-white s30 lh200 ls1">
                        HEROIC MINDS<sup className='sup'>TM</sup>
                    </div>
                    <br />
                    <div className="text-uppercase text-center fw100 s18 lh150 justify-content-center mt-3 row">
                        <div className="link-text p-4">
                            <NavLink
                                to="/work-with-the-creator"
                                className="footer-link-text "
                                activeClassName='active'
                                activeStyle={
                                    { color: "#F57C00", fontWeight: "bold" }
                                }
                            >
                                work with the creator
                            </NavLink>
                        </div>

                        <div className="p-4"><NavLink
                            to="/privacy-policy"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            privacy policy
                        </NavLink></div>
                        <div className="p-4"><NavLink
                            to="/terms-of-use"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            terms of use
                        </NavLink></div>
                        <div className="link-text p-4">
                            <NavLink
                                to="/press"
                                className="footer-link-text "
                                activeClassName='active'
                                activeStyle={
                                    { color: "#F57C00", fontWeight: "bold" }
                                }
                            >
                                press
                            </NavLink>
                        </div>
                        <div className="p-4"><NavLink
                            to="/contact"
                            className="footer-link-text "
                            activeClassName='active'
                            activeStyle={
                                { color: "#F57C00", fontWeight: "bold" }
                            }
                        >
                            contact
                        </NavLink>
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
