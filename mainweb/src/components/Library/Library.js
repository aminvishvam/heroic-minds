import React, { Component } from 'react';
import requireAuth from '../RequireAuth/RequireAuth';
import MainLibrary from './MainLibrary'


class Library extends Component {
  

  render() {
    return <div >
      <MainLibrary/>
    </div>;
  }
}

export default requireAuth(Library);