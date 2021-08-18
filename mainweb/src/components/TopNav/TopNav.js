import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Logo/Logo";
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
        <div className="TopNav">
          <Navbar expand="lg">
            <Navbar.Brand href="/library">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="Nav-item">
              <Nav
                className="w-100 d-flex justify-content-between my-navbar"
                navbarScroll
              >
                <div className="Nav-item-left d-flex align-items-center">
                  <TopNavLibrary />
                  <Nav.Link
                    href="/community"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Community
                  </Nav.Link>
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
        <div className="TopNav">
          <Navbar expand="lg">
            <Navbar.Brand href="/">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="Nav-item">
              <Nav
                className="w-100 d-flex justify-content-between my-navbar"
                navbarScroll
              >
                <span className="Nav-item-left d-flex align-items-center">
                  <Nav.Link
                    href="/about"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    About
                  </Nav.Link>

                  <Nav.Link
                    href="/team-access"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Team Access
                  </Nav.Link>
                  <Nav.Link
                    href="/author"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Author
                  </Nav.Link>
                </span>
                <span className="Nav-item-right d-flex align-items-center">
                  <Nav.Link
                    href="/library"
                    className="Nav-text navbar-right s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Library
                  </Nav.Link>
                  <Nav.Link
                    href="/community"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Community
                  </Nav.Link>
                  <Nav.Link
                    href="/login"
                    className="Nav-text s18"
                    activeClassName="active"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "#F57C00",
                    }}
                  >
                    Login
                  </Nav.Link>

                  <Nav.Link href="/join-today" className="Nav-text">
                    <button className="btn btn-black s18">Join Today</button>
                  </Nav.Link>
                </span>
              </Nav>
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
