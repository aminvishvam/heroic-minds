import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions/payment";

class MontlyPlan extends Component {
  state = {};
  onSubmit = () => {
    const value= this.props.userId
    this.props.create_Subscription(value);
  };
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="MontlyPlan">
        {this.props.userId}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <button id="basic-plan-btn" >Select Plan</button>
        </form>
      </div>
    );
  }
}
