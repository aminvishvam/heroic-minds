import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-bootstrap";
import Logo from "../Logo/Logo";
import "./TopNav.css";
import { connect } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";



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
        <div className="TopNav p-1 pt-3 bg-white">
          <Navbar expand="xl" collapseOnSelect>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
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
        <div className="TopNav p-1 pt-3 bg-white">
          <Navbar expand="xl" collapseOnSelect>
            <Navbar.Brand>
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav>
                <NavDropdown id="dropdown-basic" className="Nav-text" title="About">
                  <NavDropdown.Item className="Nav-text "><Nav.Link as={Link} eventKey="1" to="/about/mission" className="text-black">Philosophy/Mission</Nav.Link ></NavDropdown.Item>
                  <NavDropdown.Item className="Nav-text "><Nav.Link as={Link} eventKey="2" to="/about/podcast" className="text-black">Podcast</Nav.Link ></NavDropdown.Item>
                  <NavDropdown.Item className="Nav-text "><Nav.Link as={Link} eventKey="3" to="/about/apparel" className="text-black">Apparel</Nav.Link ></NavDropdown.Item>
                  <NavDropdown.Item className="Nav-text "> <Nav.Link as={Link} eventKey="4" to="/about/research/coming-soon" className="text-black">Research</Nav.Link ></NavDropdown.Item>
                </NavDropdown>


                <Nav.Link as={Link} eventKey="5"
                  to="/team-access"
                  className="text-black Nav-text "
                >
                  Team Access
                </Nav.Link >
                <Nav.Link as={Link} eventKey="6"
                  to="/author"
                  className="text-black Nav-text "

                >
                  Author
                </Nav.Link >
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link as={Link} eventKey="7"
                  to="/library"
                  className="text-black Nav-text  navbar-right"

                >
                  Library
                </Nav.Link >
                <Nav.Link as={Link} eventKey="8"
                  to="/community"
                  className="text-black Nav-text "
                >
                  Community
                </Nav.Link >
                <Nav.Link as={Link} eventKey="9"
                  to="/login"
                  className="text-black Nav-text "
                >
                  Login
                </Nav.Link >
                <Nav.Link as={Link} eventKey="10" to="/join-today" className="text-black Nav-text ">
                  <button className="btn btn-black s18">Join Today</button>
                </Nav.Link >
              </Nav>
            </Navbar.Collapse>
          </Navbar >
        </div >
      );
    }
  }
  render() {
    return <>{this.renderLinks()}</>;
  }
}
function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(TopNav);
