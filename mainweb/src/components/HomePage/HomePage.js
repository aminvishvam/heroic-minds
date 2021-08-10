import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";

import Main_Img from "../../assets/HomePageAssets/Homepage_Main.svg";
import imgHeadphone from "../../assets/HomePageAssets/Homepage-2-img.jpg";
import Libra from "../../assets/HomePageAssets/Libra.svg";
import Book from "../../assets/AboutPageAssets/Book.svg";
import World from "../../assets/HomePageAssets/World.svg";
import Text from "../../assets/HomePageAssets/Text.svg";
import Community from "../../assets/HomePageAssets/Community.svg";
import audio1Img from "../../assets/HomePageAssets/audio1Img.svg";
import audio2Img from "../../assets/HomePageAssets/audio2Img.svg";
import audio3Img from "../../assets/HomePageAssets/audio3Img.svg";
import audio4Img from "../../assets/HomePageAssets/audio4Img.svg";
import plusSign from "../../assets/HomePageAssets/plusSign.svg";
import Man from "../../assets/AboutPageAssets/Man.svg";
import Click from "../../assets/AboutPageAssets/Click.svg";
import Pen_Icon_Black from "../../assets/HomePageAssets/Pen_Icon_Black.svg";
import Pen_Icon from "../../assets/HomePageAssets/Pen_Icon.svg";
import { AudioPlayer } from "./MyAudioPlayer/AudioPlayer";

import Audio1 from "../../assets/HomePageAssets/Audio2.wav";
import Audio2 from "../../assets/HomePageAssets/Audio2.wav";
import Audio3 from "../../assets/HomePageAssets/Audio4.wav";
import Audio4 from "../../assets/HomePageAssets/Audio4.wav";

import AudioText1 from "../../assets/HomePageAssets/AudioText2.srt";

import "./HomePage.css";
import "./Text.css";
import "./TextMobile.css";
import "./TextIpad.css";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import dateFormat from "dateformat";

// export default HomePage;
class HomePage extends Component {
  state = {
    modal1IsOpen: false,
    modal2IsOpen: false,
    modal3IsOpen: false,
    modal4IsOpen: false,
    text1IsOpen: false,
    text2IsOpen: false,
    text3IsOpen: false,
    text4IsOpen: false,
  };

  openModal1 = () => {
    this.setState({ modal1IsOpen: true });
  };
  closeModal1 = () => {
    this.setState({ modal1IsOpen: false });
  };

  openModal2 = () => {
    this.setState({ modal2IsOpen: true });
  };
  closeModal2 = () => {
    this.setState({ modal2IsOpen: false });
  };

  openModal3 = () => {
    this.setState({ modal3IsOpen: true });
  };
  closeModal3 = () => {
    this.setState({ modal3IsOpen: false });
  };

  openModal4 = () => {
    this.setState({ modal4IsOpen: true });
  };
  closeModal4 = () => {
    this.setState({ modal4IsOpen: false });
  };

  openText1 = () => {
    this.setState({ text1IsOpen: true });
  };
  closeText1 = () => {
    this.setState({ text1IsOpen: false });
  };

  openText2 = () => {
    this.setState({ text2IsOpen: true });
  };
  closeText2 = () => {
    this.setState({ text2IsOpen: false });
  };

  openText3 = () => {
    this.setState({ text3IsOpen: true });
  };
  closeText3 = () => {
    this.setState({ text3IsOpen: false });
  };

  openText4 = () => {
    this.setState({ text4IsOpen: true });
  };
  closeText4 = () => {
    this.setState({ text4IsOpen: false });
  };

  renderDate() {
    var now = new Date();
    var today = dateFormat(now, "mmmm dS, yyyy");
    return <span>{today}</span>;
  }

  renderMain() {
    return (
      <div className="my-container-90 mt-7">
        <div className="d-flex  flex-sm-nowrap flex-wrap-reverse align-items-center justify-content-center">
          <div className="home-page-1-title header-text-animation">
            <p className="text bold k40 lh120 mt-4">
              Enhance your mind with the most powerful framework for life.
            </p>
            <p className="text h22 lh120 mt-2 text-gray-757 fw600">
              The root of well-being &amp; performance,
              <span className="text-black">your value system.</span>
            </p>
          </div>
          <div className="text-center mt-4">
            <img src={Main_Img} className="img-fluid home-page-1-img" />
          </div>
        </div>
      </div>
    );
  }

  renderProblem() {
    return (
      <div className="section-box home-page-4 mt-10">
        <h1 className="text text-white bold k35 lh120 text-lg-left text-center">
          The Problem
        </h1>
        <br />
        <p className="text text-white h21 lh130  text-lg-left text-center">
          The majority of our action is determined by the emotional associations
          we have with the tasks and people we deal with. These associations are
          organized by our values.
          <br />
          <br />
          The problem today is that people are relentlessly exposed to illusive,
          self-serving values such as attention, money and status, and once
          these values are realized or attained, they do not satiate our deepest
          human needs.
          <br />
          <br />
          This has led to lives with an unfillable void, stressed, anxious,
          disconnected, tired, over-thinking and thus, reliant on passive
          routines, life-hacks, ideals of grinding, and seeking more advice
          without giving attention to the underlying cause of the issue..
        </p>
      </div>
    );
  }
  renderSolution() {
    return (
      <div className="section-box-white home-page-4 mt-5">
        <h1 className="text text-black bold k35 lh120 text-lg-left text-center">
          The Solution
        </h1>
        <br />
        <p className="text text-black h21 lh130 text-lg-left text-center">
          Expose individuals to the most powerful framework for life through the
          most efficious medium of behavioural change, storytelling.
          <br />
          <br />
          This enjoyable experience induces a self-reflective response, guiding
          people to shape the value system that orients their life.
          <br />
          <br />
          A self-centered, hyper-focused, exhausted mind is slowly replaced by
          an outward-looking, wide gaze, energized and seeing challenges as
          opportunities.
          <br />
          <br />
          The outcome is the realization of how ones values influence their
          behaviour, their ability to perform and ultumately the quality of
          their life.
        </p>
      </div>
    );
  }

  renderLibra() {
    return (
      <div className="my-container-90">
        <div className="text-center">
          <img src={Libra} className="img-fluid img-libra" />
        </div>
        <div className="mt-8">
          <p className="text text-center h22 lh130">
            Philosophical and psychological heavy weights have known for
            hundreds of years that there are currents beneath our behaviour
            guiding what we do. These currents are the feelings we associate
            with our daily life, obligations, responsibilities, other people,
            and more. These feelings are heavily influenced by what we value.
            <br />
            <br />
            <span className="fw500">
              Heroic Minds is a resource to strengthen your psychological
              foundation such that you maintain a powerful value system that
              orients your life.
            </span>
          </p>
        </div>
      </div>
    );
  }

  renderMainImage2() {
    return (
      <div className="text-center container-fluid">
        <img src={imgHeadphone} className="img-fluid" />
      </div>
    );
  }

  renderPlus() {
    return (
      <div className="d-flex flex-row flex-nowrap home-page-5 justify-content-md-between justify-content-lg-center">
        <div className=" text-center">
          <img alt="" className="img-fluid h-50 img-man pb-4" src={Man} />
          <p className="text k32 lh100  text-center mt-4">Logotherapy</p>
          <p className="text h21 lh130  text-center mt-4">
            Find meaning and purpose that invigorates your life.
          </p>
        </div>
        <div className="text-center mt-7">
          <span className="m-3">
            <img alt="" className="img-fluid plusImg " src={plusSign} />
          </span>
        </div>
        <div className=" text-center">
          <img alt="" className="img-fluid img-click h-50 pb-4" src={Click} />

          <p className="text k32 lh100 text-center mt-4">
            Behavioural Activation
          </p>
          <p className="text h21 lh130  text-center mt-4">
            Do more of what brings real value into your life
          </p>
        </div>
      </div>
    );
  }

