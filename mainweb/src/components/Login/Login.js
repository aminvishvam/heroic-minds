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
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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
              <Link to="/forgot-password">
                <p>forgotPassword?</p>
              </Link>
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
        <Snackbar open={!!this.props.errorMessage} autoHideDuration={5000}>
          <Alert elevation={6} variant="filled" severity="error">
            {this.props.errorMessage}
          </Alert>
        </Snackbar>
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
