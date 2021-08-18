import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";



class Payment extends Component {
  state = {};
  render() {
    return (
      <div className="Payment">
        <div>
    <section>
      <form
        action="http://localhost:5080/create-checkout-session"
        method="POST"
      >
        <input
          type="hidden"
          id="basicPrice"
          name="userId"
          value={this.props.userId}
        />
        <img src="/img/starter.png" width="120" height="120" />
        <div class="name">Monthly</div>
        <div class="price">$20</div>
        <div class="duration">per month</div>
        <button id="basic-plan-btn">Select</button>
      </form>
    </section>
    <section>
      <form
        action="http://localhost:5080/create-checkout-session"
        method="POST"
      >
        <input
          type="hidden"
          id="basicPrice"
          name="email"
          value="ronakpatel@gmail.com"
        />
        <img src="/img/starter.png" width="120" height="120" />
        <div class="name">Annual</div>
        <div class="price">$170</div>
        <div class="duration">14 per month</div>
        <button id="basic-plan-btn">Select</button>
      </form>
    </section>
    <section>
      <form action="http://localhost:5080/billing-portal" method="POST">
        <input
          type="hidden"
          id="basicPrice"
          name="userId"
          value={this.props.userId}
        />

        <button id="basic-plan-btn">Manging Billing</button>
      </form>
    </section>
  </div>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps) {
  return {
  userId: state.user.userId
  };
}

export default compose(
  connect(mapStateToProps, null),
)(Payment);
