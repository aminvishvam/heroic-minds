import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
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
            <Route path="/" exact component={HomePage}/>
          </div>

          </div>
      </Router>
    </div>);
  }
}

      export default App;
