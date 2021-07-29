import React, { Component } from "react";
import { Card, Accordion } from "react-bootstrap";

import "./FAQ.css";

var cardNumber = 0;
function GetCard({ question, answer }) {
    cardNumber += 1;
    return (
        <>
            <Accordion className="mb-3">
                <Card className="border-0">
                    <Card.Header className="question-box">
                        <Accordion.Toggle
                            as={Card.Text}
                            variant="link"
                            eventKey={cardNumber}
                            className="text s18 lh150 p-1 fw600 pl-4"
                        >
                            {question}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={cardNumber} className="pl-4 ">
                        <Card.Body className="text s16 lh150 pl-3 mb-5 fw400">
                            {answer}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}

class FAQ extends Component {
    renderFAQ() {
        return (
            <div>
                <div>
                    <GetCard
                        question={
                            <p>
                                Is the community free access but to access the library you need
                                a subscription?
                            </p>
                        }
                        answer={
                            <p>
                                Yes.
                                <br />
                                The community is always free.
                                <br />
                                The library can be accessed with a paid subscription here
                            </p>
                        }
                    />

                    <GetCard
                        question={
                            <p>How do I create an account for my business or team?</p>
                        }
                        answer={
                            <p>Send us an email <a href="" className="text-black underline"><u>here</u></a>.</p>}
                    />

                    <GetCard
                        question={
                            <p>Can I request stories/topics?</p>}
                        answer={
                            <p>Yes! We would love to hear your idea and can send us a message <a href="" className="text-black underline"><u>here</u></a>.</p>}
                    />

                    <GetCard
                        question={
                            <p>Are there family plans?</p>}
                        answer={
                            <p>Not yet but it is in the works... please check back soon!</p>}
                    />

                    <GetCard
                        question={
                            <p>If I cancel my plan do I get refunded?</p>}
                        answer={
                            <p>Yes you will be refunded from the beginning of the next calendar month to the end of the subscription.<br />Please email us with any issues: info@heroicminds.live</p>}
                    />

                    <GetCard
                        question={
                            <p>If I cancel my subscription for the library is my account and journal content deleted?</p>}
                        answer={
                            <p>No. Your account will remain unafected along with your profile and community content.<br />Only access to the library will discontinue. </p>}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className=" FAQ">
                <div className="col-sm-10 col-md-10 col-lg-10 col-10  mx-auto">
                    <section className="header mt-6">
                        <p className="text text-black bold k40 lh100">
                            Frequently Asked Questions
                        </p>
                    </section>
                    <section className="mt-6 ">{this.renderFAQ()}</section>

                    <section className="mt-6">
                        <p className="text bold text-black-047 h28 lh150">
                            General Inquiries
                        </p>
                        <a
                            href="mailto:info@heroicminds.live"
                            className="text bold text-black-333 h30 lh150"
                        >
                            <u>info@heroicminds.live</u>
                        </a>
                    </section>
                </div>
            </div>
        );
    }
}

export default FAQ;
