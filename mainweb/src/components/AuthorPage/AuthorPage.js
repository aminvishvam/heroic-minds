import React, { Component } from "react";
import Community from "../../assets/HomePageAssets/community.svg";
import book from "../../assets/Book.png";
import Download_Apple from "../../assets/Download_Apple.svg";
import Download_PlayStore from "../../assets/Download_PlayStore.png";
import "./AuthorPage.css";

class AuthorPage extends Component {
  renderHead1() {
    return (
      <div className="d-flex flex-wrap author-page-1">
        <div className="author-page-head mt-5">
          <p className="text text-nowrap text-yellow fw600 k35 lh120 mb-0">
            The Heroic Minds™ Community
          </p>
          <span className="text s16 lh100 mt-0">(Coming Soon)</span>
          <p className="text fw600 k50 lh120 mt-5 text-nowrap">
            A Platform to Empower.
          </p>
          <p className="txt intro h22 lh150 text-gray-57">
            Sharing ideas and stories to empower the lives of others.
          </p>
          <div className="d-flex d-row">
            <a href="https://heroicminds.live/">
              <img alt="Download link for apple app store" src={Download_Apple} className="my-3 mr-3 download-img" />
            </a>

            <a href="https://heroicminds.live/">
              <img alt="Download link for google play store" src={Download_PlayStore} className="my-3 download-img" />
            </a>
          </div>

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
          <div className="text-center">
            <img alt="Hompage-image2" className="img-fluid " src={Community} width="100%" />
          </div>
        </section>
      </div >
    );
  }
}

export default AuthorPage;
