import React, { Component } from "react";
import { connect } from "react-redux";


import { fetchThemes } from "../../actions/theme";


class Theme extends Component {

    componentDidMount() {
        this.props.fetchThemes();
    }


    renderList() {
         
        return this.props.themes.map((theme) => {
            return (
                <div className="card" key={theme._id}>
                    <div className="content negative">

                        <div className="header">
                            {theme.theme}
                        </div>

                    </div>
                </div>
            );
        });
    }


    render() {
        return (
            <div className="ProjectsList">
                <h1 className="content-text">Theme</h1>
                <div className="ui cards">{this.renderList()}</div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        themes: Object.values(state.theme),
    };
};


export default connect(mapStateToProps, { fetchThemes })(Theme);