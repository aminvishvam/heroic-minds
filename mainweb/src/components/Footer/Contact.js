import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayBox from "../DisplayBox/DisplayBox";

class Contact extends Component {


    renderHeader() {
        return (
            <div className="mt-6">
                <div className="text k40 bold lh100 pl-3">
                    <Link
                        to="/contact/frequently-asked-questions"
                        className="link-text text-black-333"
                    > Frequently Asked Questions</Link>
                </div>
            </div>
        );
    }

    renderInfoLeft() {
        return (
            <div>
                <p className="text bold text-black-047 h28 lh150">For:</p>
                <p className="text h24 text-black-047 lh150">General Inquiries
                    <br />Press  Media
                    <br />Team/Organization Subscription</p>
                <p className="text h28 text-black-333 lh200">Email:&ensp;<u><a href="mailto:info@heroicminds.live" className="text-black-333">info@heroicminds.live</a></u></p>
            </div>);

    }

    renderInfoRight() {
        return (<div className="pt-4">
            <p className="text bold text-black-047 h28 lh150">Main Office</p>
            <p className="text h24 text-black-047 lh150">191 King Street South Waterloo, Ontario Canada</p>
        </div>);

    }


    render() {
        return (
            <div className="col-sm-11 col-md-11 col-lg-11 col-11  mx-auto mb-15">
                <section>{this.renderHeader()}</section>

                <section className="mt-5">
                    <DisplayBox
                        colLeft="5"
                        colRight="7"
                        contentLeft={this.renderInfoLeft()}
                        contentRight={this.renderInfoRight()}
                        fullContainer="true"
                    />
                </section>

                <section className="mt-4 pl-3">
                    <div>
                        <p className="text h28 lh200 bold text-black-047">Work with Ben</p>
                        <button type="submit" className="btn-lg btn-black ls1 k18">
                            Click Here
                        </button>
                    </div>
                </section>

            </div>
        );
    }

}

export default Contact;