import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchEpisodes, fetchEpisode } from "../../actions/epsiode";

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

export default connect(mapStateToProps, { fetchEpisodes, fetchEpisode })(NewEpisode);