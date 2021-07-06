import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/toggleRegister";
import Register from "../Register/Register";
import "./CreateAccount.css";

class CreateAccount extends Component {
  state = {};
  componentWillMount() {
    this.props.togglePersonal();
  }
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default connect(null, actions)(CreateAccount);
