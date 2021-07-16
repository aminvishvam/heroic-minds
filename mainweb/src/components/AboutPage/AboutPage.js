import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import Storytelling from "../../assets/AboutPageAssets/storytelling.svg";
import Behavioural from "../../assets/AboutPageAssets/Click.svg";
import Man from "../../assets/AboutPageAssets/Man.svg";
import House from "../../assets/AboutPageAssets/House.svg";
import Pen from "../../assets/AboutPageAssets/Pen.svg";

import "./AboutPage.css";

class AboutPage extends Component {
  renderComp() {
    return (
      <div className="about-page-1">
        <div className="justify-content-center ">
          <h1 className="text k40 lh150">
            <span className="bold ls1"> Heroic Minds </span> <br />
            Logotherapy➔ Journaling➔ Behavioural Activation
          </h1>
          <br />
          <br />
          <br />
          <p className="text h22 lh150">
            The basis of Heroic Minds is that if you want to live a purpose -
            driven, resilient, high - performing life, without being stuck in
            your own head, without forcing yourself to do the right thing, then
            you need to intervene at the level of what drives your perceptions,
            which is what you value and what you are aiming at in your life–
            what we call, your value system or global beliefs.This value system
            or global beliefs provide context for everything you do.Are you
            seeking to create prosperity everywhere you go or do you feel that
            there is a sense of meaninglessness to your life and a void that
            needs to be filled ?
            <br />
            <br />
            Global beliefs are the currents beneath your behaviour guiding how
            you feel, think and what you ultimately do.That feeling when you
            don’ t want to do something you know you should do or the reason you
            feel off and can’ t quite explain why.Developing and nurturing these
            global beliefs are what build the strength of your psychological
            foundation and provide direction to your life.This is what
            scientists, philosophers and psychologists have known for thousands
            of years.
          </p>
        </div>
      </div>
    );
  }
  renderLeft1() {
    return (
      <div className="about-page-2 image-padding-right">
        <h1 className="text k45 lh120 ls1by2">
          1. Fortify Your Psychological Foundation (Via Storytelling)
        </h1>
        <br />
        <br />
        <p className="text h22 lh150">
          Find meaning in life beyond the illusive ideas that society reinforces
          today. <br />
          Build a psychological foundation or reason to live that transcends any
          finite“ thing” such that it can never be taken from you. <br />
          <br />
          Seek to find purpose in your daily ativities that truly fulfil your
          deepest human needs and invigorate your life.A purose that brings
          about love, connection, impact, and a feeling of adventure regardless
          of your environment or circumstance. <br />
          <br />
          When your psyche is oriented in this way, composure, fulfillment, and
          an aptitude for high - performance become attainable in every life
          moment.This makes daily tasks feel like an adventure and life itself,
          an opportunity. <br />
          <br /> “Life is never made unbearable by circumstances, but only by
          lack of meaning and purpose.” <br /> -Creator of Logotherapy, Viktor
          Frankl
        </p>
      </div>
    );
  }
  renderRight1() {
    return (
      <div className="text-center d-table ">
        <span className="vertical-center">
          <img alt="Hompage-image1 " className="img-fluid h-75 man-img" src={Man} />
        </span>
      </div>
    );
  }
  renderLeft2() {
    return (
      <div className="d-table text-center">
        <span className="vertical-center">
          <img alt="Hompage-image2" className="img-fluid story-telling-img" src={Storytelling} />
        </span>
      </div>
    );
  }
  renderRight2() {
    return (
      <div className="about-page-3 image-padding-left">
        {/* <h1 className="text k45 lh120 ls1by2 ">2. Logotherapy</h1>
                <br /> */}
        <p className="text h22 lh150">
          The Heroic Minds Library is full of 5 - 10 minute short and engaging
          stories to wake up with, enjoy during your communte or to fall asleep
          to at night. <br />
          <br />
          Heroic Minds utilizes the enjoyable medium of story telling as an
          engaging, therapeutic experience. <br />
          <br />
          Story telling creates a felt experience that allows you the listener,
          to feel the message in the story.It is feelings that drives behaviour
          more than thought alone. <br />
          <br />
          Story telling is up to <b> 22 x more effective </b> in behavioural
          change and memory of ideas than rational reason alone. <br />
          -Standord University, 2019
        </p>
      </div>
    );
  }

  renderLeft3() {
    return (
      <div className="about-page-4 image-padding-right">
        <h1 className="text k45 lh120"> 3. Journal (In - App) </h1> <br />
        <br />
        <p className="text h22 lh150">
          In our modern day world of endlessly accessible information, podcasts,
          videos, articles and more, people often <b>consume knowledge</b>,
          &nbsp;<b>dont apply it</b>&nbsp;and&nbsp;<b>forget it</b>
          <br />
          Meaning, the opportunity to apply and embody learnt concepts, is
          missed. <br />
          <br />
          Heroic Minds ensures you have the opportunity to fully engage with
          these powerful stories by giving yo the tools and guidance to reflect
          on how they relate to your life. <br />
          <br />
          This in -app journal is completely anonymous, secure and available for
          you to edit, delete, or re - read in the future. <br />
        </p>
      </div>
    );
  }
  renderRight3() {
    return (
      <div className="d-table text-center">
        <span className="vertical-center">
          <img alt="Hompage-image3" className="img-fluid w-75 penImg" src={Pen} />
        </span>
      </div>
    );
  }