  renderStoryTelling() {
    return (
      <div className="home-page-6 mt-5">
        <div className="d-flex flex-md-nowrap flex-wrap align-items-center justify-content-center">
          <div className="m-3 mr-5">
            <img
              alt="Hompage-image2"
              className="img-fluid img-storytelling "
              src={Book}
            />
          </div>
          <div className="m-3">
            <div className="text k40 lh130 ">
              Through the engaging medium of <b>story telling.</b>
            </div>
            <br />
            <div className="text h21 lh120">
              Heroic Minds utilizes the enjoyable medium of story telling as an
              engaging, therapeutic experience.
              <br />
              <br />
              Story telling is up to
              <b> 22x more effective</b> in behavioural change and memory of
              ideas than rational reason alone.
              <br />
              (Standord University, 2019)
              <br />
              <br />
              <Link to="/about">
                <span className="link-text text-black">
                  <b>Learn More.</b>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderValues() {
    return (
      <div className="home-page-8">
        <div className="mb-5 pl-4">
          <h1 className="text bold k45 lh120 text-center text-lg-left">
            Value of Heroic Minds
          </h1>
        </div>
        <div className="d-flex flex-row flex-lg-nowrap flex-wrap">
          <div className="d-flex flex-row flex-sm-nowrap  flex-wrap">
            <div className="section-box-mini text text-white text-center col-sm-5 mx-auto m-3">
              <h1 className="h28 fw600 lh150 ls1half">Enjoyable</h1>
              <p className="h20 lh120 text-center">
                Short and engaging stories to listen to or read.
              </p>
            </div>
            <div className="section-box-mini text text-white col-sm-5 m-3 mx-auto">
              <h1 className="h28 fw600 lh150 ls1half text-center">Organized</h1>
              <p className="h20 lh120 text-center">
                Organized by topic and theme such as, Pop-Culture and Greek
                Mythology or Perseverance and Leadership.
              </p>
            </div>
          </div>
          <div className="d-flex flex-row flex-sm-nowrap flex-wrap">
            <div className="section-box-mini text text-white col-sm-5 m-3 mx-auto">
              <h1 className="h28 fw600 lh150 ls1half text-center">Impactful</h1>
              <p className="h20 lh120 text-center">
                Long form stories condensed down into 5-10 minute listens/reads.
              </p>
            </div>
            <div className="section-box-mini text text-white col-sm-5 m-3 mx-auto">
              <h1 className="h28 fw600 lh150 ls1half text-center">
                Therapeutic
              </h1>
              <p className="h20 lh120 text-center">
                Listening to and reflecting on stories as a form of logotherapy
                and behavioural activation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderBlackBox() {
    return (
      <div className="home-page-9">
        <div className="my-container-85 pb-1 pt-1">
          <div className="text text-center text-white h24 lh160 mt-10 mb-10 ">
            &nbsp;&nbsp;&nbsp;Most of life’s challenges present a choice - to
            rise to the challenge or continue to struggle. The framework of the
            hero is that of a person whom values and aims to rise to the
            challenge out of love for others. This shifts the focus from the
            individual, their income, status, success, etc., to the world around
            them. Only then can one truly be present and live fully, without
            reliance on external tools.
          </div>
        </div>
      </div>
    );
  }

  // ---------------- Listen Now heading ------------ //
  renderListenNowHead() {
    return (
      <div className="home-page-7">
        <br /> <br /> <br />
        <br />
        <h1 className="text text-center k50 lh120 bold">Listen Now</h1>
      </div>
    );
  }

  togglePlay() { }

  toggleText() { }
  // ---------------- sound track 1  (title , catagory and lyrics) ------------ //

  renderStory1() {
    return (
      <div>
        <div
          className="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-md-between  
                         align-items-sm-center align-items-end story-titlebar  ml-0"
        >
          <div className="d-flex  flex-column flex-wrap Story-header my-auto pt-4">
            <div className="story-title  d-flex flex-wrap align-items-end">
              <p className="text s30 lh120 fw600 mr-4">A Heroic Mind </p>
              <p className="text s18 lh150 text-gray-97 mr-3 fw500">
                Introduction Course
              </p>
            </div>
            <div className="d-flex flex-wrap mt-1 story-categary">
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Love
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Behaviour
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Philosophy
              </span>
            </div>
          </div>
          <div className=" d-md-none d-block text-center mt-4 w-100">
            <img
              alt="Hompage-image1 "
              className="img-fluid story-img"
              src={audio1Img}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls mt-4 pl-2 mr-4">
            <AudioPlayer audioToPlay={Audio1} textToDisplay={AudioText1} />

            <div className="d-flex flex-row align-items-center">
              <Modal show={this.state.text1IsOpen} onHide={this.closeText1}>
                <Modal.Header>
                  <div className="closeModel ml-auto">
                    <button
                      type="button"
                      onClick={this.closeText1}
                      className="btn-lg close-btn"
                    >
                      X
                    </button>
                  </div>
                </Modal.Header>
                <Modal.Body className="m-4 pt-0 story-modal-text">
                  <p className=" text fw400 s16 lh140">
                    A lion doesn't go into battle worrying about how it feels,
                    worried about how sharp its tools are, worried about how it
                    compares to other lions, a lion goes into battle, willing to
                    do whatever it takes to get what it wants, to get what it
                    deserves. Mental well-being should be the exact same thing.
                    And the status quo right now, unfortunately, isn't working.
                    We read five, six self-help books and then we're told to
                    change X, Y and Z. We're told to grind and push ourselves
                    and then sit and wait to feel that change. That's not
                    sustainable. So what have I seen in people that have gone
                    from way down here to so far up they can't even comprehend?
                    I say, how did you get through your challenge? How did you
                    get through your struggles? They look back even reflecting
                    and they didn't have a plan. They didn't have checkboxes.
                    They didn't have expectations. And the most interesting
                    thing is if you ask them if they grinded, if they had to
                    push themselves, they never did. What they would say is that
                    they were pulled to do the tough things. There's two ways to
                    hear that you're not good enough. There's two ways to hear
                    that you can't handle it. There's two ways to hear that your
                    business idea won't work. There's two ways to hear that
                    you're not a good enough athlete. There's two ways to get
                    out of bed in the morning when that alarm goes off at six
                    a.m., it's minus 30 outside the story we have right here,
                    the ten percent of our mind that we can control that
                    narrative.
                    <br />
                    <br />
                    We all have it no matter how low or how crummy we may feel,
                    whether we like it or not, we are telling ourselves a story
                    that you can handle the challenges in front of you or that
                    you can't. You have a story in your mind telling you how
                    strong you are or the opposite. You have a why. Why am I
                    going to get into bed right now? Why am I going to push
                    through this? That story is telling the 90 percent of our
                    brain that makes all our decisions, that controls all our
                    motivations, controls our instincts, our intuition. We're
                    telling that survival part of our brain, if we can handle it
                    and if we tailor that story in our mind, if we find out why
                    now we're not grinding, we're not pushing ourselves through
                    the tough things, that alarm goes off. We are pulled to get
                    out of bed. We are jumping out of bed at the opportunity
                    that exists, just like the lion. We've changed the narrative
                    in our mind to go from fear and apprehension that's cloudy
                    and blurry and checkboxes and what we need to do and how we
                    need to feel. That doesn't matter. We start running on
                    instinct. We start thinking clearly. We start playing on
                    offense. I have a question for everyone in this room. What
                    is the story you have in your mind right now? What are you
                    telling yourself about how powerful, how creative, how
                    resilient you are? And more importantly, why peel back the
                    layers not just to be good, not just to play a good game?
                    It's deeper than that.
                    <br />
                    <br />
                    Why? Why is it you want to be better than you are right now?
                    If you ask me that question, I know if someone sees me
                    taking on the challenge, they're going to join in and fight
                    with me, because I know if I take on this challenge, I'm
                    going to inspire someone else to do the same thing. And when
                    you have a why so strong that you'll do anything, that's
                    when our mind clears. That's when the concern that we have
                    for how we feel disappears and a sense of inner control and
                    strength takes its place. If you can tell yourself right now
                    that you're the hero of your story or if you can think of
                    someone something a reason that you would fight through
                    anything, I'd like you to stand up. I see a room full of
                    people that have just proven that they have the ability to
                    control that story in their mind, a story that's going to
                    turn into power, fuel, energy, resilience, to remind us of
                    the power we have to look challenge in the eye to take that
                    step into the storm and become the absolute best version of
                    ourselves. How many people here are the hero, their story?
                    <br />
                    <br />
                  </p>
                </Modal.Body>
              </Modal>

              <input
                type="image"
                variant="primary"
                alt="audio-controls"
                onClick={this.openText1}
                className="audio-btn ml-4 mr-4 d-lg-none d-block p-1 pb-2"
                src={Text}
                width="35"
                height="35"
              />

              <Modal show={this.state.modal1IsOpen} onHide={this.closeModal1}>
                <Modal.Header>
                  <div className="d-flex flex-row flex-wrap-reverse w-100 justify-content-end">
                    <div className="d-flex flex-wrap flex-xl-row flex-column align-items-center justify-content-xl-between justify-content-around w-100 modal-header-div">
                      <div className=" m-1  d-flex flex-row align-items-center">
                        <div className="mr-0 modal-pen-icon">
                          <img
                            alt="pen"
                            src={Pen_Icon_Black}
                            className="m-1 "
                          />
                        </div>
                        <p className="text fw500 h40  m-1">Sample Journal</p>
                      </div>
                      <div className="d-flex flex-xl-row flex-lg-column-reverse align-items-center  flex-column-reverse modal-header-right">
                        <p className="text fw500 h26 m-1 p-1">A Heroic Mind</p>
                        <img
                          alt="audio img 1"
                          src={audio1Img}
                          className="m-1 modal-img"
                        />
                      </div>
                    </div>
                    <div className="closeModel">
                      <button
                        type="button"
                        onClick={this.closeModal1}
                        className="btn-lg close-btn"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body className="ml-4 mt-2 pt-0">
                  <p className=" text fw600 text-gray-757 h16">
                    {this.renderDate()}
                  </p>
                  <p className="mt-5 text s18 fw600 lh140">
                    <i>
                      Thoughts? How does this story relate to your past?
                      present? future?
                    </i>
                  </p>
                  <p className="mt-5 mb-5 text s18 fw600 lh140">
                    <i>
                      Thoughts? How does this story relate to your past?
                      present? future?
                    </i>
                  </p>
                </Modal.Body>
              </Modal>
              <input
                type="image"
                variant="primary"
                onClick={this.openModal1}
                alt="audio-controls"
                className="audio-btn ml-4"
                src={Pen_Icon}
                width="35"
                height="35"
              />
            </div>
          </div>
        </div>
        <div
          className="mt-4  pr-3 .smooth-scroll d-lg-block d-none"
          id="story-text"
        >
          A lion doesn't go into battle worrying about how it feels, worried
          about how sharp its tools are, worried about how it compares to other
          lions, a lion goes into battle, willing to do whatever it takes to get
          what it wants, to get what it deserves. Mental well-being should be
          the exact same thing. And the status quo right now, unfortunately,
          isn't working. We read five, six self-help books and then we're told
          to change X, Y and Z. We're told to grind and push ourselves and then
          sit and wait to feel that change. That's not sustainable. So what have
          I seen in people that have gone from way down here to so far up they
          can't even comprehend? I say, how did you get through your challenge?
          How did you get through your struggles? They look back even reflecting
          and they didn't have a plan. They didn't have checkboxes. They didn't
          have expectations. And the most interesting thing is if you ask them
          if they grinded, if they had to push themselves, they never did. What
          they would say is that they were pulled to do the tough things.
          There's two ways to hear that you're not good enough. There's two ways
          to hear that you can't handle it. There's two ways to hear that your
          business idea won't work. There's two ways to hear that you're not a
          good enough athlete. There's two ways to get out of bed in the morning
          when that alarm goes off at six a.m., it's minus 30 outside the story
          we have right here, the ten percent of our mind that we can control
          that narrative.
          <br />
          <br />
          We all have it no matter how low or how crummy we may feel, whether we
          like it or not, we are telling ourselves a story that you can handle
          the challenges in front of you or that you can't. You have a story in
          your mind telling you how strong you are or the opposite. You have a
          why. Why am I going to get into bed right now? Why am I going to push
          through this? That story is telling the 90 percent of our brain that
          makes all our decisions, that controls all our motivations, controls
          our instincts, our intuition. We're telling that survival part of our
          brain, if we can handle it and if we tailor that story in our mind, if
          we find out why now we're not grinding, we're not pushing ourselves
          through the tough things, that alarm goes off. We are pulled to get
          out of bed. We are jumping out of bed at the opportunity that exists,
          just like the lion. We've changed the narrative in our mind to go from
          fear and apprehension that's cloudy and blurry and checkboxes and what
          we need to do and how we need to feel. That doesn't matter. We start
          running on instinct. We start thinking clearly. We start playing on
          offense. I have a question for everyone in this room. What is the
          story you have in your mind right now? What are you telling yourself
          about how powerful, how creative, how resilient you are? And more
          importantly, why peel back the layers not just to be good, not just to
          play a good game? It's deeper than that.
          <br />
          <br />
          Why? Why is it you want to be better than you are right now? If you
          ask me that question, I know if someone sees me taking on the
          challenge, they're going to join in and fight with me, because I know
          if I take on this challenge, I'm going to inspire someone else to do
          the same thing. And when you have a why so strong that you'll do
          anything, that's when our mind clears. That's when the concern that we
          have for how we feel disappears and a sense of inner control and
          strength takes its place. If you can tell yourself right now that
          you're the hero of your story or if you can think of someone something
          a reason that you would fight through anything, I'd like you to stand
          up. I see a room full of people that have just proven that they have
          the ability to control that story in their mind, a story that's going
          to turn into power, fuel, energy, resilience, to remind us of the
          power we have to look challenge in the eye to take that step into the
          storm and become the absolute best version of ourselves. How many
          people here are the hero, their story?
          <br />
          <br />
        </div>
      </div>
    );
  }

  // ---------------- sound track 1  (image) ------------ //
  renderStory1Img() {
    return (
      <div className="story-img-section d-md-flex d-none h-100">
        <div className="align-self-center my-auto mx-auto">
          <img
            alt="Hompage-image1 "
            className="img-fluid story-img "
            src={audio1Img}
          />
        </div>
      </div>
    );
  }
  // ---------------- sound track 2  (title , catagory and lyrics) ------------ //

  renderStory2() {
    return (
      <div>
        <div
          className="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-md-between  
                        align-items-sm-center align-items-end story-titlebar  ml-0"
        >
          <div className="d-flex flex-column flex-wrap Story-header my-auto pt-4">
            <div className="story-title  d-flex flex-wrap align-items-end">
              <p className="text s30 lh120 fw600 mr-4">Music - Sia</p>
              <p className="text s18 lh150 text-gray-97 mr-3 fw500">
                Pop Culture
              </p>
            </div>
            <div className="d-flex flex-wrap mt-1 story-categary">
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Love
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Change
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Altruism
              </span>
            </div>
          </div>
          <div className=" d-md-none d-block text-center mt-4 w-100">
            <img
              alt="Hompage-image2"
              className="img-fluid story-img"
              src={audio2Img}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls mt-4 pl-2  mr-4">
            <AudioPlayer audioToPlay={Audio2} />

            <Modal show={this.state.text2IsOpen} onHide={this.closeText2}>
              <Modal.Header>
                <div className="closeModel ml-auto">
                  <button
                    type="button"
                    onClick={this.closeText2}
                    className="btn-lg close-btn"
                  >
                    X
                  </button>
                </div>
              </Modal.Header>
              <Modal.Body className="m-4 pt-0 story-modal-text">
                <p className=" text fw400 s16 lh140">
                  Sia directed a musical drama titled, Music and she also wrote
                  the song “Together” which is the theme song for the movie.
                  Both are referenced here.
                  <br />
                  <br />
                  Zu is a young woman struggling with substance abuse trying to
                  turn her life around.
                  <br />
                  <br />
                  The problem is that she is unable to find the courage to take
                  responsibility for her actions and make real change.
                  <br />
                  <br />
                  Zu finds herself in debt and begins looking for a loophole, a
                  way to repay the debt with money she doesn’ have to work for.
                  She assumes since her grandmother's passing that she could use
                  money from the will to pay the debt. Only to find out that her
                  grandmother did not leave her any money. Her grandmother left
                  her something else.
                  <br />
                  <br />
                  Zu was left with the custody of her autistic half sister named
                  Music.
                  <br />
                  <br />
                  Initially, Zu is not able to properly care for or love Music.
                  Their relationship is empty and troubled.
                  <br />
                  <br />
                  One day in the midst of yelling and crying the neighbour
                  knocked on the door to see what was going on. Zu said to the
                  neighbour, while sounding defeated, “How am I supposed to take
                  care of Music, when I can't even take care of myself?”
                  <br />
                  <br />
                  Day after day. Music sits in the apartment with her headphones
                  on feeling alone even though Zu is sitting an arms length
                  away. Music is unsure what to think. She is not ready to
                  engage in any sort of relationship with Zu because there was
                  no expression of devotion, care or appreciation for her.
                  <br />
                  <br />
                  Finally, Zu attempts to start loving Music, however, she does
                  so rationally and strategically. She attempts to check the
                  boxes, provide food for her, give her toys, and the
                  opportunity to watch tv. It is a negotiated agreement that is
                  a transaction of you do x and I’ll do y and that should equal
                  love. But it doesn’t work.
                  <br />
                  <br />
                  As a lyric in the movie goes, “come on, give me some Stevie
                  Wonder.” Meaning, could Zu find the ability to love that is
                  not based on anything physical, not based on a contractual
                  agreement? It is a feeling of love for something that you may
                  not necessarily be able to see. Again, Zu does try to will a
                  feeling of love upon herself and force better behaviours into
                  her life hoping that would lead to this powerful feeling of
                  love. But it doesn’t work.
                  <br />
                  <br />
                  In debt and wishing she could properly take care of Music, Zu
                  finally breaks down. She cries in frustration because she is
                  not able to connect with Music. She throws books across the
                  room in anger because she is unhappy with who she has become.
                  She wants to be better but has not been able to make real
                  changes to improve herself.
                  <br />
                  <br />
                  Then one afternoon, Music is sitting at the kitchen table
                  hyper-focused on drawing. Zu, standing across the room notices
                  that her blue headphones are about to fall off. While Music
                  continues to draw vigorously with her head down, Zu walks
                  over, bends down and readjusts her headphones. Music looks up,
                  taking a break from her important drawing. She cracks a little
                  smile, just enough to barely show her teeth and her eyes
                  squint ever so slightly. Something Zu had never seen before.
                  <br />
                  <br />
                  Zu feels a warmth, a connection, an energy, she forgets about
                  her worries for a brief moment.
                  <br />
                  <br />
                  The next morning, Zu wanted to experience that feeling again.
                  She woke up 20 minutes early to make breakfast for Music,
                  which is usually a last minute bowl of cereal. Zu positions
                  the eggs and ketchup on the plate to make a smiley face. She
                  then calls Music to come to the table for breakfast.
                  <br />
                  <br />
                  While Zu washes the dishes she looks out the corner of her eye
                  with curiosity for whether Music will notice the smiley face
                  or not.
                  <br />
                  <br />
                  Not expecting a well-prepared breakfast, Music sits down at
                  the kitchen table. She looks down at her plate with curiosity
                  and soon discovers what she is looking at. She looks up and
                  smiles at Zu. This time a full smile, teeth showing and eyes
                  squinting. Zu smiled back.And then, that same feeling came
                  over her, a warmth, a connection. Her worries vanish. A
                  feeling of desire to improve herself for Music takes over.
                  <br />
                  <br />
                  More and more, Zu found the energy and time to communicate
                  with Music, to commit to Music, to empower Music, to make
                  music feel loved, encouraged, wanted. At this point in the
                  movie Zu says, “I am actually learning how to love because I
                  love her and I am going to continue because now she is helping
                  me.”
                  <br />
                  <br />
                  Finally, Zu figured it out. The love for Music and the desire
                  to empower Music, is what energizes her to change her bad
                  habits. She was able to go from the person she was to the
                  person she wanted to be… to the person people needed her to
                  be.
                  <br />
                  <br />
                  As the lyrics go,
                  <br />
                  <br />
                  “You can't love me unless you love you too.”
                  <br />
                  <br />
                  The idea of love for yourself in this movie is not patting
                  yourself on the back, buying yourself something new or lying
                  to yourself about how great you are.
                  <br />
                  <br />
                  This love is the desire to make life better for someone else
                  and in the attempt to do so, one must bring about the best in
                  themselves.
                  <br />
                  <br />
                  In realizing the impact she was making on Music and the fact
                  that she was improving her own life, Zu felt a strong purpose
                  and fulfillment, which created more energy to improve herself.
                  Zu then had the ability to make sacrifices and withstand
                  change. Zu was able to go from thinking about making change to
                  actually making change. She can go from looking for a reason
                  to make change, to having every reason in the world.
                  <br />
                  <br />
                </p>
              </Modal.Body>
            </Modal>

            <input
              type="image"
              variant="primary"
              alt="audio-controls"
              onClick={this.openText2}
              className="audio-btn ml-4 d-lg-none d-block p-1 pb-2"
              src={Text}
              width="35"
              height="35"
            />

            <Modal show={this.state.modal2IsOpen} onHide={this.closeModal2}>
              <Modal.Header>
                <div className="d-flex flex-row flex-wrap-reverse w-100 justify-content-end">
                  <div className="d-flex flex-wrap flex-xl-row flex-column align-items-center justify-content-xl-between justify-content-around w-100 modal-header-div">
                    <div className=" m-1  d-flex flex-row align-items-center">
                      <div className="mr-0 modal-pen-icon">
                        <img alt="pen" src={Pen_Icon_Black} className="m-1 " />
                      </div>
                      <p className="text fw500 h40  m-1">Sample Journal</p>
                    </div>
                    <div className="d-flex flex-xl-row flex-lg-column-reverse align-items-center  flex-column-reverse modal-header-right">
                      <p className="text fw500 h26 m-1 p-1">Music - Sia</p>
                      <img
                        alt="audio img 2"
                        src={audio2Img}
                        className="m-1 modal-img"
                      />
                    </div>
                  </div>
                  <div className="closeModel">
                    <button
                      type="button"
                      onClick={this.closeModal2}
                      className="btn-lg close-btn"
                    >
                      X
                    </button>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className="ml-4 mt-2 pt-0">
                <p className=" text fw600 text-gray-757 h16">
                  {this.renderDate()}
                </p>
                <p className="mt-5 text s18 fw600 lh140">
                  <i>
                    1. Is there a relationship in your life that you would like
                    to improve? How so?
                  </i>
                </p>
                <p className="mt-5 mb-5 text s18 fw600 lh140">
                  <i>
                    2. How does deciding to empower someone else will bring out
                    the greatest parts of you?
                  </i>
                </p>
              </Modal.Body>
            </Modal>
            <input
              type="image"
              variant="primary"
              onClick={this.openModal2}
              alt="audio-controls"
              className="audio-btn ml-4"
              src={Pen_Icon}
              width="35"
              height="35"
            />
          </div>
        </div>
        <div
          className="mt-4  pr-3 .smooth-scroll d-lg-block d-none"
          id="story-text"
        >
          <p className=" text fw400 s16 lh140">
            Sia directed a musical drama titled, Music and she also wrote the
            song “Together” which is the theme song for the movie. Both are
            referenced here.
            <br />
            <br />
            Zu is a young woman struggling with substance abuse trying to turn
            her life around.
            <br />
            <br />
            The problem is that she is unable to find the courage to take
            responsibility for her actions and make real change.
            <br />
            <br />
            Zu finds herself in debt and begins looking for a loophole, a way to
            repay the debt with money she doesn’ have to work for. She assumes
            since her grandmother's passing that she could use money from the
            will to pay the debt. Only to find out that her grandmother did not
            leave her any money. Her grandmother left her something else.
            <br />
            <br />
            Zu was left with the custody of her autistic half sister named
            Music.
            <br />
            <br />
            Initially, Zu is not able to properly care for or love Music. Their
            relationship is empty and troubled.
            <br />
            <br />
            One day in the midst of yelling and crying the neighbour knocked on
            the door to see what was going on. Zu said to the neighbour, while
            sounding defeated, “How am I supposed to take care of Music, when I
            can't even take care of myself?”
            <br />
            <br />
            Day after day. Music sits in the apartment with her headphones on
            feeling alone even though Zu is sitting an arms length away. Music
            is unsure what to think. She is not ready to engage in any sort of
            relationship with Zu because there was no expression of devotion,
            care or appreciation for her.
            <br />
            <br />
            Finally, Zu attempts to start loving Music, however, she does so
            rationally and strategically. She attempts to check the boxes,
            provide food for her, give her toys, and the opportunity to watch
            tv. It is a negotiated agreement that is a transaction of you do x
            and I’ll do y and that should equal love. But it doesn’t work.
            <br />
            <br />
            As a lyric in the movie goes, “come on, give me some Stevie Wonder.”
            Meaning, could Zu find the ability to love that is not based on
            anything physical, not based on a contractual agreement? It is a
            feeling of love for something that you may not necessarily be able
            to see. Again, Zu does try to will a feeling of love upon herself
            and force better behaviours into her life hoping that would lead to
            this powerful feeling of love. But it doesn’t work.
            <br />
            <br />
            In debt and wishing she could properly take care of Music, Zu
            finally breaks down. She cries in frustration because she is not
            able to connect with Music. She throws books across the room in
            anger because she is unhappy with who she has become. She wants to
            be better but has not been able to make real changes to improve
            herself.
            <br />
            <br />
            Then one afternoon, Music is sitting at the kitchen table
            hyper-focused on drawing. Zu, standing across the room notices that
            her blue headphones are about to fall off. While Music continues to
            draw vigorously with her head down, Zu walks over, bends down and
            readjusts her headphones. Music looks up, taking a break from her
            important drawing. She cracks a little smile, just enough to barely
            show her teeth and her eyes squint ever so slightly. Something Zu
            had never seen before.
            <br />
            <br />
            Zu feels a warmth, a connection, an energy, she forgets about her
            worries for a brief moment.
            <br />
            <br />
            The next morning, Zu wanted to experience that feeling again. She
            woke up 20 minutes early to make breakfast for Music, which is
            usually a last minute bowl of cereal. Zu positions the eggs and
            ketchup on the plate to make a smiley face. She then calls Music to
            come to the table for breakfast.
            <br />
            <br />
            While Zu washes the dishes she looks out the corner of her eye with
            curiosity for whether Music will notice the smiley face or not.
            <br />
            <br />
            Not expecting a well-prepared breakfast, Music sits down at the
            kitchen table. She looks down at her plate with curiosity and soon
            discovers what she is looking at. She looks up and smiles at Zu.
            This time a full smile, teeth showing and eyes squinting. Zu smiled
            back.And then, that same feeling came over her, a warmth, a
            connection. Her worries vanish. A feeling of desire to improve
            herself for Music takes over.
            <br />
            <br />
            More and more, Zu found the energy and time to communicate with
            Music, to commit to Music, to empower Music, to make music feel
            loved, encouraged, wanted. At this point in the movie Zu says, “I am
            actually learning how to love because I love her and I am going to
            continue because now she is helping me.”
            <br />
            <br />
            Finally, Zu figured it out. The love for Music and the desire to
            empower Music, is what energizes her to change her bad habits. She
            was able to go from the person she was to the person she wanted to
            be… to the person people needed her to be.
            <br />
            <br />
            As the lyrics go,
            <br />
            <br />
            “You can't love me unless you love you too.”
            <br />
            <br />
            The idea of love for yourself in this movie is not patting yourself
            on the back, buying yourself something new or lying to yourself
            about how great you are.
            <br />
            <br />
            This love is the desire to make life better for someone else and in
            the attempt to do so, one must bring about the best in themselves.
            <br />
            <br />
            In realizing the impact she was making on Music and the fact that
            she was improving her own life, Zu felt a strong purpose and
            fulfillment, which created more energy to improve herself. Zu then
            had the ability to make sacrifices and withstand change. Zu was able
            to go from thinking about making change to actually making change.
            She can go from looking for a reason to make change, to having every
            reason in the world.
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }

  // ---------------- sound track 2  (image) ------------ //
  renderStory2Img() {
    return (
      <div className="story-img-section d-md-flex d-none h-100">
        <div className="align-self-center my-auto mx-auto">
          <img
            alt="Hompage-image1 "
            className="img-fluid story-img "
            src={audio2Img}
          />
        </div>
      </div>
    );
  }
  // ---------------- sound track 3 (title , catagory and lyrics) ------------ //

  renderStory3() {
    return (
      <div>
        <div
          className="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-md-between  
                        align-items-sm-center align-items-end story-titlebar  ml-0"
        >
          <div className="d-flex flex-column flex-wrap Story-header my-auto pt-4">
            <div className="story-title  d-flex flex-wrap align-items-end">
              <p className="text s30 lh120 fw600 mr-4">
                Quiddich - Harry Potter
              </p>
              <p className="text s18 lh150 text-gray-97 mr-3 fw500">
                Fiction Literature
              </p>
            </div>
            <div className="d-flex flex-wrap mt-1 story-categary">
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Leadership
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Adventure
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Bravery
              </span>
            </div>
          </div>
          <div className=" d-md-none d-block text-center mt-4 w-100">
            <img
              alt="Hompage-image1 "
              className="img-fluid story-img"
              src={audio3Img}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls mt-4 pl-2  mr-4">
            <AudioPlayer audioToPlay={Audio3} />

            <Modal show={this.state.text3IsOpen} onHide={this.closeText3}>
              <Modal.Header>
                <div className="closeModel ml-auto">
                  <button
                    type="button"
                    onClick={this.closeText3}
                    className="btn-lg close-btn"
                  >
                    X
                  </button>
                </div>
              </Modal.Header>
              <Modal.Body className="m-4 pt-0 story-modal-text">
                <p className=" text fw400 s16 lh140">
                  Quidditch was always one of the most exhilarating parts of the
                  Harry Potter series, and for good reason. The sport was full
                  of drama, suspense and, yes, violence. So from fun titbits
                  about the sport from J.K. Rowling herself, to what happened to
                  the students who decided to pursue the sport as their careers
                  after completing their education at Hogwarts, here are some
                  fun facts you may not know about the wizarding world’s most
                  entertaining sport.
                  <br />
                  <br />
                  We all have it no matter how low or how crummy we may feel,
                  whether we like it or not, we are telling ourselves a story
                  that you can handle the challenges in front of you or that you
                  can't. You have a story in your mind telling you how strong
                  you are or the opposite. You have a why. Why am I going to get
                  into bed right now? Why am I going to push through this? That
                  story is telling the 90 percent of our brain that makes all
                  our decisions, that controls all our motivations, controls our
                  instincts, our intuition. We're telling that survival part of
                  our brain, if we can handle it and if we tailor that story in
                  our mind, if we find out why now we're not grinding, we're not
                  pushing ourselves through the tough things, that alarm goes
                  off. We are pulled to get out of bed. We are jumping out of
                  bed at the opportunity that exists, just like the lion. We've
                  changed the narrative in our mind to go from fear and
                  apprehension that's cloudy and blurry and checkboxes and what
                  we need to do and how we need to feel. That doesn't matter. We
                  start running on instinct. We start thinking clearly. We start
                  playing on offense. I have a question for everyone in this
                  room. What is the story you have in your mind right now? What
                  are you telling yourself about how powerful, how creative, how
                  resilient you are? And more importantly, why peel back the
                  layers not just to be good, not just to play a good game? It's
                  deeper than that.
                  <br />
                  <br />
                  We all know that Harry Potter was an amazing Quidditch player,
                  so it’s surprising to think that he only actually played nine
                  matches during his time at Hogwarts. Of course, he could have
                  played more if he hadn’t been stuck in detention, or in the
                  hospital wing, or there wasn’t a Basilisk roaming the school
                  Petrifying students (and so on). But in the matches that he
                  did play, he was hugely successful. In fact, when Harry played
                  he only ever lost two games, and both times it was due to
                  circumstances beyond his control; fainting after Dementors
                  went into the Hogwarts grounds without permission, and that
                  very unfortunate incident when Cormac McLaggen knocked him out
                  with a Beater’s bat.
                  <br />
                  <br />
                  Despite his success at Hogwarts, Harry never went on to pursue
                  a career in the game. Who knows: if he had, he could have
                  ended up teaming up with Oliver Wood once again, who went on
                  to play for Puddlemere United’s reserve team after finishing
                  Hogwarts. Although that sounds considerably more stressful
                  than what Harry actually did as a career – going after Dark
                  wizards as an Auror and then becoming Head of the Department
                  of Magical Law Enforcement.
                  <br />
                  <br />
                </p>
              </Modal.Body>
            </Modal>

            <input
              type="image"
              variant="primary"
              alt="audio-controls"
              onClick={this.openText3}
              className="audio-btn ml-4 d-lg-none d-block p-1 pb-2"
              src={Text}
              width="35"
              height="35"
            />

            <Modal show={this.state.modal3IsOpen} onHide={this.closeModal3}>
              <Modal.Header>
                <div className="d-flex flex-row flex-wrap-reverse w-100 justify-content-end">
                  <div className="d-flex flex-wrap flex-xl-row flex-column align-items-center justify-content-xl-between justify-content-around w-100 modal-header-div">
                    <div className=" m-1  d-flex flex-row align-items-center">
                      <div className="mr-0 modal-pen-icon">
                        <img alt="pen" src={Pen_Icon_Black} className="m-1 " />
                      </div>
                      <p className="text fw500 h40  m-1">Sample Journal</p>
                    </div>
                    <div className="d-flex flex-xl-row flex-lg-column-reverse align-items-center  flex-column-reverse modal-header-right">
                      <p className="text fw500 h26 m-1 p-1">
                        Quiddich - Harry Potter
                      </p>
                      <img
                        alt="audio img 4"
                        src={audio3Img}
                        className="m-1 modal-img"
                      />
                    </div>
                  </div>
                  <div className="closeModel">
                    <button
                      type="button"
                      onClick={this.closeModal3}
                      className="btn-lg close-btn"
                    >
                      X
                    </button>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className="ml-4 mt-2 pt-0">
                <p className=" text fw600 text-gray-757 h16">
                  {this.renderDate()}
                </p>
                <p className="mt-5 text s18 fw600 lh140">
                  <i>
                    Thoughts? How does this story relate to your past? present?
                    future?
                  </i>
                </p>
                <p className="mt-5 mb-5 text s18 fw600 lh140">
                  <i>
                    Thoughts? How does this story relate to your past? present?
                    future?
                  </i>
                </p>
              </Modal.Body>
            </Modal>
            <input
              type="image"
              variant="primary"
              onClick={this.openModal3}
              alt="audio-controls"
              className="audio-btn ml-4"
              src={Pen_Icon}
              width="35"
              height="35"
            />
          </div>
        </div>
        <div
          className="mt-4  pr-3 .smooth-scroll d-lg-block d-none"
          id="story-text"
        >
          Quidditch was always one of the most exhilarating parts of the Harry
          Potter series, and for good reason. The sport was full of drama,
          suspense and, yes, violence. So from fun titbits about the sport from
          J.K. Rowling herself, to what happened to the students who decided to
          pursue the sport as their careers after completing their education at
          Hogwarts, here are some fun facts you may not know about the wizarding
          world’s most entertaining sport.
          <br />
          <br />
          We all have it no matter how low or how crummy we may feel, whether we
          like it or not, we are telling ourselves a story that you can handle
          the challenges in front of you or that you can't. You have a story in
          your mind telling you how strong you are or the opposite. You have a
          why. Why am I going to get into bed right now? Why am I going to push
          through this? That story is telling the 90 percent of our brain that
          makes all our decisions, that controls all our motivations, controls
          our instincts, our intuition. We're telling that survival part of our
          brain, if we can handle it and if we tailor that story in our mind, if
          we find out why now we're not grinding, we're not pushing ourselves
          through the tough things, that alarm goes off. We are pulled to get
          out of bed. We are jumping out of bed at the opportunity that exists,
          just like the lion. We've changed the narrative in our mind to go from
          fear and apprehension that's cloudy and blurry and checkboxes and what
          we need to do and how we need to feel. That doesn't matter. We start
          running on instinct. We start thinking clearly. We start playing on
          offense. I have a question for everyone in this room. What is the
          story you have in your mind right now? What are you telling yourself
          about how powerful, how creative, how resilient you are? And more
          importantly, why peel back the layers not just to be good, not just to
          play a good game? It's deeper than that.
          <br />
          <br />
          We all know that Harry Potter was an amazing Quidditch player, so it’s
          surprising to think that he only actually played nine matches during
          his time at Hogwarts. Of course, he could have played more if he
          hadn’t been stuck in detention, or in the hospital wing, or there
          wasn’t a Basilisk roaming the school Petrifying students (and so on).
          But in the matches that he did play, he was hugely successful. In
          fact, when Harry played he only ever lost two games, and both times it
          was due to circumstances beyond his control; fainting after Dementors
          went into the Hogwarts grounds without permission, and that very
          unfortunate incident when Cormac McLaggen knocked him out with a
          Beater’s bat.
          <br />
          <br />
          Despite his success at Hogwarts, Harry never went on to pursue a
          career in the game. Who knows: if he had, he could have ended up
          teaming up with Oliver Wood once again, who went on to play for
          Puddlemere United’s reserve team after finishing Hogwarts. Although
          that sounds considerably more stressful than what Harry actually did
          as a career – going after Dark wizards as an Auror and then becoming
          Head of the Department of Magical Law Enforcement.
          <br />
          <br />
        </div>
      </div>
    );
  }

  // ---------------- sound track 3  (image) ------------ //
  renderStory3Img() {
    return (
      <div className="story-img-section d-md-flex d-none h-100">
        <div className="align-self-center my-auto mx-auto">
          <img
            alt="Hompage-image1 "
            className="img-fluid story-img "
            src={audio3Img}
          />
        </div>
      </div>
    );
  }

  // ---------------- sound track 4 (title , catagory and lyrics) ------------ //

  renderStory4() {
    return (
      <div>
        <div
          className="d-flex flex-md-nowrap flex-sm-wrap flex-wrap justify-content-md-between  
                        align-items-sm-center align-items-end story-titlebar  ml-0"
        >
          <div className="d-flex flex-column flex-wrap Story-header my-auto pt-4">
            <div className="story-title  d-flex flex-wrap align-items-end">
              <p className="text s30 lh120 fw600 mr-4">
                Nihilism - True Detective
              </p>
              <p className="text s18 lh150 text-gray-97 mr-3 fw500">
                Pop Culture
              </p>
            </div>
            <div className="d-flex flex-wrap mt-1 story-categary">
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Purpose
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Meaning
              </span>
              <span className="text text-white btn-sm btn-black s16 mr-3 mt-1 rounded">
                Philosophy
              </span>
            </div>
          </div>
          <div className=" d-md-none d-block text-center mt-4 w-100">
            <img
              alt="Hompage-image1"
              className="img-fluid story-img"
              src={audio4Img}
            />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls mt-4 pl-2  mr-4">
            <AudioPlayer audioToPlay={Audio4} />

            <Modal show={this.state.text4IsOpen} onHide={this.closeText4}>
              <Modal.Header>
                <div className="closeModel ml-auto">
                  <button
                    type="button"
                    onClick={this.closeText4}
                    className="btn-lg close-btn"
                  >
                    X
                  </button>
                </div>
              </Modal.Header>
              <Modal.Body className="m-4 pt-0 story-modal-text">
                <p className=" text fw400 s16 lh140">
                  True Detective is one of the most woefully bitter and bleak TV
                  shows to emerge in recent years. Despite its somber tone and
                  themes of loss, yearning and mortality, it connected with a
                  massive audience. The plot—a pair of detectives’ relentlessly
                  hunting down a serial killer. As if the world hasn’t heard
                  this plot before, it was definitely a worn out one.
                  <br />
                  <br />
                  So what was at the heart of its enormous appeal?
                  <br />
                  <br />
                  Maybe the show was a mirror, reflecting the vacuum at the
                  heart of our culture and our yearning for meaning in a world
                  that can seem entirely superficial and achingly numb. Or was
                  it actually a uniquely riveting exploration of nihilism, the
                  belief that nothing has any real value, and the fact that we
                  could experience this vicariously through the journeys of the
                  two lead characters?
                  <br />
                  <br />
                  On the surface they were truly polar opposites:
                  <br />
                  <br />
                  Marty Hart is a ‘family man’, staunch believer in the American
                  Dream, upholder of society’s values and institutions, and a
                  solid team player who gets on well with his work colleagues.
                  On the inside, Marty feels the need for something more
                  intriguing than a dad who has to get home to mow the lawn.
                  This desire for a more engaging life manifests itself in his
                  actions such as affairs that he hides from his wife as well as
                  reckless behaviours at work. In one scenario he shoots a
                  suspect point blank, in another, he fights his partner Rustin
                  in a parking lot. All what appears to be out of impulse. Marty
                  likes to carry on as if everything is okay, but of course, his
                  actions tell a different story.
                  <br />
                  <br />
                  On the other hand, Rustin Cohle is a brooding, intellectual
                  skeptic and loner at odds with both his workmates and the
                  world at large. His lengthy and profound philosophical
                  discourses proves he may be the only man able to compete in
                  conversation with the infamous Aristotle or Friedrich
                  Nietzsche. Of course for Rustin, these philosophical
                  reflections are an attempt to answer the same life riddle that
                  Marty is struggling with.
                  <br />
                  <br />
                  Rustin says things like,
                  <br />
                  <br />
                  ‘Human consciousness is a tragic misstep in evolution. We are
                  creatures that should not by natural law exist, each of us
                  programmed to think we are somebody, when in fact everybody is
                  nobody. The only honourable thing for our species to do is
                  deny our programming and walk hand in hand into extinction’.
                  <br />
                  <br />
                  Hearing such a dark depiction of life can be quite
                  intimidating. But, one may realize that it is in this darkness
                  that we can find the light, our own light. The reflection on
                  such a dark idea with the realization that the ability to find
                  the light lies in our own mind, may be the guide to life's
                  often ambiguous meaning.
                  <br />
                  <br />
                  These musings— delivered during lengthy car rides through
                  desolate Ozark hinterlands-- drive Marty to distraction but
                  it’s not just Rustin who possesses a dangerous nihilism; Marty
                  secretly harbours his own self-destructive black hole deep in
                  his heart and both men are on paths that will eventually lead
                  to heart-breaking decay and loss in their lives.
                  <br />
                  <br />
                  This is all happening while a serial killer is on the loose
                  and it is their sole job to trace their steps and lock them
                  up.
                  <br />
                  <br />
                  While the main plot boils, a subplot explores this personal
                  despair as it eats away at both men from the inside and their
                  personal lives unravel; only the solving of the case can have
                  any hope of redeeming them both.
                  <br />
                  <br />
                  Work proves to be their ultimate salvation or maybe, a break
                  from the continued search to fill their void of meaning. The
                  solving of the case leads to a catharsis or cleansing for both
                  men: they become reconciled to their pasts, find comfort in
                  the present and even form a tentative hope for the future. But
                  the nihilism and despair at the heart of the story is what
                  lingers.
                  <br />
                  <br />
                  It’s ok to identify with these journeys but would we want to
                  experience them for real? The bone-deep feelings of despair
                  and hopelessness with reliance on external factors such as our
                  career to rectify the lack of fulfillment or meaning? The
                  utter lack of faith in anything, even oneself?
                  <br />
                  <br />
                  Many of us go through a kind of imitated ‘pop-nihilism’ in our
                  teens as evidenced by punk, goth, disrespecting superiors,
                  risky behaviours, etc. This is nihilism as a play on words,
                  meme and image rather than the real thing which often emerges
                  later in life and the consequences of which are often more
                  damaging than black lipstick and a cider hangover.
                  <br />
                  <br />
                  So how do we avoid nihilism casting a shadow over our lives?
                  <br />
                  <br />
                  Nietzsche countered it with the idea of self-knowledge, with
                  the notion of self-creation, the drive to take control and
                  mould nature in the way you want, and find meaning in life
                  experiences. So whatever the factors that make you lose hope,
                  death, despair, sickness, love, failure-- the essence of the
                  human spirit is to be able to take control and react, and thus
                  find meaning in at least the effort, if not in its success.
                  <br />
                  <br />
                  “You say, it's dark. And in truth, I did place a cloud before
                  your sun. But do you not see how the edges of the cloud are
                  already glowing and turning light.” - A quote from Friedrich
                  Nietzsche.
                  <br />
                  <br />
                  The stoic and platonic philosophers offer another perspective:
                  use the mind to understand the world around you, including
                  yourself, and find meaning through this process. Another
                  approach is offered by philosophers like Schopenhauer and
                  Kierkegaard, which involves accepting nihilism as a given, and
                  psychologically adapting to it in some way...
                  <br />
                  <br />
                  Or, like the two anti-heroes (those who lack the conventional
                  attributes of a traditional hero) in True Detective, we can
                  find meaning in work.
                  <br />
                  <br />
                  There is dignity in all labour but the best nihilism-antidote
                  is in work that carries personal meaning. And by work, this
                  does not only mean our formalized pension earning job, but all
                  the work we carry out in our lives: Providing for our loved
                  ones. Exercising our creativity. Being a wonderful colleague.
                  Helping to grow an enterprise one can be proud of. Maybe even
                  tracking down a serial killer.
                  <br />
                  <br />
                  Ultimately, it's useless and counterproductive to focus on all
                  the bad and evil of the world, all the cruel inexplicable
                  consequences of fate. It's when we turn our attention to the
                  mysterious, inexplicable existence of good in the world that
                  we truly learn whatever there is in life that is worth
                  knowing.
                  <br />
                  <br />
                </p>
              </Modal.Body>
            </Modal>

            <input
              type="image"
              variant="primary"
              alt="audio-controls"
              onClick={this.openText4}
              className="audio-btn ml-4 d-lg-none d-block p-1 pb-2"
              src={Text}
              width="35"
              height="35"
            />

            <Modal show={this.state.modal4IsOpen} onHide={this.closeModal4}>
              <Modal.Header>
                <div className="d-flex flex-row flex-wrap-reverse w-100 justify-content-end">
                  <div className="d-flex flex-wrap flex-xl-row flex-column align-items-center justify-content-xl-between justify-content-around w-100 modal-header-div">
                    <div className=" m-1  d-flex flex-row align-items-center">
                      <div className="mr-0 modal-pen-icon">
                        <img alt="pen" src={Pen_Icon_Black} className="m-1 " />
                      </div>
                      <p className="text fw500 h40  m-1">Sample Journal</p>
                    </div>
                    <div className="d-flex flex-xl-row flex-lg-column-reverse align-items-center  flex-column-reverse modal-header-right">
                      <p className="text fw500 h26 m-1 p-1">
                        Nihilism - True Detective
                      </p>
                      <img
                        alt="audio img 1"
                        src={audio4Img}
                        className="m-1 modal-img"
                      />
                    </div>
                  </div>
                  <div className="closeModel">
                    <button
                      type="button"
                      onClick={this.closeModal4}
                      className="btn-lg close-btn"
                    >
                      X
                    </button>
                  </div>
                </div>
              </Modal.Header>
              <Modal.Body className="ml-4 mt-2 pt-0">
                <p className=" text fw600 text-gray-757 h16">
                  {this.renderDate()}
                </p>
                <p className="mt-5 text s18 fw600 lh140">
                  <i>
                    1. In the dark reflection of a meaningless life, what do you
                    think of to find light in the dark?
                  </i>
                </p>
                <p className="mt-5 mb-5 text s18 fw600 lh140">
                  <i>
                    2. In all your daily tasks and duties, which bring the
                    greatest purpose? what is that purpose? where could you find
                    purpose in other tasks?
                  </i>
                </p>
              </Modal.Body>
            </Modal>
            <input
              type="image"
              variant="primary"
              onClick={this.openModal4}
              alt="audio-controls"
              className="audio-btn ml-4"
              src={Pen_Icon}
              width="35"
              height="35"
            />
          </div>
        </div>
        <div
          className="mt-4  pr-3 .smooth-scroll d-lg-block d-none"
          id="story-text"
        >
          <p className=" text fw400 s16 lh140">
            True Detective is one of the most woefully bitter and bleak TV shows
            to emerge in recent years. Despite its somber tone and themes of
            loss, yearning and mortality, it connected with a massive audience.
            The plot—a pair of detectives’ relentlessly hunting down a serial
            killer. As if the world hasn’t heard this plot before, it was
            definitely a worn out one.
            <br />
            <br />
            So what was at the heart of its enormous appeal?
            <br />
            <br />
            Maybe the show was a mirror, reflecting the vacuum at the heart of
            our culture and our yearning for meaning in a world that can seem
            entirely superficial and achingly numb. Or was it actually a
            uniquely riveting exploration of nihilism, the belief that nothing
            has any real value, and the fact that we could experience this
            vicariously through the journeys of the two lead characters?
            <br />
            <br />
            On the surface they were truly polar opposites:
            <br />
            <br />
            Marty Hart is a ‘family man’, staunch believer in the American
            Dream, upholder of society’s values and institutions, and a solid
            team player who gets on well with his work colleagues. On the
            inside, Marty feels the need for something more intriguing than a
            dad who has to get home to mow the lawn. This desire for a more
            engaging life manifests itself in his actions such as affairs that
            he hides from his wife as well as reckless behaviours at work. In
            one scenario he shoots a suspect point blank, in another, he fights
            his partner Rustin in a parking lot. All what appears to be out of
            impulse. Marty likes to carry on as if everything is okay, but of
            course, his actions tell a different story.
            <br />
            <br />
            On the other hand, Rustin Cohle is a brooding, intellectual skeptic
            and loner at odds with both his workmates and the world at large.
            His lengthy and profound philosophical discourses proves he may be
            the only man able to compete in conversation with the infamous
            Aristotle or Friedrich Nietzsche. Of course for Rustin, these
            philosophical reflections are an attempt to answer the same life
            riddle that Marty is struggling with.
            <br />
            <br />
            Rustin says things like,
            <br />
            <br />
            ‘Human consciousness is a tragic misstep in evolution. We are
            creatures that should not by natural law exist, each of us
            programmed to think we are somebody, when in fact everybody is
            nobody. The only honourable thing for our species to do is deny our
            programming and walk hand in hand into extinction’.
            <br />
            <br />
            Hearing such a dark depiction of life can be quite intimidating.
            But, one may realize that it is in this darkness that we can find
            the light, our own light. The reflection on such a dark idea with
            the realization that the ability to find the light lies in our own
            mind, may be the guide to life's often ambiguous meaning.
            <br />
            <br />
            These musings— delivered during lengthy car rides through desolate
            Ozark hinterlands-- drive Marty to distraction but it’s not just
            Rustin who possesses a dangerous nihilism; Marty secretly harbours
            his own self-destructive black hole deep in his heart and both men
            are on paths that will eventually lead to heart-breaking decay and
            loss in their lives.
            <br />
            <br />
            This is all happening while a serial killer is on the loose and it
            is their sole job to trace their steps and lock them up.
            <br />
            <br />
            While the main plot boils, a subplot explores this personal despair
            as it eats away at both men from the inside and their personal lives
            unravel; only the solving of the case can have any hope of redeeming
            them both.
            <br />
            <br />
            Work proves to be their ultimate salvation or maybe, a break from
            the continued search to fill their void of meaning. The solving of
            the case leads to a catharsis or cleansing for both men: they become
            reconciled to their pasts, find comfort in the present and even form
            a tentative hope for the future. But the nihilism and despair at the
            heart of the story is what lingers.
            <br />
            <br />
            It’s ok to identify with these journeys but would we want to
            experience them for real? The bone-deep feelings of despair and
            hopelessness with reliance on external factors such as our career to
            rectify the lack of fulfillment or meaning? The utter lack of faith
            in anything, even oneself?
            <br />
            <br />
            Many of us go through a kind of imitated ‘pop-nihilism’ in our teens
            as evidenced by punk, goth, disrespecting superiors, risky
            behaviours, etc. This is nihilism as a play on words, meme and image
            rather than the real thing which often emerges later in life and the
            consequences of which are often more damaging than black lipstick
            and a cider hangover.
            <br />
            <br />
            So how do we avoid nihilism casting a shadow over our lives?
            <br />
            <br />
            Nietzsche countered it with the idea of self-knowledge, with the
            notion of self-creation, the drive to take control and mould nature
            in the way you want, and find meaning in life experiences. So
            whatever the factors that make you lose hope, death, despair,
            sickness, love, failure-- the essence of the human spirit is to be
            able to take control and react, and thus find meaning in at least
            the effort, if not in its success.
            <br />
            <br />
            “You say, it's dark. And in truth, I did place a cloud before your
            sun. But do you not see how the edges of the cloud are already
            glowing and turning light.” - A quote from Friedrich Nietzsche.
            <br />
            <br />
            The stoic and platonic philosophers offer another perspective: use
            the mind to understand the world around you, including yourself, and
            find meaning through this process. Another approach is offered by
            philosophers like Schopenhauer and Kierkegaard, which involves
            accepting nihilism as a given, and psychologically adapting to it in
            some way...
            <br />
            <br />
            Or, like the two anti-heroes (those who lack the conventional
            attributes of a traditional hero) in True Detective, we can find
            meaning in work.
            <br />
            <br />
            There is dignity in all labour but the best nihilism-antidote is in
            work that carries personal meaning. And by work, this does not only
            mean our formalized pension earning job, but all the work we carry
            out in our lives: Providing for our loved ones. Exercising our
            creativity. Being a wonderful colleague. Helping to grow an
            enterprise one can be proud of. Maybe even tracking down a serial
            killer.
            <br />
            <br />
            Ultimately, it's useless and counterproductive to focus on all the
            bad and evil of the world, all the cruel inexplicable consequences
            of fate. It's when we turn our attention to the mysterious,
            inexplicable existence of good in the world that we truly learn
            whatever there is in life that is worth knowing.
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }

  // ---------------- sound track 4  (image) ------------ //
  renderStory4Img() {
    return (
      <div className="story-img-section d-md-flex d-none h-100">
        <div className="align-self-center my-auto mx-auto">
          <img
            alt="Hompage-image1 "
            className="img-fluid story-img "
            src={audio4Img}
          />
        </div>
      </div>
    );
  }

  renderCommunity() {
    return (
      <div className="home-page-10">
        <div className="d-flex align-items-center p-0">
          <div>
            <h1 className="text k45 fw500">Heroic Minds Global Community</h1>
            <br />
            <p className="text h24">
              Sharing empowering stories and ideas to make the world a more
              selfless, courageous, resilient place.
            </p>
          </div>
          <div className="home-page-10-img">
            <img alt="Hompage-image2" className="img-fluid" src={World} />
          </div>
        </div>
      </div>
    );
  }

  renderCommunityImg() {
    return (
      <div className="text-center">
        <img src={Community} className="img-fluid" />
      </div>
    );
  }
  renderEmail() {
    return (
      <div className="home-page-12">
        <p className="text k45 lh150 fw600 text-center">
          Be the first to hear when
          <br /> Heroic Minds go live!
        </p>
        <br />
        <p className="text-center">
          <input
            type="email"
            className=" text intro h24 lh100 pl-4"
            id="email1"
            placeholder="Email..."
          />
        </p>
      </div>
    );
  }
  renderPrice() {
    return (
      <div className="home-page-13">
        <div className="row justify-content-center">
          <div className="col-lg-3 mt-15">
            <a href="/">
              <p className="text text-center fw600 h30 lh130">
                <u>30-Day Free Trial</u>
              </p>
            </a>
            <p className="text text-center h22 lh130 mt-3 fw500">
              30% of Heroic Minds Library
            </p>
            <h1 className="text text-center h40 lh150 fw500">Free</h1>
          </div>

          <div className="col-lg-6 mt-15">
            <a href="/">
              <p className="text text-center fw600 h60 lh47">
                <u>Yearly</u>
              </p>
              <br />
            </a>
            <p className="text text-center h30 lh150 mt-1 fw500">
              Full Heroic Minds Library
            </p>
            <h1 className="text text-center h60 lh130 fw500">$84</h1>
            <p className="text text-center h24 lh130 text-gray-97 ">$7/month</p>
          </div>

          <div className="col-lg-3 mt-15">
            <a href="/">
              <p className="text text-center fw600 h30 lh130">
                <u>Monthly</u>
              </p>
            </a>
            <p className="text text-center h22 lh150 mt-3 fw500">
              Full Heroic Minds Library
            </p>
            <h1 className="text text-center h45 lh150 fw500">$120</h1>
            <p className="text text-center h22 lh130 text-gray-97 ">
              $10/month
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="HomePage mb-15">
        <div className="my-container-90">
          <section className="HomePageHeader">{this.renderMain()}</section>
          <section className="mt-15 my-container-95">
            <DisplayBox
              colLeft="6"
              colRight="6"
              contentLeft={this.renderProblem()}
              contentRight={this.renderSolution()}
              fullContainer="true"
              alwaysColumn="true"
            />
          </section>

          <section className="mt-15"> {this.renderLibra()}</section>
        </div>

        <section className="mt-15 my-container-95">
          {this.renderMainImage2()}
        </section>
        <section className="mt-15 my-container-95">{this.renderPlus()}</section>

        <section className="mt-15 my-container-90">
          {this.renderStoryTelling()}
        </section>

        <div className=" my-container-90">
          {/* -----------Listen Now page */}

          <section className="mt-15">{this.renderListenNowHead()}</section>
          <section className="mt-10 ">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory1()}
              contentRight={this.renderStory1Img()}
              reverse="true"
              fullContainer="true"
            />
          </section>
          <section className="mt-10">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory2()}
              contentRight={this.renderStory2Img()}
              reverse="true"
              fullContainer="true"
            />
          </section>
          <section className=" mt-10">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory3()}
              contentRight={this.renderStory3Img()}
              reverse="true"
              fullContainer="true"
            />
          </section>

          <section className=" mt-10">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory4()}
              contentRight={this.renderStory4Img()}
              reverse="true"
              fullContainer="true"
            />
          </section>

          <section className="mt-15">{this.renderValues()}</section>
        </div>

        <section className="mt-18 black-box">{this.renderBlackBox()}</section>

        <section className="mt-15 my-container-90">
          {this.renderCommunity()}
        </section>
        <section className="mt-15 my-container-95">
          {this.renderCommunityImg()}
        </section>
        <section className="mt-5 my-container-85">{this.renderEmail()}</section>
        <section className="mt-7 my-container-85">{this.renderPrice()}</section>
      </div>
    );
  }
}

export default HomePage;
