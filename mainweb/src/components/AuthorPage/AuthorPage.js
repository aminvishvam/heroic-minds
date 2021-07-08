import React, { Component } from "react";
import bookBack from "../../assets/BookBack.png";
import book from "../../assets/Book.svg";
import DisplayBox from "../DisplayBox/DisplayBox";
import "./AuthorPage.css";

class AuthorPage extends Component {

  renderHead1() {
    return (
      <div className="p-3">
        <br />
        <br />
        <p className="text text-yellow bold k40 lh110">
          Share a story.
          <br />Be rewarded.
        </p>
      </div>

    );
  }
  renderHead2() {
    return (
      <div className='mt-3'>
        <br />
        <p className="text bold k60 lh110">
          Heroic Stories <br />from around the world.
        </p>
        {/* <p className="text h20">Your stories from the Heroic Minds Community may be shared in the Heroic Minds Library!</p> */}
        <br /><br />
      </div>

    );
  }

  renderHead2Img() {
    return (
      <div className="text-center d-table">
        <span classname="vertical-center">
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
      <div className="container">
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="text-center  ">
            <button type="submit" className="btn-lg btn-black text book-btn-text">
              Share Something Today
            </button>
            <br />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="BookPage col-lg-11 col-xl-11 col=md-11 col-sm-11 col-11 mx-auto">
        <div className="col-lg-11 col-xl-11 col=md-11 col-sm-11 col-11 mx-auto">
          <section className="mt-3">
            {this.renderHead1()}
          </section>
          <section className="mt-1">
            <DisplayBox
              colLeft="7"
              colRight="5"
              contentLeft={this.renderHead2()}
              contentRight={this.renderHead2Img()}
              fullContainer="true"
            />
          </section>
          <section className='mt-4 p-3'>
            <p className="txt intro h30">
              Your real life heroic stories from the community may be shared in the Heroic Minds library!
              <br /><b>Plus</b> you will be compensated for it.
            </p>
          </section>
          <section className="mt-2">{this.renderSharebtn()}</section>
        </div>
        <br />
        <section className="mt-7 container-fluid">
          <div className=" mb-10 text-center">
            <img alt="Hompage-image2" className="img-fluid" src={bookBack} />
          </div>
        </section>
      </div>

    );
  }
}

export default AuthorPage;
