import React, { Component } from "react";
import comingSoonImg from "../../assets/coming-soon.jpg";
import "./ComingSoon.css";


class Login extends Component {
    renderImg() {
        return (
            <div className="text-center image-block">
                <img className='img-fluid bg-img' alt='' src={comingSoonImg} />
            </div>
        );
    }

    renderHead() {
        return (
            <div className="header-text-animation coming-soon-head">

                <p className="text bold k70 text-center pt-10">Coming Soon!</p>
                <br />
                <p className="text k40 lh150 text-center">Be the first to hear when<br /> Heroic Minds go live!</p>
                <br />
                <p className="text-center"><input type="email" className=" text intro h28 lh100 pl4" id="email1" placeholder="Email..." /></p>
            </div >


        );
    }

    render() {
        return (
            <div className="Login">
                <section>
                    {this.renderImg()}
                    {this.renderHead()}
                </section>
            </div>
        );
    }

}

export default Login;
