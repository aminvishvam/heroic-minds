import React, { Component } from "react";
// import Comming from "../../assets/com.png";
import LogoIcon from "../Logo/LogoIcon/LogoIcon";
import SliderImage from "../SliderImage/SliderImage";
import SliderImage2 from "../SliderImage2/SliderImage2";
import SliderImage3 from "../SliderImage3/SliderImage3";
import SliderImage4 from "../SliderImage4/SliderImage4";
import SliderImage5 from "../SliderImage5/SliderImage5";
import SliderImage6 from "../SliderImage6/SliderImage6";


class JoinNow extends Component {
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
                            <div style={{ fontSize: '30px', lineHeight: '35px' }}>Shape your life around the most powerful framework known to humankind.</div>
                        </p>
                        <div className="row justify-content-center box">
                            <button className='btn btn-dark' style={{ width: '185px', height: '48px', marginBottom: '20px' }}>Sign-in</button>
                        </div>
                        <div className="row justify-content-center box">
                            <span style={{ fontSize: '22px', color: '#757780', lineHeight: '26px', fontWeight: '600' }}>Don't have an account? Sign up</span>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <SliderImage />
                    <SliderImage2 />
                    <SliderImage3 />
                    <SliderImage4 />
                    <SliderImage />
                    <SliderImage6 />
                </div>
                {this.renderMain()}
            </div>
        );
    }
}

export default JoinNow;
