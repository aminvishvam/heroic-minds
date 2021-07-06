import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";

import Background from "../../assets/home-page-background.svg";
import HompageImage2 from "../../assets/Hompage-image2.svg";
import storytelling from "../../assets/storytelling.svg";
import guide from "../../assets/guide.svg";
import vector from "../../assets/Vector.svg";
import community from "../../assets/community.svg";
import audio1Img from "../../assets/homepageAssests/audio1.jpg";
import audio2Img from "../../assets/homepageAssests/audio2.png";
import audio1 from "../../assets/homepageAssests/audio1.mp3";
import audio2 from "../../assets/homepageAssests/audio2.mp3";
import imgHeadphone from "../../assets/homepageAssests/Group 725.jpeg";
import playIcon from "../../assets/homepageAssests/play.png";
import back_20 from "../../assets/homepageAssests/back_20.png";
import forward_20 from "../../assets/homepageAssests/forward_20.png";

import "./HomePage.css";
import "./Text.css";
import { Link } from "react-router-dom";

// export default HomePage;
class HomePage extends Component {
  state = {};

  renderMain() {
    return (
      <div className="container-fluid">
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

  renderMainImgHead() {
    return (
      <div className="res-box">
        <div className="container ">
          <h1 className="text-right  imghead">
            <span className="gray-text">
              The root of well-being &amp; performance: &nbsp;
            </span>
            your value system.
          </h1>
        </div>
      </div>
    );
  }
  renderMainImg() {
    return (
      <div className="res-box text-center">
        <img
          src={imgHeadphone}
          alt="laptop and phone with heroic minds app running"
          className="img-fluid"
        ></img>
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
            <div className="col div-box">
              <h1 className="div-box-h1">Enjoyable</h1>
              <p className="div-box-p">
                Short and engaging stories to wake up to, enjoy during your
                communte or to fall asleep to at night.
              </p>
            </div>
            <div className="col div-box">
              <h1 className="div-box-h1">Organized</h1>
              <p className="div-box-p">
                Content organizaed by topic, and theme such as, Pop Culture and
                Greek Mythology OR Perseverence or Leadership.
              </p>
            </div>
            <div className="col div-box">
              <h1 className="div-box-h1">Impactful</h1>
              <p className="div-box-p">
                Long form stories and ideas condensed down to 5-10 minutes
                listens or reads for an efficient and effective experience.
              </p>
            </div>
            <div className="col div-box">
              <h1 className="div-box-h1">Therapeutic </h1>
              <p className="div-box-p">
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
          <div className="justify-content-center box-p">
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

  // ---------------- constructing audio ------------ //

  // ---------------- Listen Now heading ------------ //
  renderListenNowHead() {
    return (
      <div className="res-box">
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
          <div className="story-title mr-3 mb-3 ">Heroic Minds </div>
          <div className="story-catagory pt-1 mb-3 mr-3">The Introduction</div>
        </div>
        <div className="col-md-4 mt-4 justify-content-center">
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
          <div className="story-title mr-3 mb-3 ">Music by Sia </div>
          <div className="story-catagory pt-1 mb-3 mr-3">Pop Culture</div>
        </div>
        <div className="col-md-4 mt-4 justify-content-center">
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
      height: "800px",
    };
    return (
      <div className="HomePage">
        <section className="mb-18" style={mainSectionStyle}>
          {this.renderMain()}
        </section>

        {/* <section className="" >
          {this.renderMain()}
        </section> */}

        <section>{this.renderMainImgHead()}</section>
        <section>{this.renderMainImg()}</section>

        <section className="mb-18">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
          />
        </section>
        <section className="mt-8 mb-18">
          <DisplayBox
            colLeft="6"
            colRight="6"
            contentLeft={this.renderLeft2()}
            contentRight={this.renderRight2()}
          />
        </section>
        <section className="mt-8 mb-18">
          <DisplayBox
            colLeft="6"
            colRight="6"
            contentLeft={this.renderLeft3()}
            contentRight={this.renderRight3()}
          />
        </section>
        <section className="mt-5 mb-18">{this.renderComponent()}</section>
        <section className="mt-5 mb-18">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft4()}
            contentRight={this.renderRight4()}
          />
        </section>
        <section className="mt-8 black-box">
          {this.renderComponent2()}
        </section>

        {/* -----------Listen Now page */}
        <section className="mt-8">{this.renderListenNowHead()}</section>
        <section className="mt-3 ">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderStory1()}
            contentRight={this.renderStory1Img()}
          />
        </section>
        <section className="mb-18 mt-3">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderStory2()}
            contentRight={this.renderStory2Img()}
          />
        </section>

        <section className="mt-8">
          <DisplayBox
            colLeft="9"
            colRight="3"
            contentLeft={this.renderLeft5()}
            contentRight={this.renderRight5()}
          />
        </section>
        <section className="mt-8">
          <div className="container">
            <img alt="Hompage-image2" className="img-fluid" src={community} />
          </div>
        </section>
        <section className="mt-8">{this.renderComponent3()}</section>
        <section className="mt-8 ">{this.renderPrice()}</section>
      </div>
    );
  }
}

export default HomePage;
