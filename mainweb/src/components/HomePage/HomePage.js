import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import Background from "../../assets/home-page-background.svg";
import HompageImage2 from "../../assets/Hompage-image2.svg";
import storytelling from "../../assets/storytelling.svg";

import "./HomePage.css";
import { Link } from "react-router-dom";

// const HomePage = () => {

//

// }

// export default HomePage;
class HomePage extends Component {
  state = {};
  renderMain() {
    return (
      <div className="container">
        <div className="row justify-content-center box">
          <div className="col-lg-6 content-center">
            <div className="header-text">
              <div className="text-layout1">
                <h1 className="tagline-layout1">
                  Shape your life around the most powerful framework known to
                  humankind.
                </h1>
              </div>
              <p className="intro-layout1">
                Historically, heroism has lead to purpose-driven, resilient,
                high-performing lives.
              </p>
              <div className="row btn-layout1"></div>
            </div>
          </div>
          <div className="col-lg-6 vertcal-center"></div>
        </div>
      </div>
    );
  }
  renderLeft1() {
    return (
      <div className="res-box">
        <p className="intro-layout2">
          Philosophical and psychological heavy weights have known for hundreds
          of years that there are currents beneath our behaviour guiding what we
          do. These currents are the feelings we associate with our daily life,
          obligations, responsibilities, other people, and more. These feelings
          are heavily influenced by our value system.
          <br />
          <br />
          <span className="intro-layout3">
            Heroic Minds gives you the tools to shape your value system or
            ‘psychological foundation’ around the most powerful framework known
            to humankind, heroism.
          </span>
          <br />
          <br />
          What you value determines what you see.
          <br />
          What you see determines how you act.
          <br />
          How you act determines the quality of your life.
        </p>
      </div>
    );
  }
  renderRight1() {
    return (
      <span className="img_animat1">
        <img alt="Hompage-image2" className="img-fluid" src={HompageImage2} />
      </span>
    );
  }
  renderLeft2() {
    return (
      <div className="section-box">
        <h1 className="section-box-h1">The Problem</h1>
        <br />
        <p className="section-box-p">
          An entire population is relentlessly exposed to illusive, self-serving
          values and goals such as attention, money and status, that once
          reached, do not satiate our deepest human needs.
          <br />
          <br />
          This had led to lives with an unfillable void, stressed, anxious,
          tired, over-thinking and reliant on passive routines to perform
          day-to-day.
        </p>
      </div>
    );
  }
  renderRight2() {
    return (
      <div className="section-box-white">
        <h1 className="section-box-h1-black">The Solution </h1>
        <br />
        <p className="section-box-p-black">
          Expose individuals to the most powerful framework for life through the
          most efficious medium of behavioural change, storytelling.
          <br />
          <br />
          This pleasurable experience induces a self-reflective respose, guiding
          people to shape the value system that orients their life. The outcome
          is a life built around love, connection, service to others and
          continued growth regardless of the external environment.
        </p>
      </div>
    );
  }
  renderLeft3() {
    return (
      <div className="res-box">
        <span className="img_animat1">
          <img
            alt="Hompage-image2"
            className="img-fluid img-storytelling"
            src={storytelling}
          />
        </span>
        <h1 className="tagline-layout3">
          The life-changing medium of{" "}
          <span className="tagline-layout4">story telling.</span>
        </h1>
      </div>
    );
  }
  renderRight3() {
    return (
      <div className="res-box">
        <br />
        <p className="intro-layout2">
          Heroic Minds utilizes the pleasurable medium of story telling as an
          engaging, therapeutic experience.
          <br />
          <br />
          Story telling is up to
          <span className="intro-layout4"> 22x more effective</span> in
          behavioural change and memory of ideas than rational reason alone.
          (Standord University, 2019)
          <br />
          <br />
          <Link to="/about">
            <span className="intro-layout4">Learn More.</span>
          </Link>
        </p>
      </div>
    );
  }
  render() {
    const sectionStyle = {
      backgroundImage: "url(" + Background + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="HomePage">
        <section className="layout1" style={sectionStyle}>
          {this.renderMain()}
        </section>
        <section className="layout2">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
          />
        </section>
        <section className="layout2">
          <DisplayBox
            colLeft="6"
            colRight="6"
            contentLeft={this.renderLeft2()}
            contentRight={this.renderRight2()}
          />
        </section>
        <section className="layout2">
          <DisplayBox
            colLeft="6"
            colRight="6"
            contentLeft={this.renderLeft3()}
            contentRight={this.renderRight3()}
          />
        </section>
      </div>
    );
  }
}

export default HomePage;
