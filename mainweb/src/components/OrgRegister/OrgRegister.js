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

import { orgRegister } from "../../actions/Auth";
import { fetchOrgs } from "../../actions/OrgReg";

import "./OrgRegister.css";
import RenderField from "../RenderField/RenderField";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class OrgRegister extends Component {
  componentDidMount() {
    this.props.fetchOrgs();
  }
  onSubmit = (formValues) => {
    this.props.orgRegister(formValues);
  };

  renderOrgOption() {
    return this.props.orgs.map((org) => {
      return (
        <option key={org._id} value={org._id}>
          {org.orgName}
        </option>
      );
    });
  }

  clearErrorState = () => {
    this.props.resetPreviousError();
  }

  renderOrgSelect() {
    return (
      <div>
        <label>Organization Name</label>
        <br />
        <Field className='dropdown-wrapper' name="orgId" component="select">
          {this.renderOrgOption()}
        </Field>
      </div>
    );
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const isAnyError = !!(this.props.errorMessage || this.props.emailVerfiyError)

    return (
      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div style={{ maxWidth: '600px', width: '100%' }} className="container"> 
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                name="FullName"
                type="text"
                label="Full name"
                component={RenderField}
                validate={[required(), length({ min: 2 })]}
              />
              {this.renderOrgSelect()}
              <Field
                name="orgCode"
                type="text"
                label="Organization Code"
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
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
                Sign up
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
    orgs: Object.values(state.org),
    errorMessage: state.auth.errorMessage,
    emailVerfiyError: state.auth.emailVerifyError,
  };
}

export default compose(
  connect(mapStateToProps, { fetchOrgs, orgRegister }),
  reduxForm({
    form: "OrgRegisterForm",
  })
)(OrgRegister);
