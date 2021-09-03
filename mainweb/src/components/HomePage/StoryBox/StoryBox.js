import React from "react";

import { AudioPlayer } from "./AudioPlayer";
import { MyModal } from "./MyModal";
import { StoryObject, Transcript } from "./StoryObject";
import "./StoryBox.css";


const StoryBox = () => {

    return (
        <div>
            <div className="mt-10">
                <div className="row">

                    {StoryObject.map((item) => (
                        <div className="col-xl-3 col-6 my-4 d-flex justify-content-center py-3">
                            <div>
                                <img alt='ids' src={item?.audioImg} height="100%" width="350px" className="img-fluid mt-2" />
                                <h1 className="text-left text s20 fw600 lh130 mt-4 mb-0">{item?.title}</h1>
                                <p className="text s16 text-gray-757 my-1">{item?.subtitle}</p>
                                <div className="d-flex flex-nowrap mt-1 story-category">
                                    {item?.categories.map(category => (
                                        <span className="text text-white px-2 py-1 btn-black s12 m-1 rounded">
                                            {category}
                                        </span>
                                    ))
                                    }
                                </div>
                                <div className="d-flex flex-row align-items-center audio-controls mt-4 w-100 justify-content-around story-box">
                                    <AudioPlayer audio={item?.audio} />
                                    <MyModal myObject={item} type="story" />
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

export { StoryBox };