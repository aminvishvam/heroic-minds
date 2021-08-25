import React from 'react';
import { connect } from "react-redux";

import Player from '../Player/Player';
const PlayerBar = ({audio}) => {
    console.log(audio)
    if(!audio){
    
    }
    else
    return (  
        <div>
            <Player audio={audio.audioFile} image={audio.imageUrl} title={audio.title} topic={audio.topic}/>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return { audio: state.activeAudio};
  };
  
export default connect(mapStateToProps)(PlayerBar);

 
