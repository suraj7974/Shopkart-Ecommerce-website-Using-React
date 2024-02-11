import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    const basketIcon = document.getElementById("basket-icon");
    basketIcon.classList.add("basket-shake");

    setTimeout(() => {
      basketIcon.classList.remove("basket-shake");
    }, 500);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small> $ </small>
          <strong>{price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#9734;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <span className="hoverToCart"></span>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
