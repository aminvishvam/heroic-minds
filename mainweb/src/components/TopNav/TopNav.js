import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Logo from "../Logo/Logo";
import { NavLink } from 'react-router-dom';
import './TopNav.css'
class TopNav extends Component {
    itemStyle =
        {
            color: "black",
            fontSize: "15px",
            fontWeight: "900",
            padding: "0px 20px",
            marginTop: "5px"
        }

    render() {
        return (<div className="TopNav">
            <Navbar expand="lg">
                <Navbar.Brand to="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="Nav-item">
                    <Nav
                        className="mr-auto my-6 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/about"
                            className="Nav-text"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }}>
                            About</NavLink>

                        <NavLink
                            to="/teamaccount"
                            className="Nav-text"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }}

                        >Team Account</NavLink>
                        <NavLink
                            to="/book"
                            className="Nav-text"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }} >Book</NavLink>
                    </Nav>
                    <span className="Nav-item-right">
                        <NavLink
                            to="/library"
                            className="Nav-text navbar-right"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }}>Library</NavLink>
                        <NavLink
                            to="/community"
                            className="Nav-text"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }}>Community</NavLink>
                        <NavLink
                            to="/login"
                            className="Nav-text"

                            activeClassName="active"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#F57C00",
                            }}>Login</NavLink>

                    </span>
                    <NavLink
                        to="/joinNow"
                        className="Nav-text"
                    >
                        <button className='btn btn-dark'>Join Today</button>
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
}

export default TopNav;