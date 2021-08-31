import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";


import { fetchEpisode, fetchEpisodes } from "../../actions/epsiode";
import { fetchThemes, setSelectedTheme } from "../../actions/theme";
import Topic from "../Topic/Topic";

class OpenEpisode extends Component {
  state = {};
  constructor(props) {
    super(props);
    if (!props.episode) {
      const pathName = props.location.pathname;
      var episodeId = /[^/]*$/.exec(pathName)[0];
      this.props.fetchEpisode(episodeId);
    }
  }
  componentDidMount() {
    this.props.fetchEpisode(this.props.match.params.id);
    this.props.fetchEpisodes();
    this.props.fetchThemes();
  }

  renderRelatedEpisode = (e) => {
    this.props.setSelectedTheme(e.target.innerText);
    history.push(`/themes/${e.target.innerText}`);
  }

  renderRelatedTheme() {
    const topId = this.props.episode.theme1Id;
    const secondId = this.props.episode.theme2Id;
    const thirdId = this.props.episode.theme3Id;
    const relatedThemes = this.props.themes.filter(theme => {
      return theme._id === topId || theme._id === secondId || theme._id === thirdId
    })
    if (topId !== null) {
      return (<div style={{ width: '100%' }}>
        <h1>Related Theme</h1>
        <div className="ui cards">
          {relatedThemes.filter((theme) => theme.theme !== this.props.episode.title).map((theme) => {
            return (
              <div className="card" key={theme._id} onClick={this.renderRelatedEpisode}>
                <div className="content negative">

                  <div className="header">
                    {theme.theme}
                  </div>

                </div>
              </div>

            );
          })}
        </div>
      </div>);
    }
  }
  renderMoreEpisode() {
    const topId = this.props.episode.theme1Id;
    const topEpi = this.props.episodes.filter(epi => {
      return epi.theme1Id === topId || epi.theme2Id === topId || epi.theme3Id === topId
    })
    const moreEpi = topEpi.reduce((unique, o) => {
      if (!unique.some(obj => obj._id === o._id)) {
        if (!unique.some(obj => obj._id === o._id))
          unique.push(o);
      }
      return unique;
    }, [])
    if (topId !== null) {
      return (<div>
        <h1>Some More Episode</h1>
        <div style={{ display: "flex" }}>
          {moreEpi.filter((episode) => episode.title !== this.props.episode.title).map((episode) => {
            return (

              <div className="card open-card-image" key={episode._id}>
                <Link to={`${episode._id}`}>
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
        </div>
      </div>);
    }
  }

  render() {
    if (!this.props.episode) {
      return null;
    }
    const { title, topic, description, theme1, theme2, theme3, imageUrl, audioFile } = this.props.episode;
    return (
      <div className="OpenEpisode">
        <div className="ui container">
          <h1 className="admin_text_box font-weight-bold">{title}</h1>
          <img
            className="res open-card-image"
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
          <br />
          <br />

        </div>
        <div className="ui cards">{this.renderMoreEpisode()}</div>
        <div style={{ width: '100%' }} className="ui cards">{this.renderRelatedTheme()}</div>
        <Topic />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    episode: state.episode[ownProps.match.params.id],
    episodes: Object.values(state.episode),
    themes: Object.values(state.theme)
  };
};

export default connect(mapStateToProps, { fetchEpisode, fetchEpisodes, fetchThemes, setSelectedTheme })(OpenEpisode);
