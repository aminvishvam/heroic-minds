import React, { Component } from "react";
import { StoryBox } from "../HomePage/StoryBox/StoryBox";
import Book from "../../assets/AboutPageAssets/Book.svg";
import Pen from "../../assets/AboutPageAssets/Pen.svg";

class Research extends Component {
    renderHead() {
        return (
            <div className="mt-6">
                <div className="text bold k40 lh150" >Heroic Minds Research</div>
                <div className="text text-black-333 h22 lh120 mt-3">
                    All you have to do is listen to &nbsp;<span><img src={Book} width="30px" height="30px" className="mb-3" /></span>&nbsp; and journal about &nbsp;<span><img src={Pen} width="30px" height="30px" className="mb-3" /></span>&nbsp; any 2 of the 4
                    stories below and provide your feedback in the link below (2 minutes).
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="my-container-85">
                <section>{this.renderHead()}</section>
                <section>
                    <section className="mt-10 ">{<StoryBox />}</section>
                </section>
            </div>
        );
    }
}

export default Research;
