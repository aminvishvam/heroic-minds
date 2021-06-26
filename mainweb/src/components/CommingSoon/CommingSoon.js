import React, { Component } from "react";
import Comming from "../../assets/com.png";

class CommingSoon extends Component {
  renderMain() {
    return (
      <div className="container">
        <div className="row justify-content-center box">
          <div className="header-text">
            <div className="text-layout1">
              <h1 className="about-tagline-layout5">Coming Soon!</h1>
            </div>
            <p className="about-intro-layout7">
              Be the first to hear when Heroic Minds goes live!
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const mainSectionStyle = {
      backgroundImage: "url(" + Comming + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="CommingSoon">
        <section className="layout1" style={mainSectionStyle}>
          {this.renderMain()}
        </section>
      </div>
    );
  }
}

export default CommingSoon;
