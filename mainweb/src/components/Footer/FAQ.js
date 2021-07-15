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
                            className="text s18 lh150 p-1 bold pl-4"
                        >
                            {question}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={cardNumber} className="pl-4 ">
                        <Card.Body className="answer-text s16 lh150 pl-3 mb-5">
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
                        question="Is the community free access but to access the library you need a subscription?"
                        answer="Yes."
                    />

                    <GetCard
                        question="How do I create an account for my business or team?"
                        answer="this is the answer."
                    />

                    <GetCard
                        question="Can I request stories/topics??"
                        answer="this is the answer."
                    />

                    <GetCard
                        question="Are there family plans?"
                        answer="this is the answer."
                    />

                    <GetCard
                        question="If I cancel my subscription for the library is my account and journal content deleted?"
                        answer="this is the answer."
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
                    <section className="mt-6 ">
                        {this.renderFAQ()}
                    </section>

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
