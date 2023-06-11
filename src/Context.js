import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { cartReducer , productReducer } from "./Reducer";

const Cart = createContext();

const Context = (props) => {
  

  const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: []
	});

  useEffect(() => {
    const fetchData = async () => {
        try {
          const res = await fetch(
            "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
          );
          const result = await res.json();
          state.products = result.length > 0 ? result:[];
          dispatch(state);
        } catch (err) {
          console.log("Error:", err);
        }
      };

      fetchData();
      
    }, []);

    const [productState, productDispatch] = useReducer(productReducer, {
       red : false,
       blue : false,
       yellow : false,
       green : false,
       men : false,
       women : false,
       polo : false,
       hoddie : false,
       basic : false,
       searchQuery: "",

    });
  


  return (
    <Cart.Provider value={{ state, dispatch , productState , productDispatch }}>{props.children}</Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;