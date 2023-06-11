import React from "react";
import Product from "./product";


const productList = ({products}) => {
  return (
        <div className="productList">
          {products.map((item , index) => <Product items={item} key={index}/>)}
        </div>
  );
};

export default productList;
