import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from '../ScrollToTop/ScrollTOTop';
import Scrolls from '../Scrolls/Scrolls';
import AboutPage from "../AboutPage/AboutPage";
import PrivacyPolicy from "../AboutPage/PrivacyPolicy";
import TermsOfUse from "../AboutPage/TermsOfUse";
import TeamAccess from "../TeamAccess/TeamAccess";
import CommingSoon from "../CommingSoon/CommingSoon";
import BookPage from "../BookPage/BookPage";

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
                <Route path="/about" exact component={AboutPage} />
                <Route path="/about/PrivacyPolicy" exact component={PrivacyPolicy} />
                <Route path="/about/TermsOfUse" exact component={TermsOfUse} />
                <Route path='/teamaccess' exact component={TeamAccess} />
                <Route path='/book' exact component={BookPage} />
                <Route path='/library' exact component={CommingSoon} />
                <Route path='/community' exact component={CommingSoon} />
                <Route path='/login' exact component={CommingSoon} />
                <Route path='/joinnow' exact component={CommingSoon} />
              </ScrollToTop>
            </div>
          </div>
        </Router>
        <Scrolls />
      </div>
    );
  }
}

export default App;
