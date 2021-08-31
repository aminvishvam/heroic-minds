import React, { Component } from 'react';

import { connect } from "react-redux";
import { fetchEpisodes, fetchEpisode } from "../../actions/epsiode";
import { audioSelect } from "../../actions/player";
import history from "../../history";
import { setSelectedTheme } from "../../actions/theme";


class ThemeRelatedEpisode extends Component {

  handleEpisodeCardClick = (id) => {
    this.props.fetchEpisode(id)
  }

  renderRelatedEpisode = (e) => {
    this.props.setSelectedTheme(e.target.innerText);
    history.push(`/themes/${e.target.innerText}`);
}

  renderThemeList() {
    return this.props.themes.map((theme) => {
      return (
        <div style={{ backgroundColor: this.props?.selectedTheme === theme.theme && 'gray' }} className="card" key={theme._id} onClick={this.renderRelatedEpisode}>
          <div className="content negative">

            <div className="header">
              {theme.theme}
            </div>

          </div>
        </div>
      );
    });
  }

  renderRelatedEpisodeList() {
    const { selectedTheme, episodes } = this.props;
    console.log('episodes: ', episodes);
    const relatedEpisodes = episodes.filter(epi => {
      return epi.theme1 === selectedTheme || epi.theme2 === selectedTheme || epi.theme3 === selectedTheme
    })
    return relatedEpisodes.map((episode) => {
      return (
        <div className="card" key={episode._id} onClick={() => this.props.audioSelect(episode)}>
          <div className="content negative">
            <img
              className="res"
              alt="/"
              src={
                'https://portfoilo.s3.us-east-2.amazonaws.com/' + episode.imageUrl
              }
            />
            <div className="header" onClick={() => { this.handleEpisodeCardClick(episode._id) }}>
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
      <h1>Theme</h1>
      <div className="ui cards">{this.renderThemeList()}</div>
      <div className="ui cards">{this.renderRelatedEpisodeList()}</div>
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    episodes: Object.values(state.episode),
    themes: Object.values(state.theme),
    selectedTheme: state.theme.currentTheme,
  };
};

export default connect(mapStateToProps, { fetchEpisodes, fetchEpisode, audioSelect, setSelectedTheme })(ThemeRelatedEpisode);
