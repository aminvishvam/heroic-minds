import React, { useState, useRef, useEffect } from "react";
import { Slider } from "@material-ui/core";

import Image4 from "../../assets/HomePageAssets/storyImg4.png";
import playIcon from "../../assets/HomePageAssets/play.svg";
import back_20 from "../../assets/HomePageAssets/back_20.svg";
import forward_20 from "../../assets/HomePageAssets/forward_20.svg";
import Pen_Icon_Black from "../../assets/HomePageAssets/Pen_Icon_Black.svg";
import Un_mute from "../../assets/HomePageAssets/unmute.svg";
import pause from "../../assets/HomePageAssets/Pause.svg";

import Audio1 from "../../assets/HomePageAssets/storyAudio1.wav";

import "./Player.css";

const Player = ({audio,image,title,topic}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  //reference
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const playerStatus = isPlaying;
    setIsPlaying(!playerStatus);

    if (!playerStatus) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(parseInt(progressBar.current.value));
  };

  const back20Sec = () => {
    progressBar.current.value = Number(
      parseInt(progressBar.current.value) - 20
    );
    changeRange();
  };

  const forward20Sec = () => {
    progressBar.current.value = Number(
      parseInt(progressBar.current.value) + 20
    );
    changeRange();
  };
  return (
    <div className="Player">
      <audio ref={audioPlayer} preload="true" id="audio">
        <source src={audio} />
      </audio>
      <div className="Player__left">
        <img className="Player__albumLogo" src={image}
                 alt="item_name" />
        <div className="Player__songInfo">
          <h4>{title}</h4>
          <p>{topic}</p>
        </div>
      </div>

      <div className="Player__center">
        <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls">
        <input
                    type="image"
                    alt="audio-controls"
                    className=" back-btn"
                    src={back_20}
                    onClick={back20Sec}
                />
                <input
                    type="image"
                    alt="audio-controls play-button"
                    id="play-btn"
                    className="audio-btn"
                    src={isPlaying ? pause : playIcon}
                    onClick={togglePlayPause}
                />
                <input
                    type="image"
                    alt="audio-controls"
                    className="forward-btn"
                    src={forward_20}
                    onClick={forward20Sec}
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
        <span className="time-slider">
                    <span className="d-none">
                        <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} className="progressBar w-50" />
                    </span>
                    <span>{(currentTime && !isNaN(currentTime)) && calculateTime(currentTime)}</span>/
                    <span >{(duration && !isNaN(duration)) && calculateTime(duration)}</span>
                </span>
      </div>
    </div>
  );
};

Player.defaultProps = {
    audio: Audio1,
    image: Image4,
    title: "Noting playing",
    topic: "No topic",
  }
export default Player;
