import React, { useState } from "react";
import "./AddedCart.css";

const AddedCart = ({ cart }) => {
  const [newCart, setNewCart] = useState("");
  const handleClick = (cart) => {
    const randomNumber = Math.ceil(Math.random() * cart.length) - 1;
    setNewCart(cart[randomNumber]);
  };

  const handleClose = (cart) => {
    const itemClose = (cart.length = []);
    setNewCart(itemClose);
  };

  return (
    <>
      <h4> Seleceted Proudcts</h4>
      <div className="added">
        {cart.map((item) => (
          <div key={item.id} className="added-cart">
            <img src={item.img} alt="" />
            <p>name {item.name}</p>
          </div>
        ))}

        <div>
          {" "}
          <button className="chose-one mb-3 " onClick={() => handleClick(cart)}>
            Chose One For Me
          </button>
        </div>
        <button className="chose-one mb-4" onClick={() => handleClose(cart)}>
          {" "}
          Chose Again
        </button>
      </div>
      {newCart && (
        <div className="product">
          <img src={newCart.img} alt="" />
          <div className="product-des">
            <h3>{newCart.name}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default AddedCart;
