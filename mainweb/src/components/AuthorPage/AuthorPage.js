import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.svg";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./AuthorPage.css";

class AuthorPage extends Component {
  renderHead1() {
    return (
      <div className="author-page-head mt-6">
        <p className="text text-yellow fw600 k40 lh120 ">
          Share a story.
          <br />
          Be rewarded.
        </p>
        <p className="text fw600 k50 lh120 mt-6 ">
          Stories from around
          <br /> the world.
        </p>
      </div>
    );
  }

  renderHead1Img() {
    return (
      <div className="text-center mt-6">
        <img alt="Hompage-image2" className="img-fluid book-img" src={book} />
      </div>
    );
  }

  renderSharebtn() {
    return (
      <div className="text-center">
        <button type="submit" className="btn-lg btn-black book-btn-text">
          Share Something Today
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="">
        <div className="my-container-90">
          <section className="mt-3">
            <DisplayBox
              colLeft="6"
              colRight="6"
              contentLeft={this.renderHead1()}
              contentRight={this.renderHead1Img()}
              fullContainer="true"
              alwaysColumn="true"
            />
          </section>
          <section className="pl-3 mt-6">
            <div className="txt intro h24 lh150">

              Your stories shared in the Heroic Minds Community may be featured
              in the Heroic Minds Library!
              <br />
              <b>Plus,</b> if your story is chosen, a Heroic Minds gift will be
              delivered to your door.

            </div>
          </section>
          <section className="mt-7">{this.renderSharebtn()}</section>
        </div>

        <section className="mt-10 mb-7 my-container-95">
          <div className=" text-center">
            <img alt="Hompage-image2" className="img-fluid" src={bookBack} />
          </div>
        </section>
      </div >
    );
  }
}

export default AuthorPage;
