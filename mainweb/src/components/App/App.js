import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from '../ScrollToTop/ScrollTOTop';
import Scrolls from '../Scrolls/Scrolls';
import AboutPage from "../AboutPage/AboutPage";
import TeamAccess from "../TeamAccess/TeamAccess";
import Library from "../ComingSoon/Library";
import Community from "../ComingSoon/Community";
import JoinToday from "../ComingSoon/JoinToday";
import Login from "../ComingSoon/Login";
import BookPage from "../BookPage/BookPage";
import Footer from "../Footer/Footer";
import PrivacyPolicy from "../Footer/PrivacyPolicy";
import TermsOfUse from "../Footer/TermsOfUse";
import Press from "../Footer/Press";
import Contact from "../Footer/Contact";
import WorkWithTheCreator from "../Footer/WorkWithTheCreator";
import FAQ from "../Footer/FAQ";

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
                <Route path='/library' exact component={Library} />
                <Route path='/community' exact component={Community} />
                <Route path='/login' exact component={Login} />
                <Route path='/joinToday' exact component={JoinToday} />
              </ScrollToTop>
            </div>
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

export default App;
