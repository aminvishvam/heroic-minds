import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import Book from "../../assets/AboutPageAssets/Book.svg";
import Behavioural from "../../assets/AboutPageAssets/Click.svg";
import Brain from "../../assets/AboutPageAssets/Brain.svg";
import House from "../../assets/AboutPageAssets/House.svg";
import Pen from "../../assets/AboutPageAssets/Pen.svg";
import Psychological_Foundation_audio from "../../assets/AboutPageAssets/Psychological_Foundation.mp3";
import pause from "../../assets/HomePageAssets/Pause.svg";
import playIcon from "../../assets/HomePageAssets/play.svg";

import "./AboutPage.css";

class AboutPage extends Component {
  state = {
    audio: new Audio(Psychological_Foundation_audio),
    isPlaying: false,
  };

  togglePlayPause = () => {
    let playerStatus = this.state.isPlaying;
    if (!playerStatus) {
      this.state.audio.play();
    } else {
      this.state.audio.pause();
    }
    this.setState({ isPlaying: !playerStatus });
  };

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
          <img src={!this.state.isPlaying ? playIcon : pause} />
        </button>
        <p className="text text-center h21 lh170 mt-5">
          When your life is oriented solely by self-fulfillment or your own
          personal gain, you constantly measure your self worth against finite
          ideas or concepts, such as your job, your title, your social or
          monetary status or how well you played your last game. These mentally
          draining and strenuous aims lead people toward negative motivation-
          the fear of an undesired outcome driving one's behaviour. It is a life
          that leads to living in your own head, over-thinking, calculating and
          comparing. Historical theology says, this is building your
          psychological foundation on sand instead of solid rock because you are
          always at the mercy of something outside of you, there is constantly a
          void that needs to be filled.
          <br />
          <br />
          Let’s say, instead of shaping your life around your own self-serving
          agenda you aim to grow and evolve in the direction of your greatest
          self, to mutually create the greatest life for you and for the people
          around you. To put this another way, what if you allowed one of the
          most vitalizing feelings to orient your life? Love. Love, not meaning
          frilly, comfortable, nostalgia. But rather, devotion to becoming your
          greatest self, knowing that it fosters a life of purpose, impact and
          high-performance.
          <br />
          <br />
          When you allow this love for improving the world and those in it to
          orient your life, your view of life changes. You have an understanding
          for the stark realities of life, knowing that it may rain, you may
          lose things, you may fail, you may struggle, but that understanding of
          the hard truth is balanced by an empowering and invigorating
          realization that it is in these moments that you can find purpose and
          opportunity.
          <br />
          <br />
          What happens when this is the approach you take to life? You run on a
          high-octane fuel that is created through the ecstasy of a fulfilling
          life. You are no longer stuck in your head overthinking every move due
          to the worry of what you might lose, where you may make a mistake,
          where you stand in society or how you made a bad pass earlier in the
          game. You lead with your attention on improving the world and what
          could be.
          <br />
          <br />
          The goal is for you to have a quiet mind with the ball in your hands
          and 10 seconds left in the game, to not let the loss of something take
          away from the opportunity in its place, to do difficult things without
          having to convince yourself to do them. To live a life full of
          connection, purpose, meaning, love and naturally bring optimism into
          every room you enter.
          <br />
          <br />
          Heroic Minds mission is to guide you to shape and nurture your mind in
          such a way that you maintain a powerful life and carry an unwavering
          confidence regardless of what is standing in your way. This is what we
          refer to as the hero.
          <br />
          <br />
          This hero exists in every single one of us but so does the opposite,
          selfishness, resentment, pessimism, over-thinking, etc. So you must
          continuously shape and nurture your mind. Only then can you build your
          psychological foundation solid rock.
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
