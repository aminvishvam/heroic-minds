import React from 'react';
import { connect } from "react-redux";

import Player from '../Player/Player';
const PlayerBar = ({audio}) => {
    console.log(audio)
    if(!audio){
        return(<Player/>)
    }
    return (  
        <div>
            <Player audio={`https://portfoilo.s3.us-east-2.amazonaws.com/${audio.audioFile}`} image={`https://portfoilo.s3.us-east-2.amazonaws.com/${audio.imageUrl}`} title={audio.title} topic={audio.topic}/>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    return { audio: state.activeAudio};
  };
  
export default connect(mapStateToProps)(PlayerBar);

 
