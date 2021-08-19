import React, { Component } from "react";
import { connect } from "react-redux";

import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";

import routes from "./routes";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from "../ScrollToTop/ScrollTOTop";
import Scrolls from "../Scrolls/Scrolls";
import Footer from "../Footer/Footer";
import SubApp from "../SubApp/SubApp";
import Player from "../Player/Player";


class App extends Component {
  state = {};
  history

  render() {
    if (this.props.authenticated) {
    return (  
      <div className="App">
        <SubApp />
        <Router history={history}>
          <Switch>
            <Route path="/" component={TopNav} />
          </Switch>
          <div className="Page">
            <ScrollToTop>
            {
								Object.keys(routes).map((o, i) => (
									<Route exact key={i} path={o} component={routes[o]}/>
								))
							}
            </ScrollToTop>
          </div>

          <div className="Footer">
            <Switch>
            <Route path="/" component={Player} />
            </Switch>
          </div>
        </Router>
      </div>
    )}
    else {
      return (  
        <div className="App">
          <SubApp />
          <Router history={history}>
            <Switch>
              <Route path="/" component={TopNav} />
            </Switch>
            <div className="Page">
              <ScrollToTop>
              {
                  Object.keys(routes).map((o, i) => (
                    <Route exact key={i} path={o} component={routes[o]}/>
                  ))
                }
              </ScrollToTop>
            </div>
  
            <div className="Footer">
              <Switch>
                <Route path="/" component={Footer} />
              </Switch>
            </div>
          </Router>
          <Scrolls />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);