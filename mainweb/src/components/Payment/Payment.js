import React, { useState, useEffect } from "react";

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
          name="planId"
          value="price_1JAjCEGFy9bXfzIU6HYm0fyV"
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
          name="planId"
          value="price_1JAjVOGFy9bXfzIUq7ySnwy4"
        />
        <img src="/img/starter.png" width="120" height="120" />
        <div class="name">Annual</div>
        <div class="price">$170</div>
        <div class="duration">14 per month</div>
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
          value="maitrik.patel2025@gmail.com"
        />

        <button id="basic-plan-btn">Manging Billing</button>
      </form>
    </section>
  </div>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
