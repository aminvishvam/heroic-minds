import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import Book from "../../assets/AboutPageAssets/Book.svg";
import Behavioural from "../../assets/AboutPageAssets/Click.svg";
import Brain from "../../assets/AboutPageAssets/Brain.svg";
import House from "../../assets/AboutPageAssets/House.svg";
import Pen from "../../assets/AboutPageAssets/Pen.svg";
import IntroductionAudio from "../../assets/AboutPageAssets/Introduction.m4a";
import pause from "../../assets/HomePageAssets/Pause.svg";
import playIcon from "../../assets/HomePageAssets/play.svg";

import "./AboutPage.css";


class AboutPage extends Component {
  state = {
    audio: new Audio(IntroductionAudio),
    isPlaying: false
  }

  togglePlayPause = () => {
    let playerStatus = this.state.isPlaying;
    if (!playerStatus) {
      this.state.audio.play();
    } else {
      this.state.audio.pause();
    }
    this.setState({ isPlaying: !playerStatus });
  }

  renderComp() {
    return (
      <div className="about-page-1">
        <div className="justify-content-center ">
          <h1 className="text-left text k40 lh150">
            <span className="bold ls1"> Heroic Minds </span> <br />
            Listen ➔ Reflect ➔ Act
          </h1>
          <br />
          <br />
          <br />
          <p className="text h22 lh170">
            475 different studies and 156 meta-analyses show that at the end of
            psychotherapy 50-85% of people with sub-clinical distress are better
            off than someone not recieving psychotherapy. Interestingly,
            extensisve meta-analytic research shows that neither the approach to
            psychotherapy (CBT, DBT, Positive Psychology, Solution Based, etc.)
            nor the delivery of therapy (individual or group) makes a difference
            in effectiveness on sub-clinical distress. Further, meta-analytic
            research shows that relapse commonly occurs at 6 month follow-up
            after completion of psychotherapy, demonstrating that psychotherapy
            is required for continued remission of sub-clinical distress.
            <br />
            <span className="fw600">
              Bergin and Garfield's Handbook of Psychotherapy and Behaviour
              Change (2013)
            </span>
            <br />
            <br />
            Behaviours that truly fulfil your required human needs and improve
            the quality of your life have shown to be the most effective way to
            combat negative feelings when compared to other leading tactics.
            <br />
            <span className="fw600">World Psychiatry Association (2021)</span>
            <br />
            <br />
            We are not willing to take the ethical bull by the horns and
            understand that human health is a matter of moral action.
            <br />
            We don’t want to admit to that or discuss it because people don’t
            want to burden thems with too much responsibility. All the
            objective, speudo-science, is a form of admission, designed to
            shield us from what it actually is that makes people sick.
            <br />
            <span className="fw600">
              Self-Deception in Psychopathology, Jordan Peterson (2013)
            </span>
            <br />
            <br />
            Heroic Minds™ understands that regardless of the tactical approach,
            integrating philosophical and psychological wisdom into ones life
            serves as a beneficial practice to decrease distress and increase
            quality of life.
            <br />
            <br />
            Heroic Minds™ recognizes the shortcomings of the modern therapeutic
            approach and endeavours to recognize mental health as an issue of
            personal philosophy which can be managed through self-administered
            exercise in the psyche of the individual.
            <br />
            <br />
            Heroic Minds™ aims to simplify and de-stigmatize behavioural health
            pratice, through the ancient wisdom our psychological and
            philosophical founders left us.
          </p>
        </div>
      </div>
    );
  }
  renderLeft1() {
    return (
      <div className="about-page-2 pt-4">
        <h1 className="text-left text k45 lh120">
          <b>Listen</b> (Engaging Stories &amp; Exercises)
        </h1>
        <br />
        <br />
        <p className="text h22 lh150">
          Through engaging short stories with a focus on values and morals,
          Heroic Minds guides you to self-reflect on the values and morals that
          are guiding your life.
          <br />
          <br />
          Story telling creates a felt experience and is up to 22x more
          effective in behavioural change and memory than rational reason alone
          (Stanford University, 2019).
          <br />
          <br />
          The goal of shaping these values is to find purpose in your daily
          activities and meaning in your life. Living a purpose-driven life
          leads to an invigorating sense of self, and fulfills our deepest human
          needs; connection, love, self-realization, growth, etc.
          <br />
          This allows daily tasks to feel like an adventure and life itself, an
          opportunity.
          <br />
          <br />
          “Life is never made unbearable by circumstances, but only by lack of
          meaning and purpose.”
          <br />
          <span className="h20">- Creator of Logotherapy, Viktor Frankl</span>
        </p>
      </div>
    );
  }
  renderRight1() {
    return (
      <div className="align-middle pt-4">
        <img
          alt="Hompage-image1"
          className="img-fluid man-img pl-3 mb-2"
          src={Book}
        />
      </div>
    );
  }
  renderLeft2() {
    return (
      <div className="align-middle  pt-4">
        <img
          alt="Hompage-image2"
          className="img-fluid man-img pr-3 mt-0 mb-4"
          src={Brain}
        />
      </div>
    );
  }
  renderRight2() {
    return (
      <div className="about-page-3  pt-4">
        <p className="text h22 lh150">
          Heroic Minds™ Sessions are self-administered psychological and
          philosophical exercises that cater to many audiences.
          <br />
          <br />
          Some examples are cognitive-behavioural, positive psychology, gestalt
          psychology, existential psychology and more.
          <br />
          <br />
          These Sessions are audio guided and come paired with a self-reflective
          exercise that can be saved and/or edited in your private journal.
          <br />
          <br />
          New Sessions are constantly uploaded and can be completed as many
          times as possible.
        </p>
      </div>
    );
  }

