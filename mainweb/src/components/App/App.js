import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import TopNav from "../TopNav/TopNav";





class App extends Component {
  state = {}


  render() {
    return (<div className="App">

      <Router history={history}>
        <div>
          <Switch>
            < Route path="/" component={TopNav} />
          </Switch>
          <div className="Page">

          </div>

        </div>
      </Router>
    </div>);
  }
}

export default App;
