import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, price, id } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-des">
        <h3>{name}</h3>
        <p>Pirce : {price}</p>
        <p> Id : {id}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-info mb-4 rounded"
      >
        AddToCart
        <span className="icon">
          <FaShoppingCart />
        </span>
      </button>
    </div>
  );
};

export default Product;
