import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchEpisodes } from "../../actions/epsiode";
import './NewEpisode.css';
import { GoChevronRight } from 'react-icons/go';

class NewEpisode extends Component {
  state = {}
  componentDidMount() {
    this.props.fetchEpisodes();
  }
  renderList() {
    return this.props.episodes.map((episode) => {
      return (
        <div className="scrollmenu p-2" key={episode._id}>
          <div className="text-center p-2">
            <img
              className="res"
              alt="New Story Episode"
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
    return (
      <div className="my-container-95">
        <h1>New Episode</h1>
        <div className="scroll align-items-center justify-content-start">{this.renderList()}
          <button className="scroll-button image p-1"><GoChevronRight size="48" /></button>
        </div>
      </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    episodes: Object.values(state.episode),
  };
};

export default connect(mapStateToProps, { fetchEpisodes })(NewEpisode);