import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from "../../actions/user";
import RelatedTheme from '../Theme/RelatedTheme';
import Topic from '../Topic/Topic';


class OpenEpisode extends Component {
  constructor(props) {
    super(props);
    this.themesName = [];
  }

  displayDescription = () => {
    const { episodeDetail } = this.props;
    const themesKey = episodeDetail && Object.keys(episodeDetail).filter((x) => x.includes('theme') && episodeDetail?.[x]);
    this.themesName = themesKey.map((x) => episodeDetail[x])
    return (

      <div className="d-flex" style={{ padding: '30px' }}>
        <div>
          <div style={{ fontWeight: 'bold' }}>
            {episodeDetail.title}
          </div>
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
  }
  render() {
    return (<div>
      {this.displayDescription()}
      <RelatedTheme themeIds={this.themesName} />
      <Topic />
    </div>);
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    userId: state.user.userId,
    episodeDetail: state.episode.currentEpisode,
  };
}

export default connect(mapStateToProps, { fetchUser })(OpenEpisode);
