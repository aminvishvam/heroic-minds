import React, { Component } from "react";
import LogoIcon from "../LogoIcon/LogoIcon";

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
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', height: '660px', margin: 'auto', width: '430px', border: '2px solid', backgroundColor: '#FCFCFC', textAlign: 'center', borderRadius: '14px', boxShadow: '0px 12px 40px rgba(35, 34, 43, 0.16)' }}>
                {this.renderMain()}
                <div style={{ fontSize: '18px', color: '#01061F', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <span>
                        Welcome to the Heroic Minds Community!<br /> We have a sent a <strong>verification link to your email</strong>.
                    <br /> <br /> Click that link to get started.
                    <br /> (It may have gone to your junk folder)
                    </span>

                </div>
                <div className="row justify-content-center box">
                    <button className='btn btn-dark' style={{ width: '378px', height: '67px', borderRadius: '10px' }}>Ok</button>
                </div>
            </div>
        );
    }
}

export default ConfirmRegister;
