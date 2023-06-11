import React from "react";
import { CartState } from "../Context";

const product = ({ items }) => {
  const { cart, setCart } = CartState();
  const { id, imageURL, name, price } = items;

  const addToCart = (item) => {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    if(isItemInCart) return;
    else setCart([...cart, item]);
  };

  return (
    <div className="product" key={id}>
      <div className="product-info">
        <img src={imageURL} alt="" style={{ width: "100px" }} />
        <p>{name}</p>
        <h5>{price}</h5>
        {cart.includes(items) ?
        <button
          className="add-to-cart"
          style={{ cursor: "pointer" }}
         >
          Added
        </button>
        : 
        <button
          className="add-to-cart"
          style={{ cursor: "pointer" }}
          onClick={() => addToCart(items)}
        >
          Add To Cart
        </button>
        }
      </div>
    </div>
  );
};

export default product;
