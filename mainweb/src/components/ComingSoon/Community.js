import React, { Component } from "react";
import comingSoonImg from "../../assets/Community-Coming-Soon.jpg";
import "./ComingSoon.css";

class Community extends Component {

    renderImg() {
        return (
            <div className="text-center community-image-block">
                <img className='img-fluid community-bg-img' alt='' src={comingSoonImg} />
            </div>
        );
    }

    renderHead() {
        return (
            <div className="header-text-animation coming-soon-head">

                <p className="text bold k70 text-center">Coming Soon!</p>
                <br />
                <p className="text k40 lh150 text-center">Be the first to hear when<br /> Heroic Minds go live!</p>
                <br />
                <p className="text-center"><input type="email" className="text intro h28 lh100 pl4" id="email1" placeholder="Email..." /></p>
            </div >



        );
    }

    render() {
        return (
            <div className="Community">
                <section>
                    {this.renderHead()}
                    {this.renderImg()}
                </section>
            </div>
        );
    }

}


export default Community;
