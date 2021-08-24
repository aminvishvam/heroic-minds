import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchRelatedEpisode, fetchEpisode } from "../../actions/epsiode";

class NewEpisode extends Component {
  async componentDidMount() {
    const promiseCollection = [];
    const { themeIds } = this.props;
    const getKeysOfTheme = themeIds?.filter(x => /\d/.test(x));
    getKeysOfTheme.forEach((i) => {
      // calling action
      const apiResult = this.props.fetchRelatedEpisode('611ef856cb11a09b9e4ada3e');
      // adding promise to collection array
      promiseCollection.push(apiResult);
    });
    Promise.all(promiseCollection);
  }

  handleEpisodeCardClick = (id) => {
    this.props.fetchEpisode(id)
  }
  renderList() {
    return this.props?.relatedEpisodes?.map((episode) => {
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
    return (<div style={{ padding: '30px' }}>
      <h1>More New Episodes</h1>
      <div className="ui cards">{this.props.relatedEpisodes?.length ? this.renderList() : 'No Episode Found'}</div>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    relatedEpisodes: state.episode.relatedEpisodes,
  };
};

export default connect(mapStateToProps, { fetchRelatedEpisode, fetchEpisode })(NewEpisode);