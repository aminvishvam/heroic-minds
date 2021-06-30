import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";

import Background from "../../assets/home-page-background.svg";
import HompageImage2 from "../../assets/Hompage-image2.svg";
import storytelling from "../../assets/storytelling.svg";
import guide from "../../assets/guide.svg";
import vector from "../../assets/Vector.svg";
import community from "../../assets/community.svg";

import "./HomePage.css";
import { Link } from "react-router-dom";

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
          disconnected, tired, over-thinking and reliant on passive routines to
          perform day-to-day.
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
        <br />
        <p className="intro-layout2">
          Heroic Minds utilizes the enjoyable medium of story telling as an
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
  renderComponent() {
    return (
      <div className="res-box">
        <div className="container">
          <div className="text-layout1">
            <h1 className="tagline-layout1">Value of Heroic Minds</h1>
          </div>
          <br />
          <br />
          <div className="row justify-content-start">
            <div className="col price-box">
              <h1 className="price-box-h1">Enjoyable</h1>
              <p className="price-box-p">
                Short and engaging stories to wake up to, enjoy during your
                communte or to fall asleep to at night.
              </p>
            </div>
            <div className="col price-box">
              <h1 className="price-box-h1">Organized</h1>
              <p className="price-box-p">
                Content organizaed by topic, and theme such as, Pop Culture and
                Greek Mythology OR Perseverence or Leadership.
              </p>
            </div>
            <div className="col price-box">
              <h1 className="price-box-h1">Impactful</h1>
              <p className="price-box-p">
                Long form stories and ideas condensed down to 5-10 minutes
                listens or reads for an efficient and effective experience.
              </p>
            </div>
            <div className="col price-box">
              <h1 className="price-box-h1">Therapeutic </h1>
              <p className="price-box-p">
                The experience of listening to and reflecting on heroic stories
                is a form of logotherapy and behaviooural activation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderLeft4() {
    return (
      <div className="res-box">
        <br /> <br /> <br />
        <br />
        <h1 className="tagline-layout1">A guide to invigorate human life.</h1>
        <br />
        <p className="intro-layout2">
          Historically, lives shaped around
          <br />
          heroism are full of purpose, meaning
          <br />
          resolve and high-performance.
        </p>
        <Link to="/about">
          <span className="intro-layout4">Learn More.</span>
        </Link>
      </div>
    );
  }
  renderRight4() {
    return (
      <span className="img_animat1">
        <img alt="Hompage-image2" className="img-fluid" src={guide} />
      </span>
    );
  }
  renderComponent2() {
    return (
      <div className="res-box">
        <div className="container">
          <div className="justify-centent-center box-p">
            When you lead your daily life with the aim to serve and improve the
            lives of others, your attention <br />
            shifts from self-serving worry and rumination to focus on the world
            around you. <br />
            It is then that you see life as an adventure and its challenges as
            opportunities. <br />
            It is then that you are able to live fully in the moment.
          </div>
        </div>
      </div>
    );
  }
  renderLeft5() {
    return (
      <div className="res-box">
        <br /> <br /> <br />
        <br />
        <h1 className="tagline-layout5">Heroic Minds Global Community</h1>
        <br />
        <p className="intro-layout5">
          Sharing empowering stories and ideas to make the world a more
          selfless, courageous, resilient place.
        </p>
      </div>
    );
  }
  renderRight5() {
    return (
      <span className="img_animat1">
        <img
          alt="Hompage-image2"
          className="img-fluid community-img"
          src={vector}
        />
      </span>
    );
  }
  renderComponent3() {
    return (
      <div className="res-box">
        <div className="container">
          <div className="justify-centent-center ">
            <h1 className="tagline-layout6">
              Be the first to hear
              <br />
              when Heroic Minds goes live!
            </h1>
          </div>
        </div>
      </div>
    );
  }
  renderPrice() {
    return (
      <div className="res-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 justify-content-center price-box ">
              <h1 className="price-box-h1">30-Day Free Trial</h1>
              <p className="price-box-p">30% of Heroic Minds Library</p>
              <h1 className="price-box-h1">Free</h1>
            </div>
            <div className="col-4 justify-content-center price-box">
              <h1 className="price-box-h1">Yearly</h1>
              <p className="price-box-p">Full Heroic Minds Library</p>
              <h1 className="price-box-h1">$170</h1>
              <p className="price-box-p">$14/month</p>
            </div>
            <div className="col-4 justify-content-center price-box">
              <h1 className="price-box-h1">Monthly</h1>
              <p className="price-box-p">Full Heroic Minds Library</p>
              <h1 className="price-box-p">$240</h1>
              <p className="price-box-h1">$20/month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const mainSectionStyle = {
      backgroundImage: "url(" + Background + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="HomePage">
        <section className="layout1" style={mainSectionStyle}>
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
        <section className="layout2">{this.renderComponent()}</section>
        <section className="layout2">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft4()}
            contentRight={this.renderRight4()}
          />
        </section>
        <section className="layout2 black-box">
          {this.renderComponent2()}
        </section>
        <section className="layout2">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderLeft5()}
            contentRight={this.renderRight5()}
          />
        </section>
        <section className="layout2">
          <div className="container">
            <img alt="Hompage-image2" className="img-fluid" src={community} />
          </div>
        </section>
        <section className="layout2">{this.renderComponent3()}</section>
        <section className="layout2">{this.renderPrice()}</section>
      </div>
    );
  }
}

export default HomePage;
