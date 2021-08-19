import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";

import Main_Img from "../../assets/HomePageAssets/Homepage_Main.png";
import imgHeadphone from "../../assets/HomePageAssets/Homepage-2-img.jpg";
import Libra from "../../assets/HomePageAssets/Libra.svg";
import Book from "../../assets/AboutPageAssets/Book.svg";
import World from "../../assets/HomePageAssets/World.svg";
import Text from "../../assets/HomePageAssets/Text.svg";
import Community from "../../assets/HomePageAssets/community.svg";
import plusSign from "../../assets/HomePageAssets/plusSign.svg";
import Man from "../../assets/AboutPageAssets/Man.svg";
import Click from "../../assets/AboutPageAssets/Click.svg";
import Pen from "../../assets/AboutPageAssets/Pen.svg";
import Brain from "../../assets/AboutPageAssets/Brain.svg";
import "./HomePage.css";
import "./Text.css";
import "./TextMobile.css";
import "./TextIpad.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { StoryBox } from "./StoryBox/StoryBox";
import { SessionBox } from "./StoryBox/SessionBox";

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
      <div className=" home-page-1-title d-flex flex-xl-nowrap flex-wrap align-items-center justify-content-around">
        <div className="header-text-animation">
          <p className="text bold k45 lh120 mt-4 d-flex flex-sm-nowrap flex-wrap mb-0">
            <span class="text-nowrap">A healthy mind.&nbsp;</span>
            <span class="text-nowrap">A powerful life.</span>
          </p>
          <p className="text h26 lh150 text-sm-nowrap mt-4">
            Giving you the tools to nurture your mind.
          </p>
        </div>
        <div className="text-center mt-4 w-50">
          <img  alt ="main Img "src={Main_Img} className="img-fluid home-page-1-img" />
        </div>
      </div>
    );
  }

  renderMain2() {
    return (
      <div>
        <p className="text k32 text-center fw600 lh130">
          Psychological &amp; philosophical&nbsp;
          <span className="text-gray-57">exercise for your mind.</span>
        </p>
      </div>
    );
  }

  renderProblem() {
    return (
      <div className="section-box home-page-4 mt-10">
        <h1 className="text text-white bold k35 lh120 text-lg-left text-center ml-2">
          The Problem
        </h1>
        <br />
        <p className="text text-white h21 lh130 text-lg-left text-center">
          1. The majority of our behaviour is determined by what we value.
          People are relentlessly exposed to illusive, self-serving values such
          as attention, money and status that once attained, do not satiate our
          deepest human needs.
          <br />
          <br />
          2. This has led to lives with an unfillable void, stressed, anxious,
          disconnected, tired, over-thinking and thus, reliant on passive
          routines, life-hacks, ideals of grinding, and seeking more advice
          without giving attention to the underlying cause of the issue.
        </p>
      </div>
    );
  }
  renderSolution() {
    return (
      <div className="section-box-white home-page-4 mt-10">
        <h1 className="text text-black bold k35 lh120 text-lg-left text-center ml-2">
          The Solution
        </h1>
        <br />
        <p className="text text-black h21 lh130 text-lg-left text-center">
          1. Guide people to shape the values that orient their life through the
          engaging medium of storytelling.
          <br />
          <br />
          2. Provide actionable, therapeutic exercises that promote,
          self-reflection, and behavioural change.
          <br />
          <br />
          Give people constant access to resources that may nurture their
          behavioural well-being.
          <br />
          <br />
          Turn an over-thinking, exhausted mind into a composed and energized
          mind.
        </p>
      </div>
    );
  }

  renderLibra() {
    return (
      <div className="my-container-90">
        <div className="text-center">
          <img alt= "libra" src={Libra} className="img-fluid img-libra" />
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
        <img alt='imageHeadPhone' src={imgHeadphone} className="img-fluid" />
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
      <div className="home-page-6 pt-5">
        <div className="text k40 lh130 fw600">
          Heroic Minds Stories<sup className="h24">™</sup>
        </div>
        <br />
        <div className="text h21 lh120">
          Heroic Minds utilizes the engaging and self-reflective medium of
          story telling as a therapeutic experience. The goal is to use the
          felt experience of story telling to shape the values that orient
          your life.
          <br />
          <br />
          Heroic Minds Stories are short summarizes from a wide range of
          domains such as greek mythology, medieval tales, pop-culture,
          fiction and non-fiction literature, real-life stories and much more.
          <br />
          <br />
          Story telling is up to <b>22x more effective</b> in behavioural
          change and memory than rational reason alone. (Stanford University,
          2019)
          <br />
          <br />
          <Link to="/about/mission">
            <span className="link-text text-black">
              <b>Learn More.</b>
            </span>
          </Link>
        </div>
      </div>
    );
  }
  renderStoryTellingImg() {
    return (
      <div className="align-middle pt-5">
        <img alt="Hompage-image1" className="img-fluid img-storytelling pl-3" src={Book} />
      </div>
    );
  }
  renderSessionImg() {
    return (
      <div className="align-middle pt-5 pb-3">
        <img
          alt="Hompage-image2"
          className="img-fluid img-storytelling pr-3"
          src={Brain}
        />
      </div>
    );
  }
  renderSession() {
    return (
      <div className="home-page-6  pt-5">
        <div className="text k40 lh130 fw600">
          Heroic Minds Sessions<sup className="h24">™</sup>
        </div>
        <br />
        <div className="text h21 lh120">
          Heroic Minds believes one of the oldest known proverbs, practice
          makes perfect. If you want to have a mind armed for resilience and
          built for performance then there is a duty owed to achieve such a
          mind.
          <br />
          <br />
          Heroic Minds gives you the tools to do just that through various
          psychological and philosophical exercises; cognitive-behavioural,
          positive psychology, gestalt psychology, existential psychology and
          more.
          <br />
          <br />
          Sessions are shaped to be efficient and actionable so that the
          benefits can be realized in your daily life.
          <br />
          <br />
          <Link to="/about/mission">
            <span className="link-text text-black">
              <b>Learn More.</b>
            </span>
          </Link>
        </div>
      </div>
    );
  }

  renderValues() {
    return (
      <div className="home-page-8">
        <div className="mb-5 ml-4">
          <p className="text bold k45 lh120 text-center text-lg-left">
            Value of Heroic Minds
          </p>
        </div>
        <div className="d-flex flex-row flex-xl-nowrap flex-wrap justify-content-center">
          <div className="section-box-mini text-white lh150 text-lg-left text-center">
            <p className="h28 fw600 ls1half">Enjoyable</p>
            <p className="h22">
              A short and engaging experience to wake up to, enjoy during your communte or fall asleep to at night.

            </p>
          </div>
          <div className="section-box-mini text-white lh150 text-lg-left text-center">
            <p className="h28 fw600 ls1half">Organized</p>
            <p className="h22">
              Content organizaed by topic, theme and objective.
            </p>
          </div>
          <div className="section-box-mini text-white lh150 text-lg-left  text-center">
            <p className="h28 fw600 ls1half">Impactful</p>
            <p className="h22">
              Long form stories and ideas condensed down to 10 minutes or less for an efficient and impactful experience.
            </p>
          </div>
          <div className="section-box-mini text-white lh150 text-lg-left  text-center">
            <p className="h28 fw600 ls1half">Therapeutic</p>
            <p className="h22">
              Reflecting on psychological &amp; philosophical ideas function to nurture and enhance the mind.
            </p>
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
        <div className="text text-black-333 h22 lh120 mt-5 text-center">
          Listen to &nbsp;&nbsp;
          <span>
            <img alt="BOok" src={Book} width="30px" height="30px" className="mb-2" />
          </span>
          &nbsp;&nbsp; or read &nbsp;&nbsp;
          <span>
            <img alt="Text" src={Text} width="30px" height="30px" className="mb-2" />
          </span>
          &nbsp;&nbsp; the stories below and reflect &nbsp; &nbsp;
          <span>
            <img alt="pen" src={Pen} width="30px" height="30px" className="mb-2" />
          </span>
          &nbsp;&nbsp;on how they relate to your life.
        </div>
      </div>
    );
  }

  renderBlackBox() {
    return (
      <div className="home-page-9">
        <div className="my-container-85 pb-1 pt-1">
          <div className="text text-center text-white h24 lh160 mt-10 mb-10 ">
            &nbsp;&nbsp;&nbsp;&nbsp;Most of life’s challenges present a choice -
            to rise to the challenge or continue to struggle. The framework of
            the hero is that of a person whom values and aims to rise to the
            challenge out of love for others. This shifts the focus from the
            individual, their income, status, success, etc., to the world around
            them. Only then can one truly be present and live fully, without
            reliance on external tools.
          </div>
        </div>
      </div>
    );
  }

  renderCommunity() {
    return (
      <div className="home-page-10">
        <div>
          <h1 className="text-left text k45 fw500">Heroic Minds Global Community</h1>
          <p className="text text-wrap h24 lh150">
            Sharing empowering stories and ideas to make the world a more
            selfless, courageous, resilient place.
          </p>
          <Link to="/author">
            <span className="link-text text-black h20 ">
              <b>Learn More.</b>
            </span>
          </Link>
        </div>
      </div>
    );
  }

  renderCommunityImg() {
    return (
      <div className="home-page-10-img align-middle">
        <img alt="Hompage-image2" className="img-fluid p-2" src={World} />
      </div>
    );
  }

  renderCommunityImg2() {
    return (
      <div className="text-center">
        <img alt="community" src={Community} className="img-fluid" />
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
            className=" text intro h22 lh100 px-4 py-1 rounded"
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
          <div className="col-lg-3 mt-10">
            <a href="/">
              <p className="text text-center fw600 h30 lh130 my-4">
                <u>30-Day Free Trial</u>
              </p>
            </a>
            <h1 className="text text-center h40 lh150 fw500 ">Free</h1>
          </div>

          <div className="col-lg-6 mt-10">
            <a href="/">
              <p className="text text-center fw600 h60 lh120 my-4">
                <u>Yearly</u>
              </p>
            </a>
            <h1 className="text text-center h60 lh130 fw500">&#36;84</h1>
            <p className="text text-center h24 lh130 text-gray-57 ">
              Billed Annually <br />&#36;7/Month <br />
              (CAD)
            </p>
          </div>

          <div className="col-lg-3 mt-10">
            <a href="/">
              <p className="text text-center fw600 h30 lh130 my-4">
                <u>Monthly</u>
              </p>
            </a>
            <h1 className="text text-center h45 lh150 fw500">&#36;10</h1>
            <p className="text text-center h22 lh130 text-gray-57 ">
              Billed Monthly <br />
              (CAD)
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
          <section className="HomePageHeader mt-7">{this.renderMain()}</section>
          <section className="HomePageHeader mt-18 ">
            {this.renderMain2()}
          </section>
          <section className="mt-18">
            <DisplayBox
              colLeft="6"
              colRight="6"
              contentLeft={this.renderProblem()}
              contentRight={this.renderSolution()}
              fullContainer="true"
              alwaysColumn="true"
            />
          </section>
        </div>

        <section className="mt-15 my-container-95">
          {this.renderMainImage2()}
        </section>

        <section className="mt-15 my-container-90">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderStoryTelling()}
            contentRight={this.renderStoryTellingImg()}
            fullContainer="true"
            reverse="true"
          />
        </section>

        <section className="my-container-90 mt-10">
          {
            <StoryBox />
          }
        </section>
        <section className="mt-15 my-container-90">
          <DisplayBox
            colLeft="3"
            colRight="9"
            contentLeft={this.renderSessionImg()}
            contentRight={this.renderSession()}
            fullContainer="true"
          />
        </section>
        <section className="my-container-90 mt-10">
          {
            <SessionBox />
          }
        </section>

        <section className="mt-15 my-container-90">
          {this.renderValues()}
        </section>

        <section className="mt-18 black-box">{this.renderBlackBox()}</section>

        <section className="mt-15 my-container-90">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderCommunity()}
            contentRight={this.renderCommunityImg()}
            fullContainer="true"
          />
        </section>
        <section className="mt-9 my-container-95">
          {this.renderCommunityImg2()}
        </section>
        <section className="mt-10 my-container-85">
          {this.renderEmail()}
        </section>
        <section className="mt-10 my-container-85">
          {this.renderPrice()}
        </section>
      </div>
    );
  }
}

export default HomePage;
