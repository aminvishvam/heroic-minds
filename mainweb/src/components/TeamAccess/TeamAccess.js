import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import InputField from "../InputField/InputField";
import InputTextArea from "../InputTextArea/InputTextArea";
import DisplayBox from "../DisplayBox/DisplayBox";
import teamacess from "../../assets/teamacess.png";
import Organization1 from "../../assets/Organizations1.png";
import Organization2 from "../../assets/Organizations2.jpeg";
import Organization3 from "../../assets/Organizations3.png";

import _ from "lodash";
import teamField from "./teamfield";
import teamArea from "./teamArea";

import * as actions from "../../actions/teamAccess";

import "./TeamAccess.css";

class TeamAccess extends Component {
  renderFields() {
    return _.map(teamField, ({ label, name }) => {
      return (
        <div className="row align-items-center">
          <label
            for={label}
            className="col-lg-2 text-left text  bold s16 lh150 text-uppercase "
          >
            {label}
          </label>
          <span className="col-lg-10 p-0 pl-3 text-left ">
            <Field
              key={name}
              component={InputField}
              type={name}
              name={name}
              props={{ className: "team-form-field" }}
            />
          </span>
        </div>
      );
    });
  }
  renderTextArea() {
    return _.map(teamArea, ({ label, name }) => {
      return (
        <div className="row align-items-center">
          <label
            for={label}
            className="col-lg-2 text-left text   s16 bold lh150 text-uppercase "
          >
            {label}
          </label>
          <span className="col-lg-10 p-0 pl-3 text-left ">
            <Field key={name} component={InputTextArea} name={name} />
          </span>
        </div>
      );
    });
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createTeamAccess(formValues);
  };

  renderLeft1() {
    const { handleSubmit } = this.props;
    return (
      <div className="team-page-header">
        <p className="text k32 w600 bold lh140 mb-0 text-nowrap">
          Offer Heroic Minds™ to your team.
        </p>
        <p className="text h20 lh150 mt-2">
          Team discounts and customizations available.
          <br />
          Inquire below.
          <br />
          <br />
          <br />
        </p>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {this.renderFields()}
          {this.renderTextArea()}
          <div className="text-center">
            <button type="submit" className="btn btn-black team-btn-text ">
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
        <img
          alt="Hompage-image2"
          className="img-fluid about-teamacess"
          src={teamacess}
        />
      </div>
    );
  }

  renderBottom() {
    return (
      <div className="text-center">
        <h1 className="text text-center k30 lh130 bold">
          Who we work with
        </h1>
        <img
          src={Organization1}
          alt="Waterloo Wolves"
          className="img-fluid mt-5 px-4 organization-img"
        />
        <img
          src={Organization2}
          alt="Kitchener minor hockey association"
          className="img-fluid mt-5 px-4 organization-img"
        />
        <img
          src={Organization3}
          alt="Waterloo United"
          className="img-fluid mt-5 px-4 organization-img"
        />
      </div>
    );
  }
  render() {
    return (
      <div className="TeamAccess-page my-container-85">
        <section className="mt-10">
          <DisplayBox
            colLeft="8"
            colRight="4"
            contentLeft={this.renderLeft1()}
            contentRight={this.renderRight1()}
            fullContainer="true"
          />
        </section>
        <section className="mt-15 mb-15">{this.renderBottom()}</section>
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

export default compose(
  connect(null, actions),
  reduxForm({
    validate,
    validatetextarea,
    form: "TeamAccess",
  })
)(TeamAccess);
