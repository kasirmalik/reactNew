import React, { useEffect, useState } from "react";
import "./shopping.css";

function ShoppingList() {
  const [food, setfood] = useState("");
  const handleInput = (e) => {
    console.log(e.target.value);
    setfood(e.target.value);
  };
  useEffect(() => {
    
  
  }, []);

  return (
    <div className="shop">
      <h1>My Shopping List</h1>
      <div>
        <input type="text" value={food} onChange={handleInput} />
      </div>
      <div className="shopping-list">{food}</div>
      <div className="bucket"></div>
    </div>
  );
}

export default ShoppingList;
