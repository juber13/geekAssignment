import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../components/sidebar";
// import ProductsList from "../components/productList";
import ProductList from '../components/productList'
import { BiSearch } from "react-icons/bi";
// import  CartState  from '../Context';
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
      { status: false, filterName: "250" },
      { status: false, filterName: "251 - 405" },
      { status: false, filterName: "450" },
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
  const {products , setProducts , loding} = CartState();
  const [inputValue , setInputValue] = useState('');

  // filter the items on searching
  // const {products} = 

  const filterProducts = (e) => {
    setInputValue(e.target.value);
  }

  function filterOut(items){
    return items.filter((item) => item.color.toLowerCase().includes(inputValue.toLowerCase()))
  }



  return (
    <div className="wrapper">
      <div className="container">
        <div className="search-bar">
          <input name=""  value={inputValue} type="text" placeholder="search for products..." onChange={(e) => filterProducts(e)}/>
          <button><BiSearch /></button>
        </div>
        <div className="product-wrapper">
          <Sidebar filterData={filterData}/>
          {loding ? <p>Loding...</p> : <ProductList products={filterOut(products)}  key={products.length + 1}/>}
        </div>
      </div>
    </div>
  );
};

export default Home;
