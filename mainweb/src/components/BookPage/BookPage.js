import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.svg";
import DisplayBox from "../DisplayBox/DisplayBox";

class BookPage extends Component {
  renderLeft1() {
    return (
      <div className="res-box">
        <h1 className="book-tagline-layout1">
          The first book of its kind.
          <br /> Created by you.
        </h1>
        <h1 className="book-tagline-layout1">
          100 Heroic Stories from around the world.
        </h1>
        <br />
        <p className="book-intro-layout1">
          100 empowering stories &amp; ideas from the Heroic Minds Community,
          packaged up and shared with the world.
        </p>
      </div>
    );
  }
  renderRight1() {
    return (
      <div className="res-box">
        <span className="img_animat1">
          <img alt="Hompage-image2" className="img-fluid" src={book} />
        </span>
      </div>
    );
  }
  render() {
    return (
      <div className="BookPage">
        <section className="layout">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
          />
        </section>
        <section className="layout">
          <div className="container">
            <div className="row justify-content-center">
              <div className="book-section">
                <button type="submit" className="btn btn-dark">
                  Share Something Today
                </button>
                <p className="book-intro-layout2">
                  because everyone has a story to share.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <img alt="Hompage-image2" className="img-fluid" src={bookBack} />
        </div>
      </div>
    );
  }
}

export default BookPage;
