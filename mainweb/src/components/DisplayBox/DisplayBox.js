import React from "react";

const DisplayBox = ({
    colLeft,
    colRight,
    contentLeft,
    contentRight,
    reverse = "false",
    fullContainer = "false",
}) => {
    if (reverse === "true" && fullContainer === "false") {
        return (
            <div className="DisplayBox">
                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div
                                className={`col-lg-${colLeft} col-md-12 justify-content-center order-lg-1 order-md-2 order-2`}
                            >
                                {contentLeft}
                            </div>
                            <div
                                className={`col-lg-${colRight} col-md-12 justify-content-center order-lg-2 order-md-1 order-1`}
                            >
                                {contentRight}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    else if (fullContainer === "true" && reverse === "false") {
        return (
            <div className="DisplayBox">
                <section>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div
                                className={`col-lg-${colLeft} col-md-12 justify-content-center `}
                            >
                                {contentLeft}
                            </div>
                            <div
                                className={`col-lg-${colRight} col-md-12 justify-content-center `}
                            >
                                {contentRight}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    if (reverse === "true" && fullContainer === "true") {
        return (
            <div className="DisplayBox">
                <section>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div
                                className={`col-lg-${colLeft} col-md-12 justify-content-center order-lg-1 order-md-2 order-2`}
                            >
                                {contentLeft}
                            </div>
                            <div
                                className={`col-lg-${colRight} col-md-12 justify-content-center order-lg-2 order-md-1 order-1`}
                            >
                                {contentRight}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    else {
        return (
            <div className="DisplayBox">
                <section>
                    <div className="container">
                        <div className="row justify-content-center box">
                            <div
                                className={`col-lg-${colLeft} col-md-12 justify-content-center`}
                            >
                                {contentLeft}
                            </div>
                            <div
                                className={`col-lg-${colRight} col-md-12 justify-content-center`}
                            >
                                {contentRight}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

DisplayBox.defaultProps = {
    colLeft: 6,
    colRight: 6,
    contentLeft: "contentLeft",
    contentRight: "contentRight",
};
export default DisplayBox;
