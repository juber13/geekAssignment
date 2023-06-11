import React, { useState } from "react";
import { CartState } from "../Context";
import { BsCart3 } from 'react-icons/bs';

import "./cart.css";

const Cart = () => {
  const [quentity, setQuentity] = useState(0);
  const { cart, setCart } = CartState();

  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const totalAmount = cart.map(a => a.price).reduce((acc , total) => acc + total , 0);

  return (
    <div className="cart-container-wrapper" style={{ marginTop: "60px" }}>
      <div className="cart__container">
        {cart.length <= 0 ? (
          <div className="empty-cart-content">
             <BsCart3 className="empty-cart-icon"/>
            <h3>Let's Shop</h3>
          </div>
        ) : (
          cart.map((product) => (
            <div className="cart__content" key={product.id}>
              <h4 className="cart__title">{product.name}</h4>
              <img
                src={product.imageURL}
                className="cart__image"
                alt={product.title}
              />
              <h5>{product.price}</h5>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max={cart.quantity}
                style={{ width: "50px" }}
                value={quentity}
              />
              <button
                className="remove__cartItem_btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove{" "}
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 ?
      <div className="total-amount-container">
           <h2>Total {totalAmount}</h2> 
      </div>
      : ""}
    </div>
  );
};

export default Cart;
