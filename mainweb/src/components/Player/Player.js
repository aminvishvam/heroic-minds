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
  const [episodeData, setEpisodeData] = useState([]);
  const [percentage, setPercentage] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState();
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(1)

  const audioRef = useRef();

  const onChange = (e) => {
      const audio = audioRef.current;
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
  };
  const onVolchange = (e) => {
    setVolume(e.target.valueAsNumber)
  }

  const play = () => {
      const audio = audioRef.current;
      // audio.playbackRate = speed;

      if (!isPlaying) {
          setIsPlaying(true);
          audio.play();
      }

      if (isPlaying) {
          setIsPlaying(false);
          audio.pause();
      }
  };

  const getCurrDuration = (e) => {
      const percent = (
          (e.currentTarget.currentTime / e.currentTarget.duration) *
          100
      ).toFixed(2);

      const time = e.currentTarget.currentTime;

      setPercentage(+percent);
      setCurrentTime(time.toFixed(2));
  };

  const changeSpeed = () => {
      if (speed >= 2) {
          setSpeed(0.5);
      } else setSpeed(speed + 0.5);
  };

  const skip = (time) => {
      const audio = audioRef.current;

      if (time === "back") {
          console.log("15");
          setCurrentTime(audio.currentTime - 20);
      } else if (time === "fwd") {
          console.log("15");
          setCurrentTime(audio.currentTime + 20);
      }
  };
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };



  useEffect(() => {
    const audio = audioRef.current;
    audio.playbackRate = speed;
}, [speed]);


  return (
    <div className="Player">
      <audio    ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(e) => {
                              setIsPlaying(false);
                                setDuration(e.currentTarget.duration.toFixed(2));
                            }}
                            src={"https://portfoilo.s3.us-east-2.amazonaws.com/"+ audio}>

      </audio>
      <div className="Player__left">
        <img className="Player__albumLogo" src={"https://portfoilo.s3.us-east-2.amazonaws.com/"+ image}
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
                    onClick={() => skip("back")}
                />
                <input
                    type="image"
                    alt="audio-controls play-button"
                    id="play-btn"
                    className="audio-btn"
                    src={isPlaying ? pause : playIcon}
                    onClick={play}
                />
                <input
                    type="image"
                    alt="audio-controls"
                    className="forward-btn"
                    src={forward_20}
                    onClick={() => skip("fwd")}
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
         <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={onVolchange}
        />
        <span className="time-slider">
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
