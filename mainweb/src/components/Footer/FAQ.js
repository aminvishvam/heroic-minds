import React, { Component } from "react";
import { Accordion, Card } from 'react-bootstrap/Accordion'

import "./FAQ.css";

class FAQ extends Component {



    renderQuestions() {
        return (
            <>Questions
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            TAB 1
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>This is first tab body</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            TAB 2
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>This is second tab body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        );
    }


    render() {
        return (
            <div className="col-sm-11 col-md-11 col-lg-11 col-11  mx-auto">
                <section className="header">
                    <p className="text text-black bold k40 lh100 ls1by2 mt-5">Frequently Asked Questions</p>
                </section>

                <section className="mt-5" >
                    {this.renderQuestions()}
                </section>
            </div>
        );
    }

}

export default FAQ;