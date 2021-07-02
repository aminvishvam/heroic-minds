import React, { Component } from "react";
import comingSoonImg from "../../assets/Community-Coming-Soon.jpg";
import "./ComingSoon.css";

class Community extends Component {

    renderImg() {
        return (
            <div className="text-center image-block m-0">
                <img className='img-fluid community-bg-img opacity-1' alt='' src={comingSoonImg} />
            </div>
        );
    }

    renderHead() {
        return (
            <div className="header-text">

                <p className="text bold k70 text-center pt-10 layout2">Coming Soon!</p>
                <br />
                <p className="text k40 lh150 text-center">Be the first to hear when<br /> Heroic Minds go live!</p>
                <br />
                <p className="text-center"><input type="email" class=" text intro h28 lh100 pl4" id="email1" placeholder="Email..." /></p>
            </div >



        );
    }

    render() {
        return (
            <div classname="Community">
                <section>
                    {this.renderImg()}
                </section>
                <section>
                    {this.renderHead()}
                </section>
            </div>
        );
    }

}


export default Community;
