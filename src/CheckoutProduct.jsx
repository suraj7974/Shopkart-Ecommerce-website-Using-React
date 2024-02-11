import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [isRemoving, setIsRemoving] = useState(false);

  const removeFromBasket = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
      setIsRemoving(false);
      console.log("Item removed from basket with id:", id);
    }, 1300);
  };
  

  return (
    <div>
      <div className={`checkoutProduct ${isRemoving ? "item-slide" : ""}`}>
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$ </small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>&#9734;</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CheckoutProduct;
