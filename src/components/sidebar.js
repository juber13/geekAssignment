import React from "react";
// import  { CartState }  from "../Context";
import { CartState } from "../Context";

const sidebar = ({ filterData, filterUpDation }) => {
  // console.log(filterData);
  const { productState, productDispatch } = CartState();
  console.log(productState);

  const {red , blue , green , yellow , polo , hoddie , rate_1 , rate_2 , rate_3, men , women , basic} = productState;

  return (
    <div className="side-bar">
      <div className="filter-container">
        <div className="colour">
          <span>Colour</span>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="red"
              onChange={(e) => productDispatch({ type: 'RED',  })}
              checked={red}
              // checked={productState.name}
            />
            <label htmlFor="red">Red</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="green"
              onChange={(e) => productDispatch({ type: 'GREEN',  })}
              checked={green}
            />
            <label htmlFor="green">Green</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="yellow"
              onChange={(e) => productDispatch({ type: 'YELLOW',  })}
              checked={yellow}
            />
            <label htmlFor="yellow">Yellow</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="Blue"
              onChange={(e) => productDispatch({ type: 'BLUE'})}
              checked={blue}
            />
            <label htmlFor="yellow">Blue</label>
          </div>
        </div>

        <div className="Gender">
          <span>Gender</span>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="men"
              onChange={(e) => productDispatch({ type: 'MEN'})}
              checked={men}
            />
            <label htmlFor="Men">Men</label>

          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="women"
              onChange={(e) => productDispatch({ type: 'WOMEN'})}
              checked={women}
            />
            <label htmlFor="women">Women</label>
          </div>
        </div>

        <div className="Age">
          <span>Price</span>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="350"
              onChange={(e) => productDispatch({ type: 'RATING_1'})}
              checked={rate_1}
            />
            <label htmlFor="250">250 - 350</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="250"
              onChange={(e) => productDispatch({ type: 'RATING_2'})}
              checked={rate_2}
            />
            <label htmlFor="250">250</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="450"
              onChange={(e) => productDispatch({ type: 'RATING_3'})}
              checked={rate_3}
            />
            <label htmlFor="250"> 450</label>
          </div>
        </div>

        <div className="Type">
          <span>Type</span>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="polo"
              onChange={(e) => productDispatch({ type: 'POLO'})}
              checked={polo}
            />
            <label htmlFor="Hoddie">Polo</label>
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              value="hoddie"
              onChange={(e) => productDispatch({ type: 'HODDIE'})}
              checked={hoddie}
            />
            <label htmlFor="Hoddie">Hoddie</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              value="basic"
              onChange={(e) => productDispatch({ type: 'BASIC'})}
              checked={basic}
            />
            <label htmlFor="Hoddie">Basic</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
