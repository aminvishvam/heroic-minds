import React, { Component } from "react";
import MontlyPlan from "./MonltyPlan";

const ProductDisplay = () => (
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
          value="60ef10b4a3772e1574b15fe6"
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
          value="60ef10b4a3772e1574b15fe6"
        />

        <button id="basic-plan-btn">Manging Billing</button>
      </form>
    </section>
  </div>
);

export default function App() {
  return <ProductDisplay />;
}

// class Payment extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="Payment">
//         <MontlyPlan />
//       </div>
//     );
//   }
// }

// export default Payment;
