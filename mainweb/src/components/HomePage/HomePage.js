import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";

import Background from "../../assets/home-page-background.svg";
import HompageImage2 from "../../assets/Hompage-image2.svg";
import storytelling from "../../assets/storytelling.svg";
import vector from "../../assets/Vector.svg";
import community from "../../assets/community.svg";
import audio1Img from "../../assets/homepageAssests/audio1Img.svg";
import audio2Img from "../../assets/homepageAssests/audio2Img.svg";
import audio3Img from "../../assets/homepageAssests/audio3Img.svg";
import imgHeadphone from "../../assets/homepageAssests/Group 725.jpeg";
import playIcon from "../../assets/homepageAssests/play.png";
import back_20 from "../../assets/homepageAssests/back_20.png";
import forward_20 from "../../assets/homepageAssests/forward_20.png";
import plusSign from "../../assets/homepageAssests/plusSign.svg";
import logotherapy from "../../assets/Man.svg";
import behavioural from "../../assets/homepageAssests/behavioural.png";

import "./HomePage.css";
import "./Text.css";
import { Link } from "react-router-dom";

// export default HomePage;
class HomePage extends Component {
  state = {};

  renderMain() {
    return (
      <div className="my-container-85 home-page-1">
        <div className="row text-left">
          <div className=" col-6  header-text-animation mt-10">
            <div className="pb-10">
              <p className="text bold k40 lh140 ls1by2">
                Shape your life around the most powerful framework known to
                humankind.
              </p>
              <br />
            </div>
            <p className="text fw600 h18 lh150 ls1by2">
              Live a purpose-driven, resilient, high-performing life.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderpage2() {
    return (
      <div className="my-container-85 home-page-2">
        <p className="text-right text bold k40 lh130 text-gray-757 page-2-text">
          The root of well-being &amp; performance: &nbsp;
          <span className="text-black">your value system.</span>
        </p>
        <span className="text-center">
          <img
            src={imgHeadphone}
            alt="laptop and phone with heroic minds app running"
            className="img-fluid"
          ></img>
        </span>
      </div>
    );
  }

  renderLeft1() {
    return (
      <div className="home-page-3">
        <p className="text h22 lh130">
          Philosophical and psychological heavy weights have known for hundreds
          of years that there are currents beneath our behaviour guiding what we
          do. These currents are the feelings we associate with our daily life,
          obligations, responsibilities, other people, and more. These feelings
          are heavily influenced by our value system.
          <br />
          <br />
          <b>
            Heroic Minds gives you the tools to shape your value system or
            ‘psychological foundation’ around the most powerful framework known
            to humankind, heroism.
          </b>
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
      <div className="d-table home-page-3-image">
        <span className="img_animat1 vertical-center">
          <img alt="Hompage-image2" className="img-fluid" src={HompageImage2} />
        </span>
      </div>
    );
  }
  renderLeft2() {
    return (
      <div className="section-box home-page-4">
        <h1 className="text text-white bold k43 lh120 ls1by2">The Problem</h1>
        <br />
        <p className="text text-white h21 lh130 ">
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
      <div className="section-box-white home-page-4">
        <h1 className="text text-black bold k43 lh120 ls1by2">The Solution </h1>
        <br />
        <p className="text text-black h21 lh130 ">
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

  rendorComponantPlus() {
    return (
      <div className="row home-page-5">
        <div className="col-md-5 text-center">
          <span className="">
            <img
              alt=""
              className="img-fluid h-50 logotherapyImg pb-4"
              src={logotherapy}
            />

            <p className="text k45 lh100 ls1by2 text-center pt-4">
              Logotherapy
            </p>
            <p className="text h21 lh150 ls1by2 text-center mt-3">
              Find meaning and purpose in life beyond the illusive ideas that
              society reinforces today.
            </p>
          </span>
        </div>
        <div className="col-md-2 text-center verical-center my-auto">
          <span className="">
            <img alt="" className="img-fluid plusImg" src={plusSign} />
          </span>
        </div>
        <div className="col-md-5 text-center">
          <span className="">
            <img alt="" className="img-fluid h-50 pb-4" src={behavioural} />

            <p className="text k45 lh100 ls1by2 text-center pt-3">
              Behavioural Activation
            </p>
            <p className="text h21 lh150 ls1by2 text-center mt-3">
              Heroic Minds aims to activate the feeling of doing more of what
              brings real value into your life.
            </p>
          </span>
        </div>
      </div>
    );
  }
  renderLeft4() {
    return (
      <div className="d-table home-page-6">
        <span className="vertical-center text-center">
          <img
            alt="Hompage-image2"
            className="img-fluid img-storytelling pr-4"
            src={storytelling}
          />
        </span>
      </div>
    );
  }
  renderRight4() {
    return (
      <div className="home-page-6">
        <h1 className="text k40 lh130 ls1by2">
          Through the invigorating medium of <b>story telling.</b>
        </h1>
        <br />
        <p className="text h21 lh120">
          Heroic Minds utilizes the enjoyable medium of story telling as an
          engaging, therapeutic experience.
          <br />
          <br />
          Story telling is up to
          <b> 22x more effective</b> in behavioural change and memory of ideas
          than rational reason alone. (Standord University, 2019)
          <br />
          <br />
          <Link to="/about">
            <span className="link-text text-black">
              <b>Learn More.</b>
            </span>
          </Link>
        </p>
      </div>
    );
  }
  renderComponent() {
    return (
      <div className="home-page-8">
        <div className="mb-5 pl-4">
          <h1 className="text bold k45 lh120 ls1by2">Value of Heroic Minds</h1>
        </div>
        <div className="row">
          <div className="col section-box-mini mr-4 text text-white">
            <h1 className="h28 bold lh150 ls1half pl-4">Enjoyable</h1>
            <p className="h20 lh120 pl-3">
              Short and engaging stories to wake up to, enjoy during your
              communte or to fall asleep to at night.
            </p>
          </div>
          <div className="col section-box-mini text text-white mr-4">
            <h1 className="h28 bold lh150 ls1half pl-4">Organized</h1>
            <p className="h20 lh120 pl-3">
              Content organizaed by topic, and theme such as, Pop Culture and
              Greek Mythology OR Perseverence or Leadership.
            </p>
          </div>
          <div className="col section-box-mini text text-white mr-4">
            <h1 className="h28 bold lh150 ls1half pl-4">Impactful</h1>
            <p className="h20 lh120 pl-3">
              Long form stories and ideas condensed down to 5-10 minutes listens
              or reads for an efficient and effective experience.
            </p>
          </div>
          <div className="col section-box-mini text text-white mr-4">
            <h1 className="h28 bold lh150 ls1half pl-4">Therapeutic </h1>
            <p className="h20 lh120 pl-3">
              The experience of listening to and reflecting on heroic stories is
              a form of logotherapy and behaviooural activation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderComponent2() {
    return (
      <div className="home-page-9">
        <div className="my-container-85 pb-1 pt-1">
          <div className="text text-center text-white h26 lh160 mt-10 mb-10 ">
            When you lead your daily life with the aim to serve and improve the
            lives of others, your attention shifts from self-serving worry and
            rumination to focus on the world around you. <br />
            It is then that you see life as an adventure and its challenges as
            opportunities. <br />
            It is then that you are able to live fully in the moment.
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
        <h1 className="tagline-layout7">Listen Now</h1>
      </div>
    );
  }

  // ---------------- sound track 1  (title , catagory and lyrics) ------------ //

  renderStory1() {
    return (
      <div className="container mt-4 mb-1 row">
        <div className="container story-head mt-2 col-md-8 row">
          <div className="story-title mr-3  lh120">Heroic Minds </div>
          <div className="story-catagory mb-3 mr-3 lh200">The Introduction</div>
        </div>
        <div className="col-md-4 mt-4 justify-content-center row">
          <div className="justify-content-end audio-controls text-center">
            <input
              type="image"
              alt="audio-controls"
              className=" back-btn img-fluid ml-1 "
              src={back_20}
            />
            <input
              type="image"
              alt="audio-controls play-button"
              id="play-btn"
              className="audio-btn img-fluid ml-3 "
              src={playIcon}
              width="54px"
              height="52.2px"
              onClick={this.togglePlay()}
            />
            <input
              type="image"
              alt="audio-controls"
              className="forward-btn img-fluid ml-3 "
              src={forward_20}
            />
          </div>
        </div>
        <div className="mt-2 mb-3 pr-3 .smooth-scroll" id="story-text">
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

  togglePlay() { }

  // ---------------- sound track 1  (image) ------------ //
  renderStory1Img() {
    return (
      <div className="story-img  img-fluid center-text mt-3 mb-3">
        <img alt="story-thumbnail" className="img-fluid " src={audio1Img} />
      </div>
    );
  }

  // ---------------- sound track 2  (title , catagory and lyrics) ------------ //
  renderStory2() {
    return (
      <div className="container mt-4 mb-1 row">
        <div className="container story-head mt-2 col-md-8 row">
          <div className="story-title mr-3 lh120">Music by Sia </div>
          <div className="story-catagory lh200 mr-3">Pop Culture</div>
        </div>
        <div className="col-md-4 mt-4 justify-content-center row">
          <div className="justify-content-end audio-controls text-center">
            <input
              type="image"
              alt="audio-controls"
              className=" back-btn img-fluid ml-1 "
              src={back_20}
            />
            <input
              type="image"
              alt="audio-controls"
              id="play-btn"
              className="audio-btn img-fluid ml-3 "
              src={playIcon}
              width="54px"
              height="52.2px"
            />
            <input
              type="image"
              alt="audio-controls"
              className="forward-btn img-fluid ml-3 "
              src={forward_20}
            />
          </div>
        </div>
        <div className="mt-4 mb-3 pr-3 .smooth-scroll" id="story-text">
          We have two options, we listen to the chorus of voices screaming, you
          can't handle this, or we listen to that lone whisper that says heroes
          are born and challenge that this idea of the path of least resistance
          that we have to keep dodging the challenge and the adversity in front
          of us is affecting us in a way we might not like. Narrative thought is
          that story we tell ourselves all the time of who we are are valued
          where we are in a certain situation, that story that we can control.
          And we have the ability, the conscious ability to change that
          narrative thought in our mind. And when we do when we decide to, we
          release different hormones, different neurotransmitters, different
          endorphins. We feel our shoulders back. We puff our chest, though we
          have energy, we start thinking more creative just by changing the
          story in our mind, the idea of being the predator. Or the prey, when
          we decide to be the prey and think, I can't handle this, I can't do
          this, life's controlling me. I can't. I can't. Our blood vessels
          constrict. Goes to our vital organs. And we think emotionally. Not
          rationally. What if we just change that story in our mind and decide
          to be the predator, our blood vessels open up, they dilate and we
          start thinking rationally, we start to put a plan together in our head
          and we start to think creatively how we're going to get through this,
          how we're going to get over this. I could have everyone stand up if
          you're able, please. And thank you, everyone. Right now standing,
          we're going to just quickly do 20 pushups, right? What and what
          thoughts just went through your mind? The thoughts that went through
          your mind are we just spent the whole day moving, you think we're
          going to do 20 pushups? Like who is this guy telling me what to do? 20
          push ups? There's no room to do 20 push.
          <br />
          <br />
          But that's what went through your mind right now. What if I said
          rewind for a second? Rewind. Imagine I said we're all going to do 20
          pushups and those that do 20 pushups are going to get an iPad. I love
          it. I could just tell by the grumbles in the crowd and the laughter
          that in 20 seconds they went from I can't there's no way we're doing
          that to we can totally do this. There's not enough room. Can we get on
          top of me? Let's do this or change that story. Shoulders come back. We
          start thinking creatively how to get this done, how to push through
          this. And that's the proof right there, that when we change that
          narrative, we change our ability. Best thing I'm going to tell you
          today, above anything else, is when you become the hero of your story.
          And I know this from experience. I know this from everyone I've talked
          to on the podcast. When you're here on your stories, you become a hero
          for other people. And if we all get one lap at this thing we call
          life, we all get one kick at the can. And this thing we call life
          being a hero for other people, I think that's the only way we should
          live our life. Thank you.
          <br />
          <br />
        </div>
      </div>
    );
  }
  // ---------------- sound track 2  (image) ------------ //
  renderStory2Img() {
    return (
      <div className="story-img  img-fluid center-text mb-3 mt-3">
        <img alt="story-thumbnail" className="img-fluid" src={audio2Img} />
      </div>
    );
  }

  // ---------------- sound track 3 (title , catagory and lyrics) ------------ //
  renderStory3() {
    return (
      <div className="container mt-4 mb-1 row">
        <div className="container story-head mt-2  row col-md-8">
          <div className="story-title mr-3 lh120">Quidditch - Harry Potter</div>
          <div className="story-catagory lh200 mr-3">Fiction Literature</div>
        </div>
        <div className="col-md-4 mt-4 justify-content-center row">
          <div className="justify-content-end audio-controls text-center">
            <input
              type="image"
              alt="audio-controls"
              className=" back-btn img-fluid ml-1 "
              src={back_20}
            />
            <input
              type="image"
              alt="audio-controls"
              id="play-btn"
              className="audio-btn img-fluid ml-3 "
              src={playIcon}
              width="54px"
              height="52.2px"
            />
            <input
              type="image"
              alt="audio-controls"
              className="forward-btn img-fluid ml-3 "
              src={forward_20}
            />
          </div>
        </div>
        <div className="mt-4 mb-3 pr-3 .smooth-scroll" id="story-text">
          I was sitting at my dining room table when I was writing up my first
          ever business model. I used all the information that the internet had
          to offer. I was told to build a 20 pages report if I wanted to have
          any chance at a successful business. I was also told if I didnt have
          this perfectly executed, I would fail. So I did it. But it didn’t have
          the effect I thought it would. I thought it would bring me great
          comfort and I would be able to exuute everything I needed to with
          ease. What began...
          <br />
          <br />
          I was sitting at my dining room table when I was writing up my first
          ever business model. I used all the information that the internet had
          to offer. I was told to build a 20 pages report if I wanted to have
          any chance at a successful business. I was also told if I didnt have
          this perfectly executed, I would fail. So I did it. But it didn’t have
          the effect I thought it would. I thought it would bring me great
          comfort and I would be able to exuute everything I needed to with
          ease. What began...
          <br />
          <br />
          I was sitting at my dining room table when I was writing up my first
          ever business model. I used all the information that the internet had
          to offer. I was told to build a 20 pages report if I wanted to have
          any chance at a successful business. I was also told if I didnt have
          this perfectly executed, I would fail. So I did it. But it didn’t have
          the effect I thought it would. I thought it would bring me great
          comfort and I would be able to exuute everything I needed to with
          ease. What began...
          <br />
          <br />I was sitting at my dining room table when I was writing up my
          first ever business model. I used all the information that the
          internet had to offer. I was told to build a 20 pages report if I
          wanted to have any chance at a successful business. I was also told if
          I didnt have this perfectly executed, I would fail. So I did it. But
          it didn’t have the effect I thought it would. I thought it would bring
          me great comfort and I would be able to exuute everything I needed to
          with ease. What began...
          <br />
          <br />I was sitting at my dining room table when I was writing up my
          first ever business model. I used all the information that the
          internet had to offer. I was told to build a 20 pages report if I
          wanted to have any chance at a successful business. I was also told if
          I didnt have this perfectly executed, I would fail. So I did it. But
          it didn’t have the effect I thought it would. I thought it would bring
          me great comfort and I would be able to exuute everything I needed to
          with ease. What began...
          <br />
          <br />
        </div>
      </div>
    );
  }
  // ---------------- sound track 3  (image) ------------ //
  renderStory3Img() {
    return (
      <div className="story-img  img-fluid center-text mb-3 mt-3">
        <img alt="story-thumbnail" className="img-fluid" src={audio3Img} />
      </div>
    );
  }

  renderCommunity() {
    return (
      <div className="home-page-10 my-container-85">
        <div className="row">
          <div className="col-9 d-flex align-items-end p-0">
            <div>
              <h1 className="text k45 ls1by2 ">
                Heroic Minds Global Community
              </h1>
              <br />
              <p className="text k32">
                Sharing empowering stories and ideas to make the world a more
                selfless, courageous, resilient place.
              </p>
            </div>
          </div>
          <div className="col-3 p-0">
            <span className="home-page-10-img">
              <img alt="Hompage-image2" className="img-fluid" src={vector} />
            </span>
          </div>
        </div>
      </div>
    );
  }
  renderComponent3() {
    return (
      <div className="home-page-12">
        <p className="text k45 lh150 bold text-center">
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
          <div className="col-lg-3 mb-8">
            <a href=""><p className="text text-center bold h30 lh120 pb-4">
              <u>30-Day Free Trial</u></p>
            </a>
            <p className="text text-center h22 lh200 mt-4">
              30% of Heroic Minds Library
            </p>
            <h1 className="text text-center h45 lh150">Free</h1>
          </div>

          <div className="col-lg-6 mb-8">
            <a href="">
              <p className="text text-center bold h60 lh47 pb-4">
                <u>Yearly</u>
              </p>
              <br />
            </a>
            <p className="text text-center h30 lh150 mt-1">
              Full Heroic Minds Library
            </p>
            <h1 className="text text-center h60 lh120">$170</h1>
            <p className="text text-center h24 lh120 text-gray-97 ">$14/month</p>
          </div>

          <div className="col-lg-3 mb-8">
            <a href="">
              <p className="text text-center bold h30 lh120 pb-4">
                <u>Monthly</u>
              </p>
            </a>
            <p className="text text-center h22 lh150 mt-4">
              Full Heroic Minds Library
            </p>
            <h1 className="text text-center h45 lh150">$240</h1>
            <p className="text text-center h22 lh120 text-gray-97 ">$20/month</p>
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
      height: "800px",
    };
    return (
      <div className="HomePage">
        <section className="HomePageHeader" style={mainSectionStyle}>
          {this.renderMain()}
        </section>

        <section className="mt-7">{this.renderpage2()}</section>

        <div className="HomePageData my-container-85">
          <section className="mt-6">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderLeft1()}
              contentRight={this.renderRight1()}
              fullContainer="true"
            />
          </section>
          <section className="mt-18">
            <DisplayBox
              colLeft="6"
              colRight="6"
              contentLeft={this.renderLeft2()}
              contentRight={this.renderRight2()}
              fullContainer="true"
            />
          </section>

          <section className="mt-18"> {this.rendorComponantPlus()}</section>
        </div>

        <section className="mt-18 my-container-95">
          <DisplayBox
            colLeft="3"
            colRight="9"
            contentLeft={this.renderLeft4()}
            contentRight={this.renderRight4()}
            fullContainer="true"
          />
        </section>

        <div className=" my-container-90">
          {/* -----------Listen Now page */}
          <section className="mt-18">{this.renderListenNowHead()}</section>
          <section className="mt-3 ">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory1()}
              contentRight={this.renderStory1Img()}
              fullContainer="true"
            />
          </section>
          <section className="mt-4">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory2()}
              contentRight={this.renderStory2Img()}
              fullContainer="true"
            />
          </section>
          <section className=" mt-4">
            <DisplayBox
              colLeft="8"
              colRight="4"
              contentLeft={this.renderStory3()}
              contentRight={this.renderStory3Img()}
              fullContainer="true"
            />
          </section>

          <section className="mt-18">{this.renderComponent()}</section>
        </div>

        <section className="mt-18 black-box">{this.renderComponent2()}</section>

        <div className="my-container-85">
          <section className="mt-18">{this.renderCommunity()}</section>
          <section className="mt-18">
            <div className="container">
              <img alt="Hompage-image2" className="img-fluid" src={community} />
            </div>
          </section>
          <section className="mt-5">{this.renderComponent3()}</section>
          <section className="mt-18 ">{this.renderPrice()}</section>
        </div>
      </div>
    );
  }
}

export default HomePage;
