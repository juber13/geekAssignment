import React, { useContext, useState  , useEffect} from 'react'
import { createContext } from 'react'

const Cart = createContext();

const Context = (props) => {
    const [cart , setCart] = useState([]);
    const [products , setProducts] = useState([]);
    const[loding , setLoding] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoding(true);
            const res = await fetch(
              "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
            );
            const result = await res.json();
            if(result) setProducts(result);
            setLoding(false);
          } catch (err) {
            console.log("error" + err);
          }
        };
        fetchData();
      }, []);

  return (
    <Cart.Provider value={{cart , setCart , products , loding}}>
      {props.children}
    </Cart.Provider>
  )
}


export const CartState = () => {
    return useContext(Cart);
}

export default Context;