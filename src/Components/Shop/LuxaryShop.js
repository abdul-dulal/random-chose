import React, { useEffect, useState } from "react";
import AddedCart from "../AddedCart/AddedCart";
import Product from "../Product/Product";
import "./LuxaryShop.css";
const LuxaryShop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
    <div className="shop-container container">
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
        <AddedCart cart={cart}></AddedCart>
      </div>
    </div>
  );
};

export default LuxaryShop;
