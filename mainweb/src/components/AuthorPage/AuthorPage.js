import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.png";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./AuthorPage.css";

class AuthorPage extends Component {
  renderHead1() {
    return (
      <div className="d-flex flex-wrap">
        <div className="author-page-head mt-5">
          <p className="text text-nowrap text-yellow fw600 k40 lh120 mb-0">
            The Heroic Minds™ Community
          </p>
          <span className="text s12 lh100 mt-0">(Coming Soon)</span>
          <p className="text fw600 k40 lh120 mt-5 text-nowrap">
            Stories from around the world.
          </p>
          <p className="txt intro h20 lh150">
            Have a story or idea that would make the world a more courageous, resilient place?
          </p>
        </div>
        <div className="align-middle mt-5 px-5 mx-auto">
          <div className="text-xl-left text-center">
            <img alt="Hompage-image2" className="img-fluid  book-img" src={book} />
          </div>
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
            {this.renderHead1()}
          </section>
          {/* <section className="mt-5">{this.renderSharebtn()}</section> */}
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
