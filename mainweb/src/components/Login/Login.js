import React, { Component } from "react";
import { required, email, length, acceptance } from "redux-form-validators";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions/Auth";

import "./Login.css";
import RenderField from "../RenderField/RenderField";
import LogoIcon from "../LogoIcon/LogoIcon";

class Login extends Component {
  onSubmit = (formValues) => {
    this.props.login(formValues);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="container justify-content-center">
        <div className="justify-content-center">
          <LogoIcon />
          <h1>Welcome</h1>
          <p>The Hero is in you</p>
        </div>
        <div className="row justify-content-center">
          <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="email"
                type="email"
                label="Email"
                component={RenderField}
                validate={[required(), email()]}
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={RenderField}
                validate={[required(), length({ min: 8 })]}
              />
              <Field
                name="remeber"
                type="checkbox"
                label="Remeber Me"
                component={RenderField}
              />
              <p>forgotPassword?</p>
              <button
                type="submit"
                disabled={submitting || pristine}
                className="btn-dark "
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <p>{this.props.errorMessage}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: "LoginForm",
  })
)(Login);
