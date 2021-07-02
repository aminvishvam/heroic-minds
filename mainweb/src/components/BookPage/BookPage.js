import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.svg";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./BookPage.css";

class BookPage extends Component {

  renderHead1() {
    return (
      <div className="pb-3 container">
        <br />
        <br />
        <h1 className="text-orange head k40 ">
          The first book of its kind.
          <br /> Created by you.
        </h1>
        <br />
      </div>

    );
  }
  renderHead2() {
    return (
      <div className='pb-3 layout2'>
        <h1 className="text bold k70  ">
          100 Heroic Stories <br /> from around the world.
        </h1>
        <p className="text h20">*To be released on December 1st 2022</p>

      </div>

    );
  }

  renderHead2Img() {
    return (
      <div class="text-center d-table p-4 pb-4">
        <span class="vertical-center">
          <img
            alt="Hompage-image2"
            className="img-fluid "
            src={book}
          />
        </span>
        <br />
      </div>
    );

  }

  renderSharebtn() {
    return (
      <div className="container pb-4">
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="text-center  ">
            <button type="submit" className="btn pt-2 pb-2 pr-3 pl-3 btn-dark text btn-text">
              Share Something Today
            </button>
            <p className="text text-gray intro h22 lh mt-2">
              because everyone has a story to share.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="BookPage container">
        <section className="layout2">
          {this.renderHead1()}
        </section>
        <section >
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderHead2()}
            contentRight={this.renderHead2Img()}
          />
        </section>
        <section className='layout3 container'>
          <p className="txt intro h30">
            <strong>100</strong> empowering stories &amp; ideas from the Heroic Minds Community,
            packaged up and shared with the world.
          </p>
        </section>
        <section className="layout2">{this.renderSharebtn()}</section>
        <section className="layout2">
          <div className="container layout1">
            <img alt="Hompage-image2" className="img-fluid" src={bookBack} />
          </div>
        </section>
      </div>

    );
  }
}

export default BookPage;
