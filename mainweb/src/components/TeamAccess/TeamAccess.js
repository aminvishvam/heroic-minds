import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import InputField from "../InputField/InputField";
import InputTextArea from "../InputTextArea/InputTextArea";
import DisplayBox from "../DisplayBox/DisplayBox";
import teamacess from "../../assets/teamacess.png";

import _ from "lodash";
import teamField from "./teamfield";
import teamArea from "./teamArea";

import "./TeamAccess.css";

class TeamAccess extends Component {
  renderFields() {
    return _.map(teamField, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={InputField}
          type={name}
          label={label}
          name={name}
        />
      );
    });
  }
  renderTextArea() {
    return _.map(teamArea, ({ label, name }) => {
      return (
        <Field key={name} component={InputTextArea} label={label} name={name} />
      );
    });
  }
  renderLeft1() {
    return (
      <div className="res-box mt-4">
        <br />
        <br />
        <p className="team-tagline-layout1">Bring heroism into your team.</p>
        <br />

        <p className="team-tagline-layout2">
          Selflessness, purpose, passion, courage, honesty, integrity,
          resolve...
        </p>
        <br />
        <p className="team-intro-layout6">
          Are you interested in offering Heroic Minds to your team?
          <br />
          If so, send us an email.
          <br />
        </p>
        <form>
          {this.renderFields()}
          {this.renderTextArea()}
          <button
            type="submit"
            className="btn btn-dark"
          >
            Send!
          </button>
        </form>
      </div>
    );
  }
  renderRight1() {
    return (
      <div className="res-box">
        <br />
        <br />
        <br />
        <span className="img_animat1">
          <img
            alt="Hompage-image2"
            className="img-fluid about-teamacess"
            src={teamacess}
          />
        </span>
      </div>
    );
  }
  render() {
    return (
      <div className="TeamAccess">
        <section className="layout">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
          />
        </section>
        <br />
        <br />
        <p className="about-intro-layout7">
          Organizations Enjoying the Benefits of Heroic Minds
        </p>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(teamField, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
}

function validatetextarea(values) {
  const errors = {};

  _.each(teamArea, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  form: "TeamAccessForm",
  validate,
  validatetextarea,
})(TeamAccess);
