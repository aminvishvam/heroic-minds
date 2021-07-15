import React, { Component } from "react";
import {
  required,
  email,
  length,
  confirmation,
  acceptance,
} from "redux-form-validators";

import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions/Auth";

import "./PersonalRegister.css";
import RenderField from "../RenderField/RenderField";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class PersonalRegister extends Component {
  onSubmit = (formValues) => {
    this.props.personalRegister(formValues);
  };

  clearErrorState = () => {
    this.props.resetPreviousError();
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const isAnyError = !!(
      this.props.errorMessage || this.props.emailVerfiyError
    );

    return (
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="firstName"
                type="text"
                label="First Name"
                component={RenderField}
                validate={[required(), length({ min: 2 })]}
              />
              <Field
                name="lastName"
                type="text"
                label="Last Name"
                component={RenderField}
                validate={[required(), length({ min: 2 })]}
              />
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
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                component={RenderField}
                validate={confirmation({
                  field: "password",
                  fieldLabel: "Password",
                })}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <Field
                  name="terms"
                  type="checkbox"
                  component={RenderField}
                  validate={acceptance()}
                />
                <label>
                  By signing up, I agree to privacy policy of this app
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting || pristine}
                className="sign-up-button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <ErrorMessage
          open={isAnyError}
          errorMessage={this.props.errorMessage || this.props.emailVerfiyError}
          clearErrorState={this.clearErrorState}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
    emailVerfiyError: state.auth.emailVerifyError,
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: "PersonalRegisterForm",
  })
)(PersonalRegister);
