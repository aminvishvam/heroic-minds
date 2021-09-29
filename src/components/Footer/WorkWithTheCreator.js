import React, { Component } from "react";
import DisplayBox from "../DisplayBox/DisplayBox";
import BenProfileImg from "../../assets/Footer/BenFanelli.svg";
import BenProfile1 from "../../assets/Footer/BenProfile1.svg";
import BenProfile2 from "../../assets/Footer/BenProfile2.svg";
import BenProfile3 from "../../assets/Footer/BenProfile3.svg";
import BenProfile4 from "../../assets/Footer/BenProfile4.svg";

class WorkWithTheCreator extends Component {
    renderHeader() {
        return (
            <div className="my-container-85">
                <div className="text text-black-333 bold h40 lh100 ls2 text-center">
                    Ben Fanelli
                </div>
                <br />
                <div className="mt-4">
                    <p className="mx-auto text h16 lh160 text-center text-black-079 col-md-10 fw500">
                        Ben has spent years studying anecdotal stories of heroism and has
                        correlated those stories with science and ancient wisdom to realize
                        the world does not need more life hacks or cognitive gymnastics.
                        People need a simple and powerful framework for which to guide their
                        behaviours and subsequently their life. Evidence shows the world
                        needs heroism. The most powerful framework known to humanity for
                        leading a life of meaning and purpose and to see the plight of life
                        as an opportunity and an adventure.
                    </p>
                </div>
            </div>
        );
    }

