import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import "./TopNav.css";
import { connect } from "react-redux";
import DropdownArrow from '../DropdownArrow/DropdownArrow';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProfilePic from '../../assets/ProfilePic.svg';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      profileNode: null,
    }
  }
  itemStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "900",
    padding: "0px 20px",
    marginTop: "5px",
  };

  handleClick = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleProfileClick = (e) => {
    this.setState({
      profileNode: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  renderLinks() {
    console.log('-------state----', this.state);
    if (!this.props.authenticated) {
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
                <div style={{ display: 'flex', flexDirection: 'row', lineHeight: '30px' }} onClick={this.handleClick} >
                  <label style={{ marginRight: '8px' }}>library</label>
                  <DropdownArrow />
                  <Menu
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    keepMounted
                    open={!!this.state.anchorEl}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Keep Listening</MenuItem>
                    <MenuItem onClick={this.handleClose}>Favourites</MenuItem>
                    <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                    <MenuItem onClick={this.handleClose}>Recommend a Story/Topic</MenuItem>
                    <MenuItem style={{ color: '#F57C00' }} onClick={this.handleClose}>Gift an Episode</MenuItem>
                  </Menu>
                </div>

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
              </Nav>
              <Nav.Link style={{ border: 'none' }} className="border-left pl-2 ml-auto">
                <div style={{ height: '35px', width: '35px', marginRight: '25px', borderRadius: '50px' }} onClick={this.handleProfileClick}>

                  <img height="35px" width="35px" src={ProfilePic} />
                  <Menu
                    elevation={0}
                    getContentAnchorEl={null}
                    anchorEl={this.state.profileNode}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    keepMounted
                    open={!!this.state.profileNode}
                    onClose={this.handleClose}
                  >
                    <label style={{ fontSize: '20px', lineHeight: '24px' }} >User Name</label>
                    <MenuItem onClick={this.handleClose}>Connect with Friends</MenuItem>
                    <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                    <MenuItem onClick={this.handleClose}>Profile Settings</MenuItem>
                    <MenuItem onClick={this.handleClose}>Billing & Payments</MenuItem>
                    <div style={{ height: '1px', backgroundColor: '#A8A8A8' }}></div>
                    <MenuItem onClick={this.handleClose}>Get Help & Give Feedback</MenuItem>
                    <MenuItem onClick={this.handleClose}>Log Out</MenuItem>

                  </Menu>
                </div>
              </Nav.Link>
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
