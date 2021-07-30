import React, { Component } from "react";
import { Field } from "redux-form";
import { email, required } from "redux-form-validators";
import LogoIcon from "../LogoIcon/LogoIcon";
import RenderField from "../RenderField/RenderField";
import "./ForgetPassword.css";

class ForgetPassword extends Component {
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
    render() {
        return (
            <div className='main-wrapper'>
                {this.renderMain()}
                <div className='text-content'>
                    <span style={{ marginBottom: '20px', padding: '0px 10px' }}>
                        Don't worry! Enter your email below and <br /> we'll sent a verification code to reset your password
                    </span>
                    <input className='email-input-field' placeholder='Enter your email' />
                </div>
                <div className="row justify-content-center box">
                    <button className='btn btn-dark ok-button'>SEND</button>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;
