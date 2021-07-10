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
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from "@material-ui/core";

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

  renderOrgSelect() {
    return (
      <div>
        <label>Organization Name</label>
        <br />
        <Field name="orgId" component="select">
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
              <Field
                name="terms"
                type="checkbox"
                label="By signing up, I agree to privacy policy of this app"
                component={RenderField}
                validate={acceptance()}
              />
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
        <Snackbar open={isAnyError} anchorOrigin={{ horizontal: "right", vertical: "top" }}
          autoHideDuration={6000} onClose={() => { }}>
          <Alert severity="error" onClose={() => { }}>
            {this.props.errorMessage || this.props.emailVerfiyError}
          </Alert>
        </Snackbar>
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
