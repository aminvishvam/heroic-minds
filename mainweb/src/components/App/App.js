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
import AuthorPage from "../AuthorPage/AuthorPage";
import Footer from "../Footer/Footer";
import PrivacyPolicy from "../Footer/PrivacyPolicy";
import TermsOfUse from "../Footer/TermsOfUse";
import Press from "../Footer/Press";
import Contact from "../Footer/Contact";
import WorkWithTheCreator from "../Footer/WorkWithTheCreator";
import "./App.css"
import FAQ from "../Footer/FAQ";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={TopNav} />
          </Switch>
          <div className="Page">
            <ScrollToTop>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path='/team-access' exact component={TeamAccess} />
              <Route path='/author' exact component={AuthorPage} />
              <Route path='/library' exact component={Library} />
              <Route path='/community' exact component={Community} />
              <Route path='/login' exact component={Login} />
              <Route path='/join-today' exact component={JoinToday} />
              <Route path='/work-with-the-creator' exact component={WorkWithTheCreator} />
              <Route path="/privacy-policy" exact component={PrivacyPolicy} />
              <Route path="/terms-of-use" exact component={TermsOfUse} />
              <Route path='/press' exact component={Press} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/contact/frequently-asked-questions' exact component={FAQ} />
            </ScrollToTop>
          </div>

          <div className='Footer'>
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
