import React from "react";
import { CartState } from "../Context";

const product = ({ items }) => {
  const { state, dispatch } = CartState();
  const { id, imageURL, name, price } = items;
  return (
    <div className="product" key={id}>
      <div className="product-info">
        <img src={imageURL} alt="" style={{ width: "100px" }} />
        <p>{name}</p>
        <h5>{price}</h5>
        {state.cart.some((p) => p.id === items.id) ? (
          <button className="add-to-cart" style={{ cursor: "pointer" }} onClick={() => dispatch({type : "REMOVE_TO_CART" , payload : items})}>
            Remove From Cart
          </button>
        ) : (
          <button
            className="add-to-cart"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: items })}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default product;
