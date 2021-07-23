import React, { Component } from "react";
import "./../ComingSoon/ComingSoon.css";

class Press extends Component {



    renderHead() {
        return (
            <div className="header-text-animation h-100 mb-18">

                <div className="text bold k70 text-center mt-18 ">Coming Soon!</div>
                <br />
                <div className="text k40 lh150 text-center">Be the first to hear when<br /> Heroic Minds go live!</div>
                <br />
                <div className="text-center"><input type="email" className=" text intro h28 lh100 pl4" id="email1" placeholder="Email..." /></div>
            </div >



        );
    }

    render() {

        return (
            <div className="Press">
                <section>
                    {this.renderHead()}
                </section>
            </div>
        );
    }
}

export default Press;
