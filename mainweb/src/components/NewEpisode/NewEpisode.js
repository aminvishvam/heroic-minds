import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchEpisodes, fetchEpisode } from "../../actions/epsiode";
import { audioSelect } from "../../actions/player";

class NewEpisode extends Component {
    componentDidMount() {
      this.props.fetchEpisodes();
    }

  handleEpisodeCardClick = (id) => {
    this.props.fetchEpisode(id)
  }

  renderList() {
    return this.props.episodes.map((episode) => {
      return (
        <div className="card" key={episode._id}>
          <div className="content negative" >
            <img
              className="res"
              alt="New Story Episode"
              src={
                'https://portfoilo.s3.us-east-2.amazonaws.com/' + episode.imageUrl
              }
            />
             <Link to={`episodes/${episode._id}`}>
            <div className="header">

              {episode.title}
            </div>
            </Link>
            {episode.topic}
          </div>
        </div>
        
      );
    });
  }
  render() {
    return (<div>
      <h1>New Episode :</h1>
      <div className="ui cards">{this.renderList()}</div>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    episodes: Object.values(state.episode),
  };
};

export default connect(mapStateToProps, { fetchEpisodes, fetchEpisode , audioSelect})(NewEpisode);