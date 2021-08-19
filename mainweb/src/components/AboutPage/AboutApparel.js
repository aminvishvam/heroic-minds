import React, { Component } from "react";
import ApparelMain1 from "../../assets/AboutPageAssets/Apparel/ApparelMain1.png";
import ApparelMain2 from "../../assets/AboutPageAssets/Apparel/ApparelMain2.png";

import ApparelCollection1 from "../../assets/AboutPageAssets/Apparel/ApparelCollection1.png";
import ApparelCollection2 from "../../assets/AboutPageAssets/Apparel/ApparelCollection2.png";
import ApparelCollection3 from "../../assets/AboutPageAssets/Apparel/ApparelCollection3.png";
import ApparelCollection4 from "../../assets/AboutPageAssets/Apparel/ApparelCollection4.png";
import ApparelCollection5 from "../../assets/AboutPageAssets/Apparel/ApparelCollection5.png";
import ApparelCollection6 from "../../assets/AboutPageAssets/Apparel/ApparelCollection6.png";
import ApparelCollection7 from "../../assets/AboutPageAssets/Apparel/ApparelCollection7.png";
import ApparelCollection8 from "../../assets/AboutPageAssets/Apparel/ApparelCollection8.png";

const ApparelBox = (category, index) => {
    console.log(`Apparel${category}${index}`);

    return (
        <img src={`Apparel${category}${index}`} className="img-fluid" />
    );
}



class Apparel extends Component {

    renderPage1() {
        return (
            <div className="d-flex flex-column justify-content-center text-center">
                <div className="text k40 lh130 bold text-center mt-4">Heroic Minds Apparel</div>
                <div className="text h22 lh150 text-center mt-4">If you would like to order Heroic Minds Apparel send us an email.<br />
                    Add your company logo as well.</div>
                <div className="mt-5"><a href="" className="btn-lg btn-black ls1 k18">
                    Order Today
                </a></div>
                <div className="d-flex mt-5 flex-wrap">
                    <div className="col-sm-6 mt-4"> <img src={ApparelMain1} className="img-fluid" /></div>
                    <div className="col-sm-6 mt-4"><img src={ApparelMain2} className="img-fluid" /></div>
                </div>
            </div>
        );
    }

    renderPage2() {
        return (
            <div>
                <div className="text k32 fw600 text-center">2021 Collection</div>
                <div className="text-center d-flex flex-wrap justify-content-center mt-5">
                    <div className="collection-img d-flex">
                        <img src={ApparelCollection1} className="img-fluid" />
                        <img src={ApparelCollection2} className="img-fluid" />
                    </div>
                    <div className="collection-img d-flex">
                        <img src={ApparelCollection3} className="img-fluid" />
                        <img src={ApparelCollection4} className="img-fluid" />
                    </div>
                    <div className="collection-img d-flex">
                        <img src={ApparelCollection5} className="img-fluid" />
                        <img src={ApparelCollection6} className="img-fluid" />
                    </div>
                    <div className="collection-img d-flex">
                        <img src={ApparelCollection7} className="img-fluid" />
                        <img src={ApparelCollection8} className="img-fluid" />
                    </div>
                </div>
                <div className="mt-6 text-center"><a href="" className="btn-lg btn-black ls1 k18">
                    Order Today
                </a></div>
            </div>
        );
    }

    render() {
        return (
            <div className="my-container-90">
                <section className="mt-6">{this.renderPage1()}</section>
                <section className="mt-10">{this.renderPage2()}</section>
            </div>
        );
    }

}

export default Apparel;