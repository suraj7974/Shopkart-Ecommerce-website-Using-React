import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2>Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