  renderRight4() {
    return (
      <div className="about-page-5 image-padding-left">
        <h1 className="text k45 lh120"> 4. Behavioural Activation </h1> <br />
        <br />
        <p className="text  h22 lh150">
          The most important part of Heroic Minds is implementation.Thinking is
          not enough.It is the feelings created through action and behaviour
          that brings meaning to your experience. <br />
          <br />
          Behaviours that truly fulfil your required human needs and improve the
          quality of your life have shown to be the most effective way to combat
          negative feelings when compared to other leading tactics(World
          Psychiatry Association, 2021). <br />
          <br />
          Heroic Minds aims to activate an impulse to do more of what brings
          real value, purpose and meaning into your life.In other terms,
          activating heroic behaviours or a heroic orientation to your life.
          <br />
          <br />
          The goal is to have as many of these experiences as possible in your
          day to day life.Ultimately leading to a purpose - driven, resilient,
          high - performing individual. <br />
          <br />
        </p>
      </div>
    );
  }
  renderLeft4() {
    return (
      <div className="d-table text-center">
        <span className="vertical-center">
          <img alt="Hompage-image4" className="img-fluid behavioural-img" src={Behavioural} />
        </span>
      </div>
    );
  }
  renderCom2() {
    return (
      <div className="about-page-6">
        <h1 className="text text-center h40 bold lh150 ls1by2">
          Build your psychological foundation on solid rock.
        </h1>
        <br />
        <br />
        <p className="text text-center h20 lh140">
          Throughout history, people have persevered through immense adversity
          and tribulation, giving rise to lives of purpose, meaning, and
          exploration of human potential. But today, it appears we are less able
          to handle the challenges that are inherent to our existence. What has
          caused this change?
          <br />
          <br />
          People’s lives were once guided by a very simple global belief that
          assumed life and its collection of challenges were an opportunity to
          serve others and this was guided by an invigorating love to do so.
          This led people to see life as an opportunity and its challenges as
          adventures.
          <br />
          <br />
          But today, the aims of our society have shifted to hyper-focus on
          self-fulfillment at the expense of one’s own psychological well-being
          and the well-being of those around them. What is the product of living
          this way? Presently, there is more anxiety, depression and fatigue
          than there has ever been. People feelings are increasingly at odds
          with what they need to do or want to do. We see a world of immense
          cognitive effort to produce the ideal life, thinking, analyzing and
          convincing themselves into submission of ideal behaviour. A stressful
          way to live.
        </p>
      </div>
    );
  }
  renderLeft5() {
    return (
      <div className="text-center d-table">
        <span className="vertical-center">
          <img alt="Hompage-image2" className="img-fluid houseImg" src={House} />
        </span>
      </div>
    );
  }
  renderRight5() {
    return (
      <div className="abput-page-7 text-center d-table">
        <span className="vertical-center">
          <p className="text h30 lh160 w500">
            When the heavy rain, wind, and floods arrived, those that built
            their homes on sand were in ruin, while those that built their homes
            solid rock, stood tall.
          </p>
          <br />
          <br />
          <p className="text h20 lh130 w500">
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
      <div className="about-page-8">
        <p className="text h20 text-center lh150">
          The optimal way to achieve a heroic life is such that you are not
          looking to the world to be fulfilled, you are not calculating your
          behaviour.Rather, you allow an invigorating love of serving the world
          to be your guiding global belief.In living this way, you feel as if
          you already have everything you need because what you value is
          attainable in every life experience.You have the ability to feel
          fulfilled and engaged regardless of the situation or the environment
          you are in .This allows you to build your psychological foundation on
          solid rock.You maintain a composed and powerful mind that appears to
          the world as the hero. <br />
          <br />
          <b>
            We have seen throughout history that living this way leads toward
            the ultimate good for you and the world around you.
          </b>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="about-page my-container-90">
        <section className="mt-8"> {this.renderComp()} </section>
        <div className="p-3">
          <section className="mt-13">
            <DisplayBox
              colLeft="9"
              colRight="3"
              contentLeft={this.renderLeft1()}
              contentRight={this.renderRight1()}
              fullContainer="true"
            />
          </section>
          <section className="mt-13">
            <DisplayBox
              colLeft="3"
              colRight="9"
              contentLeft={this.renderLeft2()}
              contentRight={this.renderRight2()}
              fullContainer="true"
              reverse="true"
            />
          </section>
          <section className="mt-13">
            <DisplayBox
              colLeft="9"
              colRight="3"
              contentLeft={this.renderLeft3()}
              contentRight={this.renderRight3()}
              fullContainer="true"
            />
            <section className="mt-13">
              <DisplayBox
                colLeft="3"
                colRight="9"
                contentLeft={this.renderLeft4()}
                contentRight={this.renderRight4()}
                fullContainer="true"
                reverse="true"
              />
            </section>
          </section>
        </div>
        <div className="my-container-90">
          <section className="mt-13"> {this.renderCom2()} </section>
          <section className="mt-13">
            <DisplayBox
              colLeft="5"
              colRight="7"
              contentLeft={this.renderLeft5()}
              contentRight={this.renderRight5()}
              fullContainer="true"
              reverse="true"
            />
          </section>
          <section className="mt-13 mb-6"> {this.renderCom3()} </section>
        </div>
      </div>
    );
  }
}

export default AboutPage;
