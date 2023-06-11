import React, { useEffect, useState } from "react";
import { CartState } from "../Context";
import { BsCart3 } from 'react-icons/bs';

import "./cart.css";

const Cart = () => {
  const [total, setTotal] = useState();
  const { state , dispatch} = CartState();
  console.log(state.cart);

  useEffect(() =>{
    setTotal(state.cart.reduce((acc , curr) => acc + Number(curr.price) * curr.qty , 0))
  },[state.cart])

  return (
    <div className="cart-container-wrapper" style={{ marginTop: "60px" }}>
      <div className="cart__container">
        {state.cart.length <= 0 ? (
          <div className="empty-cart-content">
             <BsCart3 className="empty-cart-icon"/>
            <h3>Let's Shop</h3>
          </div>
        ) : (
          state.cart.map((product) => (
            <div className="cart__content" key={product.id}>
              <h4 className="cart__title">{product.name}</h4>
              <img
                src={product.imageURL}
                className="cart__image"
                alt={product.title}
              />
              <h5>{product.price}</h5>
              <select name="" id="" onChange={(e) => dispatch({type : "CHANGE_CART_QTY" , payload : {id : product.id , qty : e.target.value}})}>
              {Array.from({ length: product.quantity }, (_, i) => i + 1).map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
              </select>
              <button
                className="remove__cartItem_btn"
                onClick={() => dispatch({type : "REMOVE_TO_CART" , payload : product})}
              >
                Remove{" "}
              </button>
            </div>
          ))
        )}
      </div>
      {state.cart.length > 0 ?
      <div className="total-amount-container">
           <h2>Total {total}</h2> 
      </div>
      : ""}
    </div>
  );
};

export default Cart;
