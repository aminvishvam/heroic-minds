import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import "./TopNav.css";
import { connect } from "react-redux";

import TopNavLibrary from "../TopNavLibrary/TopNavLibrary";
import TopNavProfile from "../TopNavProfile/TopNavProfile";
import SearchBar from "../SearchBar/searchBar";

class TopNav extends Component {
  itemStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "900",
    padding: "0px 20px",
    marginTop: "5px",
  };

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Navbar expand="lg">
            <Navbar.Brand to="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="Nav-item">
              <Nav
                className="mr-auto my-6 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <TopNavLibrary />
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                  <NavLink
                    to="/community"
                    className="Nav-text"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Community
                </NavLink>
                </div>

                <SearchBar />
              </Nav>
              <TopNavProfile />
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar expand="lg">
            <Navbar.Brand to="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="Nav-item">
              <Nav
                className="mr-auto my-6 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavLink
                  to="/about"
                  className="Nav-text"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  About
                </NavLink>

                <NavLink
                  to="/teamaccess"
                  className="Nav-text"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  Team Access
                </NavLink>
                <NavLink
                  to="/book"
                  className="Nav-text"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  Book
                </NavLink>
              </Nav>
              <span className="Nav-item-right">
                <NavLink
                  to="/library"
                  className="Nav-text navbar-right"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  Library
                </NavLink>
                <NavLink
                  to="/community"
                  className="Nav-text"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  Community
                </NavLink>
                <NavLink
                  to="/login"
                  className="Nav-text"
                  activeClassName="active"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#F57C00",
                  }}
                >
                  Login
                </NavLink>
              </span>
              <NavLink to="/JoinNow" className="Nav-text">
                <button className="btn btn-dark">Join Today</button>
              </NavLink>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
  render() {
    return <div className="TopNav">{this.renderLinks()}</div>;
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(TopNav);
