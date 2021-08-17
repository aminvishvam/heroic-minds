import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.svg";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./AuthorPage.css";

class AuthorPage extends Component {
  renderHead1() {
    return (
      <div className="author-page-head mt-5">
        <p className="text text-nowrap text-yellow fw600 k40 lh120 mb-0">
          The Heroic Minds™ Community
        </p>
        <p className="text fw600 k50 lh120 mt-10 ">
          Stories from around
          <br /> the world.
        </p>
        <p className="txt intro h20 lh150">
          Have a story or idea that would make the world a more courageous, resilient place?



        </p>
      </div>
    );
  }

  renderHead1Img() {
    return (
      <div className=" align-middle mt-5">
        <div className="text-xl-left text-center">
          <img alt="Hompage-image2" className="img-fluid  book-img" src={book} />
        </div>
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
      <div className="Author-Page">
        <div className="my-container-90">
          <section className="mt-7">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderHead1()}
              contentRight={this.renderHead1Img()}
              fullContainer="true"
              alwaysColumn="true"
            />
          </section>
          <section className="mt-5">{this.renderSharebtn()}</section>
        </div>

        <section className="mt-15 mb-7 my-container-95">
          <div className=" text-center">
            <img alt="Hompage-image2" className="img-fluid " src={bookBack} />
          </div>
        </section>
      </div >
    );
  }
}

export default AuthorPage;
