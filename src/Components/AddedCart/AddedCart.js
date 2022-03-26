import React, { useEffect, useState } from "react";
import "./AddedCart.css";
import { MdDelete } from "react-icons/md";

const AddedCart = ({ cart }) => {
  const [newCart, setNewcart] = useState([...cart]);
  useEffect(() => {}, []);
  // console.log(cart);
  let randomNumber;
  const [productCount] = useState([]);
  const handleClick = (cart) => {
    setNewcart(cart);
    let result = cart.map((product) => Number(product.id));
    randomNumber = Math.ceil(Math.random() * cart.length);
    // console.log(randomNumber);

    console.log(cart[randomNumber]);

    for (const id of result) {
      if (id === randomNumber) {
        // console.log(result);
      }
    }
  };

  // console.log(cart[randomNumber]);
  return (
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

      <button className="chose-one " onClick={() => handleClick(newCart)}>
        Chose One For Me
      </button>

      {/* <button className="chose-one"> Chose Again</button> */}
    </div>
  );
};

export default AddedCart;
