import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Logo from "../Logo/Logo";

class TopNav extends Component {

    render() {
        return (<div className="TopNav">
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/library" className="Nav-text">Library</Nav.Link>
                        <Nav.Link href="/community" className="Nav-text" >Community</Nav.Link>
                        <Nav.Link href="/library" className="Nav-text">Library</Nav.Link>
                        <Nav.Link href="/community" className="Nav-text" >Community</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
}

export default TopNav;