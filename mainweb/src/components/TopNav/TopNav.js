import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Logo from "../Logo/Logo";
import "./TopNav.css";

class TopNav extends Component {

    render() {
        return (<div className="TopNav">
            <Navbar bg ='white' expand="lg">
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse  id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Item>
                        <Nav.Link href="/about" className="Nav-text ">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/teamAccount" className="Nav-text" >Team Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/book" className="Nav-text">Book</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/library" className="Nav-text navbar-right" >library</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/community" className="Nav-text" >Community</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/login" className="Nav-text" >Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="/joinNow" className="Nav-text " ><button class='btn btn-dark'>Join Today</button></Nav.Link>
                        </Nav.Item>
                   </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
}

export default TopNav;