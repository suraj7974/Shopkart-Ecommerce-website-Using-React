import React from "react";
import "./product.css";

function product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="product__price">
          <small> &#8377;</small>
          <strong>69.69 </strong>
        </p>
        <div className="product__rating">
          <p>&#9734;</p>
        </div>
      </div>
       <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" />

       <button>Add to basket</button>
    </div>
  );
}

export default product;
