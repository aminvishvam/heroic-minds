import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Pen_Icon_Black from "../../../assets/HomePageAssets/Pen_Icon_Black.svg";
import Text from "../../../assets/HomePageAssets/Text.svg";
import "./StoryBox.css";
import { StoryTranscript } from "./StoryObject";
import { SessionTranscript } from "./SessionObject";

const MyModal = ({ myObject, type }) => {
    const [isJournalOpen, setIsJournalOpen] = useState(false);
    const [isTextOpen, setIsTextOpen] = useState(false);

    const handleCloseJournal = () => setIsJournalOpen(false);
    const handleShowJournal = () => setIsJournalOpen(true);

    const handleCloseText = () => setIsTextOpen(false);
    const handleShowText = () => setIsTextOpen(true);

    const renderText = () => {
        return (
            <Modal show={isTextOpen} onHide={handleCloseText}>
                <Modal.Header closeButton className="p-1 pr-3 k40" />
                <Modal.Body className="m-3 pt-0 story-modal-text  text s20 lh120">
                    {type === "story" ? <StoryTranscript index={myObject?.key} /> : <SessionTranscript index={myObject?.key} />}
                </Modal.Body>
            </Modal>
        );
    };


    const renderModal = () => {
        return (
            <Modal show={isJournalOpen} onHide={handleCloseJournal}>
                <Modal.Header closeButton className="p-1 pr-3 k40 text-center" >
                    <div className="d-flex text-center mx-auto my-3">
                        <img alt="Pen Icon" src={Pen_Icon_Black} className="m-1 modal-pen-icon" />
                        <p className="text s25 m-1 lh130"> Journal</p>
                    </div>
                </Modal.Header>
                <Modal.Body className="p-0 mb-4">
                    <div className="d-flex mb-3 flex-xl-nowrap flex-wrap justify-content-center align-items-center">
                        <div className="col-lg-4">
                            <div className="mt-3 text-center">
                                <img
                                    alt="Image for audio"
                                    src={myObject?.audioImg}
                                    className="modal-img"
                                />
                            </div>
                            <div className="mt-3">
                                <div className="text s23 fw500 lh130 text-center">{myObject?.title}</div>
                                <div className="text text-gray-97 fw400 s16 lh130 text-center">{myObject?.subtitle}</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center col-lg-8 journal-question">
                            <div className="text s20 lh130 font-italic mt-3 bg-gray rounded py-2 px-4">
                                <div className="s18 text-center">{myObject?.journalQuestions.question1}</div>
                            </div>
                            <div className="text s20 lh130 font-italic  mt-3 bg-gray rounded py-2 px-4">
                                <div className="s18 text-center">{myObject?.journalQuestions.question2}</div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    };

    return (
        <div className="d-flex flex-row align-items-center">
            {renderText()}
            {renderModal()}

            <input
                type="image"
                variant="primary"
                alt="audio-controls"
                onClick={handleShowText}
                className="modal-btn p-1 pb-2"
                src={Text}
            />

            <input
                type="image"
                variant="primary"
                onClick={handleShowJournal}
                alt="audio-controls"
                className="modal-btn "
                src={Pen_Icon_Black}
            />
        </div>
    );
};

export { MyModal };