    renderIntro() {
        return (
            <div className="align-middle">
                <div>
                    <div className="text text-black-333 text-uppercase h35 lh100 ls2 fw500">
                        lover. creator. thinker.
                    </div>
                    <br />
                    <div className="text h16 lh150 text-black-079 fw500">
                        <p>
                            Ben grew up like many other Canadian kids chasing the dream of
                            playing in the NHL. His career took a scary yet adventurous turn
                            in 2009 when he sustained a serious head injury that left him with
                            three brain bleeds. Fast forward...
                            <br />
                            <br />
                            After returning to the game of hockey and earning a professional
                            hockey opportunity, albeit in the American Hockey League, Ben
                            decided to move on from playing hockey.
                            <br />
                            <br />
                            While beginning the next chapter of his life, Ben was surprised to
                            see the fragility in the up and coming generation of athletes. In
                            doing further research, Ben realized this issue transcended the
                            athletic world. Ben noticed a tired world disconnected from living
                            fully. He saw an influx of people reaching out for tools, life
                            hacks, shortcuts, self-help books... more and more stuff. The most
                            surprising realization was that all the "stuff" wasn't really
                            fixing the problems. This is when Heroic Minds
                            <br />
                            <br />
                            Ben began studying real life heroic stories and the correlating
                            psychology and philosophy to realize, people are missing a value
                            system of which to live or guide their behaviour. Metaphorically,
                            people are building their psychological cars without engines or
                            fuel, growing a blade of grass in the wind and rain without a
                            strong root in the ground or going on a hike with all the newest
                            gadgets and gizmos but forgetting a map.
                            <br />
                            <br />
                            Ben knows (and he believes the world also knows) there is need for
                            a catalytic shift in the approach to wellness and performance. It
                            is not that we need more tools, research and resources. What is
                            needed is the opportunity to develop a powerful inner compass
                            (values &amp; spirit) that ultimately guide peoples behaviour in
                            the direction of the greatest good, for themselves and the world
                            around them.
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    renderIntroImg() {
        return (
            <div className="align-middle pt-4 ">
                <img alt="" src={BenProfileImg} className="img-fluid "></img>
                <br />
                <br />
            </div>
        );
    }

    renderVideo() {
        return (
            <div class="col-sm-11 col-md-11 col-lg-11 col-11  mx-auto embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/0Cv7tX1cwKE"
                    title="YouTube video player"
                    iframe="1"
                    controls="2"
                    allow="accelerometer"
                    allowFullScreen
                    alt="Youtube video covering Ben's life story"
                ></iframe>
            </div>
        );
    }

    renderInfo1() {
        return (
            <div className="pt-4 ">
                <div className="text text-black-333 text-uppercase h35 lh100 ls2 fw500">
                    Brain Injury Survivor
                </div>
                <br />
                <br />
                <div className="text h16 lh150 text-black-079 fw500">
                    <p>
                        in 2009 Ben sustained a serious head injury playing the game he
                        loved. He woke up in the hospital to news that he would never play
                        sports again or return to school on his own. He was told his brain
                        was bleeding in three different places. As the hospital staff were
                        prepping him for brain surgery the neurosurgeon saw his recent MRI
                        and declared he did not need the surgery, the bleeds started to
                        absorb back into the body. That is where Ben's two year journey back
                        to the game of hockey began.
                        <br />(
                        <a href="https://youtu.be/JdAvPA6_V08?t=10">Full story here-&gt;</a>
                        )
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        );
    }

    renderInfoImg1() {
        return (
            <div className="pt-4 mb-3 align-middle">
                <img alt="" src={BenProfile1} className="img-fluid"></img>
            </div>
        );
    }

    renderInfo2() {
        return (
            <div className="pt-4 ">
                <div className="text text-black-333 text-uppercase h35 lh100 ls2 fw500">
                    Humanitarian of the Year
                </div>
                <br />
                <br />
                <div className="text h16 lh150 text-black-079 fw500">
                    <p>
                        In 2013 Ben was the recipient of the Ontario Hockey League and the
                        Canadian Hockey League Humanitarian of The Year Award. Ben was given
                        this award for the work he did in community while playing for the
                        Kitchener Rangers. The work he did revolved around the program he
                        started called, Head Strong. This was a program that raised
                        awareness, shared information and optimism around brain injury.
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        );
    }

    renderInfoImg2() {
        return (
            <div className="pt-4 mb-3 align-middle pr-4">
                <img alt="" src={BenProfile2} className="img-fluid"></img>
            </div>
        );
    }

    renderInfo3() {
        return (
            <div className="pt-4 pr-4">
                <div className="text text-black-333 text-uppercase h35 lh100 ls2 fw500">
                    Public Speaker
                </div>
                <br />
                <br />
                <div className="text h16 lh150 text-black-079 fw500">
                    <p>
                        Ben's mother Sue encouraged him to begin public speaking at 8 years
                        old. This early developed led Ben to find an inherent desire for
                        engaging with an audience. Ben see's public speaking as the
                        extraordinary opportunity bestowed upon someone to positively
                        influence the minds and lives of others.
                        <br />
                        "It is a Heroic opportunity that I take the utmost pride in."
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        );
    }

    renderInfoImg3() {
        return (
            <div className="pt-4 mb-3 align-middle">
                <img alt="" src={BenProfile3} className="img-fluid"></img>
            </div>
        );
    }

    renderInfo4() {
        return (
            <div className="pt-4 pr-4">
                <div className="text text-black-333 text-uppercase h35 lh100 ls2 fw500">
                    Podcast Host
                </div>
                <br />
                <br />
                <div className="text h16 lh150 text-black-079 fw500">
                    <p>
                        In 2017, while beginning his Masters in counselling psychology, Ben
                        started the Heroic Minds Podcast. The goal is to uncover real
                        stories of real heroes. It is the correlation between these stories
                        and the concepts from the founding fathers of psychology and
                        philosophy that make for a life changing listen.
                        <br />
                        <br />
                        <button
                            type="submit"
                            className="btn pt-3 pb-3 pr-4 pl-4 btn-black ls1 fw500"
                        >
                            <span className="h-16">Listen Here</span>
                        </button>
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        );
    }

    renderInfoImg4() {
        return (
            <div className="pt-4 mb-3 align-middle pr-4">
                <img alt="" src={BenProfile4} className="img-fluid"></img>
            </div>
        );
    }

    render() {
        return (
            <div className="work-with-the-creator-page">
                <section className="mt-5">{this.renderHeader()}</section>

                <section className="mt-8  col-md-11 mx-auto">
                    <DisplayBox
                        colLeft="5"
                        colRight="7"
                        contentLeft={this.renderIntroImg()}
                        contentRight={this.renderIntro()}
                        fullContainer="true"
                    />
                </section>

                <section className="mt-8">{this.renderVideo()}</section>

                <section className="mt-10 col-md-11 mx-auto">
                    <DisplayBox
                        colLeft="7"
                        colRight="5"
                        contentLeft={this.renderInfo1()}
                        contentRight={this.renderInfoImg1()}
                        fullContainer="true"
                        reverse="true"
                    />
                </section>

                <section className="mt-10 col-md-11 mx-auto">
                    <DisplayBox
                        colLeft="5"
                        colRight="7"
                        contentLeft={this.renderInfoImg2()}
                        contentRight={this.renderInfo2()}
                        fullContainer="true"
                    />
                </section>

                <section className="mt-10 col-md-11 mx-auto">
                    <DisplayBox
                        colLeft="7"
                        colRight="5"
                        contentLeft={this.renderInfo3()}
                        contentRight={this.renderInfoImg3()}
                        fullContainer="true"
                        reverse="true"
                    />
                </section>

                <section className="mt-10 col-md-11 mx-auto">
                    <DisplayBox
                        colLeft="5"
                        colRight="7"
                        contentLeft={this.renderInfoImg4()}
                        contentRight={this.renderInfo4()}
                        fullContainer="true"
                    />
                </section>
            </div>
        );
    }
}

export default WorkWithTheCreator;
