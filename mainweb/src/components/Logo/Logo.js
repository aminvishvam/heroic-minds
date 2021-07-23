import React from "react";
import Nav from "react-bootstrap/Nav";

import './Logo.css'
import LogoIcon from "./LogoIcon/LogoIcon";
import LogoText from "./LogoText/LogoText";


const Logo = () => {
    return (
        <div className="Logo">
            <Nav.Link href="/">
                <div className="Logo">
                    <LogoIcon />
                    <LogoText />
                </div>
            </Nav.Link>
        </div>
    );
};

export default Logo;