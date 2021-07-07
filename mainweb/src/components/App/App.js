import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import HomePage from "../HomePage/HomePage";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from "../ScrollToTop/ScrollTOTop";
import Scrolls from "../Scrolls/Scrolls";
import AboutPage from "../AboutPage/AboutPage";
import PrivacyPolicy from "../AboutPage/PrivacyPolicy";
import TermsOfUse from "../AboutPage/TermsOfUse";
import TeamAccess from "../TeamAccess/TeamAccess";
import Library from "../ComingSoon/Library";
import Community from "../ComingSoon/Community";
import JoinToday from "../ComingSoon/JoinToday";

import BookPage from "../BookPage/BookPage";
import CreateAccount from "../CreateAccount/CreateAccount";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

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
                <Route
                  path="/about/PrivacyPolicy"
                  exact
                  component={PrivacyPolicy}
                />
                <Route path="/about/TermsOfUse" exact component={TermsOfUse} />
                <Route path="/teamaccess" exact component={TeamAccess} />
                <Route path="/book" exact component={BookPage} />
                <Route path="/library" exact component={Library} />
                <Route path="/community" exact component={Community} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={CreateAccount} />
                <Route path="/joinToday" exact component={JoinToday} />
                <Elements stripe={stripePromise}>
                  <Route path="/payment" exact component={Payment} />
                </Elements>
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
