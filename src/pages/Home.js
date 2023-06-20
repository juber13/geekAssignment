import React, { useState } from "react";
import "./home.css";
import Sidebar from "../components/sidebar";
import ProductList from '../components/productList'
import { BiSearch } from "react-icons/bi";
import  { CartState }  from "../Context";


const filterData = [
  {
    name: "Color",
    category: [
      { staus: false, filterName: "Red" },
      { status: false, filterName: "Blue" },
      { status: false, filterName: "Green" },
    ],
  },
  {
    name: "Gender",
    category: [
      { staus: false, filterName: "Men" },
      { status: false, filterName: "Women" },
    ],
  },
  {
    name: "Price",
    category: [
      { status: false, filterName: "250 - 350" },
      { status: false, filterName: "350 - 450" },
      { status: false, filterName: "450 - 500" },
    ],
  },
  {
    name: "Type",
    category: [
      { stauts: false, filterName: "Polo" },
      { status: false, filterName: "Hoodie" },
      { status: false, filterName: "Basic" },
    ],
  },
];

const Home = () => {
  const [val , setInputValue] = useState("");
  const { state ,  productState , productDispatch , loading} = CartState();
  const { red, blue, yellow , green , men , women , polo , hoddie, basic ,searchQuery , rate_1 , rate_2 , rate_3 } = productState;
  function filterOutproducts(items){
    let sortedProducts = items;
    if(red) sortedProducts = sortedProducts.filter((item) => item.color === "Red");
    else if(blue) sortedProducts = sortedProducts.filter(item => item.color === "Blue");
    else if(yellow) sortedProducts = sortedProducts.filter((prod) => prod.color === "Yellow");
    else if(green) sortedProducts = sortedProducts.filter((prod) => prod.color === "Green");
    else if(men) sortedProducts = sortedProducts.filter((prod) => prod.gender === "Men");
    else if(women) sortedProducts = sortedProducts.filter((prod) => prod.gender === "Women");
    else if(polo) sortedProducts = sortedProducts.filter((prod) => prod.type === "Polo");
    else if(hoddie) sortedProducts = sortedProducts.filter((prod) => prod.type === "hoddie");
    else if(basic) sortedProducts = sortedProducts.filter((prod) => prod.type === "Basic");
    if(rate_1) sortedProducts = sortedProducts.filter((prod) => prod.price >= 250 && prod.price <=350)
    if(rate_2) sortedProducts = sortedProducts.filter((prod) => prod.price >= 350 && prod.price <=450)
    if(rate_3) sortedProducts = sortedProducts.filter((prod) => prod.price >= 450 && prod.price <=500)
    else if (searchQuery) sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));

     return sortedProducts;
  }

  function handleInput(e){
    setInputValue(e.target.value);
    if(val.trim() !== ""){
      productDispatch({type : "FILTER_BY_SEARCH" , payload : e.target.value})
    }else{
      return;
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="search-bar">
          <input name=""  type="text" value={val} placeholder="search for products..." onChange={(e) => handleInput(e)}/>
          <button><BiSearch /></button>
        </div>
        <div className="product-wrapper">
          <Sidebar filterData={filterData}/>
          <ProductList products={state.products} filterOutproducts={filterOutproducts} loading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
