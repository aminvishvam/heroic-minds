import React, { Component } from "react";
import { connect } from "react-redux";


import { fetchTheme } from "../../actions/theme";


class Theme extends Component {

    componentDidMount() {
        const { themeIds } = this.props;
        const getKeysOfTheme = themeIds?.filter(x => /\d/.test(x));
        const promisesArray = getKeysOfTheme.map(x => {
            this.props.fetchTheme(x);
        });
        Promise.all(promisesArray);
    }


    renderList() {
        
        return this.props.relatedThemes.map((theme) => {
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
        relatedThemes: state.theme.relatedThemes,
    };
};


export default connect(mapStateToProps, { fetchTheme  })(Theme);
