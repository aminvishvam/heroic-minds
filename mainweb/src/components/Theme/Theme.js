import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";

import { fetchThemes, setSelectedTheme } from "../../actions/theme";


class Theme extends Component {

    componentDidMount() {
        this.props.fetchThemes();
    }

    renderRelatedEpisode = (e) => {
        this.props.setSelectedTheme(e.target.innerText);
        history.push(`/themes/${e.target.innerText}`);
    }

    renderList() {
        return this.props.themes.map((theme) => {
            return (
                <div className="card" key={theme._id} onClick={this.renderRelatedEpisode}>
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


export default connect(mapStateToProps, { fetchThemes, setSelectedTheme })(Theme);
