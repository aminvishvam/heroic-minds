import React from 'react';

const DisplayBox = ({ colLeft, colRight, contentLeft, contentRight }) => {
    return (<div className="DisplayBox">
        <section>
            <div className="container">
                <div className="row justify-content-center box">
                    <div className={`col-lg-${colLeft} col-md-12 justify-content-center`}>
                        {contentLeft}
                    </div>
                    <div className={`col-lg-${colRight} col-md-12 justify-content-center`}>
                        {contentRight}
                    </div>
                </div>
            </div>
        </section>
    </div>);
}

DisplayBox.defaultProps = {
    colLeft: 6,
    colRight: 6,
    contentLeft: 'contentLeft',
    contentRight: "contentRight"
};
export default DisplayBox;