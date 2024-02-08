import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adderss</h3>
          </div>
          <div className="payment__address">
            <p>
              <b>Hello, {user ? user.email : "Guest"}</b>
            </p>
            <p>BIT DRUG</p>
            <p>Durg, Chhattisgarh</p>
          </div>
        </div>
        <div className="payment__section">
          <div id="forPaddingOnly" className="payment__title">
            <h3>Review items and delivey</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
        <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__deatail">
            {/* stripe */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
