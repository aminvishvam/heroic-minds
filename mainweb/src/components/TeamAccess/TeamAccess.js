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
        <div className='row align-items-center'>
          <label for={label} className="col-lg-2 text-left text text-secondary bold s16 lh150 text-uppercase ">{label}</label>
          <span className="col-lg-10 p-0 pl-3 text-left ">
            <Field
              key={name}
              component={InputField}
              type={name}
              name={name}
            />
          </span>
        </div>
      );
    });
  }
  renderTextArea() {
    return _.map(teamArea, ({ label, name }) => {
      return (
        <div className='row align-items-center'>
          <label for={label} className="col-lg-2 text-left text  text-secondary  s16 bold lh150 text-uppercase ">{label}</label>
          <span className="col-lg-10 p-0 pl-3 text-left ">
            <Field key={name} component={InputTextArea} name={name} />
          </span>
        </div>
      );
    });
  }
  renderLeft1() {
    return (
      <div className="res-box mt-4 p-4">
        <p className="text k40 w600 bold lh150">Bring heroism into your team.</p>
        <p className="text-gray2 k18 lh200">
          Selflessness, purpose, passion, courage, honesty, integrity,
          resolve...
        </p>
        <br />
        <br />
        <p className="text h20 lh150 w400" >
          Are you interested in offering Heroic Minds to your team?
          <br />
          If so, send us an email.
          <br />
          <br />
          <br />


        </p>
        <form>
          {this.renderFields()}
          {this.renderTextArea()}
          <div className="text-center">
            <button
              type="submit"
              className="btn-send btn-dark text text-center s23 lh120 p-1 pr-4 pl-4"
            >
              Send!
            </button>
          </div>
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

  renderBottom() {
    return (
      <div>
        <h1 className="text text-center k30 lh130 bold">
          Organizations Enjoying the Benefits of Heroic Minds
        </h1>
      </div >
    );
  }
  render() {
    return (
      <div className="TeamAccess">
        <section className="mt-3">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
          />
        </section>
        <section className="layout2 mb-18">
          {this.renderBottom()}
        </section>
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
