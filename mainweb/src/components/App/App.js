import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";

import routes from "./routes";
import TopNav from "../TopNav/TopNav";
import ScrollToTop from "../ScrollToTop/ScrollTOTop";
import Scrolls from "../Scrolls/Scrolls";
import Footer from "../Footer/Footer";
import SubApp from "../SubApp/SubApp";



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
        </Router >
        <Scrolls />
      </div >
    );
  }
}



export default App;