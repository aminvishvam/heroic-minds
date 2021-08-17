import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from "../ScrollToTop/ScrollTOTop";
import Scrolls from "../Scrolls/Scrolls";
import AboutPage from "../AboutPage/AboutPage";
import TeamAccess from "../TeamAccess/TeamAccess";
import Library from "../Library/Library";
import Community from "../ComingSoon/Community";
import JoinToday from "../ComingSoon/JoinToday";
import AuthorPage from "../AuthorPage/AuthorPage";
import Footer from "../Footer/Footer";
import PrivacyPolicy from "../Footer/PrivacyPolicy";
import TermsOfUse from "../Footer/TermsOfUse";
import Press from "../Footer/Press";
import Contact from "../Footer/Contact";
import WorkWithTheCreator from "../Footer/WorkWithTheCreator";
import FAQ from "../Footer/FAQ";

import CreateAccount from "../CreateAccount/CreateAccount";
import Login from "../Login/Login";

import ConfirmRegister from "../ConfirmRegister/ConfirmRegister";
import ForgetPassword from "../ForgotPassword/ForgetPassword";
import EditProfile from "../EditProfile/EditProfile";
import Questionarries from "../Questionarries/Questionarries";

import Payment from "../Payment/Payment";
import SubApp from "../SubApp/SubApp";
import { connect } from "react-redux";
import {fetchUser} from '../../actions/user'


class App extends Component {
  state = {};
  history



  render() {
    return (
      <div className="App">
        <SubApp/>
        <Router history={history}>
          <Switch>
            <Route path="/" component={TopNav} />
          </Switch>
          <div className="Page">
            <ScrollToTop>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/team-access" exact component={TeamAccess} />
              <Route path="/author" exact component={AuthorPage} />
              <Route path="/library" exact component={Library} />
              <Route path="/community" exact component={Community} />
              <Route path="/join-today" exact component={JoinToday} />
              <Route
                path="/work-with-the-creator"
                exact
                component={WorkWithTheCreator}
              />
              <Route path="/privacy-policy" exact component={PrivacyPolicy} />
              <Route path="/terms-of-use" exact component={TermsOfUse} />
              <Route path="/press" exact component={Press} />
              <Route path="/contact" exact component={Contact} />
              <Route
                path="/contact/frequently-asked-questions"
                exact
                component={FAQ}
              />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={CreateAccount} />
              <Route path="/forgot-password" exact component={ForgetPassword} />
              <Route
                path="/confirm-register"
                exact
                component={ConfirmRegister}
              />
              <Route path="/payment" exact component={Payment} />
              <Route path="/edit-profile" exact component={EditProfile} />
              <Route path="/questionarries" exact component={Questionarries} />
            </ScrollToTop>
          </div>

          <div className="Footer">
            <Switch>
              <Route path="/" component={Footer} />
            </Switch>
          </div>
        </Router >
        <Scrolls />
      </div >
    );
  }
}



export default App;