import "./AddedCart.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const AddedCart = ({ cart }) => {
  const [add, setAdd] = useState([]);
  const handleClick = (cart) => {
    const newCart = [...add, cart];
    setAdd(newCart);
  };

  return (
    <div>
      {add.map((product) => console.log(product.id))}
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
      </div>
    </div>
  );
};

export default AddedCart;
