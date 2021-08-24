import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from "../../actions/user";
import AllNewEpisode from '../NewEpisode/AllNewEpisode';
import Theme from '../Theme/Theme';
import Topic from '../Topic/Topic';


class MainLibrary extends Component {
    state = {  }

    componentDidMount(){
     
      if(this.props.userId){
      return this.props.fetchUser(this.props.userId)}
    }
    render() { 
        return ( <div>
          <AllNewEpisode />
          <Theme/>
          <Topic/>
        </div> );
    }
}


function mapStateToProps(state,ownProps) {
  console.log(state)
    return {
    userId: state.user.userId,
    };
  }
  
export default connect(mapStateToProps,{fetchUser}) (MainLibrary);

