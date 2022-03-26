import React, { useEffect, useState } from "react";
import AddedCart from "../AddedCart/AddedCart";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import "./LuxaryShop.css";
const LuxaryShop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart.length);

  // newitem

  useEffect(() => {
    fetch(`FackData.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="shop-container container mt-4">
        <div className="product-container">
          {products.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.id}
            ></Product>
          ))}
        </div>

        <div className="">
          <AddedCart cart={cart} key={cart.id}></AddedCart>
        </div>
      </div>
    </div>
  );
};

export default LuxaryShop;
