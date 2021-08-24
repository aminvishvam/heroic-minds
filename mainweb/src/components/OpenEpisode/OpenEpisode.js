import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { fetchEpisode,fetchEpisodes } from "../../actions/epsiode";
import Topic from "../Topic/Topic";

class OpenEpisode extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchEpisode(this.props.match.params.id);
    this.props.fetchEpisodes();
  }

  renderMoreEpisode() {
    const topId = this.props.episode.theme1Id;
    const topEpi = this.props.episodes.filter(epi => {
      return epi.theme1Id === topId ||  epi.theme2Id === topId || epi.theme3Id === topId 
    })
    const moreEpi = topEpi.reduce((unique, o) => {
      if(!unique.some(obj => obj._id === o._id)) {
        if(!unique.some(obj => obj._id === o._id))
        unique.push(o);
      }
      return unique;
  },[])
    if(topId !== null){
      return( <div>
        <h1>Some More Episode</h1>
        {moreEpi.map((episode) => {
        return (
          <div className="card" key={episode._id}>
            <Link to={`episodes/${episode._id}`}>
            <div className="content negative">
              <img
                className="res"
                alt="/"
                src={
                  'https://portfoilo.s3.us-east-2.amazonaws.com/' + episode.imageUrl
                }
              />
              <div className="header">
                {episode.title}
              </div>
              {episode.topic}
            </div>
          </Link>
          </div>
        );
      })}
      </div>);
    }

  }

  render() {
    const { title, topic, description, theme1, theme2, theme3,imageUrl,audioFile} = this.props.episode;
    return (
      <div className="OpenEpisode">
        <div className="ui container">
        <h1 className="admin_text_box font-weight-bold">{title}</h1>
        <img
              className="res"
              alt="/"
              src={
                "https://portfoilo.s3.us-east-2.amazonaws.com/" + imageUrl
              }
            />
                    <p>{topic}</p>
            <p>{theme1}</p>
            <p>{theme2}</p>
            <p>{theme3}</p>
          <div className="justify-content-md-center">

            <p>{description}</p>
    
         
         </div>
         <br/>
         <br/>
        
        </div>
        <div className="ui cards">{this.renderMoreEpisode()}</div>
        <Topic/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { 
    episode: state.episode[ownProps.match.params.id], 
    episodes: Object.values(state.episode)
  };
};

export default connect(mapStateToProps, { fetchEpisode,fetchEpisodes })(OpenEpisode);
