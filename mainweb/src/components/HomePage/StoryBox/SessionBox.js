import React from "react";

import { AudioPlayer } from "./AudioPlayer";
import { MyModal } from "./MyModal";
import { SessionObject } from "./SessionObject";
import "./StoryBox.css";


const SessionBox = () => {

    return (
        <div>
            <div className="mt-10">
                <div className="row">

                    {SessionObject.map((item) => (
                        <div className="col-xl-3 col-6 my-4 d-flex justify-content-center story-box py-3">
                            <div>
                                <img alt="ima" src={item?.audioImg} height="100%" width="350px" className="img-fluid mt-2" />
                                <h1 className="text-left text s20 fw600 lh130 mt-4 mb-0">{item?.title}</h1>
                                <p className="text s16 text-gray-757 my-1">{item?.subtitle}</p>
                                <div className="d-flex flex-row align-items-center audio-controls mt-4 w-100 justify-content-around">
                                    <AudioPlayer audio={item?.audio} />
                                    <MyModal myObject={item} type="session" />
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>

        </div>
    );
}

export { SessionBox };