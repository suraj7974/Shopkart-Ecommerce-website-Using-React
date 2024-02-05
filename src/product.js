import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";
import _ from 'lodash';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  var button = document.getElementsByTagName("button");
  var isAnimating = false;

  for (var but of button) {
    but.addEventListener("click", (e) => {
      if (!isAnimating) {
        isAnimating = true;
        e.target.disabled = true; // Disable the button during animation
        var image = e.target.parentNode.querySelector("img");
        var span = e.target.parentNode.querySelector("span");
        var s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add("active");
  
        setTimeout(() => {
          span.classList.remove("active");
          span.removeChild(s_image);
          isAnimating = false;
          e.target.disabled = false; // Enable the button after animation
        }, 500);
      }
    });
  }

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
