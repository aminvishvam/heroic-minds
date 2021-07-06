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

class PersonalRegister extends Component {
  onSubmit = (formValues) => {
    this.props.personalRegister(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
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
                name="confirm_password"
                type="password"
                label="Confirm Password"
                component={RenderField}
                validate={confirmation({
                  field: "password",
                  fieldLabel: "Password",
                })}
              />
              <Field
                name="terms"
                type="checkbox"
                label="I accept the terms of service"
                component={RenderField}
                validate={acceptance()}
              />
              <button
                type="submit"
                className="btn-dark "
              >
                Send!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: "PersonalRegisterForm",
  })
)(PersonalRegister);
