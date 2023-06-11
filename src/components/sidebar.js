import React from "react";

const sidebar = ({ filterData , filterUpDation}) => {
  // console.log(filterData);
  return (
    <div className="side-bar">
      <div className="filter-container">
        <div className="colour">
          {filterData.map((item) => (
            <>
              <span>{item.name}</span>
              {item.category.map((check , i) => (
                <div className="checkbox-container" key={i}>
                  <input type="checkbox" name={check.filterName} onChange={(e) => filterUpDation(e.target , i)} data-index={i} value={check.filterName}/>
                  <label htmlFor={check.filterName}>{check.filterName}</label>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
