import React, { useState, useRef, useEffect } from "react";

import playIcon from "../../../assets/HomePageAssets/play.svg";
import back_20 from "../../../assets/HomePageAssets/back_20.svg";
import forward_20 from "../../../assets/HomePageAssets/forward_20.svg";
import pause from "../../../assets/HomePageAssets/Pause.svg";
import "./AudioPlayer"

const AudioPlayer = ({ audioToPlay = null, textToDisplay }) => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    //reference
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

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
    }

    const togglePlayPause = () => {
        const playerStatus = isPlaying;
        setIsPlaying(!playerStatus);

        if (!playerStatus) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    };


    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(parseInt(progressBar.current.value));
    }

    const back20Sec = () => {
        progressBar.current.value = Number(parseInt(progressBar.current.value) - 20);
        changeRange();
    }

    const forward20Sec = () => {
        progressBar.current.value = Number(parseInt(progressBar.current.value) + 20);
        changeRange();
    }

    return (
        <div >
            <audio ref={audioPlayer} preload="true" id="audio" >
                <source src={audioToPlay} />
                <track label="English" kind="subtitles" srclang="en" src={textToDisplay} default />
            </audio>
            <div className="d-flex flex-row align-items-center justify-content-md-end justify-content-around audio-controls mt-4 pl-2  mr-4">
                <input
                    type="image"
                    alt="audio-controls"
                    className=" back-btn mr-3"
                    src={back_20}
                    onClick={back20Sec}
                />
                <input
                    type="image"
                    alt="audio-controls play-button"
                    id="play-btn"
                    className="audio-btn mr-3"
                    src={isPlaying ? pause : playIcon}
                    onClick={togglePlayPause}
                />
                <input
                    type="image"
                    alt="audio-controls"
                    className="forward-btn mr-3"
                    src={forward_20}
                    onClick={forward20Sec}
                />
            </div>
            {/* current time */}
            <div className={isPlaying ? "d-flex mt-2 " : "d-none"}>
                <div>{(currentTime && !isNaN(currentTime)) && calculateTime(currentTime)}</div>
                {/* progress bar */}
                <div>
                    <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} classname="progressBar w-25" />
                </div>

                {/* duration */}
                <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
        </div>
    );
};

export { AudioPlayer };
