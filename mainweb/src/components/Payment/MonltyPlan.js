import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { Field, reduxForm } from "redux-form";
import actions from "redux-form/lib/actions";

class MontlyPlan extends Component {
  state = {};
  render() {
    return (
      <div className="MontlyPlan">
        <form>
          <Field
            type="hidden"
            id="basicPrice"
            name="userId"
            value="60ef10b4a3772e1574b15fe6"
            component="input"
          />
          <button id="basic-plan-btn">Select Plan</button>
        </form>
      </div>
    );
  }
}
export default compose(
  reduxForm({
    form: "Plan",
  })
)(MontlyPlan);
