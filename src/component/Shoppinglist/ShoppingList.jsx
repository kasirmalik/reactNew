import React, { useEffect, useState } from "react";
import "./shopping.css";

function ShoppingList() {
  const [food, setfood] = useState("");
  const handleInput = (e) => {
    console.log(e.target.value);
    setfood(e.target.value);
  };
  const fetchItems = async(food)=>{
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    
  }
  useEffect(() => {
    if (food.length >= 2) {
      // Call the fetchItems function when food length is 2 or more
      fetchItems(food);
    }
  
  }, [food]);

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
