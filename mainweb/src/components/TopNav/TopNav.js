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
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/about" className="Nav-text ">About</Nav.Link>
                        <Nav.Link href="/teamAccount" className="Nav-text" >Team Account</Nav.Link>
                        <Nav.Link href="/book" className="Nav-text">Book</Nav.Link>
                        
                        <Nav.Link href="/library" className="Nav-text pl-10" >library</Nav.Link>
                        <Nav.Link href="/community" className="Nav-text" >Community</Nav.Link>
                        <Nav.Link href="/login" className="Nav-text" >Login</Nav.Link>
                        <Nav.Link href="/joinNow" className="Nav-text p-0" ><button class='btn btn-dark'>Join Today</button></Nav.Link>
                        
                   </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
}

export default TopNav;