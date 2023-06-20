import React from "react";
import Product from "./product";

const productList = ({products , filterOutproducts , loading}) => {
  return (
        <div className="productList">
          {loading  ? <h2>Loding....</h2> : filterOutproducts(products).map((item , index) => <Product items={item} key={index}/>)}
        </div>
  );
};

export default productList;