  renderLeft3() {
    return (
      <div className="about-page-4  pt-4">
        <h1 className="text-left text k45 lh120">
          <b>Reflect</b> (In-App Journal)
        </h1>
        <br />
        <br />
        <p className="text h22 lh150">
          In our modern day world of endlessly accessible information, podcasts,
          videos, articles and more, people often consume knowledge and forget
          to apply it. Meaning, the opportunity to apply and embody learnt
          concepts, is missed.
          <br />
          <br />
          Heroic Minds ensures you have the opportunity to fully engage with
          these powerful stories by giving you the tools and guidance to reflect
          on how they relate to your life.
          <br />
          <br />
          This in-app journal is completely anonymous, secure and available for
          you to edit, delete, or re-read in the future.
        </p>
      </div>
    );
  }
  renderRight3() {
    return (
      <div className="align-middle pt-4">
        <img
          alt="Hompage-image3"
          className="img-fluid penImg pl-3 mb-2"
          src={Pen}
        />
      </div>
    );
  }

  renderRight4() {
    return (
      <div className="about-page-5 pt-4">
        <h1 className="text-left text k45 lh120">
          <b>Act</b> (Behavioural Activation)
        </h1>
        <br />
        <br />
        <p className="text  h22 lh150">
          The most important part of Heroic Minds is implementation. Thinking is
          not enough. It is the feelings created through action that bring
          meaning to your experience.
          <br />
          <br />
          Heroic Minds aims to activate an impulse to do more of what brings
          real value, purpose and meaning into your life. In other terms,
          activating heroic behaviours or a heroic orientation to your life.
          <br />
          <br />
          The goal is to have as many of these experiences as possible in your
          day to day life. Ultimately leading to a purpose-driven, resilient,
          high-performing individual.
        </p>
      </div>
    );
  }
  renderLeft4() {
    return (
      <div className="align-middle pt-4">
        <img
          alt="Hompage-image4"
          className="img-fluid behavioural-img pr-3 mb-4"
          src={Behavioural}
        />
      </div>
    );
  }
  renderCom2() {
    return (
      <div className="about-page-6  pt-4">
        <h1 className="text text-center h40 bold lh150 ls1by2">
          Build your psychological foundation on solid rock.
        </h1>
        <button
          type="image"
          alt="audio for paragraph below"
          id="play-btn"
          className="bg-transparent border-0 mx-auto w-100 my-3"
          onClick={this.togglePlayPause}
        >
          <img
            src={!this.state.isPlaying ? playIcon : pause} />
        </button>
        <p className="text text-center h21 lh170 mt-5">
          Throughout history, people have persevered through immense adversity
          and tribulation. This has led to lives of purpose, meaning, and
          exploration of human potential. But today, it appears we are less able
          to handle the challenges that are inherent to our existence.
          <br />
          <br />
          What has caused this change?
          <br />
          <br />
          People's lives were once guided by a very simple global belief that
          assumed life and its collection of challenges were an opportunity to
          serve others and this was guided by an invigorating love to do so.
          <br />
          This led people to see life as an opportunity and its challenges as
          adventures.
          <br />
          <br />
          But today, the aims of our society have shifted to hyper-focus on
          self-fulfillment at the expense of one's own psychological well-being
          and the well-being of those around them. What is the product of living
          this way? Presently, there is more anxiety, depression and fatigue
          than there has ever been.
          <br />
          <br />
          Heroic Minds has studied hundreds of real life heroic stories through
          the lens of psychological and philosophical heavy weights such as
          Jung, James, Rogers, Nietzsche, Plato and many more.
          <br />
          <br />
          We want to make one thing clear, the problem is not that you haven’t
          created the right habits, set measurable goals, worked hard, read
          enough neuroscience or meditated enough. The issue is that deep down
          there exists a void that we perceive would be filled if we got certain
          things or attached our lives to certain finite ideas. For some it is
          money, for some it is power, others it is attention, status, the list
          goes on. It is the act of seeking things in the world to cover up this
          void that leads to being stuck in your own head, tired, and
          disconnected. This is what leads to feeling like when it is time to
          perform, time to get the job done, time to change a behaviour, time to
          do the right thing, the required energy or feeling, just isn’t there.
          <br />
          <br />
          The basis of Heroic Minds is that if you want to live a
          purpose-driven, resilient, high-performing life, without being stuck
          in your own head, without forcing yourself to do the right thing, then
          you need to intervene at the level of what drives your perceptions,
          which is what you value and what you are aiming at in your life - what
          we call, your global beliefs. Global beliefs provide context for
          everything you do. Are you seeking to create prosperity everywhere you
          go or do you feel that there is a sense of meaninglessness to your
          life?
          <br />
          <br />
          Global beliefs are the currents beneath your behaviour guiding how you
          feel, think and behave. You experience these currents when you don't
          feel like doing something you know you should or when you feel like
          doing something you know you should not. Developing and nurturing
          these global beliefs are what build the strength of your psychological
          foundation and provide direction to your life.
          <br />
          <br />
          This is what allows surgeons to perform with someone's life in their
          hands, the leader to act with vigour while maintaining love for their
          team, the entrepreneur to risk it all to chase something they believe
          in, a parent to give up their old life for the benefit of someone
          else's, and top athletes to execute with the game on the line. It is
          only when an individual has everything they need internally that human
          potential is realized. And the reality is, this hero is in every
          single one of us.
          <br />
          <br />
          The optimal way to achieve this life is such that you are not looking
          to the world to be fulfilled, you are not calculating your behaviour.
          Rather, you allow an invigorating love of serving the world to be your
          guiding global belief. In living this way, you feel as if you already
          have everything you need because what you value is attainable in every
          life experience. This allows you to build your psychological
          foundation on solid rock because you have the ability to feel
          fulfilled and engaged regardless of the situation or the environment
          you are in. You maintain a composed and powerful mind that appears to
          the world as the hero.
        </p>
      </div>
    );
  }
  renderLeft5() {
    return (
      <div className="align-middle my-3">
        <img alt="Hompage-image2" className="img-fluid houseImg" src={House} />
      </div>
    );
  }
  renderRight5() {
    return (
      <div className="abput-page-7 align-middle flex-column align-items-start my-3">
        <p className="text h30 lh170 fw500">
          When the heavy rain, wind, and floods arrived, those that built their
          homes on sand were in ruin, while those that built their homes solid
          rock, stood tall.
        </p>
        <p className="text text-gray-757 text-left h20 lh130">
          - Parable of the Wise and the Foolish Builders
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="about-page my-container-90">
        <section className="mt-8"> {this.renderComp()} </section>

        <section className="mt-13">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
            fullContainer="true"
            reverse="true"
          />
        </section>
        <section className="mt-5">
          <DisplayBox
            colLeft="3"
            colRight="9"
            contentLeft={this.renderLeft2()}
            contentRight={this.renderRight2()}
            fullContainer="true"
          />
        </section>
        <section className="mt-13">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderLeft3()}
            contentRight={this.renderRight3()}
            fullContainer="true"
            reverse="true"
          />
          <section className="mt-13">
            <DisplayBox
              colLeft="3"
              colRight="9"
              contentLeft={this.renderLeft4()}
              contentRight={this.renderRight4()}
              fullContainer="true"
            />
          </section>
        </section>
        <div className="gray-box mt-13 pb-5">
          <section className=""> {this.renderCom2()} </section>
          <section className="mt-7 pb-5">
            <DisplayBox
              colLeft="6"
              colRight="6"
              contentLeft={this.renderLeft5()}
              contentRight={this.renderRight5()}
              fullContainer="true"
            />
          </section>
        </div>
      </div>
    );
  }
}

export default AboutPage;
