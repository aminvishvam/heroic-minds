import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from "../../actions/user";
import NewEpisode from '../NewEpisode/NewEpisode';
import Topic from '../Topic/Topic';
import { fetchEpisode } from "../../actions/epsiode";

class OpenEpisode extends Component {
  constructor(props) {
    super(props);
    this.themesName = [];

    if (!props.episodeDetail) {
      const pathName = props.location.pathname;
      var episodeId = /[^/]*$/.exec(pathName)[0];
      this.props.fetchEpisode(episodeId);
    }
  }

  displayDescription = () => {
    const { episodeDetail } = this.props;
    if (episodeDetail) {
      const themesKey = Object.keys(episodeDetail).filter((x) => x.includes('theme') && episodeDetail.[x]);
      this.themesName = themesKey?.map((x) => episodeDetail[x])

      return (

        <div className="d-flex" style={{ padding: '30px' }}>
          <div>

            <h3>{episodeDetail.title} </h3>

            <div>
              {episodeDetail.topic}
            </div>
            <div className="ui cards">
              {this.themesName.map(x => {
                return (
                  <div className="card" key={x}>
                    <div className="content negative">

                      <div className="header">
                        {x}
                      </div>

                    </div>
                  </div>
                )
              })}
              {episodeDetail.description}
            </div>
          </div>
          <div>
            <div className="content negative">

              <img
                className="res"
                alt="/"
                src={
                  'https://portfoilo.s3.us-east-2.amazonaws.com/' + episodeDetail.imageUrl
                }
              />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  render() {
    return (<div>
      {this.displayDescription()}
      <NewEpisode themeIds={this.themesName} />
      <Topic />
    </div>);
  }
}


function mapStateToProps(state) {
  return {
    userId: state.user.userId,
    episodeDetail: state.episode.currentEpisode,
  };
}

export default connect(mapStateToProps, { fetchUser, fetchEpisode })(OpenEpisode);
