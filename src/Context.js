import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { cartReducer , productReducer } from "./Reducer";

const Cart = createContext();

const Context = (props) => {
  const [loading , setLoading] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: []
	});

  useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
          );
          const result = await res.json();
          state.products = result.length > 0 ? result:[];
          dispatch(state);
          setLoading(false);
        } catch (err) {
          console.log("Error:", err);
        }
      };

      fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
       rate_1 : false,
       rate_2 : false,
       rate_3 : false,

    });
  


  return (
    <Cart.Provider value={{ state, dispatch , productState , productDispatch , loading }}>{props.children}</Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;