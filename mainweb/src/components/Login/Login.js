import React, { Component } from "react";
import { required, email, length, } from "redux-form-validators";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions/Auth";

import "./Login.css";
import RenderField from "../RenderField/RenderField";
import LogoIcon from "../LogoIcon/LogoIcon";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class Login extends Component {
  onSubmit = (formValues) => {
    this.props.login(formValues);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="container justify-content-center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="justify-content-center">
          <LogoIcon />
          <h1>Welcome back.</h1>
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
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Field
                    name="remeber"
                    type="checkbox"
                    component={RenderField}
                  />
                  <label>Remember Me</label>
                </div>
                <Link style={{ marginTop: '10px' }} to="/forgot-password">
                  <p>forgotPassword?</p>
                </Link>
              </div>
              <button
                type="submit"
                disabled={submitting || pristine}
                className="login-button"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <ErrorMessage
          open={!!this.props.errorMessage}
          errorMessage={this.props.errorMessage}
        />
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
