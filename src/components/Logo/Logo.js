import React from "react";

import './Logo.css'
import LogoIcon from "./LogoIcon/LogoIcon";
import Nav from "react-bootstrap/Nav";
import LogoText from "./LogoText/LogoText";

import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="Logo">
            <Nav.Link as={Link} to="/" className="m-0 p-0" eventKey="0">
                <div className="Logo">
                    <LogoIcon />
                    <LogoText />
                </div>
            </Nav.Link>
        </div>
    );
};

export default Logo;