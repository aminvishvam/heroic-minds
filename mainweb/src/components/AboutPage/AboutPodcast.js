import React, { Component } from "react";
import PodcastImg from "../../assets/AboutPageAssets/Podcast.svg"
import Spotify from "../../assets/AboutPageAssets/Spotify.svg"
// import Spotify_black from "../../assets/AboutPageAssets/spotify_logo.svg"
import Itunes from "../../assets/AboutPageAssets/apple_podcast.svg"
import Google from "../../assets/AboutPageAssets/google_podcast.svg"
import "./AboutPage.css"

class Podcast extends Component {
    renderPage1() {
        return (
            <div>
                <div className="d-flex flex-md-nowrap flex-wrap-reverse align-items-center justify-content-md-around justify-content-center">
                    <div className="col-xl-8 col-md-7 mr-4 mt-5">
                        <div className="text text-black-333 s30 lh130">The Heroic Minds Podcast</div>
                        <div className="text text-black-079 s16 lh160 mt-4">
                            On this podcast we dive into the minds of heroes that ventured
                            through adversity and came out the other side transformed into
                            something greater. Entrepreneurs on a mission to change the world.
                            Athletes and performers with incredible abilities for higher
                            execution. Individuals making social change because they’re
                            unsatisfied with the status quo. Doctors, pushing the boundaries
                            of knowledge to push the needle on human potential. People that
                            made the decision to be the hero of their story. Join Host Ben
                            Fanelli, Brain Injury Survivor and social entrepreneur that
                            changed his passion from chasing the National Hockey League to
                            learning and sharing the intricacies of human performance with the
                            world.
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-5 text-center mt-5"><img src={PodcastImg} className="img-fluid" /></div>
                </div>
                <div className="d-flex flex-column mt-7">
                    <div className="text-center text text-black-333 s30 lh130">Available On:</div>
                    <div className="mt-5 d-flex justify-content-center">
                        <a href="" className="logo">
                            <img src={Spotify} />
                        </a>
                        <a href="" className="logo">
                            <img src={Itunes} />
                        </a>
                        <a href="" className="logo">
                            <img src={Google} />
                        </a>
                        {/* <a href="" className="btn-lg border border-dark text-black ls1 k18 m-3">
                            <img src={Spotify} className="img-fluid" />&nbsp;Click Here
                        </a>
                        <a href="" className="btn-lg border border-dark text-black ls1 k18 m-3">
                            <img src={Itunes} className="img-fluid" />&nbsp;Click Here
                        </a>
                        <a href="" className="btn-lg border border-dark text-black ls1 k18 m-3">
                            <img src={Google} className="img-fluid" />&nbsp;Click Here
                        </a> */}
                    </div>
                </div>
            </div>
        );
    }

    renderPage2() {
        return <div></div>;
    }

    render() {
        return (
            <div className="my-container-90">
                <section className="mt-5">{this.renderPage1()}</section>
                <section>{this.renderPage2()}</section>
            </div>
        );
    }
}

export default Podcast;
