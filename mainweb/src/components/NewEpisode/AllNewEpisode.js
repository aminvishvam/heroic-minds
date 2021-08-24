import React, { Component } from 'react';

import { connect } from "react-redux";
import { fetchEpisodes, fetchEpisode } from "../../actions/epsiode";

class AllNewEpisode extends Component {
    componentDidMount() {
      this.props.fetchEpisodes();
    }

  handleEpisodeCardClick = (id) => {
    this.props.fetchEpisode(id)
  }

  renderList() {
    return this.props.episodes.map((episode) => {
      return (
        <div className="card" key={episode._id} onClick={() => { this.handleEpisodeCardClick(episode._id) }}>
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

export default connect(mapStateToProps, { fetchEpisodes, fetchEpisode })(AllNewEpisode);