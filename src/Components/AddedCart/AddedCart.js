import React, { useEffect, useState } from "react";
import "./AddedCart.css";
import { MdDelete } from "react-icons/md";

const AddedCart = ({ cart }) => {
  // console.log(cart);

  const [newCart, setNewCart] = useState("");
  const handleClick = (cart) => {
    const randomNumber = Math.ceil(Math.random() * cart.length) - 1;
    setNewCart(cart[randomNumber]);
  };

  return (
    <>
      <div className="added">
        {cart.map((item) => (
          <div key={item.id} className="added-cart">
            <img src={item.img} alt="" />
            <p>name {item.name}</p>
            <span className="icon-delete">
              <MdDelete />
            </span>
          </div>
        ))}

        <button className="chose-one " onClick={() => handleClick(cart)}>
          Chose One For Me
        </button>

        {/* <button className="chose-one"> Chose Again</button> */}
      </div>
      {newCart && (
        <div className="product">
          <img src={newCart.img} alt="" />
          <div className="product-des">
            <h3>{newCart.name}</h3>
            <p>Pirce : {newCart.price}</p>
            <p> Id : {newCart.id}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AddedCart;
