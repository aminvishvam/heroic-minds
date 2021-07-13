import React, { Component } from "react";
import history from "../../history";
import LogoIcon from "../LogoIcon/LogoIcon";
import "./ConfirmRegister.css";

class ConfirmRegister extends Component {
    renderMain() {
        return (
            <div className="container">
                <div className="row justify-content-center box">
                    <div>
                        <div className="text-layout1 row justify-content-center box">
                            <LogoIcon />
                        </div>
                        <p className="about-intro-layout7">
                            <div style={{ fontSize: '38px', lineHeight: '45px' }}>Heroic Minds</div>
                        </p>
                    </div>

                </div>
            </div>

        );
    }

    redictToLogin = () => {
        history.push('/login');
    }
    render() {
        return (
            <div className='main-wrapper'>
                {this.renderMain()}
                <div className='text-content'>
                    <span>
                        Welcome to the Heroic Minds Community!<br /> We have a sent a <strong>verification link to your email</strong>.
                    <br /> <br /> Click that link to get started.
                    <br /> (It may have gone to your junk folder)
                    </span>

                </div>
                <div className="row justify-content-center box">
                    <button className='btn btn-dark ok-button' onClick={this.redictToLogin}>Ok</button>
                </div>
            </div>
        );
    }
}

export default ConfirmRegister;
