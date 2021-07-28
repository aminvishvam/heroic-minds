import React, { Component } from 'react';
import requireAuth from '../RequireAuth/RequireAuth';

class Library extends Component {
  render() {
    return <div>This is the Library!</div>;
  }
}

export default requireAuth(Library);