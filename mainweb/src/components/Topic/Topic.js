import React, { Component } from "react";
import { connect } from "react-redux";


import { fetchTopics } from "../../actions/topic";
import "./Topic.css";


class Topic extends Component {
  componentDidMount() {
    this.props.fetchTopics();
  }

 
  renderList() {
    return this.props.topics.map((topic) => {
      return (
        <div className="scrollmenu" key={topic._id}>
          <div class="image">
            <img
              className="res"
              alt='/'
              src={
                'https://portfoilo.s3.us-east-2.amazonaws.com/' + topic.imageurl
              }
            />
          </div>
          <div className="title-text">
            <span className="title-text">{topic.title}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ProjectsList">
        <div className="container justify-content-center">
          <h1 style={{ textAlign: "center" }}>Topic </h1>
          <div className="scroll">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: Object.values(state.topic),
  };
};

export default connect(mapStateToProps, { fetchTopics })(Topic);
