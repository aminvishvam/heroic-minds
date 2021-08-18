import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from "../../actions/user";


class MainLibrary extends Component {
    state = {  }

    componentDidMount(){
     
      if(this.props.userId){
      return this.props.fetchUser(this.props.userId)}
    }
    render() { 
        return ( <div>
      
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

