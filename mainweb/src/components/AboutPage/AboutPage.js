import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import Storytelling from "../../assets/storytelling.svg";
import Behavioural from "../../assets/Click.svg";
import Man from "../../assets/Man.svg";
import House from "../../assets/House.svg";

import "./AboutPage.css";

class AboutPage extends Component {
  renderComp() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <div className="res-box  mt-4 mr-4 ml-4 mt-3">
            <h1 className="text k40 lh150">
              Story-Telling + Logotherapy + Behavioural Activation
            </h1>
            <span className="text bold k40 lh150">= Heroic Minds</span>
            <br />
            <br />
            <br />
            <p className="text h22 lh150">
              The basis of Heroic Minds is that if you want to live a
              purpose-driven, resilient, high-performing life, without being
              stuck in your own head, without forcing yourself to do the right
              thing, then you need to intervene at the level of what drives your
              perceptions, which is what you value and what you are aiming at in
              your life – what we call, your value system or global beliefs.
              This value system or global beliefs provide context for everything
              you do. Are you seeking to create prosperity everywhere you go or
              do you feel that there is a sense of meaninglessness to your life?
              <br />
              <br />
              Global beliefs are the currents beneath your behaviour guiding how
              you feel, think and what you ultimately do. That feeling when you
              don’t want to do something you know you should do or the reason
              you feel off and can’t quite explain why. Developing and nurturing
              these global beliefs are what build the strength of your
              psychological foundation and provide direction to your life. This
              is what scientists, philosophers and psychologists have known for
              thousands of years.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
  renderLeft1() {
    return (
      <div className="res-box p-4">
        <h1 className="text k50 lh150">Story-Telling</h1>
        <br />
        <p className="text h22 lh130">
          5-10 minute short and engaging stories to wake up to, enjoy during
          your communte or to fall asleep to at night.
          <br />
          <br />
          Heroic Minds utilizes the pleasurable medium of story telling as an
          engaging, therapeutic experience.
          <br />
          <br />
          Story telling creates a felt experience that allows the listener to
          feel the message in the story. It is feelings that drives behaviour
          more than thought alone. This is why we feel like doing things we wish
          we wouldn’t.
          <br />
          <br />
          Story telling is up to 22x more effective in behavioural change and
          memory of ideas than rational reason alone. (Standord University,
          2019)
        </p>
      </div>
    );
  }
  renderRight1() {
    return (
      <div className="text-center d-table p-4 mb-4">
        <span className="vertical-center">
          <img alt="Hompage-image2 " className="img-fluid" src={Storytelling} />
        </span>
      </div>
    );
  }
  renderLeft2() {
    return (
      <div className="res-box p-4 mt-4 text-center">
        <img alt="Hompage-image2" className="img-fluid" src={Man} />
      </div>
    );
  }
  renderRight2() {
    return (
      <div className="res-box p-4">
        <h1 className="text k50 lh150 text-right pr-4">Logotherapy</h1>
        <br />
        <p className="text h22 lh130 text-right">
          Find meaning in life beyond the illusive ideas that society is
          reinforcing everywhere you look today. Seek to find purpose in
          improving the world around you which is attainable in every life
          moment. This makes everyday an adventure and life in itself an
          opportunity.
        </p>
      </div>
    );
  }
  renderLeft3() {
    return (
      <div className="res-box p-4 mt-4">
        <h1 className="text k50 lh120">Behavioural Activation</h1>
        <br />
        <br />
        <p className="text h22 lh130">
          Activating behaviours that make you feel good and improve the quality
          of your life have shown to be one of the most effective ways to combat
          depression and depressive feelings. (World Psychiatry Association,
          2021)
          <br />
          <br />
          Heroic Minds aims to activate an impulse to do more of what brings
          real value, purpose and meaning into your life. The goal is to have as
          many of these experiences as possible in your day to day life,
          improving how you feel and how you perform.
        </p>
      </div>
    );
  }
  renderRight3() {
    return (
      <div className="res-box p-4 mt-4">
        <img alt="Hompage-image2" className="img-fluid" src={Behavioural} />
      </div>
    );
  }
  renderCom2() {
    return (
      <div className="container">
        <div className="row justify-content-center p-3">
          <div className="res-box p-4">
            <h1 className="text h40 bold lh150 text-center">
              Build your psychological foundation on solid rock.
            </h1>
            <br />
            <br />
            <p className="text text-center h20 lh150">
              Throughout history, people have persevered through immense
              adversity and tribulation, giving rise to lives of purpose,
              meaning, and exploration of human potential. But today, it appears
              we are less able to handle the challenges that are inherent to our
              existence. What has caused this change?
              <br />
              <br />
              People’s lives were once guided by a very simple global belief
              that assumed life and its collection of challenges were an
              opportunity to serve others and this was guided by an invigorating
              love to do so. This led people to see life as an opportunity and
              its challenges as adventures.
              <br />
              <br />
              But today, the aims of our society have shifted to hyper-focus on
              self-fulfillment at the expense of one’s own psychological
              well-being and the well-being of those around them. What is the
              product of living this way? Presently, there is more anxiety,
              depression and fatigue than there has ever been. People feelings
              are increasingly at odds with what they need to do or want to do.
              We see a world of immense cognitive effort to produce the ideal
              life, thinking, analyzing and convincing themselves into
              submission of ideal behaviour. A stressful way to live.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
  renderLeft4() {
    return (
      <div className="res-box p-4">
        <img alt="Hompage-image2" className="img-fluid" src={House} />
      </div>
    );
  }
  renderRight4() {
    return (
      <div className="text-center d-table  mb-4 p-4">
        <span className="vertical-center">
          <p className="text h30 lh150 w500">
            When the heavy rain, wind, and floods arrived, those that built their
            homes on sand were in ruin, while those that built their homes solid
            rock, stood tall.
          </p>
          <br />
          <br />
          <p className="text h20 lh150">
            Parable of the Wise and the Foolish Builders
          </p>
        </span>
        <br />
        <br />
      </div>
    );
  }
  renderCom3() {
    return (
      <div className="container mt-4 p-4">

        <div className="text-center d-table p-3 mb-4">
          <span className="vertical-center">
            <p className="text h20 text-center lh150">
              The optimal way to achieve a heroic life is such that you are not
              looking to the world to be fulfilled, you are not calculating your
              behaviour. Rather, you allow an invigorating love of serving the
              world to be your guiding global belief. In living this way, you
              feel as if you already have everything you need because what you
              value is attainable in every life experience. You have the ability
              to feel fulfilled and engaged regardless of the situation or the
              environment you are in. This allows you to build your
              psychological foundation on solid rock. You maintain a composed
              and powerful mind that appears to the world as the hero.
            </p>
            <p className="text h20 text-center lh150">
              We have seen throughout history that living this way leads toward
              the ultimate good for you and the world around you.
            </p>
          </span>
        </div>
        <br />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div className="about-page">
        <section className="mt-5">{this.renderComp()}</section>
        <section className="mt-8">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
            reverse="true"
          />
        </section>
        <section className="mt-8">
          <DisplayBox
            colLeft="4"
            colRight="8"
            contentLeft={this.renderLeft2()}
            contentRight={this.renderRight2()}
          />
        </section>
        <section className="mt-8">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft3()}
            contentRight={this.renderRight3()}
            reverse="true"
          />
        </section>
        <section className="mt-8">{this.renderCom2()}</section>
        <section className="mt-8">
          <DisplayBox
            colLeft="5"
            colRight="7"
            contentLeft={this.renderLeft4()}
            contentRight={this.renderRight4()}
          />
        </section>
        <section className="mt-8">{this.renderCom3()}</section>
      </div>
    );
  }
}

export default AboutPage;
