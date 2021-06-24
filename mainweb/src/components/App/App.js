import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from '../ScrollToTop/ScrollTOTop';
import Scrolls from '../Scrolls/Scrolls';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" component={TopNav} />
            </Switch>
            <div className="Page">
              <ScrollToTop>
                <Route path="/" exact component={HomePage} />
              </ScrollToTop>
            </div>
          </div>
        </Router>
        <Scrolls/>
      </div>
    );
  }
}

export default App;
