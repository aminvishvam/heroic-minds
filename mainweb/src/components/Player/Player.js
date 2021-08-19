import React, { Component } from "react";
import {  Slider } from "@material-ui/core";

import Image4 from "../../assets/HomePageAssets/storyImg4.png";
import playIcon from "../../assets/HomePageAssets/play.svg";
import back_20 from "../../assets/HomePageAssets/back_20.svg";
import forward_20 from "../../assets/HomePageAssets/forward_20.svg";
import Pen_Icon_Black from "../../assets/HomePageAssets/Pen_Icon_Black.svg";
import Un_mute from "../../assets/HomePageAssets/unmute.svg";
import "./Player.css";


class Player extends Component {
    state = {  }
    render() { 
        return (  <div className="Player">
        <div className="Player__left">
        <img
          className="Player__albumLogo"
          src={Image4}
          alt='item_name'
        />
            <div className="Player__songInfo">
              <h4>No song is playing</h4>
              <p>time left</p>
            </div>
        </div>
  
        <div className="Player__center">
        <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls">
                <input
                    type="image"
                    alt="audio-controls"
                    className=" back-btn"
                    src={back_20}
                
                />
                <input
                    type="image"
                    alt="audio-controls play-button"
                    id="play-btn"
                    className="audio-btn"
                    src={playIcon}
                />
                <input
                    type="image"
                    alt="audio-controls"
                    className="forward-btn"
                    src={forward_20}
                />
                
            </div>
        </div>
        <div className="Player__right">
        <input
                type="image"
                variant="primary"
                alt="audio-controls"
                className="modal-btn "
                src={Pen_Icon_Black}
            />
        <input
                type="image"
                variant="primary"
                alt="audio-controls"
                className="modal-btn "
                src={Un_mute}
        />
        <Slider aria-labelledby="continuous-slider" />
        <br/>
        <p>00.00/24.00</p>
      </div>
      </div>);
    }
}
 
export default Player;
